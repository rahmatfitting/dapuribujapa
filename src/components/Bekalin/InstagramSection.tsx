import Image from 'next/image';

export default function InstagramSection() {
  const highlightUrl = "https://www.instagram.com/stories/highlights/17925219759092173/?hl=en";

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="grid-2 items-center">
          {/* Text Content */}
          <div className="animate-slide-right">
            <span className="badge badge-orange mb-4">📸 Galeri Instagram</span>
            <h2 className="heading-lg mb-6">Intip Keseruan di Dapur Ibu Japa</h2>
            <p className="subtitle mb-8" style={{ marginLeft: 0 }}>
              Lihat langsung bagaimana kami menyiapkan setiap bekal dengan bahan segar, dapur yang higienis, dan porsi penuh cinta untuk si kecil. 
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-4">
                <span style={{ color: 'var(--brand-orange)' }}>✨</span> Behind the scene proses memasak
              </li>
              <li className="flex items-center gap-4">
                <span style={{ color: 'var(--brand-orange)' }}>✨</span> Review jujur dari para bunda
              </li>
              <li className="flex items-center gap-4">
                <span style={{ color: 'var(--brand-orange)' }}>✨</span> Menu baru setiap bulannya
              </li>
            </ul>
            <a href={highlightUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2" style={{ marginRight: '8px' }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
              </svg>
              Tonton di Instagram
            </a>
          </div>

          {/* Phone Mockup Frame */}
          <div className="flex justify-center animate-slide-left">
            <a href={highlightUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', position: 'relative' }}>
              <div style={{
                width: '280px',
                height: '560px',
                backgroundColor: '#111',
                borderRadius: '40px',
                padding: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '4px solid #fff',
                position: 'relative'
              }}>
                {/* Notch */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '25px',
                  backgroundColor: '#000',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                  zIndex: 10
                }}></div>
                
                {/* Screen Content */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#fafafa',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  {/* Dummy IG Reel/Story Cover */}
                  <Image 
                    src="/images/hero.png" 
                    alt="Instagram Highlight Dapur Ibu Japa" 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="img-cover"
                  />
                  {/* Overlay Gradient */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)'
                  }}></div>
                  
                  {/* Play Button Icon */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* IG UI Elements */}
                  <div style={{ position: 'absolute', top: '24px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', color: 'white', zIndex: 5 }}>
                    <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '2px' }}>
                      <div style={{ width: '40%', height: '100%', backgroundColor: 'white', borderRadius: '2px' }}></div>
                    </div>
                  </div>
                  <div style={{ position: 'absolute', top: '36px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'white', zIndex: 5 }}>
                     <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--brand-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px' }}>DJ</div>
                     <span style={{ fontWeight: '600', fontSize: '14px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Dapur Ibu Japa</span>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute animate-float" style={{ bottom: '40px', right: '-30px', background: 'white', padding: '12px', borderRadius: '16px', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}>
                <span style={{ fontSize: '24px' }}>💖</span>
                <span style={{ fontWeight: 'bold' }}>1.2k Likes</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
