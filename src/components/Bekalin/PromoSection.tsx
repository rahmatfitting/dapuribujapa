export default function PromoSection() {
  return (
    <section className="section" style={{ padding: '0 24px' }}>
      <div className="container p-0" style={{ maxWidth: 'var(--container-width)' }}>
        <div className="card text-center" style={{ 
          background: 'linear-gradient(135deg, var(--brand-orange), var(--brand-orange-dark))',
          color: 'white',
          padding: '48px 24px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="badge" style={{ backgroundColor: 'white', color: 'var(--brand-orange-dark)', marginBottom: '24px' }}>
              🎁 Promo Spesial Bulan Ini
            </span>
            <h2 className="heading-lg mb-4" style={{ color: 'white' }}>Diskon 15% Untuk Order Pertama!</h2>
            <p className="subtitle mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Berlaku untuk paket bekal harian mingguan. Jangan lewatkan kesempatan memberikan makanan terbaik untuk si kecil lebih hemat.
            </p>
            <a href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20klaim%20promo%2015%%20untuk%20order%20pertama!" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg" style={{ color: 'var(--brand-orange-dark)', fontWeight: 'bold' }}>
              Klaim Promo Sekarang
            </a>
          </div>

          {/* Background pattern */}
          <div className="absolute" style={{ top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
          <div className="absolute" style={{ bottom: '-50px', left: '-50px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
        </div>
      </div>
    </section>
  );
}
