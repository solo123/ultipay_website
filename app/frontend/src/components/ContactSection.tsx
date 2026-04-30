import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, QrCode, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", company: "", email: "", msg: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 50%, #F8FAFC 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 leading-tight">
            获取您的定制化合规方案
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            提交您的业务需求，极优贝专业顾问将在 24 小时内与您联系
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <div className="bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981] rounded-full opacity-10 blur-3xl -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2563EB] rounded-full opacity-20 blur-3xl translate-y-20 -translate-x-20" />

            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">联系极优贝</h3>
              <p className="text-slate-300 text-sm mb-10">
                欢迎到访我们的办公中心，或通过以下方式直接联系我们
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#10B981]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 tracking-widest mb-1">
                      公司总部
                    </div>
                    <div className="text-white font-medium">
                      江苏省南京市建邺区
                      <br />
                      高新技术产业开发区办公中心
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#10B981]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 tracking-widest mb-1">
                      商务邮箱
                    </div>
                    <div className="text-white font-medium">contact@ultipay.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#10B981]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 tracking-widest mb-1">
                      咨询热线
                    </div>
                    <div className="text-white font-medium">400-888-XXXX</div>
                  </div>
                </div>
              </div>

              {/* QR code placeholder */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 backdrop-blur-sm">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <QrCode size={48} className="text-[#0A2540]" />
                </div>
                <div>
                  <div className="text-xs text-[#10B981] font-semibold tracking-widest mb-1">
                    SCAN TO CONNECT
                  </div>
                  <div className="text-white font-semibold mb-1">扫码获取方案</div>
                  <div className="text-xs text-slate-400">
                    添加专属顾问，获得定制建议
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-blue-900/5">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
              提交合作意向
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              填写以下信息，我们将尽快为您匹配合适的解决方案
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2 tracking-wide">
                    姓名 *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2 tracking-wide">
                    公司名称 *
                  </label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                    placeholder="请输入公司名称"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2 tracking-wide">
                  联系邮箱 *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2 tracking-wide">
                  业务需求说明
                </label>
                <textarea
                  rows={4}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none"
                  placeholder="请简要描述您的跨境金融、AI 赋能或其他业务需求..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] hover:from-[#1E40AF] hover:to-[#0A2540] text-white py-6 text-base shadow-lg shadow-blue-500/20 group"
              >
                {submitted ? "✓ 已收到您的信息" : "立即提交咨询"}
                {!submitted && (
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                )}
              </Button>

              <p className="text-xs text-slate-400 text-center">
                提交即表示同意极优贝的 <span className="text-[#2563EB]">隐私协议</span> 与 <span className="text-[#2563EB]">服务条款</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;