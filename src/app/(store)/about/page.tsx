import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/logo";
import { SplitText } from "@/components/text-reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "Nosotros",
  description: "Pollos Campeón — pollo a la brasa, broaster y pipocas con delivery y retiro en tienda en Santa Cruz, Bolivia, con 18 sucursales.",
};

const PILLARS = [
  { title: "Hecho al momento", body: "Nada espera bajo una lámpara: tu pollo se saca del horno cuando confirmas el pedido." },
  { title: "Precios claros", body: "Combos de barrio y promos reales, sin sorpresas al pagar." },
  { title: "Delivery y retiro", body: "Te lo llevamos a la puerta o lo recoges en tu sucursal Pollos Campeón más cercana." },
];

export default function AboutPage() {
  return (
    <div className="bg-cream px-5 py-12">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[var(--line)] bg-panel">
        <div className="px-6 py-16 text-center sm:px-14">
          <BrandLogo className="mx-auto h-14" />
          <span className="eyebrow mt-5 block">Nuestra historia</span>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl">
            <SplitText text="Comida rápida" />{" "}
            <span className="brand-text">de barrio</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-ink/80">
            Pollos Campeón nació en Santa Cruz, Bolivia, con una idea simple: que comer rico no
            tenga que ser complicado. Pollo a la brasa, broaster crocante, pipocas y guarniciones
            en un solo menú, con el sabor de siempre y precios de barrio.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-ink/80">
            Hoy somos 18 sucursales en la ciudad. Cada pedido se prepara al momento y sale
            directo a tu puerta en moto o te espera listo para retirar. Pedir es fácil: eliges
            tu sucursal, armas tu combo y nosotros nos encargamos del resto.
          </p>
          <Link
            href="/shop"
            className="mt-7 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-brand-deep shadow-[0_14px_32px_-16px_rgba(244,218,1,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-accent-soft"
          >
            Ver el menú
          </Link>
        </div>
      </div>

      <section className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.title} className="text-center">
            <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
