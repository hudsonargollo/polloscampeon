import type { Metadata } from "next";
import { getCategories, getProducts } from "@/lib/catalog";
import { getSelectedBranch } from "@/lib/branch";
import { MenuPromoSlider } from "@/components/shop/menu-promo-slider";
import { MenuSection } from "@/components/shop/menu-section";

export const metadata: Metadata = {
  alternates: { canonical: "/shop" },
  title: "Menú: pollo a la brasa, broaster y guarniciones",
  description:
    "Pollo a la brasa, broaster, pipocas, guarniciones, lasañas y ensaladas de Pollos Campeón. Pide online con delivery o retiro en tienda en Santa Cruz.",
};

export const dynamic = "force-dynamic";

// Editorial copy per category, in the order the menu shows them.
const SECTIONS: Record<string, { eyebrow: string; blurb: string; order: number }> = {
  pollos: { eyebrow: "Lo nuestro", blurb: "Pierna y pecho a la brasa, broaster crocante y pipocas recién fritas. Cada pollo sale del horno al momento de tu pedido.", order: 1 },
  guarniciones: { eyebrow: "Para acompañar", blurb: "Papas fritas, plátanos, arroz graneado y el ají de la casa.", order: 2 },
  pastas: { eyebrow: "Al horno", blurb: "Lasañas preparadas en nuestras cocinas, porciones para comer satisfecho.", order: 3 },
  ensaladas: { eyebrow: "Fresco", blurb: "Ensaladas con verdura fresca para equilibrar el plato.", order: 4 },
};

export default async function ShopPage() {
  const branch = await getSelectedBranch();
  const [products, categories] = await Promise.all([getProducts({}, branch?.id), getCategories()]);
  const orderOf = (slug: string) => SECTIONS[slug]?.order ?? 99;
  const sections = [...categories]
    .filter((c) => products.some((p) => p.category.slug === c.slug))
    .sort((a, b) => orderOf(a.slug) - orderOf(b.slug) || a.name.localeCompare(b.name));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <span className="eyebrow">El menú</span>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
          Un pollo bien hecho, por favor
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-muted sm:text-lg">
          Acá no se pide cualquier pollo: se pide Pollos Campeón. Marinado con el aderezo
          de la casa, dorado por fuera y jugoso por dentro. Elige tu corte y acompáñalo
          con las guarniciones que quieras.
        </p>
      </header>

      <div className="mt-10">
        <MenuPromoSlider />
      </div>

      <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
        {sections.map((c) => (
          <MenuSection
            key={c.slug}
            id={c.slug}
            eyebrow={SECTIONS[c.slug]?.eyebrow ?? c.name}
            title={c.name}
            description={SECTIONS[c.slug]?.blurb ?? c.description ?? ""}
            href={`/shop/${c.slug}`}
            linkLabel={`Ver ${c.name.toLowerCase()}`}
            products={products.filter((p) => p.category.slug === c.slug)}
          />
        ))}
      </div>

      {products.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-[var(--line)] bg-surface py-16 text-center">
          <p className="font-display text-xl text-ink">El menú está tomando forma</p>
          <p className="mt-1 text-sm text-muted">Vuelve en un momento.</p>
        </div>
      ) : null}
    </div>
  );
}
