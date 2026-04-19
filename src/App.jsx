import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  // Generatore di stelle
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
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 10px #00d4ff',
            animation: `warp ${star.duration} infinite linear`,
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* HERO SECTION */}
        <section style={s.hero}>
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
          <h1 style={s.mainTitle}>SOLUZIONI <br /><span className="stroke-text">IMMERSIVE</span></h1>
          <p style={s.subtitle}>Web Design di nuova generazione per business che guardano al futuro.</p>
          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
            VEDI I PIANI DI SERVIZIO
          </button>
        </section>

        {/* PIANI DI SERVIZIO */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>SCEGLI IL TUO <span className="stroke-text">PIANO</span></h2>
          <div style={s.bentoGrid}>
            <div className="glass-card" style={s.bentoItem}>
              <h3 style={s.planName}>STARTER</h3>
              <div style={s.price}>€499</div>
              <ul style={s.list}>
                <li>Landing Page Professionale</li>
                <li>Design Reattivo</li>
                <li>Supporto Email</li>
              </ul>
              <button style={s.planBtn}>INIZIA ORA</button>
            </div>
            
            <div className="glass-card" style={{...s.bentoItem, borderColor: '#00d4ff', transform: 'scale(1.05)'}}>
              <h3 style={{...s.planName, color: '#00d4ff'}}>BUSINESS PRO</h3>
              <div style={s.price}>€1.299</div>
              <ul style={s.list}>
                <li>Sito Multi-pagina</li>
                <li>Integrazione Pagamenti</li>
                <li>Dashboard Clienti</li>
              </ul>
              <button style={{...s.planBtn, background: '#00d4ff', color: '#000'}}>SCEGLI PRO</button>
            </div>
          </div>
        </section>
      </div>

      {/* CSS ANIMAZIONI */}
      <style>{`
        body { margin: 0; background: #000; overflow-x: hidden; }
        .scene { width: 180px; height: 180px; perspective: 600px; margin: 0 auto 40px; }
        .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; }
        .face { position: absolute; width: 180px; height: 180px; border: 2px solid #00d4ff; background: rgba(0, 212, 255, 0.1); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #00d4ff; backdrop-filter: blur(5px); font-size: 1.2rem; }
        .front { transform: rotateY(0deg) translateZ(90px); }
        .back { transform: rotateY(180deg) translateZ(90px); }
        .right { transform: rotateY(90deg) translateZ(90px); }
        .left { transform: rotateY(-90deg) translateZ(90px); }
        .top { transform: rotateX(90deg) translateZ(90px); }
        .bottom { transform: rotateX(-90deg) translateZ(90px); }
        @keyframes rotateCube { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes warp { 0% { transform: translateZ(-1000px); opacity: 0; } 100% { transform: translateZ(500px); opacity: 0; } }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.5); }
        .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; padding: 40px; transition: 0.4s; }
        .glass-card:hover { border-color: #00d4ff; background: rgba(0, 212, 255, 0.05); }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' },
  nav: { position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 0', background: 'rgba(0,0,0,0.8)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  navContainer: { width: '90%', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: '1.6rem', color: '#00d4ff', letterSpacing: '2px' },
  loginBtn: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem' },
  registerBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '10px 25px', borderRadius: '50px', fontWeight: '900', cursor: 'pointer', transition: '0.3s' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, paddingTop: '100px' },
  hero: { height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  mainTitle: { fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', margin: '0', lineHeight: '0.9' },
  subtitle: { fontSize: '1.2rem', opacity: 0.6, marginTop: '20px' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '20px 50px', fontSize: '1.1rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer', marginTop: '40px', transition: '0.3s' },
  section: { padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' },
  secTitle: { fontSize: '3rem', textAlign: 'center', marginBottom: '60px', fontWeight: '900' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' },
  bentoItem: { display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' },
  planName: { fontSize: '1.8rem', fontWeight: '900', margin: '0' },
  price: { fontSize: '3.5rem', fontWeight: 'bold', color: '#fff' },
  list: { listStyle: 'none', padding: 0, margin: '20px 0', textAlign: 'center', opacity: 0.8, lineHeight: '2.5' },
  planBtn: { background: '#fff', color: '#000', border: 'none', padding: '15px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }
};