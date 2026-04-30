# 极优贝 Ultipay 官网 - 开发任务

## 设计参考

- **设计风格**: 金融科技风 (Fintech)，低调专业，科技感
- **色彩方案**:
  - 主色: 科技深蓝 `#0A2540` / `#1E3A8A`
  - 辅助: 亮蓝 `#2563EB`
  - 背景: 珍珠白 `#F8FAFC` / 纯白 `#FFFFFF`
  - 点缀色: 薄荷绿 `#10B981` (象征增长)
  - 文字: 深灰 `#1F2937` / 中灰 `#64748B`
- **字体**: 无衬线字体 (PingFang SC, -apple-system, sans-serif)
- **视觉元素**: 全球经纬度连线动画、几何线条、AI 数据流图形
- **设计参考**: Stripe、Airwallex、Plaid 金融科技官网风格

## Images to Generate

1. `hero-global-network.jpg` - 首屏英雄图，深蓝色调的全球经纬度连线网络，数据流动粒子效果，金融科技感
2. `service-fintech-payment.jpg` - 全球收付款服务卡片图，国际金融、资金流转可视化
3. `service-ai-growth.jpg` - AI 驱动增长服务图，数据算法可视化，神经网络图形
4. `partnership-trust.jpg` - 合作伙伴信任感背景图，南京城市天际线与科技光效融合

## Development Tasks

- [x] 创建 Header 组件 - 顶部导航栏（LOGO + 菜单 + 联系我们按钮）
- [x] 创建 HeroSection 组件 - 首屏品牌愿景区与动态背景
- [x] 创建 ServicesSection 组件 - 核心业务四大板块卡片
- [x] 创建 ComplianceSection 组件 - 合规与资质展示
- [x] 创建 PartnersSection 组件 - 战略合作伙伴展示
- [x] 创建 ContactSection 组件 - 底部转换区与联系方式
- [x] 创建 Footer 组件 - 页脚信息
- [x] 更新 Index.tsx 整合所有组件，更新 index.css 全局样式与动画

## Files to Create/Modify

- `src/pages/Index.tsx` - 主页整合
- `src/components/Header.tsx`
- `src/components/HeroSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/ComplianceSection.tsx`
- `src/components/PartnersSection.tsx`
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`
- `src/index.css` - 全局样式与动画