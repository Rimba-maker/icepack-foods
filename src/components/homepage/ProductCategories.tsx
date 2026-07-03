import { motion } from 'framer-motion';
import {
  RiRestaurant2Fill,
  RiBowlFill,
  RiFireFill,
  RiKnifeFill,
  RiAnchorFill,
  RiLeafFill,
  RiTakeawayFill,
  RiHeartPulseFill,
  RiCake3Fill,
  RiRestaurantFill,
} from '@remixicon/react';

const categories = [
  { icon: RiRestaurant2Fill, name: 'Dimsum & Siomay', desc: 'Hakau, siu mai, dumpling, siomay, bao, cheung fun', sku: '50+ SKU', img: 'https://images.pexels.com/photos/3911229/pexels-photo-3911229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiBowlFill, name: 'Bakso & Pentol', desc: 'Bakso sapi, bakso ikan, pentol isi, bakso mercon, bakso keju', sku: '30+ SKU', img: 'https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiFireFill, name: 'Nugget & Olahan Ayam', desc: 'Nugget ayam, karage, chicken strip, ayam popcorn, sosis ayam', sku: '40+ SKU', img: 'https://images.pexels.com/photos/15529775/pexels-photo-15529775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiKnifeFill, name: 'Sosis & Hotdog', desc: 'Sosis sapi, sosis ayam, sosis ikan, bratwurst, frankfurter', sku: '25+ SKU', img: 'https://images.pexels.com/photos/96618/pexels-photo-96618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiAnchorFill, name: 'Seafood Frozen', desc: 'Udang, cumi, ikan fillet, kerang, kepiting, scallop, fish cake', sku: '60+ SKU', img: 'https://images.pexels.com/photos/20811001/pexels-photo-20811001.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiLeafFill, name: 'Sayuran Frozen', desc: 'Edamame, brokoli, jagung pipil, wortel dadu, mixed veggies, bayam', sku: '30+ SKU', img: 'https://images.pexels.com/photos/5870328/pexels-photo-5870328.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiTakeawayFill, name: 'Ready to Eat', desc: 'Rendang beku, opor beku, ayam geprek beku, pempek beku, nasi goreng beku', sku: '45+ SKU', img: 'https://images.pexels.com/photos/37339493/pexels-photo-37339493.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiHeartPulseFill, name: 'Healthy Range', desc: 'High protein, low carb, rendah kalori, bebas gluten, vegetarian/vegan option', sku: '35+ SKU', img: 'https://images.pexels.com/photos/4929690/pexels-photo-4929690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiCake3Fill, name: 'Dessert & Snack Frozen', desc: 'Es krim artisan, mochi, klepon beku, onde-onde beku, waffle beku', sku: '40+ SKU', img: 'https://images.pexels.com/photos/6645975/pexels-photo-6645975.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { icon: RiRestaurantFill, name: 'Western Frozen', desc: 'Pizza beku, pasta siap masak, beef burger patty, lasagna beku', sku: '25+ SKU', img: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ProductCategories() {
  return (
    <section className="px-6 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">500+ Produk. Semua Kategori.</h2>
        <p className="mt-2 max-w-xl text-body">
          Dari yang klasik sampai yang healthy — semuanya tersedia, semuanya beku sempurna.
        </p>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.name}
              href="/produk/"
              variants={item}
              className="group overflow-hidden rounded-b2c border border-hairline bg-white hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
                  <cat.icon className="text-primary" size={18} />
                </span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-ink">{cat.name}</p>
                <p className="mt-1 text-xs text-muted">{cat.desc}</p>
                <p className="mt-2 text-xs font-medium text-primary">{cat.sku}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
