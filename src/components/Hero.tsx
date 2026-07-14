import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, type CSSProperties } from 'react';
import type { SocialLabel, SocialLink } from '../data/siteContent';
import { useTypingText } from '../hooks/useTypingText';

interface HeroProps {
  typingWords: readonly string[];
  socialLinks: SocialLink[];
}

type BrandColorStyle = CSSProperties & { '--brand-color': string };

const brandColors: Record<SocialLabel, string> = {
  'E-mail': '#4084F4',
  Instagram: '#e4405f',
  LinkedIn: '#0077b5',
  GitHub: '#f0f6fc',
};

function Hero({ typingWords, socialLinks }: HeroProps) {
  const typedText = useTypingText(typingWords);
  const [isLight, setIsLight] = useState(false);

  return (
    <main className={`site-shell particle-field flex min-h-[100svh] items-center justify-center px-5 py-12 ${isLight ? 'theme-light' : 'theme-dark'}`}>
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => <span key={index} />)}
      </div>

      <section className="relative z-10 flex w-full max-w-7xl flex-col items-center text-center">
        <p className="min-h-6 select-none text-xs font-bold uppercase tracking-[0.3em] sm:text-sm">
          {typedText}<span className="ml-1 animate-pulse">_</span>
        </p>

        <h1
          className="name-display mt-9 select-none text-[clamp(3.4rem,11.5vw,10.5rem)] leading-[0.9] tracking-[-0.06em]"
          data-text="SUNDEEP"
          aria-label="Sundeep"
        >
          SUNDEEP
        </h1>

        <svg aria-hidden="true" className="absolute h-0 w-0">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#833ab4" />
              <stop offset="38%" stopColor="#fd1d1d" />
              <stop offset="68%" stopColor="#f56040" />
              <stop offset="100%" stopColor="#fcaf45" />
            </linearGradient>
          </defs>
        </svg>

        <nav aria-label="Sociale media" className="mt-16 flex items-center gap-7 sm:mt-20 sm:gap-9">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.label}
              href={socialLink.href}
              target="_blank"
              rel="noreferrer"
              aria-label={socialLink.label}
              title={socialLink.label}
              style={{ '--brand-color': brandColors[socialLink.label] } as BrandColorStyle}
              className={`social-link ${socialLink.label === 'Instagram' ? 'instagram-link' : ''} text-xl transition duration-200 hover:-translate-y-1 sm:text-2xl`}
            >
              <FontAwesomeIcon icon={socialLink.icon} />
            </a>
          ))}
        </nav>

        <div className="mt-9 flex select-none flex-col items-center gap-3 text-sm sm:flex-row">
          <span className="opacity-60">Geld doneren? Dat waardeer ik enorm! Dit kan via hier</span>
          <a
            href="https://ko-fi.com/sundeep2005"
            target="_blank"
            rel="noreferrer"
            aria-label="Steun Sundeep via Ko-fi"
            className="inline-flex items-center gap-2 rounded-full border border-current px-4 py-2 font-semibold opacity-80 transition hover:-translate-y-1 hover:opacity-100"
          >
            <img
              src="https://storage.ko-fi.com/cdn/brandasset/v2/kofi_symbol.png"
              alt=""
              className="h-5 w-5 object-contain"
            />
            Ko-fi
          </a>
        </div>
      </section>

      <p className="site-credit fixed bottom-6 left-1/2 z-10 -translate-x-1/2 select-none whitespace-nowrap text-xs sm:bottom-8 sm:text-sm">
        Made with <span className="text-red-500" aria-label="love">♥</span> by{' '}
        <a
          href="https://github.com/Sundeep2005"
          target="_blank"
          rel="noreferrer"
          className="credit-link transition"
        >
          Sundeep
        </a>
      </p>

      <button
        type="button"
        onClick={() => setIsLight((currentMode) => !currentMode)}
        className="theme-toggle fixed bottom-5 right-5 z-20 flex h-11 w-11 select-none items-center justify-center rounded-full text-lg transition hover:-translate-y-1 sm:bottom-7 sm:right-7"
        aria-label={isLight ? 'Schakel dark mode in' : 'Schakel light mode in'}
        title={isLight ? 'Dark mode' : 'Light mode'}
      >
        <span aria-hidden="true">{isLight ? '☾' : '☀'}</span>
      </button>
    </main>
  );
}

export default Hero;
