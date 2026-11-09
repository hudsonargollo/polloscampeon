import { PrismaClient, Prisma } from "@prisma/client";

type SeedProduct = {
  name: string;
  slug: string;
  sku?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  material?: string;
  brand: string;
  categorySlug: string;
  contents?: string;
  details?: string;
  stock: number;
  images: string[];
  featured?: boolean;
};

const prisma = new PrismaClient();

// Pollos Campeón — catalog taken from the published menu (polloscampeon.com/menu).
// Prices are the chain's "venta en local" prices in Bs.
// Categories are auto-created from the product data; duplicates are skipped.

const categories: { name: string; slug: string; description: string; image: string }[] = [
  { name: "Pollos", slug: "pollos", description: "Pollo a la brasa, broaster y pipocas, hechos al momento.", image: "/imgs/categoria-pollos.webp" },
  { name: "Guarniciones", slug: "guarniciones", description: "Papas, plátanos, arroz y el ají de la casa.", image: "/imgs/categoria-guarniciones.webp" },
  { name: "Pastas", slug: "pastas", description: "Lasañas preparadas en las cocinas Pollos Campeón.", image: "/imgs/categoria-pastas.webp" },
  { name: "Ensaladas", slug: "ensaladas", description: "Frescas para acompañar tu pollo.", image: "/imgs/categoria-ensaladas.webp" },
];

const LOCAL_PRICES = "Precio de venta en local";

const products: SeedProduct[] = [
  // Pollos
  { name: "Pollo a la Brasa – Pierna", slug: "pollo-a-la-brasa-pierna", description: "Pierna de pollo marinada con el aderezo de la casa y asada al carbón, dorada por fuera y jugosa por dentro.", price: 37, brand: "Pollos Campeón", categorySlug: "pollos", material: "1 persona", details: LOCAL_PRICES, stock: 40, images: ["/imgs/menu/pollo-a-la-brasa-pierna.webp"], featured: true },
  { name: "Pollo a la Brasa – Pecho", slug: "pollo-a-la-brasa-pecho", description: "Pecho de pollo a la brasa, cortado al momento. La parte más tierna del pollo.", price: 39, brand: "Pollos Campeón", categorySlug: "pollos", material: "1 persona", details: LOCAL_PRICES, stock: 40, images: ["/imgs/menu/pollo-a-la-brasa-pecho.webp"], featured: true },
  { name: "Broaster Pierna", slug: "broaster-pierna", description: "Pierna crocante rebozada en la receta de la casa, fritada al punto justo.", price: 37, brand: "Pollos Campeón", categorySlug: "pollos", material: "1 persona", details: LOCAL_PRICES, stock: 40, images: ["/imgs/menu/broaster-pierna.webp"], featured: true },
  { name: "Pipocas de Pollo con Papas", slug: "pipocas-de-pollo-con-papas", description: "Bocados de pollo crocante acompañados con papas fritas.", price: 32, brand: "Pollos Campeón", categorySlug: "pollos", material: "Porción", details: LOCAL_PRICES, stock: 40, images: ["/imgs/menu/pipocas-de-pollo-con-papas.webp"], featured: true },
  { name: "Combo Pipoca (incluye soda 300 ml)", slug: "combo-pipoca", description: "Pipocas de pollo con papas y una soda de 300 ml bien fría.", price: 35, brand: "Pollos Campeón", categorySlug: "pollos", material: "Combo", contents: "Incluye soda 300 ml", details: LOCAL_PRICES, stock: 40, images: ["/imgs/menu/combo-pipoca.webp"], featured: true },
  { name: "Pollo Entero sin Guarnición", slug: "pollo-entero-sin-guarnicion", description: "Pollo entero a la brasa, listo para compartir en la mesa.", price: 125, brand: "Pollos Campeón", categorySlug: "pollos", material: "Para compartir", details: LOCAL_PRICES, stock: 25, images: ["/imgs/menu/pollo-entero-sin-guarnicion.webp"], featured: true },
  { name: "Pollo Entero con Guarniciones", slug: "pollo-entero-con-guarniciones", description: "Pollo entero a la brasa con guarniciones de la casa.", price: 144, brand: "Pollos Campeón", categorySlug: "pollos", material: "Para compartir", details: LOCAL_PRICES, stock: 25, images: ["/imgs/menu/pollo-entero-con-guarniciones.webp"], featured: true },

  // Guarniciones
  { name: "Ají", slug: "aji", description: "El ají de la casa, para dar el golpe justo.", price: 1, brand: "Pollos Campeón", categorySlug: "guarniciones", material: "Porción", details: LOCAL_PRICES, stock: 60, images: ["/imgs/menu/aji.webp"] },
  { name: "Papas Fritas", slug: "papas-fritas", description: "Papas fritas doradas y crocantes.", price: 12, brand: "Pollos Campeón", categorySlug: "guarniciones", material: "Porción", details: LOCAL_PRICES, stock: 60, images: ["/imgs/menu/papas-fritas.webp"] },
  { name: "Porción de Plátanos", slug: "porcion-de-platanos", description: "Plátanos fritos, dulces y bien dorados.", price: 12, brand: "Pollos Campeón", categorySlug: "guarniciones", material: "Porción", details: LOCAL_PRICES, stock: 60, images: ["/imgs/menu/porcion-de-platanos.webp"] },
  { name: "Porción de Arroz", slug: "porcion-de-arroz", description: "Arroz graneado, el acompañamiento clásico del pollo a la brasa.", price: 12, brand: "Pollos Campeón", categorySlug: "guarniciones", material: "Porción", details: LOCAL_PRICES, stock: 60, images: ["/imgs/menu/porcion-de-arroz.webp"] },

  // Pastas
  { name: "Lasaña de Carne", slug: "lasana-de-carne", description: "Lasaña de carne con salsa de la casa, preparada en nuestras cocinas.", price: 38, brand: "Pollos Campeón", categorySlug: "pastas", material: "Porción", details: LOCAL_PRICES, stock: 30, images: ["/imgs/menu/lasana-de-carne.webp"] },
  { name: "Lasaña de Pollo", slug: "lasana-de-pollo", description: "Lasaña de pollo cremosa.", price: 38, brand: "Pollos Campeón", categorySlug: "pastas", material: "Porción", details: `${LOCAL_PRICES} · No válida en Ventura Mall`, stock: 30, images: ["/imgs/menu/lasana-de-pollo.webp"] },

  // Ensaladas
  { name: "Ensalada César", slug: "ensalada-cesar", description: "Lechuga fresca con aderezo césar.", price: 34, brand: "Pollos Campeón", categorySlug: "ensaladas", material: "Porción", details: LOCAL_PRICES, stock: 30, images: ["/imgs/menu/ensalada-cesar.webp"] },
];

async function main() {
  console.log("🌱 Seeding Pollos Campeón database...");

  // Categories
  const categoryIdBySlug = new Map<string, string>();
  for (const c of categories) {
    const cat = await prisma.category.upsert({
      where: { slug: c.slug },
      update: { name: c.name, description: c.description, image: c.image },
      create: c,
    });
    categoryIdBySlug.set(c.slug, cat.id);
  }
  console.log(`  ✔ ${categories.length} categories`);

  // The locations published on polloscampeon.com/locales. Addresses, Google Maps
  // links and photos come from the chain's own listing; coordinates were resolved
  // where the site pointed at a Google place. Branches without coordinates are
  // fillable later from Admin → Sucursales (the map only uses them to suggest the
  // closest store from the shopper's geolocation).
  const branches = [
    { name: "Casco Viejo", slug: "casco-viejo", code: "PC01", address: "Av. Cañoto 571, esquina Junín", city: "Santa Cruz", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pollos+Campe%C3%B3n+Av+Ca%C3%B1oto+571+Santa+Cruz", latitude: null, longitude: null, image: "/imgs/sucursales/casco-viejo.webp", sortOrder: 1 },
    { name: "Zona Sur · Santos Dumont", slug: "sur-santos-dumont", code: "PC02", address: "Av. Santos Dumont, entre 3er anillo externo y 4to anillo", city: "Santa Cruz", mapsUrl: "https://goo.gl/maps/mx1BdYKF5449xHe76", latitude: -17.8165966, longitude: -63.1833203, image: "/imgs/sucursales/sur-santos-dumont.webp", sortOrder: 2 },
    { name: "Zona Oeste · Grigotá", slug: "oeste-grigota", code: "PC03", address: "Av. Grigotá, 3er anillo interno", city: "Santa Cruz", mapsUrl: "https://goo.gl/maps/fSdscgH9wES6F1t4A", latitude: -17.8035977, longitude: -63.2008479, image: "/imgs/sucursales/oeste-grigota.webp", sortOrder: 3 },
    { name: "Doble Vía Km 6", slug: "doble-via-km6", code: "PC04", address: "Av. Doble Vía a La Guardia, Km 6", city: "Santa Cruz", mapsUrl: "https://goo.gl/maps/bmDSPTekTbbwSgzU6", latitude: -17.8234773, longitude: -63.2218712, image: "/imgs/sucursales/doble-via-km6.webp", sortOrder: 4 },
    { name: "Doble Vía Km 12", slug: "doble-via-km12", code: "PC05", address: "Av. Doble Vía a La Guardia, Km 12", city: "Santa Cruz", mapsUrl: "https://goo.gl/maps/F6bx4AX24GNirq5MA", latitude: -17.8686095, longitude: -63.2741976, image: "/imgs/sucursales/doble-via-km12.webp", sortOrder: 5 },
    { name: "Zona Norte", slug: "norte", code: "PC06", address: "Av. Pedro Ribera Méndez (3er anillo interno), entre Av. Banzer y Av. Beni", city: "Santa Cruz", mapsUrl: "https://goo.gl/maps/RauYvv7uhuFo421s6", latitude: -17.7592204, longitude: -63.1786418, image: "/imgs/sucursales/norte.webp", sortOrder: 6 },
    { name: "Satélite Este · Villa 1ro de Mayo", slug: "satelite-este-villa-1ro-de-mayo", code: "PC07", address: "Villa 1ro de Mayo, Av. principal, Calle 11", city: "Santa Cruz", phone: "+591 65060555", whatsapp: "59165060555", mapsUrl: "https://goo.gl/maps/efjAbgVBnMoXGmbs6", latitude: -17.7985163, longitude: -63.135063, image: "/imgs/sucursales/satelite-este-villa-1ro-de-mayo.webp", sortOrder: 7 },
    { name: "Equipetrol Fidalga", slug: "equipetrol", code: "PC08", address: "Fidalga Equipetrol, Patio de Comidas, 2do piso — Av. Equipetrol entre 3er y 4to anillo", city: "Santa Cruz", mapsUrl: "https://goo.gl/maps/Ttr5SSWXQj25z5ht7", latitude: -17.7604074, longitude: -63.1982341, image: "/imgs/sucursales/equipetrol.webp", sortOrder: 8 },
    { name: "Cañoto · Casa Matriz", slug: "canoto", code: "PC09", address: "Av. Cañoto Nro. 571", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/ajpC3RffboTjoivWA", latitude: -17.786288, longitude: -63.1885168, image: "/imgs/sucursales/canoto.webp", sortOrder: 9 },
    { name: "Ventura Mall", slug: "ventura-mall", code: "PC10", address: "Av. 4to Anillo Nro. 3, Ventura Mall, Patio de Comidas, Piso 2, Local 10", city: "Santa Cruz", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ventura+Mall+Santa+Cruz", latitude: null, longitude: null, image: "/imgs/sucursales/ventura-mall.webp", sortOrder: 10 },
    { name: "Paragua", slug: "paragua", code: "PC11", address: "Av. Paragua, 4to Anillo", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/utpnkbFEdmosK9E99", latitude: null, longitude: null, image: "/imgs/sucursales/paragua.webp", sortOrder: 11 },
    { name: "Grigota Center", slug: "grigota-center", code: "PC12", address: "Av. Grigotá, entre 1er y 2do Anillo, Grigota Center Nro. 2", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/p5NnHeJ4yuChkkvh9", latitude: null, longitude: null, image: "/imgs/sucursales/grigota-center.webp", sortOrder: 12 },
    { name: "Fidalga Beni", slug: "fidalga-beni", code: "PC13", address: "Av. Prolongación Beni, entre 5to y 6to Anillo, Macro Fidalga", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/G9Aumhy428eXeBZ46", latitude: null, longitude: null, image: "/imgs/sucursales/fidalga-beni.webp", sortOrder: 13 },
    { name: "MegaCenter", slug: "megacenter", code: "PC14", address: "Av. El Trompillo, 2do Anillo, MegaCenter, Patio de Comidas", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/2odmjAyrLbN9YTJE6", latitude: null, longitude: null, image: "/imgs/sucursales/megacenter.webp", sortOrder: 14 },
    { name: "Makro Km 6", slug: "makro-km6", code: "PC15", address: "Av. Doble Vía a La Guardia, Km 6", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/wBFW4rpmP2c4sVhu7", latitude: null, longitude: null, image: "/imgs/sucursales/makro-km6.webp", sortOrder: 15 },
    { name: "Avenida Brasil", slug: "avenida-brasil", code: "PC16", address: "Av. Brasil, entre 3er y 4to Anillo, Mega Centro Comercial Avenida Brasil, Patio de Comidas", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/krSKEbY28KkfM5SP8", latitude: null, longitude: null, image: "/imgs/sucursales/avenida-brasil.webp", sortOrder: 16 },
    { name: "Hipermaxi Km 12", slug: "hipermaxi-km12", code: "PC17", address: "Av. Doble Vía a La Guardia, Km 12, Hipermaxi Mi Barrio", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/KQuUk2NyznmnZTBz5", latitude: null, longitude: null, image: "/imgs/sucursales/hipermaxi-km12.webp", sortOrder: 17 },
    { name: "Biopetrol", slug: "biopetrol", code: "PC18", address: "Av. Banzer, 7mo anillo al norte", city: "Santa Cruz", mapsUrl: "https://maps.app.goo.gl/bCd4fkMmw3pWBbtu9", latitude: null, longitude: null, image: "/imgs/sucursales/biopetrol.webp", sortOrder: 18 },
  ];
  // The first deploy created a single placeholder branch; rename it in place so
  // its per-branch stock rows carry over to the first real location.
  await prisma.branch.updateMany({ where: { slug: "principal" }, data: branches[0] });
  const branchIds: string[] = [];
  for (const b of branches) {
    const row = await prisma.branch.upsert({
      where: { slug: b.slug },
      update: {}, // never overwrite details the store already edited
      create: b,
      select: { id: true, latitude: true },
    });
    // Branches seeded before coordinates existed get them once, without
    // touching anything the store may have edited afterwards.
    if (row.latitude == null && b.latitude != null) {
      await prisma.branch.update({
        where: { id: row.id },
        data: { address: b.address, latitude: b.latitude, longitude: b.longitude },
      });
    }
    branchIds.push(row.id);
  }

  // Products
  for (const p of products) {
    const categoryId = categoryIdBySlug.get(p.categorySlug);
    if (!categoryId) continue;
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        description: p.description,
        price: new Prisma.Decimal(p.price),
        compareAtPrice: p.compareAtPrice ? new Prisma.Decimal(p.compareAtPrice) : null,
        material: p.material,
        brand: p.brand,
        categoryId,
        contents: p.contents,
        details: p.details,
        images: p.images,
        featured: p.featured ?? false,
        sku: p.sku,
      },
      create: {
        slug: p.slug,
        name: p.name,
        description: p.description,
        price: new Prisma.Decimal(p.price),
        compareAtPrice: p.compareAtPrice ? new Prisma.Decimal(p.compareAtPrice) : null,
        material: p.material,
        brand: p.brand,
        categoryId,
        contents: p.contents,
        details: p.details,
        images: p.images,
        featured: p.featured ?? false,
        sku: p.sku,
      },
      select: { id: true },
    });
    for (const branchId of branchIds) {
      await prisma.branchStock.upsert({
        where: { branchId_productId: { branchId, productId: product.id } },
        update: {}, // never overwrite stock that the store already manages
        create: { branchId, productId: product.id, stock: p.stock },
      });
    }
  }
  console.log(`  ✔ ${products.length} products`);
  console.log(`  ✔ ${branches.length} branch(es) with stock`);

  // Seed settings. There is no published email, so contact.email is left blank —
  // the site hides an empty channel instead of showing a placeholder.
  const settings = {
    contact: {
      email: "",
      phone: "+591 7989-9998",
      whatsapp: "59179888975",
      city: "Santa Cruz, Bolivia",
      hours: "Lunes a domingo · 9:00 – 17:00",
    },
    social: {
      instagram: "https://www.instagram.com/polloscampeonbolivia/",
      facebook: "https://www.facebook.com/PollosChampion",
      tiktok: "https://vm.tiktok.com/ZM2SgV1FR/",
    },
    shipping: {
      flatFee: 15.00,
      freeThreshold: 0.00,
      deliveryTime: "lo antes posible, según preparación y distancia",
    },
    announcements: [
      "El pollo #1 de Bolivia",
      "Delivery en moto en Santa Cruz",
      "18 sucursales · Pide por WhatsApp",
      "Club Campeón: junta 10 sellos y llévate 1 gratis",
      "Hecho al momento · Pago contra entrega",
    ],
    inventory: { lowStockThreshold: 5 },
    loyalty: {
      enabled: true,
      name: "Club Campeón",
      stampsToFree: 10,
      eligible: "all",
      eligibleSlugs: [],
      pointsPer: 1,
      pointsAmount: 10,
      pointsOnShipping: false,
      expiryDays: 0,
    },
    notifications: { orderEmail: "" },
  };

  await prisma.setting.upsert({
    where: { key: "store" },
    update: { value: settings },
    create: { key: "store", value: settings },
  });

  // Starting rewards shop. Upserted by slug so the owner's edits (name, cost,
  // stock) survive a re-seed.
  const rewards = [
    { slug: "botella-campeon", name: "Botella squeeze Campeón", description: "Botella reutilizable de la marca.", costPoints: 250, stock: 40, order: 1 },
    { slug: "bolso-campeon", name: "Bolso de tela Campeón", description: "Bolso de algodón para el diario.", costPoints: 300, stock: 30, order: 2 },
    { slug: "juguete-campeon", name: "Juguete para los más chicos", description: "Sorpresa de la marca para niños.", costPoints: 200, stock: 50, order: 3 },
    { slug: "gorra-campeon", name: "Gorra Campeón", description: "Gorra con el logo de Campeón.", costPoints: 400, stock: 20, order: 4 },
  ];
  for (const r of rewards) {
    await prisma.reward.upsert({
      where: { slug: r.slug },
      update: { name: r.name, description: r.description, costPoints: r.costPoints, order: r.order },
      create: r,
    });
  }
  console.log(`  ✔ ${rewards.length} Club Campeón rewards`);

  console.log("✅ Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
