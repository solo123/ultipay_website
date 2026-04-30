import { ShieldCheck, Building2, FileCheck2, Globe } from "lucide-react";

const ComplianceSection = () => {
  const credentials = [
    {
      icon: <Building2 size={24} />,
      title: "区域背书",
      desc: "南京建邺高新技术产业开发区重点引进企业",
    },
    {
      icon: <FileCheck2 size={24} />,
      title: "政府核准",
      desc: "建邺区市场监管局核准入驻，注册资本 100 万元",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "透明经营",
      desc: "拥有合法的互联网数据服务、人工智能开发及信息系统集成资质",
    },
  ];

  return (
    <section
      id="compliance"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A2540 0%, #1E3A8A 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://mgx-backend-cdn.metadl.com/generate/images/851702/2026-04-28/nq35mlyaaflq/partnership-trust.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 to-[#0A2540]/95" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
            <ShieldCheck size={14} className="text-[#10B981]" />
            <span className="text-xs font-semibold text-white tracking-wider">
              TRUST & COMPLIANCE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            立足南京 <span className="text-[#10B981]">·</span> 合规全球
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            以严谨的资质体系与透明的经营原则，为每一笔大体量业务保驾护航
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#10B981]/40 transition-all duration-500"
            >
              <div className="absolute top-6 right-6 text-xs font-bold text-white/20 tracking-widest">
                0{idx + 1}
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shadow-lg mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="relative bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center text-white shadow-xl flex-shrink-0">
              <Globe size={28} />
            </div>
            <div className="flex-1">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                经营范围合法透明
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                人工智能应用软件开发、信息系统集成服务、互联网数据服务、技术咨询与推广服务 —— 
                每一项资质都经过政府主管部门核准备案。
              </p>
            </div>
            <div className="flex items-center gap-3 text-[#10B981]">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-medium">持续合规运营中</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;