import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  ArrowLeft, 
  ArrowRight, 
  X, 
  Maximize2, 
  Volume2, 
  VolumeX,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export default function VideoPlayerCard({ 
  currentChapter, 
  onPrevChapter, 
  onNextChapter,
  isPlaying,
  setIsPlaying,
  playbackProgress,
  setPlaybackProgress
}) {
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auto increment progress when playing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.3;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, setPlaybackProgress, setIsPlaying]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full rounded-[36px] overflow-hidden shadow-2xl bg-black min-h-[380px] lg:min-h-[440px] flex flex-col justify-between group border border-white/40"
    >
      {/* Background Hero Image with smooth scaling on hover */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src="/assets/course_hero_instructor.png" 
          alt="Course instructor" 
          animate={{ scale: isPlaying ? 1.05 : 1 }}
          transition={{ duration: 8, ease: 'linear', repeat: isPlaying ? Infinity : 0, repeatType: 'reverse' }}
          className="w-full h-full object-cover object-center opacity-90 transition-opacity"
        />
        {/* Soft dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Top Controls Overlay Bar */}
      <div className="relative z-10 p-5 flex items-center justify-between">
        {/* Left Arrow Controls Pill */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
          <motion.button 
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onPrevChapter}
            className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onNextChapter}
            className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Right Status Badges & Close Button */}
        <div className="flex items-center gap-2">
          {isPlaying && (
            <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/80 text-white text-xs font-semibold backdrop-blur-md animate-pulse">
              <span className="w-2 h-2 rounded-full bg-white" /> LIVE PLAYBACK
            </span>
          )}
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(false)}
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-900 flex items-center justify-center shadow-md backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Bottom Content & Play Controls Bar */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
        {/* Glassmorphic Sound Visualizer & Title Overlay Card */}
        <div className="w-full glass-panel rounded-[28px] p-5 backdrop-blur-2xl bg-white/30 border border-white/40 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left Title & Info */}
          <div className="flex-1 text-white">
            <h2 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white drop-shadow-md mb-1">
              {currentChapter?.title || "First Steps"}
            </h2>
            <p className="text-xs md:text-sm text-white/90 font-medium max-w-md drop-shadow">
              This course will teach you how to design a website from start to finish.
            </p>
          </div>

          {/* Animated Sound Spectrum Bars */}
          <div className="hidden sm:flex items-end gap-1 h-9 px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            {[0.4, 0.8, 0.3, 1, 0.6, 0.9, 0.5, 0.7, 0.4, 0.9, 0.6].map((scale, i) => (
              <span 
                key={i} 
                className="sound-bar" 
                style={{ 
                  animationDuration: `${0.8 + i * 0.15}s`,
                  animationPlayState: isPlaying ? 'running' : 'paused',
                  height: isPlaying ? undefined : `${scale * 20}px`
                }} 
              />
            ))}
          </div>

          {/* Right Floating Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1, shadow: '0 0 30px rgba(255, 255, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:bg-gray-100 transition-all border border-white/80 self-end md:self-auto cursor-pointer group"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-black" />
            ) : (
              <Play className="w-6 h-6 fill-black ml-1" />
            )}
          </motion.button>
        </div>

        {/* Video Scrubber & Time Bar */}
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/20">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="text-white/80 hover:text-white p-1 ml-1"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              setPlaybackProgress(pos * 100);
            }}
            className="flex-1 h-2 bg-white/20 hover:h-3 transition-all rounded-full overflow-hidden cursor-pointer relative"
          >
            <div 
              className="h-full bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full transition-all duration-150"
              style={{ width: `${playbackProgress}%` }}
            />
          </div>

          <span className="text-[11px] font-mono text-white/90 font-medium px-2">
            {Math.floor((playbackProgress / 100) * 35)}:
            {Math.floor(((playbackProgress / 100) * 35 % 1) * 60).toString().padStart(2, '0')} / 35:00
          </span>
        </div>
      </div>
    </motion.div>
  );
}
