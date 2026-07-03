import { motion } from 'framer-motion';
import { RiSnowflakeFill, RiAwardFill, RiMicroscopeFill, RiBuilding3Fill, RiTruckFill, RiArchiveFill } from '@remixicon/react';

const usps = [
  { icon: RiSnowflakeFill, title: 'Cold Chain 100% Terjaga', desc: 'Dari dapur produksi ke tangan kamu — rantai dingin tidak pernah putus. Armada pengiriman berpendingin, packaging styrofoam + ice gel, suhu dijaga -18°C.' },
  { icon: RiAwardFill, title: 'Halal MUI Tersertifikasi', desc: 'Semua produk IcePack memiliki sertifikat halal dari MUI. Aman untuk seluruh keluarga Muslim Indonesia.' },
  { icon: RiMicroscopeFill, title: 'Tanpa Pengawet Berbahaya', desc: 'Proses pembekuan adalah pengawet alami kami. Tidak ada BHA, BHT, atau formalin. Frozen = fresh, bukan frozen = kimia.' },
  { icon: RiBuilding3Fill, title: 'Produksi Higienis BPOM', desc: 'Dapur produksi terdaftar & bersertifikat BPOM. Proses produksi mengikuti standar GMP (Good Manufacturing Practice).' },
  { icon: RiTruckFill, title: 'Pengiriman Same Day & Scheduled', desc: 'Order sebelum jam 11 siang → kirim hari yang sama. Atau jadwalkan pengiriman rutin per minggu untuk B2B.' },
  { icon: RiArchiveFill, title: 'Packaging Tahan Bocor & Freeze-proof', desc: 'Packaging kami dirancang khusus untuk frozen — tidak mudah bocor, tidak berembun berlebihan, label tidak luntur di freezer.' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function WhyIcePack() {
  return (
    <section className="px-6 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">
          Kenapa 200+ Bisnis & Ribuan Keluarga Pilih IcePack?
        </h2>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {usps.map((usp) => (
            <motion.div key={usp.title} variants={item} className="rounded-b2c border border-hairline p-6 hover:shadow-md">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-frost-soft">
                <usp.icon className="text-b2b" size={20} />
              </span>
              <p className="mt-4 font-semibold text-ink">{usp.title}</p>
              <p className="mt-2 text-sm text-body">{usp.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
