import { motion } from 'framer-motion';

const badges = ['Halal MUI Tersertifikasi', 'Cold Chain Terjaga', '500+ Produk', 'Melayani 200+ Resto & UMKM'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

export default function Hero() {
  return (
    <section className="bg-bg-warm px-6 py-16 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={item} className="max-w-2xl text-3xl font-bold text-ink md:text-5xl">
            Frozen Food Terbaik. Untuk Dapur Rumah & Dapur Bisnis.
          </motion.h1>
          <motion.p variants={item} className="max-w-xl text-base text-body md:text-lg">
            Ratusan produk frozen food berkualitas — dari dimsum, bakso, nugget, hingga seafood & healthy
            range. Distributor terpercaya untuk konsumen rumahan dan mitra bisnis F&B di kotamu.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a href="/produk/" className="rounded-sm bg-primary px-6 py-3 font-medium text-white hover:bg-primary-active">
              Lihat Semua Produk
            </a>
            <a href="/supplier/" className="rounded-full border border-b2b px-6 py-3 font-medium text-b2b hover:bg-b2b-light">
              Jadi Mitra Supplier
            </a>
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-4">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full bg-frost-soft px-4 py-1.5 text-xs font-medium text-ink">
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="aspect-[4/3] overflow-hidden rounded-b2c"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=1920&q=80&auto=format&fit=crop"
            alt="Beragam produk frozen food segar"
            className="h-full w-full object-cover"
            loading="eager"
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
