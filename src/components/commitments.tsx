import { Emblem } from "./brand/emblem";

const COMMITMENTS = [
  {
    title: "Hechos al momento",
    body: "El pollo se marina, asa y corta cuando llega tu pedido.",
    icon: <ChickenIcon />,
  },
  {
    title: "Delivery y retiro",
    body: "Pide en línea y recíbelo en tu puerta o retíralo en tu sucursal Pollos Campeón.",
    icon: <ScooterIcon />,
  },
  {
    title: "Precios de barrio",
    body: "Combos claros y promos todos los días, sin sorpresas al pagar.",
    icon: <TagIcon />,
  },
  {
    title: "Cerca de ti",
    body: "18 sucursales en Santa Cruz y atención directa por WhatsApp.",
    icon: <ChatIcon />,
  },
];

export function Commitments() {
  return (
    <section className="bg-brand py-20 text-light">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <Emblem size={40} className="mx-auto text-accent-soft" />
        <span className="eyebrow mt-4 block text-accent-soft">Nuestro compromiso</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Comida rápida, bien hecha
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-light/75">
          Pollos Campeón: sabor de barrio, hecha al momento y servida en 18 sucursales
          de Santa Cruz.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 px-5 sm:grid-cols-2">
        {COMMITMENTS.map((c) => (
          <div
            key={c.title}
            className="flex items-start gap-4 rounded-2xl border border-[rgba(244,218,1,0.25)] bg-[rgba(255,255,255,0.05)] p-6 text-left transition hover:border-accent-soft/60 hover:bg-[rgba(255,255,255,0.08)]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-soft">
              {c.icon}
            </span>
            <span>
              <span className="block font-display text-lg font-bold">{c.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-light/70">{c.body}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChickenIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* drumstick */}
      <path d="M15.5 4.2c2.6 1.2 3.8 3.8 3 6.2-.7 2.1-2.5 3.5-4.4 3.5-.9 0-1.6-.4-2-1-.7-1-.5-2.3.3-3.2l1.3-1.6c.8-1.2 1.5-2.9 1.8-3.9z" />
      <path d="M12.4 14.6 8.6 18.4" />
      <path d="M8.6 18.4c-1.1.4-1.9-.2-1.8-1.2.8-.2 1.3.1 1.8 1.2zm0 0c.4 1.1-.2 1.9-1.2 1.8-.2-.8.1-1.3 1.2-1.8z" />
    </svg>
  );
}
function ScooterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="2.5" />
      <circle cx="18.5" cy="17.5" r="2.5" />
      <path d="M8 17.5h5.5l2-5h3" />
      <path d="M14 12.5 12.8 8H10" />
      <path d="M15.5 8.5h3" />
      <path d="M6 12h3" />
    </svg>
  );
}
function TagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12L12 3h8v8l-9 9-8-8z" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="1.4" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 5h16v11H9l-5 4V5z" strokeLinejoin="round" />
      <path d="M8 10h8M8 13h5" strokeLinecap="round" />
    </svg>
  );
}
