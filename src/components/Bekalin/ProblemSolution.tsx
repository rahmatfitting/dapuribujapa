export default function ProblemSolution() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Sering Merasa Seperti Ini, Bun?</h2>
        </div>
        
        <div className="grid-2">
          {/* Problem */}
          <div className="card" style={{ borderTop: '4px solid #EF4444' }}>
            <h3 className="heading-md mb-6 flex items-center gap-4">
              <span style={{ fontSize: '2rem' }}>😩</span> Masalah Bunda
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <div style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</div>
                <p>Capek bangun pagi banget buat masak bekal.</p>
              </li>
              <li className="flex items-center gap-4">
                <div style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</div>
                <p>Pusing mikirin menu bekal yang sehat tapi anak suka.</p>
              </li>
              <li className="flex items-center gap-4">
                <div style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</div>
                <p>Ribet urus konsumsi snack & nasi box pas anak ulang tahun.</p>
              </li>
              <li className="flex items-center gap-4">
                <div style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</div>
                <p>Khawatir jajanan di luar sekolah kurang higienis.</p>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="card" style={{ borderTop: '4px solid var(--brand-green)' }}>
            <h3 className="heading-md mb-6 flex items-center gap-4">
              <span style={{ fontSize: '2rem' }}>🥰</span> Solusi Dapur Ibu Japa
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <div style={{ color: 'var(--brand-green)', fontWeight: 'bold' }}>✓</div>
                <p>Bunda bisa tidur nyenyak, bekal kami antar pagi hari.</p>
              </li>
              <li className="flex items-center gap-4">
                <div style={{ color: 'var(--brand-green)', fontWeight: 'bold' }}>✓</div>
                <p>Menu bervariasi setiap hari, nutrisi lengkap & bentuk lucu.</p>
              </li>
              <li className="flex items-center gap-4">
                <div style={{ color: 'var(--brand-green)', fontWeight: 'bold' }}>✓</div>
                <p>Paket snack & nasi box ultah terima beres, kemasan premium.</p>
              </li>
              <li className="flex items-center gap-4">
                <div style={{ color: 'var(--brand-green)', fontWeight: 'bold' }}>✓</div>
                <p>100% tanpa MSG tambahan & pengawet buatan.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
