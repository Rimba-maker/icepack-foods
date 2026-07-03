import { motion } from 'framer-motion';

const b2c = [
  { quote: 'Stok freezer rumah saya 80% dari IcePack. Dimsum-nya enak, bakso-nya kenyal — tamu yang datang selalu kira masak dari awal.', author: 'Ibu Rina, ibu rumah tangga' },
  { quote: 'Anak kos tapi makan enak. Nugget dan karage IcePack selalu ada di freezer. Digoreng 10 menit, sudah bisa makan.', author: 'Bagas, mahasiswa' },
  { quote: 'Udang bekunya fresh banget — tidak berbau, teksturnya bagus. Saya pakai untuk jualan pasta di rumah.', author: 'Bu Dewi, home cook' },
];

const b2b = [
  { quote: 'Sudah 2 tahun pakai IcePack untuk bahan baku cloud kitchen saya. Konsisten, on-time, dan harganya kompetitif.', author: 'Chef Reza, Cloud Kitchen Owner' },
  { quote: 'Hotel kami pesan dimsum dan seafood dari IcePack untuk breakfast buffet. Tamu tidak tahu itu frozen.', author: 'Pak Hendra, F&B Manager Hotel Bintang 4' },
  { quote: 'Supplier frozen food terbaik di kota ini. Pengiriman tepat waktu, faktur pajak tersedia.', author: 'Bu Linda, Owner Catering 300 pax' },
];

export default function Testimonial() {
  return (
    <section className="px-6 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">Dipercaya Dari Dapur ke Dapur.</h2>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary">
              Dari Konsumen Rumahan
            </p>
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {b2c.map((t) => (
                <motion.div
                  key={t.author}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="rounded-b2c border border-hairline bg-bg-warm p-5"
                >
                  <p className="text-sm text-body">"{t.quote}"</p>
                  <p className="mt-3 text-sm font-semibold text-ink">— {t.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-b2b">
              Dari Mitra Bisnis
            </p>
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {b2b.map((t) => (
                <motion.div
                  key={t.author}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="rounded-b2b border border-hairline bg-b2b-canvas-soft p-5"
                >
                  <p className="text-sm text-body">"{t.quote}"</p>
                  <p className="mt-3 text-sm font-semibold text-ink">— {t.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
