import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';
import { buildHub } from './build-hub.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

function getTemplateDirs() {
  const filterArg = process.argv.slice(2).find(arg => !arg.startsWith('--'));
  const dirs = fs.readdirSync(ROOT_DIR).filter(file => {
    if (!file.startsWith('template-')) return false;
    const fullPath = path.join(ROOT_DIR, file);
    if (!fs.statSync(fullPath).isDirectory()) return false;
    return fs.existsSync(path.join(fullPath, 'index.html')) || fs.existsSync(path.join(fullPath, 'src'));
  });

  dirs.sort((a, b) => {
    const numA = parseInt(a.replace('template-', ''), 10) || 999;
    const numB = parseInt(b.replace('template-', ''), 10) || 999;
    return numA - numB;
  });

  if (filterArg) {
    console.log(`[Build Pipeline] Filtering build for: ${filterArg}`);
    return dirs.filter(d => d === filterArg || d.includes(filterArg));
  }

  return dirs;
}

async function buildTemplate(dirName) {
  const startTime = Date.now();
  const templateRoot = path.join(ROOT_DIR, dirName);
  const targetDist = path.join(DIST_DIR, dirName);
  const localDist = path.join(templateRoot, 'dist');
  const base = `/${dirName}/`;

  console.log(`[Build Pipeline] 🚀 Building ${dirName}...`);

  try {
    if (fs.existsSync(localDist)) {
      try { fs.rmSync(localDist, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 }); } catch (e) {}
    }

    await build({
      root: templateRoot,
      base: base,
      logLevel: 'error',
    });

    if (fs.existsSync(localDist)) {
      if (fs.existsSync(targetDist)) {
        try { fs.rmSync(targetDist, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 }); } catch (e) {}
      }
      fs.mkdirSync(targetDist, { recursive: true });
      fs.cpSync(localDist, targetDist, { recursive: true });
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`[Build Pipeline] ✅ ${dirName} built successfully in ${elapsed}s`);
    return { dirName, success: true, elapsed };
  } catch (err) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.warn(`[Build Pipeline] ⚠️ ${dirName} build failed (${err.message}) in ${elapsed}s`);
    return { dirName, success: false, elapsed, error: err.message };
  }
}

async function main() {
  const startTime = Date.now();
  console.log(`\n==================================================`);
  console.log(`🌐 VERCEL MULTI-TEMPLATE BUILD PIPELINE`);
  console.log(`==================================================`);

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const templateDirs = getTemplateDirs();
  console.log(`Found ${templateDirs.length} template(s) to compile.\n`);

  const results = [];
  for (const dirName of templateDirs) {
    const res = await buildTemplate(dirName);
    results.push(res);
  }

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`\n--------------------------------------------------`);
  console.log(`[Build Pipeline] Compilation Complete!`);
  console.log(`  Successful: ${successful.length}/${templateDirs.length}`);
  if (failed.length > 0) {
    console.log(`  Failed: ${failed.length} (${failed.map(f => f.dirName).join(', ')})`);
  }

  // Generate Root Showcase Hub
  console.log(`\n[Build Pipeline] Building Root Showcase Hub...`);
  buildHub();

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`==================================================`);
  console.log(`🎉 ALL SET! Deployment package ready in /dist (${totalTime}s)`);
  console.log(`==================================================\n`);
}

main().catch(err => {
  console.error('Fatal build pipeline error:', err);
  process.exit(1);
});
