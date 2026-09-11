import { useState } from "react";
import { Globe2, CreditCard, ArrowLeftRight, Sparkles, ArrowUpRight } from "lucide-react";

type Service = {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  highlight: string;
  accent: string;
};

const services: Service[] = [
  {
    id: "payment",
    icon: <Globe2 size={28} />,
    tag: "Cross-border Payment",
    title: "跨境支付",
    desc: "面向外贸、电商与出海企业的跨境收付款服务，覆盖多币种结算、到账可控、费率透明的全场景资金流转。",
    highlight: "全球结算网络 · 合规资金通道 · 实时到账追踪",
    accent: "from-[#2563EB] to-[#60A5FA]",
  },
  {
    id: "pass",
    icon: <ArrowLeftRight size={28} />,
    tag: "International Network",
    title: "跨境通国际专网",
    desc: "基于跨境通国际专网，提供一站式跨境收款与全球账户通道，支持海外本地收款、结汇与资金归集，打通境内外资金链路。",
    highlight: "国际专网通道 · 多币种收款 · 快速归集结汇",
    accent: "from-[#1E3A8A] to-[#2563EB]",
  },
  {
    id: "vcc",
    icon: <CreditCard size={28} />,
    tag: "Virtual Credit Card",
    title: "VCC",
    desc: "发行与管理虚拟信用卡，适用于广告投放、云服务订阅、跨境采购等线上支付场景，额度可控、风险可管。",
    highlight: "多卡管理 · 额度灵活 · 实时风控预警",
    accent: "from-[#10B981] to-[#059669]",
  },
];

const ServicesSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider">
              CORE SERVICES
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 leading-tight">
            三大核心业务
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            南京益贤瑞聚焦跨境支付、跨境通国际专网与 VCC，为企业全球收付款提供一站式解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-white rounded-2xl p-8 md:p-10 border border-slate-200 hover:border-[#2563EB]/40 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent}`}
              />

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

                <div
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-100 transition-all duration-500 ${
                    hovered === service.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-70"
                  }`}
                >
                  <Sparkles size={16} className="text-[#10B981] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#064E3B]">
                    {service.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                CROSS-BORDER PAYMENT
              </div>
              <h4 className="text-xl font-bold text-white">
                跨境支付，打通全球资金流转
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
                INTERNATIONAL NETWORK & VCC
              </div>
              <h4 className="text-xl font-bold text-white">
                跨境通国际专网与 VCC，覆盖收款到支付全链路
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
