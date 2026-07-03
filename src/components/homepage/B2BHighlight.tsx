import { motion } from 'framer-motion';
import { RiStore2Line, RiArchiveLine, RiTimeLine } from '@remixicon/react';

const stats = [
  { icon: RiStore2Line, value: '200+', label: 'Mitra Bisnis Aktif', sub: 'Restoran, hotel, catering, kantin' },
  { icon: RiArchiveLine, value: '2 Ton/Bulan', label: 'Volume Distribusi', sub: 'Rata-rata per bulan' },
  { icon: RiTimeLine, value: '98%', label: 'On-Time Delivery', sub: 'Jadwal pengiriman yang bisa diandalkan' },
];

export default function B2BHighlight() {
  return (
    <section className="bg-b2b-canvas-soft px-6 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">Punya Bisnis F&B? Kami Partner yang Tepat.</h2>
        <p className="mt-2 max-w-2xl text-body">
          200+ restoran, cloud kitchen, hotel, dan catering di kotamu sudah mempercayakan kebutuhan
          frozen food mereka ke IcePack. Harga grosir, pengiriman terjadwal, invoice & faktur pajak
          tersedia.
        </p>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-b2b border border-hairline bg-white p-6"
            >
              <stat.icon className="text-b2b" size={26} />
              <p className="mt-2 font-mono text-2xl font-bold text-b2b">{stat.value}</p>
              <p className="mt-1 font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-sm text-muted">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <a
          href="/supplier/"
          className="mt-8 inline-block rounded-full bg-b2b px-6 py-3 font-medium text-white hover:bg-b2b-press"
        >
          Pelajari Program Supplier →
        </a>
      </div>
    </section>
  );
}
