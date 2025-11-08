import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <section id="science" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-3xl md:text-5xl font-extrabold">Clinically-minded. Elegantly balanced.</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                We combine adaptogens and evidence-led nutrients in ratios designed
                to support dopamine balance, stress response, and smooth energy—
                without the spikes. Every batch is third-party tested for purity and potency.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <li className="rounded-2xl bg-emerald-50 text-[#06402B] px-4 py-3 font-semibold">Caffeine-free</li>
                <li className="rounded-2xl bg-emerald-50 text-[#06402B] px-4 py-3 font-semibold">Vegan • Non-GMO</li>
                <li className="rounded-2xl bg-emerald-50 text-[#06402B] px-4 py-3 font-semibold">Third-party tested</li>
                <li className="rounded-2xl bg-emerald-50 text-[#06402B] px-4 py-3 font-semibold">Made in USA</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-neutral-50 via-white to-neutral-100 ring-1 ring-neutral-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="rounded-full bg-white/70 backdrop-blur px-4 py-2 text-xs md:text-sm font-semibold text-neutral-700 shadow">
                    Product Image Placeholder
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="ritual" className="py-16 md:py-24 bg-neutral-50/60">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-extrabold">Your daily glow ritual</h3>
              <p className="mt-4 text-neutral-600">
                Two capsules with water after breakfast. Pair with a brief breath practice and a glass of water. Keep it consistent—feel the change.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Morning", "Midday", "Evening"].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="rounded-3xl bg-white ring-1 ring-neutral-200 p-6 md:p-8 shadow-[0_10px_30px_rgba(6,64,43,0.06)]"
                >
                  <div className="text-sm font-semibold text-[#06402B]">{t}</div>
                  <div className="mt-2 text-xl md:text-2xl font-extrabold">A calm cadence</div>
                  <p className="mt-3 text-neutral-600">Hydrate, dose, breathe. Stay steady, stay luminous.</p>
                </motion.div>
              ))}
            </div>

            <div id="shop" className="mt-12 flex items-center justify-center">
              <a
                href="#"
                className="rounded-full bg-[#06402B] text-white px-8 py-4 text-base md:text-lg font-semibold shadow-[0_12px_40px_rgba(6,64,43,0.35)] hover:shadow-[0_14px_50px_rgba(6,64,43,0.45)] transition-shadow"
              >
                Add to Cart — CraveCalm
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
