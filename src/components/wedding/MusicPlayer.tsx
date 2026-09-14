import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Disc } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  autoPlayTrigger: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log('Audio autoplay blocked by browser policy:', err);
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio play failed:', err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/pawestri.mp3"
        loop
        preload="auto"
      />

      {/* Floating Music Control Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-24 right-5 sm:bottom-8 sm:right-8 z-40"
      >
        <button
          onClick={togglePlay}
          aria-label="Toggle Music"
          className="relative group p-3.5 rounded-full bg-emerald-950/90 text-gold-300 border border-gold-400/50 shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        >
          {/* Subtle Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-sm group-hover:bg-gold-400/35 transition-all"></div>

          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="relative z-10"
            >
              <Disc className="w-6 h-6 text-gold-400" />
            </motion.div>
          ) : (
            <div className="relative z-10">
              <VolumeX className="w-6 h-6 text-stone-400" />
            </div>
          )}

          {/* Tooltip on hover */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-emerald-950 text-gold-300 text-[11px] font-cinzel font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-gold-400/30 shadow-lg">
            {isPlaying ? 'Matikan Musik' : 'Putar Musik'}
          </span>
        </button>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
