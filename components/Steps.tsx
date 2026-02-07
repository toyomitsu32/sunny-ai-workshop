
import React, { useEffect, useRef, useState } from 'react';

const Steps: React.FC = () => {
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

  const workshopSteps = [
    {
      month: "1",
      title: "現状アセスメント",
      tasks: [
        "全社員アンケート実施",
        "主要部門へのインタビュー",
        "業務フローの可視化",
        "改善ポイントの特定"
      ],
      outcome: "課題と機会を明確にした診断レポート"
    },
    {
      month: "2",
      title: "プロトタイプ構築",
      tasks: [
        "パイロット部署の選定",
        "AIツールの導入・設定",
        "効果測定と調整",
        "フィードバック収集"
      ],
      outcome: "実際に動く仕組みと初期成果"
    },
    {
      month: "3",
      title: "社内推進者の育成",
      tasks: [
        "リーダー候補の選定",
        "トレーニングプログラム実施",
        "運用マニュアル作成",
        "自走体制の確立"
      ],
      outcome: "外部なしで回せる組織体制"
    }
  ];

  return (
    <section ref={sectionRef} className="section-breathing bg-paper-warm relative overflow-hidden bg-noise" id="steps">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>

      {/* 円形装飾 */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full border border-ink/[0.03]"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent/[0.02]"></div>

      {/* 斜線 */}
      <svg className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-[0.02]" viewBox="0 0 500 500">
        <line x1="500" y1="0" x2="0" y2="500" stroke="currentColor" strokeWidth="1" className="text-ink"/>
        <line x1="500" y1="100" x2="100" y2="500" stroke="currentColor" strokeWidth="0.5" className="text-ink"/>
      </svg>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className={`text-center mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className="text-xs tracking-widest text-ink-muted uppercase">Timeline</span>
          <h2 className="font-serif text-title text-ink mt-4">
            3ヶ月の歩み
          </h2>
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* 縦線 */}
          <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-ink/10 origin-top transition-transform duration-1000 ${
            isVisible ? 'scale-y-100' : 'scale-y-0'
          }`}></div>

          <div className="space-y-16 md:space-y-24">
            {workshopSteps.map((step, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative md:flex items-center transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  } ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ transitionDelay: `${(i + 1) * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 200 + 300}ms` }}>
                    <div className="w-16 h-16 bg-paper-warm flex items-center justify-center">
                      <div className="w-12 h-12 border border-ink/20 flex items-center justify-center hover:border-accent transition-colors duration-300">
                        <span className="text-lg font-serif text-ink">{step.month}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-[calc(50%-4rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'} ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : isEven ? '-translate-x-8 opacity-0' : 'translate-x-8 opacity-0'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${(i + 1) * 200}ms` }}>
                    <div className="group bg-paper shadow-soft p-8 card-smooth relative overflow-hidden">
                      {/* ホバー背景 */}
                      <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Mobile month indicator */}
                      <div className="md:hidden flex items-center gap-4 mb-4 relative">
                        <div className="w-10 h-10 border border-ink/20 flex items-center justify-center">
                          <span className="font-serif text-ink">{step.month}</span>
                        </div>
                        <span className="text-xs text-ink-muted">ヶ月目</span>
                      </div>

                      <h3 className="text-xl font-medium text-ink mb-2 group-hover:translate-x-1 transition-transform duration-300 relative">{step.title}</h3>
                      <p className="text-xs text-ink-muted tracking-wider uppercase mb-4 relative">MONTH {step.month}</p>

                      <ul className="space-y-2 relative">
                        {step.tasks.map((task, j) => (
                          <li key={j} className={`text-sm text-ink-muted flex items-center gap-2 ${
                            isEven ? '' : 'md:justify-end'
                          }`}>
                            <span className="w-1 h-1 bg-ink/30 rounded-full"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Output Card */}
                  <div className={`hidden md:block md:w-[calc(50%-4rem)] ${isEven ? '' : ''} ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : isEven ? 'translate-x-8 opacity-0' : '-translate-x-8 opacity-0'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${(i + 1) * 200 + 100}ms` }}>
                    <div className={`${isEven ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                      <div className="inline-block bg-paper-dark p-6">
                        <p className="text-xs text-ink-muted mb-2 tracking-wider">OUTPUT</p>
                        <p className="text-ink font-medium">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 終点 */}
        <div className={`text-center mt-20 pt-12 border-t border-ink/10 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="font-serif text-2xl text-ink mb-2">
            3ヶ月後、あなたの会社は変わっている
          </p>
          <p className="text-ink-muted text-sm">
            外部に頼らず、自分たちでAIを活用し続けられる組織へ
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
