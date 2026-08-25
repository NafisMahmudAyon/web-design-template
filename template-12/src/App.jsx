import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SidebarRail from './components/SidebarRail.jsx';
import MainHeroCanvas from './components/MainHeroCanvas.jsx';
import StyleSelectorCard from './components/StyleSelectorCard.jsx';
import ModelStackCard from './components/ModelStackCard.jsx';
import GetInspiredCard from './components/GetInspiredCard.jsx';
import InspirationModal from './components/InspirationModal.jsx';
import ExportModal from './components/ExportModal.jsx';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [promptText, setPromptText] = useState('Cyberpunk Mech Android with carbon fiber helmet');
  const [selectedStyles, setSelectedStyles] = useState(['DIGITAL', '3D STYLES']);
  const [activeModelId, setActiveModelId] = useState('01');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isInspirationOpen, setIsInspirationOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const models = [
    { id: '03', num: '03', name: 'Black Carbon Mesh Cyber Helmet', style: 'Carbon Weave • Cyberpunk', color: '#16181c' },
    { id: '02', num: '02', name: 'White Mech Helmet Orange Glow', style: 'Sci-Fi Hydraulics • Mecha', color: '#3a3e47' },
    { id: '01', num: '01', name: 'Sci-Fi Android Head Sculpture', style: '3D Studio • Active Render', color: '#e8ecea' },
  ];

  const activeModel = models.find(m => m.id === activeModelId) || models[2];

  const toggleStyle = (style) => {
    setSelectedStyles(prev => 
      prev.includes(style) 
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  const handleGenerate = (e) => {
    if (e) e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1200);
  };

  // Scroll parallax animation
  const { scrollY } = useScroll();
  const scaleEffect = useTransform(scrollY, [0, 400], [1, 0.99]);

  return (
    <div className="min-h-screen relative cosmic-void-bg py-4 px-2 sm:px-4 md:py-8 flex flex-col items-center justify-center selection:bg-white selection:text-black">
      
      {/* Cosmic Ambient Neon Glow Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[150px]"
        />
      </div>

      {/* Master Futuristic Tablet App Frame (Matching Screenshot Layout) */}
      <motion.main 
        style={{ scale: scaleEffect }}
        className="relative z-10 w-full max-w-[1360px] aether-tablet-frame rounded-[36px] md:rounded-[48px] p-3 sm:p-5 md:p-6 shadow-2xl backdrop-blur-3xl border border-white/20 flex flex-col md:flex-row gap-4 items-stretch my-2"
      >
        {/* Left Sidebar Rail */}
        <SidebarRail 
          activeNav={activeNav} 
          setActiveNav={setActiveNav} 
        />

        {/* Main Studio Canvas Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch min-w-0">
          
          {/* Left Column (lg:col-span-8): Main Hero Preview + CHOOSE STYLES Card */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Top Main Hero Preview Canvas */}
            <div className="flex-1 min-h-[380px]">
              <MainHeroCanvas 
                activeModel={activeModel}
                promptText={promptText}
                setPromptText={setPromptText}
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
                onOpenExport={() => setIsExportOpen(true)}
              />
            </div>

            {/* Bottom CHOOSE STYLES Panel (White Container) */}
            <div className="h-[180px]">
              <StyleSelectorCard 
                selectedStyles={selectedStyles}
                toggleStyle={toggleStyle}
              />
            </div>

          </div>

          {/* Right Column (lg:col-span-4): Search & Model Stack + GET INSPIRED Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Top Search & Model Stack Cards (01, 02, 03) */}
            <div className="flex-1 min-h-[360px]">
              <ModelStackCard 
                models={models}
                activeModelId={activeModelId}
                setActiveModelId={setActiveModelId}
              />
            </div>

            {/* Bottom GET INSPIRED Panel (White Container) */}
            <div className="h-[180px]">
              <GetInspiredCard 
                onOpenInspiration={() => setIsInspirationOpen(true)}
              />
            </div>

          </div>

        </div>

      </motion.main>

      {/* Modals & Drawers */}
      <InspirationModal 
        isOpen={isInspirationOpen}
        onClose={() => setIsInspirationOpen(false)}
        onUsePrompt={(p) => setPromptText(p)}
      />

      <ExportModal 
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

    </div>
  );
}
