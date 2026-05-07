import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dapur Ibu Japa - Bekal Sehat Anak & Snack Ulang Tahun',
  description: 'Pesan bekal sehat anak, snack box, dan nasi box dengan mudah. Praktis, higienis, dan siap antar.',
  keywords: 'bekal anak, catering anak sehat, snack box ulang tahun, nasi box anak, bekal harian anak',
  openGraph: {
    title: 'Dapur Ibu Japa - Bekal Sehat Anak & Snack Ulang Tahun',
    description: 'Pesan bekal sehat anak, snack box, dan nasi box dengan mudah. Praktis, higienis, dan siap antar.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dapur Ibu Japa",
            "image": "",
            "description": "Catering harian anak sehat, snack box ulang tahun, dan nasi box premium.",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ID"
            }
          })
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
