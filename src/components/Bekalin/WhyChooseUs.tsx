export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "🍱",
      title: "Menu Variatif",
      desc: "Anak anti bosan! Menu selalu berganti setiap hari dengan bentuk bento lucu."
    },
    {
      icon: "✨",
      title: "Higienis & Bersih",
      desc: "Dapur standar premium, bahan dicuci bersih, kemasan tersegel rapi."
    },
    {
      icon: "⏰",
      title: "Selalu Tepat Waktu",
      desc: "Pengiriman pagi sebelum jam sekolah atau pas jam istirahat. Anti telat!"
    },
    {
      icon: "🎨",
      title: "Bisa Custom",
      desc: "Alergi telur? Gak suka sayur tertentu? Bisa disesuaikan dengan kebutuhan si kecil."
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Kenapa Ratusan Ibu Memilih Kami?</h2>
          <p className="subtitle">Kualitas premium yang tidak kompromi untuk si kecil.</p>
        </div>

        <div className="grid-2">
          {reasons.map((reason, idx) => (
            <div key={idx} className="card flex items-center gap-6" style={{ padding: '24px' }}>
              <div style={{ fontSize: '3rem', background: 'var(--brand-orange-light)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {reason.icon}
              </div>
              <div>
                <h3 className="heading-md mb-2" style={{ fontSize: '1.25rem' }}>{reason.title}</h3>
                <p className="text-secondary">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
