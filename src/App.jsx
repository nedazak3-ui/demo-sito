import React, { useState, useEffect } from "react";

export default function App() {
  const [m, setM] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const move = (e) => setM({
      x: (e.clientX / window.innerWidth - 0.5) * 80,
      y: (e.clientY / window.innerHeight - 0.5) * 80
    });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div style={s.page}>
      {/* 3D ENGINE CORE - FISSO SULLO SFONDO */}
      <div style={s.viewport}>
        <div style={{...s.scene, transform: `rotateX(${-m.y}deg) rotateY(${m.x}deg)`}}>
          {/* Geometria Centrale Complessa */}
          <div className="atom">
            <div className="nucleus"></div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`orbit o${i}`}></div>
            ))}
          </div>
          {/* Pioggia di particelle 3D */}
          {[...Array(200)].map((_, i) => (
            <div key={i} className="dot-3d" style={{
              transform: `translate3d(${Math.random()*2000-1000}px, ${Math.random()*2000-1000}px, ${Math.random()*2000-1000}px)`,
              animationDuration: `${Math.random()*5+2}s`
            }}></div>
          ))}
        </div>
      </div>

      <div style={s.container}>
        {/* HEADER VERO LOGO */}
        <nav style={s.nav}>
          <div style={s.logo}>WEBCRAFT <span className="glitch-v">V.4.0</span></div>
          <div style={s.navRight}>STATUS: <span className="online">ULTRA_READY</span></div>
        </nav>

        {/* --- SEZIONE 1: HERO (L'IMPATTO) --- */}
        <section style={s.hero}>
          <div className="top-label">OVER-ENGINEERED DIGITAL EXPERIENCE</div>
          <h1 style={s.mainTitle}>
            <span className="stroke">PURE</span><br />
            <span>EXCELLENCE</span>
          </h1>
          <p style={s.sub}>Progettiamo siti web che non solo funzionano, ma dominano lo spazio digitale. 3D Reale, velocità brutale, design atomico.</p>
          <button className="cta-heavy">START MISSION</button>
        </section>

        {/* --- SEZIONE 2: BENTO GRID GIGANTE (SERVIZI) --- */}
        <section style={s.section}>
          <h2 style={s.secTitle}>CORE CAPABILITIES</h2>
          <div style={s.bento}>
            <div className="card-3d c1">
              <div className="c-tag">01</div>
              <h3>3D ENGINE</h3>
              <p>Rendering accelerato via hardware per fluidità a 60fps costante.</p>
            </div>
            <div className="card-3d c2">
              <div className="c-tag">02</div>
              <h3>NEURAL SPEED</h3>
              <p>Ottimizzazione del codice ai massimi livelli mondiali.</p>
            </div>
            <div className="card-3d c3">
              <div className="c-tag">03</div>
              <h3>QUANTUM UI</h3>
              <p>Interfacce che reagiscono istantaneamente ad ogni input umano.</p>
            </div>
            <div className="card-3d c4">
              <div className="c-tag">04</div>
              <h3>CYBER SECURITY</h3>
              <p>Protezione di grado enterprise integrata in ogni pixel.</p>
            </div>
          </div>
        </section>

        {/* --- SEZIONE 3: TIMELINE DEL PROGETTO --- */}
        <section style={s.section}>
          <h2 style={s.secTitle}>THE MISSION PLAN</h2>
          <div style={s.timeline}>
            {["RESEARCH", "PROTOTYPING", "3D ENGINERING", "DEPLOY"].map((step, i) => (
              <div key={i} className="t-item">
                <div className="t-box">
                  <h4>PHASE_0{i+1}</h4>
                  <h3>{step}</h3>
                  <p>Integrazione di sistemi avanzati per il massimo rendimento estetico.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SEZIONE 4: CTA FINALE --- */}
        <section style={s.ctaWrap}>
          <div className="cta-box">
            <h2>NON ACCETTARE LA MEDIOCRITÀ.</h2>
            <p>Il tuo brand merita il meglio che la tecnologia possa offrire.</p>
            <button className="cta-heavy">JOIN THE FUTURE</button>
          </div>
        </section>

        <footer style={s.footer}>WEBCRAFT CORE © 2026 // ALL SYSTEMS OPERATIONAL</footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&family=Space+Grotesk:wght@300;700&display=swap');

        /* ANIMAZIONI 3D ATOMICHE */
        .atom { position: relative; width: 100px; height: 100px; transform-style: preserve-3d; }
        .nucleus { width: 40px; height: 40px; background: #fff; border-radius: 50%; box-shadow: 0 0 80px #00d4ff; position: absolute; top: 30px; left: 30px; }
        .orbit { position: absolute; top: -50px; left: -50px; width: 200px; height: 200px; border: 1px solid rgba(0,212,255,0.3); border-radius: 50%; transform-style: preserve-3d; animation: orb infinite linear; }
        .o0 { transform: rotateX(80deg) rotateY(20deg); animation-duration: 4s; }
        .o1 { transform: rotateX(-80deg) rotateY(40deg); animation-duration: 6s; }
        .o2 { transform: rotateY(90deg); animation-duration: 3s; }
        .o3 { transform: rotateX(45deg); animation-duration: 8s; }
        @keyframes orb { from { transform: rotateZ(0); } to { transform: rotateZ(360deg); } }

        .dot-3d { position: absolute; width: 2px; height: 2px; background: #fff; box-shadow: 0 0 10px #00d4ff; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }

        /* UI STYLES */
        .stroke { color: transparent; -webkit-text-stroke: 1.5px #fff; }
        .glitch-v { color: #00d4ff; animation: glitch 0.5s infinite alternate; }
        @keyframes glitch { from { opacity: 1; } to { opacity: 0.5; } }

        .card-3d { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); padding: 50px; border-radius: 20px; backdrop-filter: blur(20px); transition: 0.4s; }
        .card-3d:hover { border-color: #00d4ff; transform: perspective(1000px) rotateX(10deg) translateY(-20px); background: rgba(0,212,255,0.05); }
        .c1, .c4 { grid-column: span 2; }
        .c-tag { color: #00d4ff; font-weight: 800; margin-bottom: 10px; }

        .cta-heavy { background: #fff; color: #000; border: none; padding: 25px 60px; font-family: 'Syncopate', sans-serif; font-size: 0.9rem; font-weight: 800; cursor: pointer; clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%); transition: 0.3s; }
        .cta-heavy:hover { background: #00d4ff; box-shadow: 0 0 60px #00d4ff; transform: scale(1.1); }

        .t-item { border-left: 2px solid #222; padding-left: 40px; margin-bottom: 60px; transition: 0.4s; }
        .t-item:hover { border-color: #00d4ff; }
        .t-box h4 { color: #555; margin: 0; }
        .t-box h3 { margin: 10px 0; font-family: 'Syncopate', sans-serif; font-size: 2rem; }

        .cta-box { border: 1px solid #00d4ff; padding: 120px 40px; text-align: center; border-radius: 40px; background: radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 100%); }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'Space Grotesk', sans-serif", margin: 0, overflowX: 'hidden' },
  viewport: { position: 'fixed', inset: 0, zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px' },
  scene: { position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 0.1s linear' },
  container: { position: 'relative', zIndex: 10, width: '90%', maxWidth: '1400px', margin: '0 auto' },
  nav: { display: 'flex', justifyContent: 'space-between', padding: '60px 0', alignItems: 'center', fontFamily: "'Syncopate', sans-serif", fontSize: '0.8rem' },
  logo: { fontSize: '1.2rem', fontWeight: 800 },
  navRight: { opacity: 0.5 },
  hero: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' },
  mainTitle: { fontFamily: "'Syncopate', sans-serif", fontSize: 'clamp(3rem, 12vw, 9rem)', lineHeight: 0.9, margin: '20px 0' },
  sub: { maxWidth: '600px', fontSize: '1.2rem', color: '#888', marginBottom: '50px', lineHeight: 1.6 },
  section: { padding: '150px 0' },
  secTitle: { fontFamily: "'Syncopate', sans-serif", fontSize: '3.5rem', marginBottom: '100px' },
  bento: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' },
  timeline: { maxWidth: '800px' },
  ctaWrap: { paddingBottom: '200px' },
  footer: { padding: '100px 0', textAlign: 'center', opacity: 0.2, fontSize: '0.7rem', letterSpacing: '5px' }
};