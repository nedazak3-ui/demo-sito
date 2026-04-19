import React, { useState } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";

export default function App() {
  const { isSignedIn } = useAuth();
  const [flippedCard, setFlippedCard] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const LINK_STARTER = "https://buy.stripe.com/4gMeV61DwfrygKf0tC0sU00";
  const LINK_PRO = "https://buy.stripe.com/14AaEQ4PI4MU8dJb8g0sU01";

  const handlePurchase = (link) => {
    if (!isSignedIn) {
      alert("Per procedere con l'acquisto, devi prima registrarti o accedere.");
      return; 
    }
    window.location.href = link;
  };

  const stars = Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`,
    size: `${Math.random() * 2 + 1}px`
  }));

  const faqs = [
    { q: "Quanto tempo richiede un progetto?", a: "Per il piano Starter consegniamo in 7 giorni lavorativi. Per il Pro Business circa 15-20 giorni." },
    { q: "L'hosting è incluso?", a: "Sì, il primo anno di hosting ultra-veloce e certificato SSL è incluso in tutti i pacchetti." },
    { q: "Posso aggiornare il sito da solo?", a: "Certamente. Con il piano Pro Business avrai accesso a una dashboard semplificata per gestire contenuti e prodotti." }
  ];

  return (
    <div style={s.page}>
      {/* NAVBAR */}
      <nav style={s.navbar}>
        <div style={s.navContainer}>
          <div style={s.logo}>WEBCRAFT</div>
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <SignedOut>
              <SignInButton mode="modal">
                <button style={s.loginBtn}>ACCEDI</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button style={s.registerBtn}>REGISTRATI</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* SFONDO WARP */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div key={star.id} className="starburst" style={{
            top: star.top, left: star.left, width: star.size, height: star.size, animationDuration: star.duration,
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* HERO SECTION */}
        <section style={s.hero}>
          <div className="reveal" style={s.badge}>🚀 Digital Future is Here</div>
          <div className="scene">
            <div className="cube">
              <div className="face front">WEBCRAFT</div>
              <div className="face back">FUTURE</div>
              <div className="face right">DESIGN</div>
              <div className="face left">IMPACT</div>
              <div className="face top">3D</div>
              <div className="face bottom">CODE</div>
            </div>
          </div>
          <h1 style={s.mainTitle}>ESPERIENZE <br /><span className="stroke-text">IMMERSIVE</span> <br /><span style={s.gradientText}>SENZA LIMITI.</span></h1>
          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
            SCOPRI I PIANI
          </button>
        </section>

        {/* SEZIONE PORTFOLIO (SHOWCASE) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>IL NOSTRO <span className="stroke-text">IMPATTO</span></h2>
          <div style={s.bentoGrid}>
            <div className="glass-card" style={s.portfolioItem}>
              <div style={s.portfolioImg}>STREETWEAR 3D</div>
              <h4>Meta-Store</h4>
              <p style={{fontSize: '0.8rem', opacity: 0.6}}>E-commerce immersivo per brand di moda.</p>
            </div>
            <div className="glass-card" style={s.portfolioItem}>
              <div style={s.portfolioImg}>TECH DASHBOARD</div>
              <h4>AI Analytics</h4>
              <p style={{fontSize: '0.8rem', opacity: 0.6}}>Dashboard dati con integrazione neurale.</p>
            </div>
          </div>
        </section>

        {/* PIANI DI ABBONAMENTO */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>PIANI DI <span className="stroke-text">ABBONAMENTO</span></h2>
          <div style={s.bentoGrid}>
            {/* STARTER */}
            <div className={`flip-card ${flippedCard === 'starter' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass-card" style={s.bentoItem}>
                  <div style={s.icon}>🛰️</div>
                  <h3>STARTER</h3>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0', color: '#00d4ff'}}>€499</div>
                  <button style={s.cardBtn} onClick={() => setFlippedCard('starter')}>ACQUISTA ORA</button>
                </div>
                <div className="flip-card-back glass-card" style={s.bentoItem}>
                  <h3>DETTAGLI</h3>
                  <p style={s.detailsText}>Sviluppo Landing Page, Design 3D base, Hosting 12 mesi, Ottimizzazione SEO.</p>
                  <button style={s.confirmBtn} onClick={() => handlePurchase(LINK_STARTER)}>CONFERMO</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>

            {/* PRO BUSINESS */}
            <div className={`flip-card ${flippedCard === 'pro' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass-card" style={{...s.bentoItem, borderColor: '#00d4ff'}}>
                  <div style={s.icon}>🚀</div>
                  <h3 style={{color: '#00d4ff'}}>PRO BUSINESS</h3>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0'}}>€1.299</div>
                  <button style={{...s.cardBtn, background: '#00d4ff'}} onClick={() => setFlippedCard('pro')}>ACQUISTA ORA</button>
                </div>
                <div className="flip-card-back glass-card" style={{...s.bentoItem, borderColor: '#00d4ff'}}>
                  <h3>DETTAGLI PRO</h3>
                  <p style={s.detailsText}>E-commerce, Area Riservata, Gestione Progetti, Supporto VIP h24.</p>
                  <button style={s.confirmBtn} onClick={() => handlePurchase(LINK_PRO)}>CONFERMO</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>
            
            {/* CUSTOM AI */}
            <div className={`flip-card ${flippedCard === 'custom' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass-card" style={s.bentoItem}>
                  <div style={s.icon}>🛸</div>
                  <h3>CUSTOM AI</h3>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0', color: '#00d4ff'}}>PREVENTIVO</div>
                  <button style={s.cardBtn} onClick={() => setFlippedCard('custom')}>CONTATTACI</button>
                </div>
                <div className="flip-card-back glass-card" style={s.bentoItem}>
                  <h3>SU MISURA</h3>
                  <p style={s.detailsText}>Integrazione LLM personalizzati, Automazioni complesse e Scalabilità Enterprise.</p>
                  <button style={s.confirmBtn} onClick={() => window.location.href='mailto:info@webcraft.site'}>SCRIVICI</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEZIONE FAQ */}
        <section style={s.section}>
          <h2 style={s.secTitle}>DOMANDE <span className="stroke-text">FREQUENTI</span></h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {faqs.map((faq, index) => (
              <div key={index} style={s.faqItem} onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                <div style={s.faqQuestion}>
                  {faq.q} <span>{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && <div style={s.faqAnswer}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.footerGrid}>
          <div>
            <div style={s.logo}>WEBCRAFT</div>
            <p style={{opacity: 0.5, fontSize: '0.8rem', marginTop: '10px'}}>© 2026 Webcraft Agency. P.IVA 1234567890</p>
          </div>
          <div style={{display: 'flex', gap: '40px'}}>
            <div style={s.footerCol}>
              <span style={{fontWeight: 'bold'}}>Legal</span>
              <a href="#" style={s.footerLink}>Privacy Policy</a>
              <a href="#" style={s.footerLink}>Termini</a>
            </div>
            <div style={s.footerCol}>
              <span style={{fontWeight: 'bold'}}>Social</span>
              <a href="#" style={s.footerLink}>Instagram</a>
              <a href="#" style={s.footerLink}>LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .flip-card { perspective: 1000px; min-height: 420px; }
        .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
        .flip-card.active .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px; box-sizing: border-box; }
        .flip-card-back { transform: rotateY(180deg); background: rgba(0, 212, 255, 0.05) !important; }
        .scene { width: 150px; height: 150px; perspective: 600px; margin: 20px auto; }
        .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; }
        .face { position: absolute; width: 150px; height: 150px; border: 2px solid #00d4ff; background: rgba(0, 212, 255, 0.1); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1rem; color: #00d4ff; backdrop-filter: blur(5px); }
        .front { transform: rotateY(0deg) translateZ(75px); } .back { transform: rotateY(180deg) translateZ(75px); }
        .right { transform: rotateY(90deg) translateZ(75px); } .left { transform: rotateY(-90deg) translateZ(75px); }
        .top { transform: rotateX(90deg) translateZ(75px); } .bottom { transform: rotateX(-90deg) translateZ(75px); }
        @keyframes rotateCube { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes warp { 0% { transform: translateZ(-1000px); opacity: 0; } 100% { transform: translateZ(500px); opacity: 0; } }
        .starburst { position: absolute; background: white; border-radius: 50%; box-shadow: 0 0 10px #00d4ff; animation: warp infinite linear; }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; transition: 0.4s; }
        .glass-card:hover { border-color: #00d4ff; }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', overflowX: 'hidden' },
  navbar: { position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '15px 0', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  navContainer: { width: 'min(1200px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: '1.2rem', color: '#00d4ff', letterSpacing: '2px' },
  loginBtn: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '0.8rem' },
  registerBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '8px 20px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, width: 'min(1200px, 90%)', margin: '0 auto', paddingTop: '80px' },
  hero: { minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  mainTitle: { fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '900', lineHeight: '0.9', marginBottom: '30px' },
  gradientText: { background: 'linear-gradient(to right, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  badge: { display: 'inline-block', margin: '0 auto 10px', background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '8px 20px', borderRadius: '50px', border: '1px solid #00d4ff', fontSize: '0.8rem' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '15px 40px', fontSize: '1rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer' },
  section: { padding: '80px 0' },
  secTitle: { fontSize: 'clamp(1.8rem, 4vw, 3rem)', textAlign: 'center', marginBottom: '50px', fontWeight: '900' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' },
  bentoItem: { display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', textAlign: 'center' },
  portfolioItem: { padding: '20px', textAlign: 'center' },
  portfolioImg: { height: '150px', background: 'rgba(0,212,255,0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontWeight: 'bold', color: '#00d4ff', border: '1px dashed #00d4ff' },
  cardContainer: { width: '100%' },
  icon: { fontSize: '2.5rem' },
  cardBtn: { background: '#fff', color: '#000', border: 'none', padding: '12px', width: '100%', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' },
  confirmBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '12px', width: '100%', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' },
  backLink: { background: 'none', border: '1px solid #555', color: '#fff', padding: '8px', width: '100%', borderRadius: '50px', cursor: 'pointer', fontSize: '0.8rem' },
  detailsText: { fontSize: '0.85rem', opacity: 0.7, marginBottom: '20px', lineHeight: '1.5' },
  faqItem: { borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '20px 0', cursor: 'pointer' },
  faqQuestion: { display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.1rem' },
  faqAnswer: { marginTop: '15px', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.6' },
  footer: { background: '#050505', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 2 },
  footerGrid: { width: 'min(1200px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' },
  footerCol: { display: 'flex', flexDirection: 'column', gap: '10px' },
  footerLink: { color: '#fff', textDecoration: 'none', opacity: 0.5, fontSize: '0.85rem' }
};