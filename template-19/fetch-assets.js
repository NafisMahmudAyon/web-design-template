import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.resolve('public/assets');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const IMAGES = [
  {
    name: 'hero-watch-macro.jpg',
    url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1920&q=85',
  },
  {
    name: 'floating-watch-daytona.jpg',
    url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'card-rolex-daytona.jpg',
    url: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'card-patek-nautilus.jpg',
    url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'card-ap-royaloak.jpg',
    url: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'vault-rolex-rose-gold.jpg',
    url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1920&q=85',
  },
  {
    name: 'market-watch-1.jpg',
    url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'market-watch-2.jpg',
    url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'market-watch-3.jpg',
    url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'cta-watch-floating.jpg',
    url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'footer-watch-dial.jpg',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'avatar-michael.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'avatar-james.jpg',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'avatar-daniel.jpg',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
];

async function downloadAll() {
  console.log('Downloading assets for template-19...');
  for (const item of IMAGES) {
    const dest = path.join(ASSETS_DIR, item.name);
    try {
      const res = await fetch(item.url, { signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      console.log(`✅ Saved ${item.name} (${(buf.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`❌ Failed ${item.name}: ${err.message}`);
    }
  }
  console.log('Asset download finished.');
}

downloadAll();
