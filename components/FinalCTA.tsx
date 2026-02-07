
import React, { useEffect, useRef, useState } from 'react';

const FinalCTA: React.FC = () => {
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
    <section ref={sectionRef} className="section-breathing bg-ink text-paper relative overflow-hidden" id="contact">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-ink-texture"></div>

      {/* 大きな円形装飾 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-paper/[0.02]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-paper/[0.015]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-paper/[0.01]"></div>

      {/* 流れる曲線 */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.015]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M0,500 Q250,300 500,500 T1000,500" fill="none" stroke="white" strokeWidth="1"/>
        <path d="M0,600 Q250,400 500,600 T1000,600" fill="none" stroke="white" strokeWidth="0.5"/>
      </svg>

      {/* ドットパターン */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* アイコン */}
        <div className={`w-16 h-16 border border-paper/20 mx-auto mb-12 flex items-center justify-center transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <span className="material-symbols-outlined text-3xl text-paper/60">handshake</span>
        </div>

        {/* メインコピー */}
        <h2 className={`font-serif text-title text-paper mb-6 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          まずは、30分の対話から。
        </h2>

        <p className={`text-paper/60 leading-relaxed mb-12 max-w-lg mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          自社の課題がAIで解決できるのか、今の業務フローのどこに問題があるのか。
          プロの視点からアドバイスさせていただきます。
          <br /><br />
          無理な勧誘は一切ありません。現状を知るだけでも、価値があるはずです。
        </p>

        {/* CTA ボタン */}
        <div className={`space-y-6 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-paper text-ink px-10 py-4 font-medium tracking-wide hover:bg-paper/90 transition-all duration-300 btn-hover"
          >
            無料相談を予約する
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">east</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-paper/40">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">schedule</span>
              24時間以内に返信
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">block</span>
              強引な営業なし
            </span>
          </div>
        </div>

        {/* 装飾ライン */}
        <div className={`mt-20 flex items-center justify-center gap-4 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className={`h-px bg-paper/10 transition-all duration-700 delay-600 ${
            isVisible ? 'w-12' : 'w-0'
          }`}></div>
          <span className="text-xs tracking-widest text-paper/30 uppercase">Trusted Partner</span>
          <div className={`h-px bg-paper/10 transition-all duration-700 delay-600 ${
            isVisible ? 'w-12' : 'w-0'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
