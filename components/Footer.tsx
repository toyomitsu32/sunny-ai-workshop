
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper-dark border-t border-ink/5">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* ブランド */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-ink flex items-center justify-center">
                <span className="text-paper font-serif text-sm font-bold">AI</span>
              </div>
              <span className="font-serif text-lg">Sunny Workshop</span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
              IT担当のいない中小企業でも、AI活用を社内で自走させる。
              現場起点の支援で、持続可能な体制を構築します。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <p className="text-xs tracking-widest text-ink-muted uppercase mb-4">Menu</p>
            <ul className="space-y-2">
              {[
                { href: '#about', label: '私たちについて' },
                { href: '#method', label: '手法' },
                { href: '#pricing', label: '料金' },
                { href: '#faq', label: 'よくある質問' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-ink-muted hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 法的情報 */}
          <div>
            <p className="text-xs tracking-widest text-ink-muted uppercase mb-4">Legal</p>
            <ul className="space-y-2">
              {[
                { href: '#', label: '運営会社' },
                { href: '#', label: '利用規約' },
                { href: '#', label: 'プライバシーポリシー' },
                { href: '#', label: '特定商取引法表記' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-ink-muted hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 下部バー */}
      <div className="border-t border-ink/5">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink-muted">
            © 2024 Sunny AI Workshop. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Made in Japan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
