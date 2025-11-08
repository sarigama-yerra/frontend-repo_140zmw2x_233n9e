import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 md:pb-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-[#06402B] px-4 py-2 text-xs font-semibold tracking-wide">
            MyVelura CraveCalm
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-neutral-900">
            Radiant Focus. Calm Control.
            <span className="block text-[#06402B]">Cravings, Reframed.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-neutral-600">
            A modern supplement engineered to soften cravings, elevate focus, and
            sustain a serene state of motivation. Trusted, refined, and beautifully
            effective.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#shop"
              className="rounded-full bg-[#06402B] text-white px-6 py-3 text-sm md:text-base font-semibold shadow-[0_8px_30px_rgba(6,64,43,0.35)] hover:shadow-[0_10px_40px_rgba(6,64,43,0.45)] transition-shadow"
            >
              Shop CraveCalm
            </a>
            <a
              href="#features"
              className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm md:text-base font-semibold text-neutral-900 hover:shadow-lg transition-shadow"
            >
              Explore Benefits
            </a>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="mt-14 md:mt-20">
          <div className="relative mx-auto aspect-video w-full max-w-5xl rounded-3xl bg-gradient-to-br from-neutral-50 via-white to-neutral-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-neutral-200 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,64,43,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(6,64,43,0.06),transparent_35%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-white/70 backdrop-blur px-4 py-2 text-xs md:text-sm font-semibold text-neutral-700 shadow">
                Product Video Placeholder (looping)
              </div>
            </div>
            <div className="absolute inset-0 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
