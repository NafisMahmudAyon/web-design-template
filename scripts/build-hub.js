import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

export function getTemplatesMetadata() {
  const dirs = fs.readdirSync(ROOT_DIR).filter(file => {
    return file.startsWith('template-') && fs.statSync(path.join(ROOT_DIR, file)).isDirectory();
  });

  // Sort numerically
  dirs.sort((a, b) => {
    const numA = parseInt(a.replace('template-', ''), 10) || 999;
    const numB = parseInt(b.replace('template-', ''), 10) || 999;
    return numA - numB;
  });

  const templates = dirs.map(dirName => {
    const infoPath = path.join(ROOT_DIR, dirName, 'template-info.json');
    let info = {};
    if (fs.existsSync(infoPath)) {
      try {
        info = JSON.parse(fs.readFileSync(infoPath, 'utf-8'));
      } catch (e) {}
    }

    const numMatch = dirName.match(/^template-(\d+)$/);
    const num = numMatch ? parseInt(numMatch[1], 10) : null;
    const displayName = num ? `Template ${num}` : dirName;

    // Check if dist exists for this template
    const templateDist = path.join(DIST_DIR, dirName);
    const isBuilt = fs.existsSync(templateDist);

    return {
      id: dirName,
      num,
      name: displayName,
      rowNumber: info.rowNumber || num || 0,
      imageUrls: info.imageUrls || [],
      thumbnail: (info.imageUrls && info.imageUrls[0]) || null,
      status: info.status || (isBuilt ? 'Completed' : 'Production Ready'),
      createdAt: info.createdAt || null,
      path: `/${dirName}/`
    };
  });

  return templates;
}

export function generateHubHtml(templates) {
  const templatesJson = JSON.stringify(templates, null, 2);

  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Design Templates Collection | Production React Landing Pages</title>
  <meta name="description" content="A curated collection of ${templates.length}+ pixel-perfect, production-grade React web design templates crafted from Figma mockups.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            brand: {
              50: '#eef2ff',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
            }
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #0b0f17;
      color: #f3f4f6;
    }
    .glass-card {
      background: rgba(17, 24, 39, 0.7);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .glass-card:hover {
      border-color: rgba(99, 102, 241, 0.4);
      box-shadow: 0 12px 32px -8px rgba(79, 70, 229, 0.25);
    }
    .gradient-text {
      background: linear-gradient(135deg, #a5b4fc 0%, #6366f1 50%, #c084fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .gradient-bg {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    }
    .scrollbar-thin::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background: #374151;
      border-radius: 9999px;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col antialiased selection:bg-brand-500 selection:text-white">

  <!-- Ambient Light Effect -->
  <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-600/15 via-purple-600/5 to-transparent blur-3xl pointer-events-none z-0"></div>

  <!-- Header / Navigation -->
  <header class="sticky top-0 z-40 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
          ⚡
        </div>
        <div>
          <span class="font-extrabold text-lg tracking-tight text-white">Design<span class="gradient-text">Craft</span></span>
          <span class="ml-2 text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-medium border border-indigo-500/20">
            ${templates.length} Templates
          </span>
        </div>
      </div>

      <!-- Quick Search & Counter -->
      <div class="flex-1 max-w-md hidden sm:block">
        <div class="relative">
          <input type="text" id="searchInput" placeholder="Search templates (e.g. 35, crypto, SaaS)..." 
            class="w-full bg-gray-900/90 text-sm text-gray-200 placeholder-gray-500 rounded-xl px-4 py-2 pl-10 border border-white/10 focus:outline-none focus:border-brand-500 transition-all">
          <svg class="w-4 h-4 text-gray-500 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <a href="https://github.com/NafisMahmudAyon/web-design-template" target="_blank" rel="noreferrer" 
          class="text-xs font-semibold px-3 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 border border-white/10 transition-colors flex items-center gap-2">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          Repository
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
    <div class="text-center max-w-3xl mx-auto mb-10">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
        <span>🚀 Vercel Production Deployment</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
        Figma to Production <span class="gradient-text">React Templates</span>
      </h1>
      <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
        Explore ${templates.length} interactive, pixel-perfect React web templates built with Tailwind CSS, Framer Motion, and responsive design systems. Click any template to launch live or test device viewports.
      </p>
    </div>

    <!-- Mobile Search Bar -->
    <div class="mb-6 sm:hidden">
      <input type="text" id="mobileSearchInput" placeholder="Search templates..." 
        class="w-full bg-gray-900 text-sm text-gray-200 placeholder-gray-500 rounded-xl px-4 py-2.5 border border-white/10 focus:outline-none focus:border-brand-500">
    </div>

    <!-- Template Grid Header / Stats -->
    <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
      <div class="flex items-center gap-2">
        <h2 class="text-lg font-bold text-white">All Templates</h2>
        <span id="showingCount" class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-400">
          Showing ${templates.length}
        </span>
      </div>
      
      <div class="text-xs text-gray-400 font-medium">
        Hosted on <span class="text-white font-semibold">Vercel Edge Network</span>
      </div>
    </div>

    <!-- Templates Grid -->
    <div id="templatesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- Generated via JS -->
    </div>
  </main>

  <!-- Device Preview Modal -->
  <div id="previewModal" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-md flex flex-col">
    <!-- Modal Toolbar -->
    <div class="h-14 bg-gray-950 border-b border-white/10 px-4 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span id="modalTemplateTitle" class="font-bold text-white text-sm">Template Preview</span>
        <a id="modalExternalLink" href="#" target="_blank" class="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium">
          Open Fullscreen ↗
        </a>
      </div>

      <!-- Viewport Switcher -->
      <div class="flex items-center bg-gray-900 rounded-lg p-1 border border-white/10 text-xs">
        <button id="btnDesktop" class="px-3 py-1.5 rounded-md font-semibold text-white bg-brand-600 transition-colors">
          🖥️ Desktop (1440px)
        </button>
        <button id="btnTablet" class="px-3 py-1.5 rounded-md font-semibold text-gray-400 hover:text-white transition-colors">
          📱 Tablet (768px)
        </button>
        <button id="btnMobile" class="px-3 py-1.5 rounded-md font-semibold text-gray-400 hover:text-white transition-colors">
          📲 Mobile (375px)
        </button>
      </div>

      <!-- Close Button -->
      <button id="btnCloseModal" class="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white text-lg font-bold">
        ✕
      </button>
    </div>

    <!-- Modal Frame Container -->
    <div class="flex-1 bg-gray-900/50 flex items-center justify-center p-4 overflow-hidden">
      <div id="iframeWrapper" class="h-full w-full max-w-[1440px] bg-gray-950 rounded-xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300">
        <iframe id="previewIframe" src="" class="w-full h-full border-0"></iframe>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="border-t border-white/10 bg-gray-950/50 py-6 text-center text-xs text-gray-500">
    <p>© ${new Date().getFullYear()} DesignCraft Workspace. All templates generated and built for Vercel hosting.</p>
  </footer>

  <script>
    const TEMPLATES_DATA = ${templatesJson};

    const grid = document.getElementById('templatesGrid');
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const showingCount = document.getElementById('showingCount');

    // Modal elements
    const modal = document.getElementById('previewModal');
    const modalTitle = document.getElementById('modalTemplateTitle');
    const modalExternalLink = document.getElementById('modalExternalLink');
    const previewIframe = document.getElementById('previewIframe');
    const iframeWrapper = document.getElementById('iframeWrapper');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const btnDesktop = document.getElementById('btnDesktop');
    const btnTablet = document.getElementById('btnTablet');
    const btnMobile = document.getElementById('btnMobile');

    function renderTemplates(items) {
      showingCount.textContent = 'Showing ' + items.length;
      if (items.length === 0) {
        grid.innerHTML = '<div class="col-span-full py-16 text-center text-gray-400">No templates found matching your search.</div>';
        return;
      }

      grid.innerHTML = items.map(t => {
        const hasThumb = !!t.thumbnail;
        const thumbStyle = hasThumb ? 'background-image: url(' + t.thumbnail + '); background-size: cover; background-position: top center;' : '';
        const badgeColor = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

        return \`
          <div class="glass-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1">
            <!-- Card Image / Preview -->
            <div class="h-44 w-full bg-gray-900 relative overflow-hidden flex items-center justify-center group-hover:opacity-90 transition-opacity" style="\${thumbStyle}">
              \${!hasThumb ? \`
                <div class="flex flex-col items-center justify-center p-4 text-center">
                  <span class="text-3xl font-extrabold text-indigo-400/40 mb-1">#\${t.num || ''}</span>
                  <span class="text-xs text-gray-500 font-medium">React + Tailwind Template</span>
                </div>
              \` : ''}
              
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div class="absolute top-3 left-3 flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-gray-950/80 text-white border border-white/10 backdrop-blur-md">
                  #\${t.num || t.id}
                </span>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border \${badgeColor}">
                  \${t.status}
                </span>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                  \${t.name}
                </h3>
                <p class="text-xs text-gray-400 mt-1">Production ready Figma design build</p>
              </div>

              <!-- Action Buttons -->
              <div class="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                <button onclick="openPreview('\${t.path}', '\${t.name}')" 
                  class="flex-1 px-3 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-bold border border-indigo-500/30 transition-all text-center">
                  👁️ Device Preview
                </button>
                <a href="\${t.path}" target="_blank" 
                  class="px-3 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold border border-white/10 transition-all text-center">
                  Launch ↗
                </a>
              </div>
            </div>
          </div>
        \`;
      }).join('');
    }

    function filterTemplates(query) {
      const q = (query || '').toLowerCase().trim();
      if (!q) {
        renderTemplates(TEMPLATES_DATA);
        return;
      }
      const filtered = TEMPLATES_DATA.filter(t => {
        return (t.name.toLowerCase().includes(q)) || 
               (t.id.toLowerCase().includes(q)) ||
               (String(t.num || '').includes(q));
      });
      renderTemplates(filtered);
    }

    searchInput.addEventListener('input', (e) => filterTemplates(e.target.value));
    mobileSearchInput.addEventListener('input', (e) => filterTemplates(e.target.value));

    // Modal logic
    window.openPreview = function(url, name) {
      modalTitle.textContent = name + ' - Device Preview';
      modalExternalLink.href = url;
      previewIframe.src = url;
      modal.classList.remove('hidden');
      setViewport('desktop');
    };

    function setViewport(type) {
      btnDesktop.className = 'px-3 py-1.5 rounded-md font-semibold text-gray-400 hover:text-white transition-colors';
      btnTablet.className = 'px-3 py-1.5 rounded-md font-semibold text-gray-400 hover:text-white transition-colors';
      btnMobile.className = 'px-3 py-1.5 rounded-md font-semibold text-gray-400 hover:text-white transition-colors';

      if (type === 'desktop') {
        iframeWrapper.className = 'h-full w-full max-w-[1440px] bg-gray-950 rounded-xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300';
        btnDesktop.className = 'px-3 py-1.5 rounded-md font-semibold text-white bg-brand-600 transition-colors';
      } else if (type === 'tablet') {
        iframeWrapper.className = 'h-full w-[768px] bg-gray-950 rounded-xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300';
        btnTablet.className = 'px-3 py-1.5 rounded-md font-semibold text-white bg-brand-600 transition-colors';
      } else if (type === 'mobile') {
        iframeWrapper.className = 'h-full w-[375px] bg-gray-950 rounded-xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300';
        btnMobile.className = 'px-3 py-1.5 rounded-md font-semibold text-white bg-brand-600 transition-colors';
      }
    }

    btnDesktop.addEventListener('click', () => setViewport('desktop'));
    btnTablet.addEventListener('click', () => setViewport('tablet'));
    btnMobile.addEventListener('click', () => setViewport('mobile'));

    btnCloseModal.addEventListener('click', () => {
      modal.classList.add('hidden');
      previewIframe.src = '';
    });

    // Render initial grid
    renderTemplates(TEMPLATES_DATA);
  </script>
</body>
</html>`;
}

export function buildHub() {
  console.log('[Hub Builder] Gathering template metadata...');
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const templates = getTemplatesMetadata();
  const html = generateHubHtml(templates);
  const hubPath = path.join(DIST_DIR, 'index.html');
  fs.writeFileSync(hubPath, html, 'utf-8');
  console.log(`[Hub Builder] ✅ Root Showcase Hub generated at: ${hubPath} (${templates.length} templates)`);
}

// Allow running directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  buildHub();
}
