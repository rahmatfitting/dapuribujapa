import HeroSection from '@/components/Bekalin/HeroSection';
import TrustSection from '@/components/Bekalin/TrustSection';
import ProblemSolution from '@/components/Bekalin/ProblemSolution';
import MenuSection from '@/components/Bekalin/MenuSection';
import WhyChooseUs from '@/components/Bekalin/WhyChooseUs';
import InstagramSection from '@/components/Bekalin/InstagramSection';
import Testimonials from '@/components/Bekalin/Testimonials';
import HowToOrder from '@/components/Bekalin/HowToOrder';
import PromoSection from '@/components/Bekalin/PromoSection';
import FAQ from '@/components/Bekalin/FAQ';
import FinalCTA from '@/components/Bekalin/FinalCTA';
import FloatingWhatsApp from '@/components/Bekalin/FloatingWhatsApp';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ProblemSolution />
      <MenuSection />
      <WhyChooseUs />
      <InstagramSection />
      <PromoSection />
      <Testimonials />
      <HowToOrder />
      <FAQ />
      <FinalCTA />
      
      {/* Footer */}
      <footer style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '48px 0 24px', textAlign: 'center' }}>
        <div className="container">
          <h3 className="heading-md mb-2" style={{ color: 'var(--brand-orange)' }}>Dapur Ibu Japa</h3>
          <p className="text-muted mb-8" style={{ maxWidth: '400px', margin: '0 auto 32px' }}>
            Solusi catering sehat, praktis, dan disukai anak-anak. Dibuat dengan cinta setiap hari.
          </p>
          <div style={{ borderTop: '1px solid #333', paddingTop: '24px', fontSize: '0.875rem', color: '#666' }}>
            © {new Date().getFullYear()} Dapur Ibu Japa. All rights reserved.
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}
