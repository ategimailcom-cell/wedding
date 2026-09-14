import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Compass, ShieldCheck, Gem, Infinity as InfinityIcon } from 'lucide-react';

interface StoryStep {
  period: string;
  title: string;
  icon: React.ReactNode;
  content: string;
}

const stories: StoryStep[] = [
  {
    period: 'Awal 2023',
    title: 'Pertemuan yang Tenang',
    icon: <Compass className="w-5 h-5 text-gold-500" />,
    content:
      'Awalnya hanya sebuah kebetulan yang tenang. Saya Yusuf mengenal Faragita di awal tahun 2023 lewat sebuah dialog sederhana saat mencari rekan kerja, yang ternyata membuka jalan bagi dua takdir untuk saling menyapa. Di antara tumpukan tugas dan intensitas komunikasi yang perlahan menghangat, hadir rasa yang tak pernah kami rencanakan. Dari sekadar teman bertukar kabar, dia perlahan tumbuh menjadi tempat paling nyaman untuk pulang.',
  },
  {
    period: 'Agustus 2023',
    title: 'Memilih Berjalan Beriringan',
    icon: <Heart className="w-5 h-5 text-gold-500" />,
    content:
      'Pada Agustus 2023, rasa itu akhirnya menemukan keberaniannya. Tanpa ada kata “iya” yang terucap secara resmi, kami memilih berjalan beriringan. Kami biarkan waktu dan ketulusan tindakan yang menjadi penanda bahwa kami serius menjalani arah cerita ini.',
  },
  {
    period: 'Masa Perjuangan',
    title: 'Belajar Saling Menopang',
    icon: <ShieldCheck className="w-5 h-5 text-gold-500" />,
    content:
      'Ujian pertama datang saat ia memberanikan diri merintis jalannya sendiri. Di sanalah kisah kami benar-benar ditempa. Melihatnya jatuh bangun membangun usaha—menatap lelah di matanya dan air mata yang kerap ia sembunyikan rapat-rapat—membuat dada ini berdesir haru. Di titik itulah saya sadar, cinta bukan cuma tentang berbagi tawa, melainkan tentang keberanian untuk saling menopang saat hidup menguji jiwa.',
  },
  {
    period: 'Juni 2025',
    title: 'Mengikat Janji',
    icon: <Gem className="w-5 h-5 text-gold-500" />,
    content:
      'Hingga akhirnya pada Juni 2025, kami memilih untuk saling mengikat janji. Sebuah cincin sederhana hadir sebagai saksi tekad kami untuk melangkah lebih jauh. Meski masa tunangan kembali menguji dengan berbagai lika-liku, kami belajar bahwa tak ada badai yang terlalu besar selama kami saling bergandengan tangan.',
  },
  {
    period: 'Oktober 2026',
    title: 'Satu Tujuan, Selamanya',
    icon: <InfinityIcon className="w-5 h-5 text-gold-500" />,
    content:
      'Dan di bulan Oktober 2026 ini, dua jiwa yang dulu saling tak mau kalah, akhirnya menundukkan ego masing-masing untuk satu tujuan yang sama—berjalan bersama sebagai sepasang suami istri.',
  },
];

export const StorySection: React.FC = () => {
  return (
    <section id="kisah" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold px-4 py-1.5 rounded-full border border-gold-400/30 bg-emerald-950/60 inline-block mb-3">
              Our Love Story
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-200 tracking-wide">
              Bukan Tentang Siapa yang Menang
            </h2>
            <p className="font-cormorant italic text-stone-300 text-base sm:text-lg max-w-lg mx-auto mt-2">
              Ini cerita singkat perjalanan dua hati menuju ikatan suci pernikahan.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Golden Line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-gold-500/50 to-transparent"></div>

          {/* Timeline Cards */}
          <div className="space-y-8 sm:space-y-12">
            {stories.map((story, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-6 md:gap-12`}
                >
                  {/* Timeline Badge in Center */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-950 border-2 border-gold-400 items-center justify-center shadow-lg z-10">
                    {story.icon}
                  </div>

                  {/* Story Card */}
                  <div className="w-full md:w-1/2">
                    <div className="parchment-card rounded-3xl p-6 sm:p-8 border border-gold-400/40 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-cinzel text-xs uppercase tracking-widest text-emerald-950 bg-gold-400/20 px-3 py-1 rounded-full font-bold border border-gold-400/30">
                          {story.period}
                        </span>
                        <div className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-emerald-900/10 border border-gold-400/40">
                          {story.icon}
                        </div>
                      </div>

                      <h3 className="font-playfair text-xl sm:text-2xl font-bold text-emerald-950 mb-3">
                        {story.title}
                      </h3>

                      <p className="font-cormorant text-base sm:text-lg text-stone-800 leading-relaxed italic text-justify">
                        “{story.content}”
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other column in desktop */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Story Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center parchment-card rounded-2xl p-6 border border-gold-400/30"
        >
          <Sparkles className="w-6 h-6 text-gold-600 mx-auto mb-2" />
          <p className="font-cormorant italic text-base sm:text-lg text-emerald-950 font-semibold">
            “Terima kasih sudah membaca setitik dari jutaan titik kisah kami berdua.”
          </p>
          <span className="font-alex text-gold-600 text-xl block mt-2">— Yusuf & Fara —</span>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
