
import React, { useEffect, useRef, useState } from 'react';

const Benefits: React.FC = () => {
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

  const benefits = [
    {
      stat: "40%",
      unit: "削減",
      title: "作業時間",
      desc: "定型業務の自動化により、年間で数百時間を創出"
    },
    {
      stat: "95%",
      unit: "減少",
      title: "人的ミス",
      desc: "繰り返し作業をAIが担い、エラーを劇的に削減"
    },
    {
      stat: "+28",
      unit: "pt",
      title: "社員満足度",
      desc: "面倒な作業から解放され、本来の仕事に集中できる"
    },
    {
      stat: "∞",
      unit: "",
      title: "改善の連鎖",
      desc: "社員自らが効率化を考え、提案する文化が生まれる"
    }
  ];

  return (
    <section ref={sectionRef} className="section-breathing bg-paper relative overflow-hidden bg-noise">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-grid-subtle"></div>

      {/* 円形装飾 */}
      <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] rounded-full border border-ink/[0.02]"></div>
      <div className="absolute -bottom-16 -left-16 w-[250px] h-[250px] rounded-full border border-accent/[0.04]"></div>

      {/* 曲線 */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M0,800 Q400,600 600,800 T1000,700" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink"/>
      </svg>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div>
            <span className="text-xs tracking-widest text-ink-muted uppercase">Impact</span>
            <h2 className="font-serif text-title text-ink mt-4">
              導入後に起こる変化
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-ink-muted leading-relaxed">
              数字で見る、AIワークショップの効果。
              これらは過去の導入企業の平均値です。
            </p>
          </div>
        </div>

        {/* 効果グリッド */}
        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`bg-paper p-10 group card-smooth transition-all duration-700 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {/* ホバー背景 */}
              <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-baseline gap-2 mb-6 overflow-hidden relative">
                <span className={`text-5xl font-serif text-ink transition-all duration-700 ${
                  isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transitionDelay: `${(i + 1) * 100 + 200}ms` }}>
                  {benefit.stat}
                </span>
                <span className="text-ink-muted">{benefit.unit}</span>
              </div>

              <h3 className="text-sm font-medium text-ink tracking-wider uppercase mb-3 group-hover:tracking-widest transition-all duration-300 relative">
                {benefit.title}
              </h3>

              <p className="text-ink-muted text-sm leading-relaxed relative">
                {benefit.desc}
              </p>

              {/* ホバー時のライン */}
              <div className="mt-6 h-px bg-ink/10 overflow-hidden relative">
                <div className="h-full bg-accent w-0 group-hover:w-12 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 導入企業の声 */}
        <div className={`mt-20 bg-paper-warm p-12 relative overflow-hidden transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {/* 背景パターン */}
          <div className="absolute inset-0 bg-dots opacity-30"></div>

          <div className="relative max-w-2xl mx-auto text-center">
            <p className={`text-ink-muted text-6xl font-serif leading-none mb-6 transition-all duration-500 delay-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}>"</p>

            <p className="font-serif text-xl text-ink leading-relaxed mb-8">
              正直、最初は半信半疑でした。でも3ヶ月後には、
              社員が自らAI活用のアイデアを出すようになった。
              これは単なるツール導入ではなく、組織文化の変革でした。
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-ink/5 rounded-full flex items-center justify-center">
                <span className="text-ink font-serif">T</span>
              </div>
              <div className="text-left">
                <p className="text-ink font-medium">田中 健太</p>
                <p className="text-ink-muted text-sm">株式会社サンプル 代表取締役</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
