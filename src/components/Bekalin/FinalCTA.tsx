export default function FinalCTA() {
  return (
    <section className="section" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
      <div className="container text-center">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 className="heading-xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Yuk Bekalin dengan Makanan Sehat dari Dapur Ibu Japa 💛
          </h2>
          <p className="subtitle mb-10">
            Jangan biarkan anak jajan sembarangan. Percayakan asupan nutrisinya pada kami dan rasakan ketenangan sebagai ibu.
          </p>
          <a href="https://wa.me/6285736436935?text=Halo%20Dapur%20Ibu%20Japa,%20saya%20mau%20pesan" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ fontSize: '1.125rem', padding: '18px 48px' }}>
            Chat WhatsApp Sekarang
          </a>
          <p className="mt-6 text-muted" style={{ fontSize: '0.875rem' }}>
            Fast response setiap hari jam 08.00 - 17.00 WIB
          </p>
        </div>
      </div>
    </section>
  );
}
