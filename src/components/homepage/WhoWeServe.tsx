import { motion } from 'framer-motion';
import { RiHome4Fill, RiRestaurantLine } from '@remixicon/react';

export default function WhoWeServe() {
  return (
    <section className="px-6 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">Untuk Siapa IcePack?</h2>
        <p className="mt-2 max-w-xl text-body">
          Satu brand, dua kebutuhan berbeda — keduanya kami layani dengan standar yang sama.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-b2c border border-hairline bg-white"
          >
            <img
              src="https://images.pexels.com/photos/8507626/pexels-photo-8507626.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Keluarga masak di dapur"
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-8">
            <p className="flex items-center gap-2 text-xl font-semibold text-ink">
              <RiHome4Fill className="text-primary" size={22} /> Untuk Dapur Rumah
            </p>
            <p className="mt-3 text-body">
              Stok freezer praktis untuk keluarga. Dimsum weekend, bakso malam hari, nugget untuk anak —
              semua ada. Pesan online, dikirim dengan cold packaging, sampai tetap segar.
            </p>
            <p className="mt-3 text-sm text-muted">Beli per pcs atau per pack</p>
            <a href="/produk/" className="mt-5 inline-block rounded-sm bg-primary px-5 py-3 font-medium text-white hover:bg-primary-active">
              Belanja Sekarang
            </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-b2b border border-hairline bg-b2b-canvas-soft"
          >
            <img
              src="https://images.pexels.com/photos/30120987/pexels-photo-30120987.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Chef di dapur restoran komersial"
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-8">
            <p className="flex items-center gap-2 text-xl font-semibold text-ink">
              <RiRestaurantLine className="text-b2b" size={22} /> Untuk Dapur Bisnis
            </p>
            <p className="mt-3 text-body">
              Bahan baku frozen food berkualitas untuk restoran, cloud kitchen, catering, hotel, dan
              kantin. Harga grosir, pengiriman rutin, invoice tersedia.
            </p>
            <p className="mt-3 text-sm text-muted">Minimum order 10 kg</p>
            <a href="/supplier/" className="mt-5 inline-block rounded-full bg-b2b px-5 py-3 font-medium text-white hover:bg-b2b-press">
              Konsultasi B2B
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
