import { ShoppingBag } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-[#06402B]" />
          <span className="font-extrabold tracking-tight text-neutral-900">MyVelura</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-700">
          <a href="#features" className="hover:text-[#06402B]">Benefits</a>
          <a href="#science" className="hover:text-[#06402B]">Science</a>
          <a href="#ritual" className="hover:text-[#06402B]">Ritual</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:shadow-md transition-shadow"
          >
            <ShoppingBag size={18} />
            Shop
          </a>
        </div>
      </div>
    </header>
  );
}
