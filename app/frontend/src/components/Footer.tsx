import LogoMark from "@/components/LogoMark";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050E1D] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <LogoMark size={44} className="drop-shadow-[0_8px_18px_rgba(37,99,235,0.28)]" />
              <div>
                <div className="font-bold text-lg">南京益贤瑞</div>
                <div className="text-xs text-slate-400 tracking-widest">
                  NANJING YIXIANRUI
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-md mb-6">
              南京益贤瑞 ——
              专注跨境支付、跨境通国际专网与虚拟信用卡（VCC），为企业全球收付款与资金管理提供合规高效的解决方案。
            </p>
            <div className="text-xs text-slate-500 leading-relaxed">
              <div className="font-semibold text-slate-300 mb-1">核心业务：</div>
              跨境支付 · 跨境通国际专网 · 虚拟信用卡（VCC）
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider">
              服务
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                跨境支付
              </li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                跨境通国际专网
              </li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                VCC
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider">
              公司
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                关于我们
              </li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                合规与资质
              </li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                战略合作
              </li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                联系我们
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs text-slate-500">
            © {year} 南京益贤瑞网络科技有限公司 保留所有权利。
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <a href="https://beian.miit.gov.cn/" target="_blank">
              ICP 备案号：苏ICP备2026031949号-1
            </a>
            <span className="hover:text-slate-300 cursor-pointer">隐私政策</span>
            <span className="hover:text-slate-300 cursor-pointer">服务条款</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;