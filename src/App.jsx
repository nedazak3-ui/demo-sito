import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  const stars = Array.from({ length: 100 }).map((_, i) => ({
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

      {/* SFONDO STELLE */}
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
          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
            SCOPRI I PIANI
          </button>
        </section>

        {/* PIANI DI ABBONAMENTO */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>PIANI <span className="stroke-text">DISPONIBILI</span></h2>
          <div style={s.bentoGrid}>
            <div className="glass-card" style={s.bentoItem}>
              <h3>STARTER</h3>
              <div style={s.price}>€499</div>
              <button style={s.planBtn}>ACQUISTA</button>
            </div>
            <div className="glass-card" style={{...s.bentoItem, borderColor: '#00d4ff'}}>
              <h3 style={{color: '#00d4ff'}}>BUSINESS PRO</h3>
              <div style={s.price}>€1.299</div>
              <button style={{...s.planBtn, background: '#00d4ff', color: '#000'}}>ACQUISTA</button>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        body { margin: 0; background: #000; overflow-x: hidden; }
        .scene { width: 180px; height: 180px; perspective: 600px; margin: 20px auto; }
        .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotateCube 20s infinite linear; }
        .face { position: absolute; width: 180px; height: 180px; border: 2px solid #00d4ff; background: rgba(0, 212, 255, 0.1); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #00d4ff; backdrop-filter: blur(5px); }
        .front { transform: rotateY(0deg) translateZ(90px); }
        .back { transform: rotateY(180deg) translateZ(90px); }
        .right { transform: rotateY(90deg) translateZ(90px); }
        .left { transform: rotateY(-90deg) translateZ(90px); }
        .top { transform: rotateX(90deg) translateZ(90px); }
        .bottom { transform: rotateX(-90deg) translateZ(90px); }
        @keyframes rotateCube { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes warp { 0% { transform: translateZ(-1000px); opacity: 0; } 100% { transform: translateZ(500px); opacity: 0; } }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.5); }
        .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 30px; padding: 30px; transition: 0.3s; }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' },
  nav: { position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '15px 0', background: 'rgba(0,0,0,0.8)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  navContainer: { width: '90%', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: '1.4rem', color: '#00d4ff' },
  loginBtn: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' },
  registerBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '8px 20px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, paddingTop: '80px' },
  hero: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  mainTitle: { fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', margin: '20px 0' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '18px 40px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '50px', cursor: 'pointer', margin: '0 auto' },
  section: { padding: '100px 5%' },
  secTitle: { fontSize: '3rem', textAlign: 'center', marginBottom: '50px' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' },
  bentoItem: { display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' },
  price: { fontSize: '2.5rem', fontWeight: 'bold' },
  planBtn: { background: '#fff', color: '#000', border: 'none', padding: '12px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }
};