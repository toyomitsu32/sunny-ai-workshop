
import React, { useEffect, useRef, useState } from 'react';

const EmpathySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="section-breathing bg-paper-warm relative overflow-hidden bg-noise" id="about">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>

      {/* 上部のグラデーション */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-paper to-transparent"></div>

      {/* 円形装飾 */}
      <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] rounded-full border border-ink/[0.03]"></div>
      <div className="absolute bottom-1/4 -left-16 w-[200px] h-[200px] rounded-full border border-accent/[0.05]"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className="text-xs tracking-widest text-ink-muted uppercase">About Us</span>
        </div>

        {/* メインメッセージ */}
        <div className="space-y-12">
          <h2 className={`font-serif text-title text-ink text-center leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            AI導入で迷っていませんか。
            <br />
            その悩み、私たちも知っています。
          </h2>

          <div className="max-w-2xl mx-auto space-y-8 text-body-lg text-ink-muted leading-relaxed">
            <p className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              世の中にはAIツールが溢れています。ChatGPT、Claude、
              さまざまな業務効率化ツール。しかし、
              <span className="text-ink font-medium">「自社に本当に必要なものは何か」</span>
              という問いに答えを出すことは、簡単ではありません。
            </p>

            <p className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              私たちは、ツールを売りません。
              <span className="text-ink font-medium">「現場で実際に使われ、成果が出る」</span>
              ことだけを見つめています。派手な言葉も、過度な期待も持ち込みません。
            </p>
          </div>

          {/* 約束 */}
          <div className={`flex justify-center pt-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="inline-flex items-center gap-4 px-8 py-4 border border-ink/10 bg-paper/50 backdrop-blur-sm card-smooth">
              <div className={`h-8 bg-accent transition-all duration-500 delay-600 ${
                isVisible ? 'w-1' : 'w-0'
              }`}></div>
              <p className="text-sm text-ink tracking-wide">
                誠実なパートナーシップを、お約束します
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
