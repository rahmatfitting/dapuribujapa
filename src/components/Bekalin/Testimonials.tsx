export default function Testimonials() {
  const testimonials = [
    {
      name: "Bunda Sarah",
      role: "Ibu 2 Anak",
      text: "Semenjak langganan Dapur Ibu Japa, pagi hari saya jadi santai. Anak saya yang tadinya susah makan sayur sekarang selalu habis bekalnya karena bentuknya lucu-lucu!",
      rating: 5
    },
    {
      name: "Mama Dita",
      role: "Mompreneur",
      text: "Pesan snack box buat ulang tahun Kenzie praktis banget! Packagingnya rapi, kuenya enak, anak-anak di kelas pada suka. Recommended banget buat ibu repot kayak saya.",
      rating: 5
    },
    {
      name: "Tante Lina",
      role: "Ibu Rumah Tangga",
      text: "Lauknya fresh, porsinya juga pas. Nggak pernah kecewa sama Dapur Ibu Japa. Terima kasih sudah banyak bantu ibu-ibu yang pusing mikir menu tiap hari.",
      rating: 5
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Kata Mereka yang Sudah Coba</h2>
          <p className="subtitle">Kebahagiaan bunda dan anak adalah prioritas utama kami.</p>
        </div>

        <div className="grid-3">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="flex gap-2 mb-4">
                {[...Array(testi.rating)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--brand-yellow)', fontSize: '1.25rem' }}>★</span>
                ))}
              </div>
              <p className="text-primary mb-6" style={{ fontStyle: 'italic', flex: 1 }}>
                &quot;{testi.text}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brand-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--brand-green)', fontSize: '1.25rem' }}>
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontWeight: '700' }}>{testi.name}</h4>
                  <p className="text-secondary" style={{ fontSize: '0.875rem' }}>{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fake WA Chat Bubble Design - Floating element */}
        <div className="card animate-float" style={{ maxWidth: '400px', margin: '48px auto 0', padding: '16px', background: '#E4F8E9', border: '1px solid #D1E8D5', borderRadius: '16px 16px 16px 0', position: 'relative' }}>
          <p style={{ fontSize: '0.9rem', color: '#111827' }}>
            <strong>[Customer Baru]</strong> &quot;Mbak, makasih ya bekal hari ini anakku suka bgt!! Lusa mau nambah porsi sekalian buat adeknya yg PAUD 😍&quot;
          </p>
          <div style={{ textAlign: 'right', fontSize: '0.75rem', color: '#6B7280', marginTop: '4px' }}>10:45 AM</div>
        </div>
      </div>
    </section>
  );
}
