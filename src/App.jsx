import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  const stars = Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`,
    size: `${Math.random() * 2 + 1}px`
  }));

  return (
    <div style={s.page}>
      {/* NAVBAR REALE CON CLERK */}
      <nav style={s.nav}>
        <div style={s.navContainer}>
          <div style={s.logo}>WEBCRAFT</div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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

      {/* SFONDO ANIMATO */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div key={star.id} className="starburst" style={{
            ...s.star,
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
          <div className="reveal" style={s.badge}>🚀 Soluzioni Web Professionali</div>
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
          <h1 style={s.mainTitle}>ESPERIENZE <br /><span className="stroke-text">IMMERSIVE</span></h1>
          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
            VEDI TUTTI I PIANI DI SERVIZIO
          </button>
        </section>

        {/* SEZIONE PIANI DI ABBONAMENTO */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>PIANI DI <span className="stroke-text">SVILUPPO</span></h2>
          <div style={s.bentoGrid}>
            <div className="glass-card" style={s.bentoItem}>
              <h3>STARTER</h3>
              <div style={s.price}>€499</div>
              <ul style={s.list}>
                <li>✅ Sito Vetrina 3D</li>
                <li>✅ Hosting Incluso</li>
              </ul>
              <button style={s.planBtn}>ACQUISTA</button>
            </div>

            <div className="glass-card" style={{...s.bentoItem, borderColor: '#00d4ff'}}>
              <h3 style={{color: '#00d4ff'}}>BUSINESS PRO</h3>
              <div style={s.price}>€1.299</div>
              <ul style={s.list}>
                <li>✅ Area Riservata Clienti</li>
                <li>✅ Gestione Progetti</li>
              </ul>
              <button style={{...s.planBtn, background: '#00d4ff', color: '#000'}}>ACQUISTA</button>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .scene { width: 200px; height: 200px; perspective: 600px; margin: 40px auto; }
        .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; }
        .face { position: absolute; width: 200px; height: 200px; border: 2px solid #00d4ff; background: rgba(0, 212, 255, 0.1); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; color: #00d4ff; backdrop-filter: blur(5px); }
        .front { transform: rotateY(0deg) translateZ(100px); }
        .back { transform: rotateY(180deg) translateZ(100px); }
        .right { transform: rotateY(90deg) translateZ(100px); }
        .left { transform: rotateY(-90deg) translateZ(100px); }
        .top { transform: rotateX(90deg) translateZ(100px); }
        .bottom { transform: rotateX(-90deg) translateZ(100px); }
        @keyframes rotateCube { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes warp { 0% { transform: translateZ(-1000px); opacity: 0; } 100% { transform: translateZ(500px); opacity: 0; } }
        .starburst { position: absolute; background: white; border-radius: 50%; box-shadow: 0 0 10px #00d4ff; animation: warp infinite linear; }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; padding: 40px; transition: 0.4s; }
        .glass-card:hover { border-color: #00d4ff; transform: translateY(-10px); }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', overflowX: 'hidden' },
  nav: { position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 0', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' },
  navContainer: { width: 'min(1400px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: '1.5rem', color: '#00d4ff', letterSpacing: '2px' },
  loginBtn: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' },
  registerBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '10px 25px', borderRadius: '50px', fontWeight: '900', cursor: 'pointer' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, width: 'min(1400px, 90%)', margin: '0 auto', paddingTop: '100px' },
  hero: { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  badge: { display: 'inline-block', margin: '0 auto 20px', background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '10px 30px', borderRadius: '50px', border: '1px solid #00d4ff' },
  mainTitle: { fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', lineHeight: '0.85' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '20px 50px', fontSize: '1.1rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer', marginTop: '40px' },
  section: { padding: '100px 0' },
  secTitle: { fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center', marginBottom: '60px' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  bentoItem: { display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' },
  price: { fontSize: '3rem', fontWeight: 'bold', color: '#00d4ff' },
  list: { listStyle: 'none', padding: 0, lineHeight: '2', textAlign: 'left' },
  planBtn: { background: '#fff', color: '#000', border: 'none', padding: '15px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }
};