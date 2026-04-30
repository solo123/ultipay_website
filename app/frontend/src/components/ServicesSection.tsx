import { useState } from "react";
import { Globe2, CreditCard, Sparkles, Briefcase, ArrowUpRight } from "lucide-react";

type Service = {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  aiHighlight: string;
  accent: string;
};

const services: Service[] = [
  {
    id: "A",
    icon: <Globe2 size={28} />,
    tag: "Fintech",
    title: "全球收付款",
    desc: "服务外贸与电商，提供费率透明的全场景结算，打通资金流转「最后一公里」。",
    aiHighlight: "AI 实时汇率优化 · 智能路由最优通道",
    accent: "from-[#2563EB] to-[#60A5FA]",
  },
  {
    id: "B",
    icon: <CreditCard size={28} />,
    tag: "VCC & Billing",
    title: "数字化增值服务",
    desc: "广告费、物流费一键代付；针对数字科技企业，提供算力资源付费支持，秒级到账。",
    aiHighlight: "AI 账单识别 · 自动化对账与异常预警",
    accent: "from-[#1E3A8A] to-[#2563EB]",
  },
  {
    id: "C",
    icon: <Sparkles size={28} />,
    tag: "AI Support",
    title: "AI 驱动增长",
    desc: "利用人工智能应用软件开发能力，优化跨境数据处理与营销决策。",
    aiHighlight: "大模型营销洞察 · 跨境数据智能分析",
    accent: "from-[#10B981] to-[#059669]",
  },
  {
    id: "D",
    icon: <Briefcase size={28} />,
    tag: "Industry",
    title: "特定行业解决方案",
    desc: "覆盖入境旅游外币结算优化及复杂链路的定制化支撑。",
    aiHighlight: "行业专属模型 · 合规策略智能匹配",
    accent: "from-[#0A2540] to-[#1E3A8A]",
  },
];

const ServicesSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider">
              CORE SERVICES
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 leading-tight">
            四大核心业务板块
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            从跨境金融到 AI 增长，极优贝提供端到端的全球业务合规流转解决方案
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-200 hover:border-[#2563EB]/40 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Accent gradient bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent}`}
              />

              {/* Decorative circle */}
              <div
                className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${service.accent} opacity-5 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 tracking-widest">
                      {service.tag}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 group-hover:text-[#2563EB] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* AI highlight - visible on hover */}
                <div
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-100 transition-all duration-500 ${
                    hovered === service.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-70"
                  }`}
                >
                  <Sparkles size={16} className="text-[#10B981] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#064E3B]">
                    {service.aiHighlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom feature image strip */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div
            className="rounded-2xl overflow-hidden h-64 bg-cover bg-center relative group"
            style={{
              backgroundImage:
                "url('https://mgx-backend-cdn.metadl.com/generate/images/851702/2026-04-28/nq35ooaaafla/service-fintech-payment.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-xs text-[#10B981] font-semibold tracking-widest mb-2">
                GLOBAL PAYMENT
              </div>
              <h4 className="text-xl font-bold text-white">
                打通全球资金流转的最后一公里
              </h4>
            </div>
          </div>
          <div
            className="rounded-2xl overflow-hidden h-64 bg-cover bg-center relative group"
            style={{
              backgroundImage:
                "url('https://mgx-backend-cdn.metadl.com/generate/images/851702/2026-04-28/nq35lnaaafma/service-ai-growth.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#0A2540]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-xs text-[#10B981] font-semibold tracking-widest mb-2">
                AI INTELLIGENCE
              </div>
              <h4 className="text-xl font-bold text-white">
                用 AI 重新定义跨境增长决策
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;