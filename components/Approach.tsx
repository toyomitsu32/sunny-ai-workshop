
import React, { useEffect, useRef, useState } from 'react';

const Approach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ companies: 0, rate: 0, months: 0, roi: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts({
              companies: Math.floor(120 * eased),
              rate: Math.floor(98 * eased),
              months: 3,
              roi: Math.floor(340 * eased)
            });

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

  const steps = [
    {
      num: "一",
      en: "HEAR",
      title: "現場の声を聴く",
      desc: "社員一人ひとりの「こうなったらいいのに」を丁寧に拾い上げます。アンケートと対話を通じて、本当の課題を見つけ出す。"
    },
    {
      num: "二",
      en: "DECONSTRUCT",
      title: "業務を分解する",
      desc: "日々の作業を細かく分解し、どこにAIが活きるかを特定します。感覚ではなく、データと現場の両方から見極める。"
    },
    {
      num: "三",
      en: "APPLY",
      title: "AIを適用する",
      desc: "最適なツールを選び、誰でも使えるマニュアルと共に導入。定着するまで、隣で見守り続けます。"
    }
  ];

  return (
    <section ref={sectionRef} className="section-breathing bg-ink text-paper relative overflow-hidden" id="method">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-ink-texture"></div>

      {/* 円形装飾 */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full border border-paper/[0.03]"></div>
      <div className="absolute bottom-1/4 -right-24 w-[400px] h-[400px] rounded-full border border-paper/[0.02]"></div>

      {/* 流れる曲線 */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M0,300 Q200,100 400,300 T800,300 T1000,200" fill="none" stroke="white" strokeWidth="1"/>
        <path d="M0,600 Q300,400 500,600 T900,500" fill="none" stroke="white" strokeWidth="0.5"/>
      </svg>

      {/* ドットグリッド */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className={`mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className="text-xs tracking-widest text-paper/50 uppercase">Our Method</span>
          <h2 className="font-serif text-title text-paper mt-4">
            成功への3つの手順。
          </h2>
          <p className="text-paper/60 mt-4 max-w-lg">
            この順番を、決して崩しません。現場から始まり、現場に戻る。
            それが私たちのやり方です。
          </p>
        </div>

        {/* 3ステップ */}
        <div className="grid md:grid-cols-3 gap-px bg-paper/10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`bg-ink p-10 group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* ホバー時の背景 */}
              <div className="absolute inset-0 bg-paper/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 漢数字 */}
              <div className="mb-8 overflow-hidden relative">
                <span className={`text-6xl font-serif text-paper/10 group-hover:text-accent/40 transition-all duration-700 inline-block ${
                  isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transitionDelay: `${(i + 1) * 150 + 200}ms` }}>
                  {step.num}
                </span>
              </div>

              {/* 英語ラベル */}
              <p className="text-xs tracking-widest text-paper/40 mb-3 relative">
                {step.en}
              </p>

              {/* タイトル */}
              <h3 className="text-xl font-medium text-paper mb-4 group-hover:translate-x-1 transition-transform duration-300 relative">
                {step.title}
              </h3>

              {/* 説明 */}
              <p className="text-paper/60 leading-relaxed text-sm relative">
                {step.desc}
              </p>

              {/* ホバーライン */}
              <div className="mt-6 h-px bg-paper/20 overflow-hidden relative">
                <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 統計 */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {[
            { value: counts.companies, suffix: '+', label: '導入企業' },
            { value: counts.rate, suffix: '%', label: '継続率' },
            { value: counts.months, suffix: 'ヶ月', label: '自走まで' },
            { value: counts.roi, suffix: '%', label: 'ROI平均' }
          ].map((stat, i) => (
            <div key={i} className="bg-ink py-8 text-center group card-smooth relative">
              <div className="absolute inset-0 bg-paper/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-3xl font-serif text-paper relative">
                <span className="count-up">{stat.value}</span>
                <span className="text-lg text-paper/60">{stat.suffix}</span>
              </p>
              <p className="text-xs text-paper/40 mt-2 tracking-wider relative">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
