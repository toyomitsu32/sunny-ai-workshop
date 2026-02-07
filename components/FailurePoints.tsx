
import React, { useEffect, useRef, useState } from 'react';

const FailurePoints: React.FC = () => {
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

  const points = [
    {
      num: "01",
      title: "ツール導入が目的化する",
      desc: "最新ツールを導入することがゴールになり、実際の業務改善につながらない。半年後には誰も使っていない、という結末。"
    },
    {
      num: "02",
      title: "現場の声が置き去りになる",
      desc: "経営層の判断だけで進み、実際に使う現場スタッフにとって何のメリットもない。結果、形骸化する。"
    },
    {
      num: "03",
      title: "外部依存から抜け出せない",
      desc: "導入時は手厚いサポートがあっても、その後は自社で改善できない。コンサルタント費用が延々とかかり続ける。"
    }
  ];

  return (
    <section ref={sectionRef} className="section-breathing bg-paper relative overflow-hidden bg-noise">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-grid-subtle"></div>

      {/* 斜線装飾 */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <line x1="0" y1="200" x2="300" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-ink/[0.03]"/>
        <line x1="0" y1="400" x2="500" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-ink/[0.02]"/>
      </svg>

      {/* 右側の円 */}
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full border border-ink/[0.02] -translate-y-1/2"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className={`mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className="text-xs tracking-widest text-ink-muted uppercase">Common Failures</span>
          <h2 className="font-serif text-title text-ink mt-4">
            なぜ、多くのAI導入は
            <br />
            失敗するのか。
          </h2>
        </div>

        {/* 失敗パターン */}
        <div className="space-y-0">
          {points.map((point, i) => (
            <div
              key={i}
              className={`group grid md:grid-cols-12 gap-6 py-10 border-t border-ink/10 last:border-b transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* 番号 */}
              <div className="md:col-span-2">
                <span className="text-5xl font-serif text-ink/10 group-hover:text-accent/30 transition-colors duration-500">
                  {point.num}
                </span>
              </div>

              {/* タイトル */}
              <div className="md:col-span-4">
                <h3 className="text-lg font-medium text-ink leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                  {point.title}
                </h3>
              </div>

              {/* 説明 */}
              <div className="md:col-span-6">
                <p className="text-ink-muted leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 導線 */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-ink-muted text-sm">
            これらを回避するための、私たちの答え
          </p>
          <div className="mt-4">
            <span className="material-symbols-outlined text-ink/30 animate-float">south</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FailurePoints;
