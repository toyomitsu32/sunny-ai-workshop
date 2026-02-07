
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-noise">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-grid-subtle"></div>

      {/* 大きな円形装飾 */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-ink/[0.03]"></div>
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-ink/[0.02]"></div>

      {/* 左下の円 */}
      <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] rounded-full bg-accent/[0.02]"></div>

      {/* 流れる曲線 */}
      <svg className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M800,0 Q600,200 700,400 T600,800 T800,1000" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M900,0 Q700,300 800,500 T700,900 T900,1000" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </svg>

      {/* 右側の和紙風エリア */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-paper-warm">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* テキストエリア */}
          <div className="lg:col-span-7 space-y-10">
            {/* 小さなラベル */}
            <p className={`text-sm tracking-widest text-ink-muted uppercase transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Sunny AI Workshop
            </p>

            {/* メインコピー */}
            <h1 className="font-serif text-display text-ink leading-tight overflow-hidden">
              <span className={`block transition-all duration-700 delay-100 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                IT担当がいなくても、
              </span>
              <span className={`block transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="underline-accent">AI活用を自走</span>できる
              </span>
              <span className={`block transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                組織をつくる。
              </span>
            </h1>

            {/* サブコピー */}
            <p className={`text-body-lg text-ink-muted max-w-lg leading-relaxed transition-all duration-700 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              専門知識は不要です。現場の声を聴き、業務を分解し、
              最適なAIを選ぶ。この3ステップを、3ヶ月かけて
              一緒に歩みます。
            </p>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-ink text-paper px-8 py-4 text-sm font-medium tracking-wide hover:bg-ink-light transition-all duration-300 btn-hover"
              >
                無料相談を予約する
                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">east</span>
              </a>
              <a
                href="#method"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm text-ink-muted hover:text-ink transition-colors hover-slide"
              >
                詳しく見る
              </a>
            </div>
          </div>

          {/* ビジュアルエリア */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="aspect-[4/5] bg-paper-dark relative">
              {/* 背景パターン */}
              <div className="absolute inset-0 bg-lines"></div>

              {/* 装飾的な要素 */}
              <div className={`absolute inset-8 border border-ink/10 transition-all duration-1000 delay-500 ${
                loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}></div>

              {/* 縦書きテキスト */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 vertical-text text-xs text-ink-muted tracking-widest">
                SINCE 2024
              </div>

              {/* 中央のコンテンツ */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <p className={`text-8xl font-serif text-ink/10 transition-all duration-1000 delay-700 ${
                    loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>自走</p>
                  <div className={`h-px bg-accent mx-auto transition-all duration-700 delay-900 ${
                    loaded ? 'w-12' : 'w-0'
                  }`}></div>
                  <p className={`text-xs tracking-widest text-ink-muted transition-all duration-700 delay-1000 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                  }`}>
                    SELF-DRIVING AI
                  </p>
                </div>
              </div>

              {/* 角のアクセント */}
              <div className={`absolute top-0 left-0 border-t-2 border-l-2 border-accent transition-all duration-500 delay-600 ${
                loaded ? 'w-4 h-4' : 'w-0 h-0'
              }`}></div>
              <div className={`absolute bottom-0 right-0 border-b-2 border-r-2 border-accent transition-all duration-500 delay-700 ${
                loaded ? 'w-4 h-4' : 'w-0 h-0'
              }`}></div>
            </div>

            {/* 実績バッジ */}
            <div className={`absolute -bottom-6 -left-6 bg-paper shadow-elevated p-6 card-smooth transition-all duration-700 delay-800 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-3xl font-serif font-bold text-ink">120<span className="text-lg">+</span></p>
              <p className="text-xs text-ink-muted mt-1">導入企業</p>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-[10px] tracking-widest text-ink-muted uppercase">Scroll</span>
        <div className="w-px h-8 bg-ink/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-ink animate-pulse-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
