export default function TrustSection() {
  return (
    <section className="section" style={{ backgroundColor: 'white', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="grid-3 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="heading-lg text-brand mb-2">1000+</h3>
            <p className="subtitle" style={{ fontSize: '1rem' }}>Box Terkirim Tiap Bulan</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="heading-lg text-brand mb-2">200+</h3>
            <p className="subtitle" style={{ fontSize: '1rem' }}>Pelanggan Repeat Order</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="heading-lg text-brand mb-2">4.9/5</h3>
            <p className="subtitle" style={{ fontSize: '1rem' }}>Rating Ibu & Anak</p>
          </div>
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted mb-6" style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
            Dipercaya oleh Ibu di Sekolah-Sekolah Favorit
          </p>
          <div className="flex justify-center gap-8" style={{ flexWrap: 'wrap', opacity: 0.5, filter: 'grayscale(100%)' }}>
            {/* Dummy Logos */}
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🏫 Sekolah Alam</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🎓 Global Kids</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🌟 Bintang Edu</div>
          </div>
        </div>
      </div>
    </section>
  );
}
