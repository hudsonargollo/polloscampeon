/** Line icons for the Pollos Campeón category tiles. */

type Props = { className?: string };

function Drumstick({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      {/* meat */}
      <path
        d="M78 26c12 6 18 20 14 33-4 13-16 22-29 21-6 0-10-3-13-7-4-6-4-14 1-20l6-8c5-7 12-14 21-19z"
        strokeLinejoin="round"
      />
      {/* highlight */}
      <path d="M74 38c6 4 9 11 7 18" strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
      {/* bone shaft */}
      <path d="M50 76L32 94" strokeLinecap="round" strokeWidth="6" />
      {/* bone knuckles */}
      <path d="M32 94c-6 2-10-2-9-7 4-1 7 0 9 7zm0 0c2 6-2 10-7 9-1-5 0-8 7-9z" strokeLinejoin="round" />
      {/* flame */}
      <path d="M92 54c3 4 4 7 2 10" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
    </svg>
  );
}

function Fries({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      {/* fries */}
      <path d="M44 54V26M54 52V20M64 52V24M74 54V30" strokeLinecap="round" />
      <path d="M82 58l4-16M38 58l-4-14" strokeLinecap="round" opacity="0.8" />
      {/* carton */}
      <path d="M34 54h52l-6 44a6 6 0 0 1-6 5H46a6 6 0 0 1-6-5l-6-44z" strokeLinejoin="round" />
      <path d="M44 72h32" strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
    </svg>
  );
}

function Pasta({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      {/* bowl */}
      <path d="M24 62h72c0 20-16 34-36 34S24 82 24 62z" strokeLinejoin="round" />
      <path d="M34 96h52" strokeLinecap="round" opacity="0.6" />
      {/* noodles over the rim */}
      <path d="M34 62c4-12 12-18 26-18s22 6 26 18" strokeLinejoin="round" />
      <path d="M42 60c2-8 8-12 18-12s16 4 18 12" strokeWidth="1.5" opacity="0.7" />
      {/* fork twirl */}
      <path d="M78 44c6-4 10-10 9-16" strokeLinecap="round" opacity="0.7" />
      <path d="M60 30v-12M54 30v-10M66 30v-10" strokeLinecap="round" strokeWidth="1.5" opacity="0.8" />
      <path d="M50 30h20" strokeLinecap="round" />
    </svg>
  );
}

function Salad({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      {/* bowl */}
      <path d="M22 66h76c-2 18-18 30-38 30S24 84 22 66z" strokeLinejoin="round" />
      {/* lettuce leaves */}
      <path d="M30 66c-2-10 6-16 14-14 2-8 12-12 18-6 8-4 18 2 16 12" strokeLinejoin="round" opacity="0.85" />
      <path d="M44 52c4 4 4 10 2 14M62 48c4 4 4 10 2 16" strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
      {/* tomato + cheese cubes */}
      <circle cx="50" cy="60" r="5" opacity="0.8" />
      <path d="M66 56h8v8h-8z" opacity="0.7" strokeLinejoin="round" />
      {/* fork */}
      <path d="M88 58v14" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function Drink({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      {/* cup */}
      <path d="M40 38h40l-5 56a6 6 0 0 1-6 5H51a6 6 0 0 1-6-5l-5-56z" strokeLinejoin="round" />
      {/* lid */}
      <path d="M36 38h48v-6a3 3 0 0 0-3-3H39a3 3 0 0 0-3 3v6z" strokeLinejoin="round" />
      {/* straw */}
      <path d="M62 29l6-17" strokeLinecap="round" />
      {/* band */}
      <path d="M42 62h36" strokeWidth="1.5" opacity="0.55" />
      {/* bubbles */}
      <path d="M52 80c3-3 6-2 6 1s-4 5-6 3" opacity="0.6" strokeLinecap="round" />
    </svg>
  );
}

function Star({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path
        d="M60 20l11.6 23.5 25.9 3.8-18.7 18.2 4.4 25.8L60 78.1 36.8 91.3l4.4-25.8-18.7-18.2 25.9-3.8L60 20z"
        strokeLinejoin="round"
      />
      <path d="M60 46c3 5 5 8 5 12a5 5 0 0 1-10 0c0-4 2-7 5-12z" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

function Fallback({ className = "" }: Props) {
  return <Drumstick className={className} />;
}

const MAP: Record<string, (p: Props) => React.ReactElement> = {
  pollos: Drumstick,
  guarniciones: Fries,
  pastas: Pasta,
  ensaladas: Salad,
  bebidas: Drink,
  imperdibles: Star,
};

export function CategoryArt({ slug, className }: { slug: string; className?: string }) {
  const Art = MAP[slug] ?? Fallback;
  return <Art className={className} />;
}
