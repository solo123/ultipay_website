import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A2540 0%, #1E3A8A 50%, #0A2540 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://mgx-backend-cdn.metadl.com/generate/images/851702/2026-04-28/nq35qeyaafna/hero-global-network.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#0A2540]/60 to-transparent" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#10B981] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles size={14} className="text-[#10B981]" />
            <span className="text-sm text-white/90 font-medium">
              AI 赋能 · 全球持牌 · 合规安全
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            极优链动全球
            <br />
            <span className="bg-gradient-to-r from-[#10B981] to-[#60A5FA] bg-clip-text text-transparent">
              赋能大体量业务合规流转
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            全球跨境金融与数字化增长赋能者。依托国际持牌金融资源，构建
            <span className="mt-[0px] mr-[0px] mb-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] rounded-none text-[20px] font-semibold text-[#10B981] bg-[#00000000] opacity-100">「金融 + 营销 + 物流」</span>
            闭环体系。
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-6 text-base shadow-xl shadow-blue-900/50 group"
            >
              立即咨询定制方案
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#services")}
              className="!bg-transparent !hover:bg-white/10 text-white border-white/30 hover:border-white px-8 py-6 text-base"
            >
              了解核心服务
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">全球结算币种</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                24<span className="text-[#10B981]">/</span>7
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">全天候服务</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                AI<span className="text-[#10B981]">·</span>Native
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">智能算法驱动</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  );
};

export default HeroSection;