import { motion } from "framer-motion";
import { Beaker, Clock, Leaf } from "lucide-react";

const card = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Features() {
  const items = [
    {
      title: "The Format",
      desc: "Daily capsules designed for precise, effortless consistency and elevated bioavailability.",
      icon: Leaf,
    },
    {
      title: "The Formula",
      desc: "A targeted complex of adaptogens and nootropics that help soften cravings while supporting calm focus.",
      icon: Beaker,
    },
    {
      title: "The Ritual",
      desc: "A gentle, grounding habit that pairs with your morning flow—radiantly simple, deeply effective.",
      icon: Clock,
    },
  ];

  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Crafted for calm confidence
          </h2>
          <p className="mt-4 text-neutral-600">
            Three pillars guide CraveCalm: a refined delivery, an intelligent blend, and a ritual that fits.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={card}
                className="relative rounded-3xl bg-white ring-1 ring-neutral-200 shadow-[0_10px_30px_rgba(6,64,43,0.06)] p-6 md:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[#06402B]">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-neutral-600 leading-relaxed">{item.desc}</p>
                <div className="mt-6">
                  <a
                    href="#shop"
                    className="inline-flex items-center gap-2 text-[#06402B] font-semibold hover:underline"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
