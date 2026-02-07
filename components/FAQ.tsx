
import React, { useState, useEffect, useRef } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
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

  const faqs = [
    {
      q: "ITに詳しい社員がいませんが大丈夫ですか？",
      a: "はい、問題ありません。私たちのプログラムは、ITの専門知識がなくても理解し運用できるよう設計しています。難しい用語は使わず、実際の業務に即した形でお伝えします。"
    },
    {
      q: "どのAIツールを使うのですか？",
      a: "特定のツールを押し付けることはありません。御社の業務内容や課題に合わせて、ChatGPT、Claude、あるいは業務特化型のツールなど、最適なものを一緒に選びます。"
    },
    {
      q: "セキュリティは大丈夫ですか？",
      a: "法人利用に適した安全な設定方法、機密情報の取り扱いルール作りも支援します。必要に応じて、セキュリティポリシーの策定もお手伝いします。"
    },
    {
      q: "3ヶ月で本当に自走できますか？",
      a: "過去の導入企業の98%が、3ヶ月後に外部支援なしで運用を継続できています。社内推進者の育成と、誰でも使えるマニュアル作成に重点を置いているためです。"
    },
    {
      q: "途中解約はできますか？",
      a: "月単位での解約が可能です。ただし、効果を実感いただくには最低2ヶ月は継続をお勧めしています。詳しくは無料相談でご説明します。"
    }
  ];

  return (
    <section ref={sectionRef} className="section-breathing bg-paper-warm" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className="text-xs tracking-widest text-ink-muted uppercase">FAQ</span>
          <h2 className="font-serif text-title text-ink mt-4">
            よくある質問
          </h2>
        </div>

        {/* FAQ リスト */}
        <div className="divide-y divide-ink/10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`py-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                className="w-full flex items-start justify-between gap-4 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className={`text-lg transition-all duration-300 ${
                  openIndex === i ? 'text-ink' : 'text-ink-muted group-hover:text-ink group-hover:translate-x-1'
                }`}>
                  {faq.q}
                </span>
                <span className={`material-symbols-outlined text-ink-muted shrink-0 transition-all duration-300 ${
                  openIndex === i ? 'rotate-45 text-accent' : 'group-hover:text-ink'
                }`}>
                  add
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  maxHeight: openIndex === i ? '200px' : '0',
                  opacity: openIndex === i ? 1 : 0,
                  marginTop: openIndex === i ? '16px' : '0'
                }}
              >
                <p className="text-ink-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 追加の質問へ */}
        <div className={`mt-12 text-center pt-8 border-t border-ink/10 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-ink-muted mb-4">
            他にご質問がありますか？
          </p>
          <a href="#contact" className="group inline-flex items-center gap-2 text-ink hover:text-ink-muted transition-colors hover-slide">
            <span className="text-sm font-medium">お問い合わせ</span>
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">east</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
