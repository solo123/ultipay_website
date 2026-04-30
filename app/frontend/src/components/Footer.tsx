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
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <div className="font-bold text-lg">极优贝</div>
                <div className="text-xs text-slate-400 tracking-widest">
                  ULTIPAY TECHNOLOGY
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-md mb-6">
              极优贝科技有限公司 (Ultipay Technology Ltd.) —— 
              全球跨境金融与数字化增长赋能者，致力于构建「金融 + 营销 + 物流」合规闭环体系。
            </p>
            <div className="text-xs text-slate-500 leading-relaxed">
              <div className="font-semibold text-slate-300 mb-1">经营范围：</div>
              人工智能应用软件开发 · 信息系统集成服务 · 互联网数据服务 · 技术咨询与推广
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider">
              服务
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                全球收付款
              </li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                数字化增值服务
              </li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                AI 驱动增长
              </li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">
                行业解决方案
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
            © {year} 极优贝科技有限公司 Ultipay Technology Ltd. 保留所有权利。
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span>ICP 备案号：苏ICP备XXXXXXXX号</span>
            <span className="hover:text-slate-300 cursor-pointer">隐私政策</span>
            <span className="hover:text-slate-300 cursor-pointer">服务条款</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;