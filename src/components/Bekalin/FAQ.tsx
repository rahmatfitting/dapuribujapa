"use client";

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah menu bekal setiap hari berbeda?",
      a: "Tentu saja! Kami memiliki rotasi menu bulanan sehingga anak tidak akan bosan. Menunya mencakup nasi, karbohidrat lain, protein, dan sayur dengan bentuk yang menarik."
    },
    {
      q: "Bisa request menu kalau anak ada alergi?",
      a: "Sangat bisa. Silakan infokan alergi anak pada saat pendaftaran, kami akan menyesuaikan menunya dengan bahan pengganti yang aman."
    },
    {
      q: "Jam berapa bekal diantar ke sekolah?",
      a: "Pengantaran dilakukan setiap hari sebelum jam istirahat pertama (biasanya jam 08:30 - 09:30 pagi) agar makanan tetap hangat dan fresh saat dimakan."
    },
    {
      q: "Minimal order untuk snack box ulang tahun berapa?",
      a: "Minimal order untuk snack box dan nasi box adalah 20 pax. Pemesanan maksimal H-3 acara."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Pertanyaan Seputar Dapur Ibu Japa</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="card" 
              style={{ padding: '20px 24px', cursor: 'pointer', border: openIdx === idx ? '1px solid var(--brand-orange)' : '1px solid var(--border-color)' }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: openIdx === idx ? 'var(--brand-orange)' : 'var(--text-primary)' }}>
                  {faq.q}
                </h3>
                <span style={{ fontSize: '1.5rem', color: openIdx === idx ? 'var(--brand-orange)' : 'var(--text-muted)' }}>
                  {openIdx === idx ? '−' : '+'}
                </span>
              </div>
              {openIdx === idx && (
                <p className="mt-4 text-secondary" style={{ lineHeight: '1.6' }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
