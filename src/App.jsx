import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";

export default function App() {
  const { isSignedIn } = useAuth();

  // Price ID e Link forniti da te
  const PRICE_STARTER = "price_1TO1nl4JqOxtLfRZ63kvPAzG";
  const LINK_STARTER = "https://buy.stripe.com/4gMeV61DwfrygKf0tC0sU00";

  const PRICE_PRO = "price_1TO1pP4JqOxtLfRZs0fe8ILz";
  const LINK_PRO = "https://buy.stripe.com/14AaEQ4PI4MU8dJb8g0sU01";

  // Funzione per gestire l'acquisto
  const handlePurchase = (priceId) => {
    if (!isSignedIn) {
      alert("Per procedere con l'acquisto e attivare la tua area riservata, devi prima registrarti o accedere.");
      return; 
    }
    
    // Associa il Price ID al link di pagamento corretto
    const stripeLinks = {
      [PRICE_STARTER]: LINK_STARTER,
      [PRICE_PRO]: LINK_PRO
    };

    const targetLink = stripeLinks[priceId];
    
    if (targetLink) {
      // Reindirizza l'utente alla pagina di checkout di Stripe
      window.location.href = targetLink;
    }
  };

  const stars = Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`,
    size: `${Math.random() * 2 + 1}px`
  }));

  return (
    <div style={s.page}>
      {/* NAVBAR */}
      <nav style={s.nav}>
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

      {/* SFONDO ANIMATO SPAZIALE */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div key={star.id} className="starburst" style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* HERO SECTION */}
        <section style={s.hero}>
          <div className="scene">
            <div className="cube">
              <div className="face front">WEBCRAFT</div>
              <div className="face back">SECURE</div>
              <div className="face right">PAY</div>
              <div className="face left">DESIGN</div>
              <div className="face top">3D</div>
              <div className="face bottom">CODE</div>
            </div>
          </div>
          <h1 style={s.mainTitle}>IL TUO FUTURO <br /><span className="stroke-text">DIGITALE</span></h1>
          <p style={s.heroSub}>Scegli il tuo piano, completa il pagamento sicuro e accedi alla tua area riservata.</p>
          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
            VEDI I PIANI
          </button>
        </section>

        {/* SEZIONE PIANI DI ABBONAMENTO */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>PIANI DI <span className="stroke-text">ABBONAMENTO</span></h2>
          <div style={s.bentoGrid}>
            
            {/* PIANO STARTER */}
            <div className="glass-card" style={s.bentoItem}>
              <div style={s.icon}>🛰️</div>
              <h3>STARTER</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0', color: '#00d4ff'}}>€499</div>
              <ul style={s.planList}>
                <li>✅ 1 Pagina Web Immersiva</li>
                <li>✅ Design 3D Standard</li>
                <li>✅ Supporto Email</li>
              </ul>
              <button 
                style={{...s.primaryBtn, padding: '15px', width: '100%', fontSize: '1rem', marginTop: '20px'}}
                onClick={() => handlePurchase(PRICE_STARTER)}
              >
                ACQUISTA ORA
              </button>
            </div>

            {/* PIANO PRO BUSINESS */}
            <div className="glass-card" style={{...s.bentoItem, borderColor: '#00d4ff', boxShadow: '0 0 30px rgba(0,212,255,0.2)'}}>
              <div style={s.icon}>🚀</div>
              <h3 style={{color: '#00d4ff'}}>PRO BUSINESS</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0'}}>€1.299</div>
              <ul style={s.planList}>
                <li>✅ E-commerce & Multi-page</li>
                <li>✅ AREA RISERVATA CLIENTI</li>
                <li>✅ Supporto Prioritario 24/7</li>
              </ul>
              <button 
                style={{...s.primaryBtn, background: '#00d4ff', color: '#000', padding: '15px', width: '100%', fontSize: '1rem', marginTop: '20px'}}
                onClick={() => handlePurchase(PRICE_PRO)}
              >
                ACQUISTA ORA
              </button>
            </div>

          </div>
        </section>
      </div>

      <style>{`
        .scene { width: 180px; height: 180px; perspective: 600px; margin: 0 auto 40px; }
        .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; }
        .face { position: absolute; width: 180px; height: 180px; border: 2px solid #00d4ff; background: rgba(0, 212, 255, 0.1); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #00d4ff; backdrop-filter: blur(5px); }
        .front { transform: rotateY(0deg) translateZ(90px); }
        .back { transform: rotateY(180deg) translateZ(90px); }
        .right { transform: rotateY(90deg) translateZ(90px); }
        .left { transform: rotateY(-90deg) translateZ(90px); }
        .top { transform: rotateX(90deg) translateZ(90px); }
        .bottom { transform: rotateX(-90deg) translateZ(90px); }
        @keyframes rotateCube { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes warp { 0% { transform: translateZ(-1000px); opacity: 0; } 20% { opacity: 1; } 100% { transform: translateZ(500px); opacity: 0; } }
        .starburst { position: absolute; background: white; border-radius: 50%; box-shadow: 0 0 10px #00d4ff; animation: warp infinite linear; }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; padding: 40px; transition: 0.4s; }
        .glass-card:hover { border-color: #00d4ff; transform: translateY(-10px); background: rgba(0, 212, 255, 0.05); }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', overflowX: 'hidden' },
  nav: { position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 0', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  navContainer: { width: '90%', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: '1.5rem', color: '#00d4ff', letterSpacing: '2px' },
  loginBtn: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' },
  registerBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '10px 25px', borderRadius: '50px', fontWeight: '900', cursor: 'pointer', boxShadow: '0 0 15px rgba(0,212,255,0.4)' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, paddingTop: '120px' },
  hero: { height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  mainTitle: { fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', lineHeight: '0.9' },
  heroSub: { fontSize: '1.2rem', opacity: 0.6, marginTop: '20px', maxWidth: '600px', margin: '20px auto' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '18px 45px', fontSize: '1.1rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer', marginTop: '30px', boxShadow: '0 0 20px rgba(255,255,255,0.2)' },
  section: { padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' },
  secTitle: { fontSize: '3rem', textAlign: 'center', marginBottom: '60px', fontWeight: '900' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  bentoItem: { display: 'flex', flexDirection: 'column', textAlign: 'center' },
  icon: { fontSize: '3rem', marginBottom: '10px' },
  planList: { listStyle: 'none', padding: 0, margin: '20px 0', opacity: 0.8, lineHeight: '2' }
};