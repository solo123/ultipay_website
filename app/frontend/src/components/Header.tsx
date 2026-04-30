import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "首页", href: "#home" },
    { label: "核心服务", href: "#services" },
    { label: "合规与资质", href: "#compliance" },
    { label: "关于我们", href: "#about" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">U</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-base ${scrolled ? "text-[#0A2540]" : "text-white"}`}>
              极优贝
            </span>
            <span className={`text-[10px] tracking-widest ${scrolled ? "text-slate-500" : "text-slate-300"}`}>
              ULTIPAY
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`text-sm font-medium transition-colors hover:text-[#2563EB] ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-[#2563EB] hover:bg-[#1E3A8A] text-white shadow-lg shadow-blue-500/20"
          >
            联系我们
          </Button>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-[#0A2540]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-slate-700 py-2 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-[#2563EB] hover:bg-[#1E3A8A] text-white w-full mt-2"
            >
              联系我们
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;