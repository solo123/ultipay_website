import { ShieldCheck, Lock, Banknote } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    { name: "SUNRATE", zh: "寻汇", desc: "全球跨境金融与资金管理平台" },
  ];

  const values = [
    { icon: <ShieldCheck size={18} />, text: "持牌通道" },
    { icon: <Lock size={18} />, text: "合规安全" },
    { icon: <Banknote size={18} />, text: "资金无忧" },
  ];

  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span className="text-xs font-semibold text-[#064E3B] tracking-wider">
              STRATEGIC PARTNERS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 leading-tight">
            战略合作伙伴
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            与全球领先的持牌金融服务商深度合作，构建安全合规的跨境资金通道
          </p>
        </div>

        {/* Partner logos */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-10 border border-slate-200 hover:border-[#2563EB]/40 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-center">
                    <span className="text-2xl font-black bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] bg-clip-text text-transparent">
                      {p.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A2540] tracking-tight">
                      {p.name}
                    </div>
                    <div className="text-sm text-slate-500 mt-0.5">{p.zh}</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-[#10B981] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  LICENSED
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  全球多币种清算
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  持牌运营
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust value strip */}
        <div className="bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #10B981 0%, transparent 50%),
                             radial-gradient(circle at 70% 50%, #2563EB 0%, transparent 50%)`,
          }} />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs text-[#10B981] font-semibold tracking-widest mb-2">
                OUR COMMITMENT
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                持牌通道 · 合规安全 · 资金无忧
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
                >
                  <span className="text-[#10B981]">{v.icon}</span>
                  {v.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;