
import React, { useEffect, useRef, useState } from 'react';

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "ライト",
      price: "50,000",
      unit: "円",
      period: "/ 回",
      desc: "まずは現状を知りたい方へ",
      features: [
        "2時間の個別相談",
        "簡易業務診断レポート",
        "優先導入ツールの提案"
      ],
      recommended: false
    },
    {
      name: "スタンダード",
      price: "200,000",
      unit: "円",
      period: "/ 月",
      desc: "3ヶ月で自走体制を構築",
      features: [
        "全行程の伴走支援",
        "プロトタイプ1件の構築",
        "社内運用マニュアル作成",
        "週1回の定例ミーティング",
        "Slackでの質問対応"
      ],
      recommended: true
    },
    {
      name: "エンタープライズ",
      price: "500,000",
      unit: "円〜",
      period: "/ 月",
      desc: "複数部署への全社展開",
      features: [
        "複数部署への同時展開",
        "独自AI基盤の構築支援",
        "経営層向け戦略コンサル",
        "オンサイトサポート"
      ],
      recommended: false
    }
  ];

  return (
    <section ref={sectionRef} className="section-breathing bg-paper-dark relative overflow-hidden bg-noise" id="pricing">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-lines opacity-50"></div>

      {/* 円形装飾 */}
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full border border-ink/[0.02] -translate-y-1/2"></div>
      <div className="absolute top-20 -right-20 w-[300px] h-[300px] rounded-full border border-accent/[0.03]"></div>

      {/* グラデーション */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-paper to-transparent"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className={`text-center mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className="text-xs tracking-widest text-ink-muted uppercase">Pricing</span>
          <h2 className="font-serif text-title text-ink mt-4">
            料金プラン
          </h2>
          <p className="text-ink-muted mt-4">
            企業規模やニーズに合わせて、3つのプランをご用意
          </p>
        </div>

        {/* プランカード */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-paper p-8 card-smooth transition-all duration-700 overflow-hidden ${
                plan.recommended
                  ? 'shadow-elevated ring-1 ring-ink/10 md:-mt-4 md:mb-4'
                  : 'shadow-soft'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* ホバー背景 */}
              <div className="absolute inset-0 bg-accent/[0.02] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              {/* 推奨バッジ */}
              {plan.recommended && (
                <div className={`absolute -top-3 left-8 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
                style={{ transitionDelay: '400ms' }}>
                  <span className="bg-ink text-paper text-xs px-3 py-1 tracking-wider">
                    RECOMMENDED
                  </span>
                </div>
              )}

              {/* プラン名 */}
              <h3 className="text-lg font-medium text-ink mb-2 relative">{plan.name}</h3>
              <p className="text-sm text-ink-muted mb-6 relative">{plan.desc}</p>

              {/* 価格 */}
              <div className="mb-8 pb-8 border-b border-ink/10 relative">
                <div className="flex items-baseline overflow-hidden">
                  <span className={`text-4xl font-serif text-ink transition-all duration-700 ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}>
                    {plan.price}
                  </span>
                  <span className="text-ink-muted ml-1">{plan.unit}</span>
                  <span className="text-ink-muted ml-1 text-sm">{plan.period}</span>
                </div>
              </div>

              {/* 特徴リスト */}
              <ul className="space-y-3 mb-8 relative">
                {plan.features.map((feature, j) => (
                  <li key={j} className={`flex items-start gap-3 text-sm transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${i * 150 + j * 50 + 300}ms` }}>
                    <span className="w-1 h-1 bg-ink/40 rounded-full mt-2 shrink-0"></span>
                    <span className="text-ink-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full py-3 text-sm font-medium tracking-wide transition-all duration-300 btn-hover relative ${
                plan.recommended
                  ? 'bg-ink text-paper hover:bg-ink-light'
                  : 'border border-ink/20 text-ink hover:bg-ink/5'
              }`}>
                {plan.recommended ? '無料相談を予約' : '詳細を見る'}
              </button>
            </div>
          ))}
        </div>

        {/* 注釈 */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-sm text-ink-muted">
            すべてのプランで、初回の無料カウンセリングをご利用いただけます
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
