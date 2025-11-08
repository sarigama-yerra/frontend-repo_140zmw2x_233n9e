export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200/70">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} MyVelura. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-[#06402B]">Privacy</a>
          <a href="#" className="hover:text-[#06402B]">Terms</a>
          <a href="#" className="hover:text-[#06402B]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
