import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getPendingTemplates, downloadImage } from './api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const STARTER_DIR = path.join(ROOT_DIR, 'template-starter');

/**
 * Copy directory recursively
 */
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const isFetchOnly = args.includes('--fetch-only');
  const targetTemplateArgIndex = args.indexOf('--template');
  const specificTemplateName = targetTemplateArgIndex !== -1 ? args[targetTemplateArgIndex + 1] : null;

  console.log('='.repeat(60));
  console.log('🚀 AUTOMATED NEW TEMPLATE PIPELINE');
  console.log('='.repeat(60));

  // 1. Fetch pending templates
  const pendingTemplates = await getPendingTemplates();

  if (!pendingTemplates || pendingTemplates.length === 0) {
    console.log('\n✨ No pending templates found! All up to date.');
    return;
  }

  console.log(`\n📋 Pending Templates Queue (${pendingTemplates.length} item(s)):`);
  pendingTemplates.forEach((t, idx) => {
    console.log(`   ${idx + 1}. [Row ${t.rowNumber}] ${t.templateName || 'Unnamed'} (Images: ${Array.isArray(t.imageUrl) ? t.imageUrl.length : 1})`);
  });

  if (isFetchOnly) {
    console.log('\nDone (--fetch-only flag provided).');
    return;
  }

  // 2. Select target template
  let selected = null;
  if (specificTemplateName) {
    selected = pendingTemplates.find(t => t.templateName === specificTemplateName);
    if (!selected) {
      console.error(`❌ Template '${specificTemplateName}' not found in pending list!`);
      process.exit(1);
    }
  } else {
    selected = pendingTemplates[0];
  }

  const templateName = selected.templateName || `template-${Date.now()}`;
  const templateDir = path.join(ROOT_DIR, templateName);
  const designSectionsDir = path.join(templateDir, 'design sections');

  console.log(`\n🎯 Processing Target Template: [Row ${selected.rowNumber}] ${templateName}`);

  // 3. Scaffolding folder
  if (!fs.existsSync(templateDir)) {
    console.log(`📁 Creating directory: ${templateName}/...`);
    fs.mkdirSync(templateDir, { recursive: true });
    
    // Copy from template-starter
    if (fs.existsSync(STARTER_DIR)) {
      console.log(`📋 Copying starter boilerplate from template-starter/...`);
      copyDirRecursive(STARTER_DIR, templateDir);

      // Update package.json name
      const pkgPath = path.join(templateDir, 'package.json');
      if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
        pkg.name = templateName;
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8');
      }
    }
  } else {
    console.log(`ℹ️ Directory ${templateName} already exists.`);
  }

  // Ensure design sections directory exists
  if (!fs.existsSync(designSectionsDir)) {
    fs.mkdirSync(designSectionsDir, { recursive: true });
  }

  // 4. Download design preview images
  const rawUrls = Array.isArray(selected.imageUrl) ? selected.imageUrl : [selected.imageUrl];
  const validUrls = rawUrls.filter(Boolean);

  console.log(`\n🖼️ Downloading ${validUrls.length} design preview image(s)...`);
  for (let i = 0; i < validUrls.length; i++) {
    const url = validUrls[i];
    const filename = validUrls.length === 1 ? 'Full Page.png' : `section-${i + 1}.png`;
    const destPath = path.join(designSectionsDir, filename);
    try {
      await downloadImage(url, destPath);
    } catch (err) {
      console.error(`❌ Failed to download ${url}:`, err.message);
    }
  }

  // 5. Save metadata
  const metadata = {
    templateName,
    rowNumber: selected.rowNumber,
    imageUrls: validUrls,
    status: 'In Progress',
    createdAt: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(templateDir, 'template-info.json'), JSON.stringify(metadata, null, 2), 'utf-8');

  console.log('\n' + '='.repeat(60));
  console.log(`✅ [SUCCESS] Template folder created: ${templateName}`);
  console.log(`📁 Location: ${templateDir}`);
  console.log(`🖼️ Design files saved in: ${designSectionsDir}`);
  console.log(`📝 Row Number: ${selected.rowNumber}`);
  console.log('='.repeat(60));
  console.log('\n👉 Next Steps for Design Replication:');
  console.log(`1. Inspect design preview: ${path.join(designSectionsDir, 'Full Page.png')}`);
  console.log(`2. Develop components in: ${path.join(templateDir, 'src')}`);
  console.log(`3. Run dev server: cd "${templateName}" && npm run dev`);
  console.log(`4. Verify visual parity in browser.`);
  console.log(`5. Mark completed: node scripts/update-status.js --row ${selected.rowNumber} --status Completed\n`);
}

main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
