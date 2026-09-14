import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, ExternalLink, ZoomIn, X } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const addressText = 'Dusun Tempel, RT.25/RW.06, Plumbon, Kec. Suruh, Kab. Semarang, Jawa Tengah';
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Dusun+Tempel+Plumbon+Kecamatan+Suruh+Kabupaten+Semarang';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="lokasi" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold px-4 py-1.5 rounded-full border border-gold-400/30 bg-emerald-950/60 inline-block mb-3">
              Location & Map
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-200 tracking-wide">
              Denah & Peta Lokasi
            </h2>
            <p className="font-cormorant italic text-stone-300 text-base sm:text-lg max-w-lg mx-auto mt-2">
              Kehadiran dan doa restu Anda merupakan kehormatan dan kebahagiaan terbesar bagi kami.
            </p>
          </motion.div>
        </div>

        {/* Location Info & Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="parchment-card rounded-3xl p-6 sm:p-10 border border-gold-400/50 shadow-2xl relative overflow-hidden"
        >
          {/* Address Details */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="w-12 h-12 rounded-full bg-emerald-900/10 border border-gold-400/40 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-emerald-900" />
            </div>

            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-emerald-950 mb-2">
              Kediaman Mempelai
            </h3>
            <p className="font-sans text-sm sm:text-base text-stone-700 font-medium leading-relaxed">
              {addressText}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-xs font-cinzel font-bold uppercase tracking-wider shadow-md"
              >
                <Navigation className="w-4 h-4 text-emerald-950" />
                <span>Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-950 opacity-70" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="btn-emerald px-6 py-3 rounded-full flex items-center gap-2 text-xs font-cinzel font-bold uppercase tracking-wider"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gold-300" />}
                <span>{copied ? 'Alamat Tersalin!' : 'Salin Alamat'}</span>
              </button>
            </div>
          </div>

          {/* DENAH LOKASI CETAK (Matching PDF) */}
          <div className="mt-8 pt-8 border-t border-gold-400/30">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-playfair text-lg sm:text-xl font-bold text-emerald-950">
                  Denah Rute Perjalanan
                </h4>
                <p className="text-xs text-stone-500 font-cormorant italic">
                  Panduan rute dari Exit Tol Salatiga menuju lokasi acara
                </p>
              </div>
              <button
                onClick={() => setIsZoomed(true)}
                className="inline-flex items-center gap-1.5 text-xs font-cinzel text-emerald-900 bg-emerald-900/10 hover:bg-emerald-900/20 px-3 py-1.5 rounded-full transition-colors font-semibold"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Perbesar Denah</span>
              </button>
            </div>

            {/* Denah Graphic Container */}
            <div
              onClick={() => setIsZoomed(true)}
              className="relative cursor-pointer rounded-2xl overflow-hidden border-2 border-emerald-900/20 bg-cream-300 hover:border-gold-500 transition-all group"
            >
              <img
                src="/assets/wedding/11.png"
                alt="Denah Lokasi Pernikahan"
                className="w-full object-contain max-h-[380px] p-2 group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-emerald-950/80 text-gold-300 px-4 py-2 rounded-full text-xs font-cinzel tracking-wider flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" /> Klik untuk melihat ukuran penuh
                </span>
              </div>
            </div>

            {/* Route Step-by-Step Guidance */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {[
                { step: '1', title: 'Exit Toll Salatiga', desc: 'Keluar gerbang tol menuju arah Suruh' },
                { step: '2', title: 'Jl. Salatiga - Suruh', desc: 'Lurus melintasi kawasan Tegal Waton' },
                { step: '3', title: 'Nyamat & Karanglo', desc: 'Melewati Jembatan Karanglo' },
                { step: '4', title: 'Dusun Tempel', desc: 'Tiba di lokasi acara (Plumbon)' },
              ].map((route, i) => (
                <div key={i} className="p-3 rounded-xl bg-emerald-900/5 border border-gold-400/20 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-950 text-gold-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">
                    {route.step}
                  </span>
                  <div>
                    <p className="font-bold text-emerald-950 font-sans">{route.title}</p>
                    <p className="text-stone-600 text-[11px] mt-0.5">{route.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL FOR ZOOMED MAP */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 text-white hover:text-gold-400 bg-white/10 p-2.5 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/assets/wedding/11.png"
                alt="Denah Lokasi Full"
                className="max-w-full max-h-[85vh] object-contain mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LocationSection;
