
import React, { useEffect, useRef, useState } from 'react';

const InvestmentSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [roiCount, setRoiCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // ROIカウントアップ
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setRoiCount(Math.floor(340 * eased));
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-breathing bg-paper">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* 左：テキスト */}
          <div className="md:col-span-3 space-y-8">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <span className="text-xs tracking-widest text-ink-muted uppercase">Investment</span>
              <h2 className="font-serif text-title text-ink mt-4">
                「経費」ではなく
                <br />
                「投資」として考える
              </h2>
            </div>

            <div className="space-y-6 text-ink-muted leading-relaxed">
              <p className={`transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                AI導入のコストを考えるとき、同時に
                <span className="text-ink">「導入しないことで失い続けるコスト」</span>
                にも目を向ける必要があります。
              </p>

              <p className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                毎日繰り返される手作業。不注意によるミス。
                そして何より、「本来もっと注力すべき仕事」に
                時間を使えないという機会損失。
              </p>

              <p className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                私たちのワークショップは、短期的な効率化だけを
                目指しているわけではありません。
                <span className="text-ink">
                  「環境が変わっても自ら考え、改善できる強い組織」
                </span>
                を作ること。それがゴールです。
              </p>

              <p className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                一度この仕組みができれば、外部のコンサルタントを
                雇い続ける必要はありません。
              </p>
            </div>
          </div>

          {/* 右：ROIカード */}
          <div className={`md:col-span-2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-paper-warm p-8 sticky top-28 card-smooth">
              <p className="text-xs tracking-widest text-ink-muted uppercase mb-6">
                Average ROI
              </p>

              <div className="text-center py-8 border-y border-ink/10">
                <span className="text-6xl font-serif text-ink">{roiCount}</span>
                <span className="text-2xl text-ink-muted">%</span>
                <p className="text-sm text-ink-muted mt-2">1年目の投資利益率</p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  { label: '時間削減', value: '年間480時間' },
                  { label: 'コスト削減', value: '年間120万円' },
                  { label: 'エラー削減', value: '95%減少' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between text-sm transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <span className="text-ink-muted">{item.label}</span>
                    <span className="text-ink font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-ink-muted mt-6">
                ※ 過去導入企業の平均値
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
