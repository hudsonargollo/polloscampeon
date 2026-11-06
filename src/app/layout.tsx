import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-provider";
import { ToastProvider } from "@/components/ui/toast";
import { FlashToast } from "@/components/ui/flash-toast";

// Type is self-hosted: Rather Loud (display) and Myriad Pro (body) are declared
// with @font-face in globals.css and served from /public/fonts.

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pollos Campeón | El pollo #1 de Bolivia",
    template: "%s | Pollos Campeón",
  },
  description:
    "Pollo a la brasa y broaster, pipocas, pastas y ensaladas en nuestras 18 sucursales de Santa Cruz. Pide en línea con delivery o retiro en tienda en Santa Cruz, Bolivia.",
  keywords: [
    "Pollos Campeón",
    "pollo a la brasa",
    "pollo broaster",
    "pipocas de pollo",
    "pollo entero",
    "combos",
    "comida rápida",
    "delivery Santa Cruz",
    "retiro en tienda",
    "sucursales Pollos Campeón",
    "Santa Cruz",
    "Bolivia",
  ],
  applicationName: "Pollos Campeón",
  openGraph: {
    title: "Pollos Campeón | El pollo #1 de Bolivia",
    description:
      "Pollo a la brasa y broaster, pipocas, pastas y ensaladas en nuestras 18 sucursales de Santa Cruz, con delivery y retiro en tienda.",
    type: "website",
    siteName: "Pollos Campeón",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pollos Campeón | El pollo #1 de Bolivia",
    description:
      "Pollo a la brasa y broaster, pipocas, pastas y ensaladas en nuestras 18 sucursales de Santa Cruz, con delivery y retiro en tienda.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <noscript>
          <style>{`.split-word{opacity:1 !important;filter:none !important;transform:none !important}`}</style>
        </noscript>
        {/* Apply saved theme before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('polloscampeon-theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}else if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();",
          }}
        />
        <ToastProvider>
          <FlashToast />
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
