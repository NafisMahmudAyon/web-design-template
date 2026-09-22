import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const FALLBACK_QUEUE_FILE = path.join(ROOT_DIR, 'pending-templates.json');

export const WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbxO1Ukc2baTIAkk9QilFkRqf7gaavuSzVeOf0ODfnz2gpayRCU6Wl8JYNN4X5lYM56C/exec';

export const WEB_APP_EXEC_URL = WEB_APP_URL;



/**
 * Fetch pending template data from Google Apps Script Web App.
 * Automatically falls back to pending-templates.json if auth-restricted or offline.
 */
export async function getPendingTemplates() {
  console.log(`\n[API] Querying Web App URL: ${WEB_APP_URL}...`);
  try {
    const response = await fetch(WEB_APP_URL, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(30000),
      headers: {
        'Accept': 'application/json, text/plain, */*',
      }
    });

    const responseText = await response.text();

    // Check if Google redirected to sign-in page
    if (responseText.includes('accounts.google.com') || responseText.includes('<!doctype html>')) {
      console.warn(`\n⚠️ [NOTICE] Google Apps Script returned a Google Sign-in redirect.`);
      console.warn(`👉 Fix: In Google Apps Script Editor > Deploy > Manage deployments > Edit > set 'Who has access: Anyone' > Deploy.`);
      console.log(`ℹ️ Falling back to local pending queue (${path.basename(FALLBACK_QUEUE_FILE)})...\n`);
      return readFallbackQueue();
    }

    try {
      const data = JSON.parse(responseText);
      if (Array.isArray(data)) {
        console.log(`✅ Successfully fetched ${data.length} template(s) from live Google Apps Script.`);
        if (data.length > 0) {
          fs.writeFileSync(FALLBACK_QUEUE_FILE, JSON.stringify(data, null, 2), 'utf-8');
          return data;
        }
        const fallback = readFallbackQueue();
        if (fallback.length > 0) {
          console.log(`ℹ️ Live endpoint returned 0 pending, falling back to local queue (${fallback.length} item(s)).`);
          return fallback;
        }
        return [];
      }
      throw new Error('Response is not an array of templates');
    } catch (parseErr) {
      console.warn(`⚠️ Failed to parse response as JSON. Raw preview:\n${responseText.slice(0, 300)}`);
      return readFallbackQueue();
    }
  } catch (error) {
    console.warn(`⚠️ Network error calling Google Apps Script: ${error.message}`);
    console.log(`ℹ️ Falling back to local pending queue...\n`);
    return readFallbackQueue();
  }
}

/**
 * Reads the fallback queue from pending-templates.json.
 */
export function readFallbackQueue() {
  if (fs.existsSync(FALLBACK_QUEUE_FILE)) {
    try {
      const content = fs.readFileSync(FALLBACK_QUEUE_FILE, 'utf-8');
      const list = JSON.parse(content);
      const pendingOnly = list.filter(item => item.status !== 'Completed');
      return pendingOnly.length > 0 ? pendingOnly : list;
    } catch (e) {
      console.error(`Error reading ${FALLBACK_QUEUE_FILE}:`, e.message);
    }
  }
  return [];
}

/**
 * Updates status of a template row in Google Apps Script.
 * Also updates local pending-templates.json.
 */
export async function updateTemplateStatus(rowNumber, status = 'Completed') {
  console.log(`\n[API] Updating status for row ${rowNumber} to '${status}'...`);

  // Update local fallback queue first
  try {
    if (fs.existsSync(FALLBACK_QUEUE_FILE)) {
      const list = JSON.parse(fs.readFileSync(FALLBACK_QUEUE_FILE, 'utf-8'));
      const updated = list.map(item => {
        if (item.rowNumber === rowNumber) {
          return { ...item, status };
        }
        return item;
      });
      fs.writeFileSync(FALLBACK_QUEUE_FILE, JSON.stringify(updated, null, 2), 'utf-8');
      console.log(`💾 Local queue cache updated: Row ${rowNumber} marked as '${status}'.`);
    }
  } catch (err) {
    console.error(`Failed to update local queue: ${err.message}`);
  }

  // Attempt live POST to Google Apps Script
  try {
    const postUrl = WEB_APP_URL && !WEB_APP_URL.includes('/echo?') ? WEB_APP_URL : WEB_APP_EXEC_URL;
    const response = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rowNumber, status }),
      redirect: 'follow',
    });

    const resText = await response.text();
    console.log(`✅ Live Web App response:`, resText.slice(0, 200));
    return { success: true, live: true, response: resText };
  } catch (postErr) {
    console.warn(`⚠️ Live POST failed (${postErr.message}). Local queue status was saved.`);
    return { success: true, live: false, error: postErr.message };
  }
}

/**
 * Downloads an image from URL into a target file path.
 * Uses native curl.exe for speed and reliability, with fallback to fetch.
 */
export async function downloadImage(url, destFilePath) {
  const dir = path.dirname(destFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`📥 Downloading image: ${url.slice(0, 80)}...`);

  // 1. Check if server supports Range requests for fast parallel downloading
  try {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    const headRes = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': userAgent }, signal: AbortSignal.timeout(15000) });
    const contentLength = parseInt(headRes.headers.get('content-length') || '0', 10);
    const acceptRanges = headRes.headers.get('accept-ranges');

    if (contentLength > 1024 * 1024 && (acceptRanges === 'bytes' || headRes.headers.get('etag'))) {
      const parts = 8;
      const chunkSize = Math.ceil(contentLength / parts);
      console.log(`   ⚡ Fast parallel download: ${parts} chunks (${(contentLength / 1024 / 1024).toFixed(2)} MB)...`);

      const promises = [];
      for (let i = 0; i < parts; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize - 1, contentLength - 1);
        promises.push(
          fetch(url, {
            headers: { Range: `bytes=${start}-${end}`, 'User-Agent': userAgent },
            signal: AbortSignal.timeout(120000),
          }).then(async (r) => {
            if (!r.ok && r.status !== 206) throw new Error(`Chunk ${i} failed: ${r.status}`);
            return r.arrayBuffer();
          })
        );
      }

      const buffers = await Promise.all(promises);
      const combined = Buffer.concat(buffers.map((b) => Buffer.from(b)));
      fs.writeFileSync(destFilePath, combined);
      console.log(`   Saved to: ${destFilePath} (${(combined.length / 1024).toFixed(1)} KB)`);
      return destFilePath;
    }
  } catch (rangeErr) {
    console.warn(`   Parallel range check bypassed (${rangeErr.message}), falling back to curl...`);
  }

  // 2. Fallback to curl.exe
  try {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    const { execFileSync } = await import('child_process');
    execFileSync('curl.exe', ['-L', '-s', '-A', userAgent, '--connect-timeout', '20', '--max-time', '180', '-o', destFilePath, url], { timeout: 190000 });
    if (fs.existsSync(destFilePath) && fs.statSync(destFilePath).size > 0) {
      const stats = fs.statSync(destFilePath);
      console.log(`   Saved to: ${destFilePath} (${(stats.size / 1024).toFixed(1)} KB)`);
      return destFilePath;
    }
  } catch (curlErr) {
    console.warn(`   curl.exe failed (${curlErr.message}), trying standard fetch...`);
  }

  // 3. Fallback to standard fetch
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  const response = await fetch(url, { headers: { 'User-Agent': userAgent }, signal: AbortSignal.timeout(180000) });
  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(destFilePath, buffer);
  console.log(`   Saved to: ${destFilePath} (${(buffer.length / 1024).toFixed(1)} KB)`);
  return destFilePath;
}


