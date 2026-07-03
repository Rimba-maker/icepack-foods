import { motion } from 'framer-motion';
import { RiStarFill } from '@remixicon/react';

const products = [
  { name: 'Dimsum Hakau Udang Premium', price: 'Rp 45k/10 pcs', rating: 4.9, img: 'https://images.pexels.com/photos/15915267/pexels-photo-15915267.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Bakso Sapi Jumbo Super', price: 'Rp 52k/500g', rating: 4.8, img: 'https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Nugget Ayam Crispy', price: 'Rp 38k/500g', rating: 4.9, img: 'https://images.pexels.com/photos/28525150/pexels-photo-28525150.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Udang Kupas Segar Beku', price: 'Rp 65k/500g', rating: 4.8, img: 'https://images.pexels.com/photos/10487767/pexels-photo-10487767.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Siu Mai Daging Ayam', price: 'Rp 42k/10 pcs', rating: 4.7, img: 'https://images.pexels.com/photos/3911229/pexels-photo-3911229.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Rendang Sapi Beku', price: 'Rp 75k/250g', rating: 4.9, img: 'https://images.pexels.com/photos/37339493/pexels-photo-37339493.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Edamame Premium', price: 'Rp 28k/500g', rating: 4.8, img: 'https://images.pexels.com/photos/5870328/pexels-photo-5870328.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Fish Cake Ikan Tenggiri', price: 'Rp 35k/200g', rating: 4.7, img: 'https://images.pexels.com/photos/20811001/pexels-photo-20811001.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Pempek Palembang Beku', price: 'Rp 55k/8 pcs', rating: 4.9, img: 'https://images.pexels.com/photos/13688385/pexels-photo-13688385.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
  { name: 'Chicken Karage', price: 'Rp 42k/500g', rating: 4.8, img: 'https://images.pexels.com/photos/6249394/pexels-photo-6249394.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function BestSellers() {
  return (
    <section className="bg-surface px-6 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">Yang Paling Banyak Dibeli.</h2>
        <p className="mt-2 max-w-xl text-body">Favorit dapur rumah dan dapur bisnis se-kota.</p>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((p) => (
            <motion.div key={p.name} variants={item} className="rounded-b2c border border-hairline bg-white p-4">
              <div className="aspect-square overflow-hidden rounded-sm">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{p.name}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-medium text-primary">{p.price}</span>
                <span className="flex items-center gap-0.5 text-xs text-muted">
                  <RiStarFill className="text-primary-warm" size={14} /> {p.rating}
                </span>
              </div>
              <button className="mt-3 w-full rounded-sm bg-primary py-2 text-xs font-medium text-white hover:bg-primary-active">
                Order Sekarang
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
