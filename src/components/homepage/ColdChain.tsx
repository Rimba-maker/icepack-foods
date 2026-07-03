import { motion } from 'framer-motion';
import { RiLeafLine, RiBuilding3Line, RiSnowflakeLine, RiArchiveLine, RiTruckLine } from '@remixicon/react';

const steps = [
  { icon: RiLeafLine, title: 'Bahan Baku Segar', desc: 'Kami seleksi bahan baku dari supplier terpercaya — daging, seafood, sayuran, dan bumbu dengan standar ketat.' },
  { icon: RiBuilding3Line, title: 'Produksi Higienis', desc: 'Dapur produksi GMP-certified. Semua karyawan melewati food safety training. Bebas hama & kontaminasi silang.' },
  { icon: RiSnowflakeLine, title: 'Quick Freezing (-40°C)', desc: 'IQF (Individual Quick Freezing) technology — membekukan setiap produk secara individu dengan cepat.' },
  { icon: RiArchiveLine, title: 'Packaging & Labeling', desc: 'Dikemas dalam vacuum pack atau packaging khusus freezer. Label nutrition facts, kode produksi, expired date tertera jelas.' },
  { icon: RiTruckLine, title: 'Cold Chain Delivery', desc: 'Armada pengiriman berpendingin. Ice gel untuk jarak pendek, mobil freezer untuk volume besar & jarak jauh.' },
];

export default function ColdChain() {
  return (
    <section className="px-6 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">
          Dari Dapur Kami ke Freezermu — Tidak Pernah Putus.
        </h2>
        <p className="mt-2 max-w-xl text-body">
          Frozen food yang baik bukan soal bahan saja — tapi soal menjaga kualitasnya dari produksi
          sampai konsumsi.
        </p>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              className="relative"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-frost-soft">
                <step.icon className="text-b2b" size={22} />
              </span>
              <p className="mt-3 font-semibold text-ink">
                {i + 1}. {step.title}
              </p>
              <p className="mt-2 text-sm text-body">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
