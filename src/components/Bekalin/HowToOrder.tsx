export default function HowToOrder() {
  const steps = [
    {
      num: "1",
      title: "Pilih Menu",
      desc: "Lihat pilihan paket bekal harian, snack box, atau nasi box."
    },
    {
      num: "2",
      title: "Chat WhatsApp",
      desc: "Klik tombol pesan, admin kami yang ramah siap membantu."
    },
    {
      num: "3",
      title: "Konfirmasi & Bayar",
      desc: "Isi detail alamat dan lakukan pembayaran dengan mudah."
    },
    {
      num: "4",
      title: "Bekal Diantar",
      desc: "Tunggu di rumah, kurir kami akan mengantar dengan aman."
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Cara Pesan Sangat Mudah</h2>
          <p className="subtitle">Hanya 4 langkah, bekal sehat siap dinikmati si kecil.</p>
        </div>

        <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {steps.map((step, idx) => (
            <div key={idx} className="text-center relative">
              <div style={{ 
                width: '64px', height: '64px', 
                backgroundColor: 'var(--brand-orange)', color: 'white', 
                borderRadius: '50%', fontSize: '1.5rem', fontWeight: 'bold',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', position: 'relative', zIndex: 2,
                boxShadow: 'var(--shadow-sm)'
              }}>
                {step.num}
              </div>
              
              <h3 className="heading-md mb-2" style={{ fontSize: '1.25rem' }}>{step.title}</h3>
              <p className="text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
