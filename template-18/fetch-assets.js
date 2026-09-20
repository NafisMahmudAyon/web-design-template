import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.resolve('public/assets');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const IMAGES = [
  {
    name: 'hero-surfer-hands.jpg',
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1920&q=85',
  },
  {
    name: 'hero-mini-board.jpg',
    url: 'https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&fit=crop&w=600&q=85',
  },
  {
    name: 'studio-surfer-arm.jpg',
    url: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'studio-barrel-carve.jpg',
    url: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'board-arch-cruiser.jpg',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'board-white-drift.jpg',
    url: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'board-sunset-twin.jpg',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=85',
  },
  {
    name: 'board-ocean-voyager.jpg',
    url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'beyond-waves-aerial.jpg',
    url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1920&q=85',
  },
  {
    name: 'accordion-board-1.jpg',
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'accordion-board-2.jpg',
    url: 'https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'story-paddle-surfer.jpg',
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'story-sup-male.jpg',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85',
  },
];

async function downloadAll() {
  console.log('Downloading assets for template-18...');
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
