import Image from 'next/image';

export default function MenuSection() {
  const menus = [
    {
      title: 'Bekal Harian Anak',
      price: 'Mulai Rp 25.000 / box',
      desc: 'Bento sehat dengan menu bervariasi setiap hari. Nutrisi seimbang, bentuk lucu yang bikin anak semangat makan.',
      image: '/images/bekal-harian.png',
      badge: 'Favorit Bunda',
      badgeColor: 'badge-orange'
    },
    {
      title: 'Snack Box Ulang Tahun',
      price: 'Mulai Rp 15.000 / box',
      desc: 'Paket snack sehat & menarik untuk memeriahkan pesta ulang tahun di sekolah. Kemasan premium anti tumpah.',
      image: '/images/snack-box.png',
      badge: 'Best Seller',
      badgeColor: 'badge-green'
    },
    {
      title: 'Nasi Box Acara',
      price: 'Mulai Rp 30.000 / box',
      desc: 'Nasi box elegan untuk acara keluarga, syukuran, atau field trip sekolah. Lauk lengkap, porsi pas, rasa juara.',
      image: '/images/nasi-box.png',
      badge: 'Premium',
      badgeColor: 'badge-orange'
    }
  ];

  return (
    <section id="menu" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Pilihan Menu Andalan Kami</h2>
          <p className="subtitle">Dibuat dari bahan segar berkualitas dengan penuh cinta.</p>
        </div>

        <div className="grid-3">
          {menus.map((menu, idx) => (
            <div key={idx} className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
              <div className="relative" style={{ height: '240px', width: '100%' }}>
                <Image 
                  src={menu.image} 
                  alt={menu.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="img-cover"
                  style={{ borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)' }}
                />
                <div className="absolute" style={{ top: '16px', right: '16px' }}>
                  <span className={`badge ${menu.badgeColor}`} style={{ boxShadow: 'var(--shadow-sm)' }}>
                    {menu.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-col flex" style={{ padding: '24px', flex: 1 }}>
                <h3 className="heading-md mb-2">{menu.title}</h3>
                <p style={{ color: 'var(--brand-orange)', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '16px' }}>
                  {menu.price}
                </p>
                <p className="text-secondary mb-6" style={{ flex: 1 }}>
                  {menu.desc}
                </p>
                
                <a href={`https://wa.me/6285736436935?text=Halo%20Dapur%20Ibu%20Japa,%20saya%20mau%20pesan%20${encodeURIComponent(menu.title)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full text-center" style={{ width: '100%' }}>
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
