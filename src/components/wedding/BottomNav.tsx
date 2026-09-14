import React, { useState, useEffect, useRef } from 'react';
import { Home, BookOpen, MapPin, Mail, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import type { WeddingSection } from './types';

const navItems: { id: WeddingSection; label: string; icon: typeof Home }[] = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'kisah', label: 'Kisah', icon: BookOpen },
  { id: 'lokasi', label: 'Lokasi', icon: MapPin },
];

interface BottomNavProps {
  activeSection: WeddingSection;
  onNavigate: (section: WeddingSection) => void;
  onCloseInvitation?: () => void;
  autoPlayTrigger: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeSection,
  onNavigate,
  onCloseInvitation,
  autoPlayTrigger,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
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
        .catch(() => {});
    }
  };

  return (
    <div className="pointer-events-none fixed bottom-20 left-0 right-0 z-50 flex justify-center sm:bottom-24">
      <audio ref={audioRef} src="/music/pawestri.mp3" loop preload="auto" />
      <motion.nav
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="pointer-events-auto w-[min(94%,20rem)]"
      >
        <div className="flex items-center justify-evenly rounded-full border border-gold-400/40 bg-emerald-950/95 px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-md">
          {onCloseInvitation && (
            <button
              type="button"
              onClick={onCloseInvitation}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gold-300 transition-colors hover:text-gold-100"
              title="Tutup Undangan"
            >
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            </button>
          )}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isActive ? 'text-gold-300' : 'text-stone-400 hover:text-gold-200'
                }`}
                title={item.label}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-gold-400/40 bg-gold-500/20" />
                )}
                <Icon className="relative z-10 h-5 w-5" strokeWidth={1.75} />
              </button>
            );
          })}
          {/* Musik latar */}
          <button
            type="button"
            onClick={togglePlay}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors"
            title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
            aria-label="Toggle Music"
          >
            {isPlaying && (
              <span className="absolute inset-0 rounded-full border border-gold-400/40 bg-gold-500/20" />
            )}
            {isPlaying ? (
              <motion.span
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <Music className="h-5 w-5 text-gold-300" strokeWidth={1.75} />
              </motion.span>
            ) : (
              <Music className="relative z-10 h-5 w-5 text-stone-400" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default BottomNav;
