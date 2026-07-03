import { motion } from 'framer-motion';

const recipes = [
  { name: 'Dim Sum Steamboat', uses: 'hakau + siu mai + fish cake', img: 'https://images.pexels.com/photos/13688385/pexels-photo-13688385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { name: 'Bakso Kuah Mercon', uses: 'bakso mercon + pentol isi', img: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { name: 'Karaage Rice Bowl', uses: 'chicken karage + edamame', img: 'https://images.pexels.com/photos/6249394/pexels-photo-6249394.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { name: 'Seafood Fried Rice', uses: 'udang + cumi + mixed veggies', img: 'https://images.pexels.com/photos/20811001/pexels-photo-20811001.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { name: 'Rendang Singkong', uses: 'rendang beku + singkong goreng', img: 'https://images.pexels.com/photos/37339493/pexels-photo-37339493.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { name: 'Pempek Kuah Cuko', uses: 'pempek beku + resep cuko rumahan', img: 'https://images.pexels.com/photos/13688385/pexels-photo-13688385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
];

export default function RecipeInspiration() {
  return (
    <section className="bg-surface px-6 py-16 md:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">Mau Masak Apa Hari Ini?</h2>
        <p className="mt-2 max-w-xl text-body">
          Inspirasi resep simpel pakai produk IcePack — siap 15 menit, hasilnya restoran.
        </p>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {recipes.map((recipe) => (
            <motion.a
              key={recipe.name}
              href="/resep/"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="overflow-hidden rounded-b2c border border-hairline bg-white hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img src={recipe.img} alt={recipe.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-ink">{recipe.name}</p>
                <p className="mt-1 text-xs text-muted">Pakai: {recipe.uses}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
