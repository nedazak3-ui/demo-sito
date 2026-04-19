import React, { useState, useEffect } from "react";

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div style={s.page}>
      {/* ENGINE 3D FISSO SULLO SFONDO */}
      <div style={s.canvas3d}>
        <div style={{ ...s.scene, transform: `rotateX(${-mouse.y * 0.5}deg) rotateY(${mouse.x * 0.5}deg)` }}>
          <div className="energy-core"></div>
          <div className="ring r1"></div>
          <div className="ring r2"></div>
          <div className="ring r3"></div>
          {[...Array(100)].map((_, i) => (
            <div key={i} className="debris" style={{
              transform: `translate3d(${Math.random()*2000-1000}px, ${Math.random()*2000-1000}px, ${Math.random()*2000-1000}px)`,
              width: Math.random()*3, height: Math.random()*3,
              animationDuration: `${Math.random()*15+5}s`
            }} />
          ))}
        </div>
      </div>

      <div style={s.content}>
        {/* --- HEADER --- */}
        <nav style={s.nav}>
          <div style={s.logo}>WEBCRAFT<span className="cyan-dot">.</span></div>
          <button className="contact-btn-nav">AVVIA PROGETTO</button>
        </nav>

        {/* --- SECTION 1: HERO (IMPATTO) --- */}
        <section style={s.hero}>
          <div className="badge-3d">TECNOLOGIA DI GRADO MILITARE</div>
          <h1 style={s.mainTitle}>
            <span className="outline">DESIGN</span><br />
            <span>SENZA LIMITI</span>
          </h1>
          <p style={s.subText}>🚀 Web Design pensato solo per la qualità del servizio. <br/> Non creiamo siti, costruiamo imperi digitali.</p>
          <div className="scroll-hint">SCORRI PER ESPLORARE</div>
        </section>

        {/* --- SECTION 2: I PILASTRI (BENTO GRID) --- */}
        <section style={s.section}>
          <h2 style={s.sectionTitle}>I NOSTRI PILASTRI</h2>
          <div style={s.bentoGrid}>
            <div className="glass-card b1">
              <h3>IMMERSIONE TOTALE</h3>
              <p>Esperienze 3D che catturano l'utente e non lo lasciano più andare.</p>
            </div>
            <div className="glass-card b2">
              <h3>VELOCITÀ LUCE</h3>
              <p>Codice ottimizzato per caricamenti sotto i 300ms.</p>
            </div>
            <div className="glass-card b3">
              <h3>SICUREZZA ELITE</h3>
              <p>Protocolli di protezione dati avanzati.</p>
            </div>
            <div className="glass-card b4">
              <h3>IA INTEGRATA</h3>
              <p>Sistemi intelligenti che lavorano per te 24/7.</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: IL PROCESSO (TIMELINE) --- */}
        <section style={s.section}>
          <h2 style={s.sectionTitle}>IL PROCESSO GALATTICO</h2>
          <div style={s.timeline}>
            {[
              { t: "01. ANALISI", d: "Studiamo il tuo mercato e i tuoi competitor per trovare il punto debole." },
              { t: "02. ARCHITETTURA", d: "Creiamo la struttura 3D e logica del tuo successo." },
              { t: "03. SVILUPPO", d: "Scriviamo codice pulito, veloce e indistruttibile." },
              { t: "04. LANCIO", d: "Il tuo brand decolla nell'iperspazio digitale." }
            ].map((step, i) => (
              <div key={i} className="timeline-item">
                <div className="step-num">{i+1}</div>
                <div className="step-content">
                  <h3>{step.t}</h3>
                  <p>{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: STATISTICHE --- */}
        <section style={s.stats}>
          <div className="stat-item"><span>+200%</span><p>CONVERSIONE</p></div>
          <div className="stat-item"><span>&lt;0.5s</span><p>LATENZA</p></div>
          <div className="stat-item"><span>99.9%</span><p>UPTIME</p></div>
        </section>

        {/* --- SECTION 5: CTA FINALE --- */}
        <section style={s.ctaSection}>
          <div className="final-box">
            <h2>PRONTO A DOMINARE IL MERCATO?</h2>
            <p>Accettiamo solo 3 partner al mese. Assicurati il tuo posto ora.</p>
            <button className="mega-btn">CONTATTACI ADESSO</button>
          </div>
        </section>

        <footer style={s.footer}>
          WEBCRAFT STUDIO © 2026 - TUTTI I DIRITTI RISERVATI - DIGITAL EXCELLENCE
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=Inter:wght@300;800&display=swap');

        /* 3D CORE ANIMATIONS */
        .energy-core { width: 100px; height: 100px; background: #fff; border-radius: 50%; box-shadow: 0 0 100px #00d4ff, 0 0 200px #00d4ff; position: absolute; }
        .ring { position: absolute; border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 50%; transform-style: preserve-3d; }
        .r1 { width: 500px; height: 500px; transform: rotateX(75deg); animation: rot 10s infinite linear; }
        .r2 { width: 600px; height: 600px; transform: rotateX(-45deg) rotateY(20deg); animation: rot 15s infinite linear reverse; }
        .r3 { width: 400px; height: 400px; transform: rotateY(90deg); animation: rot 8s infinite linear; }
        @keyframes rot { from { transform: rotateX(75deg) rotateZ(0deg); } to { transform: rotateX(75deg) rotateZ(360deg); } }
        
        .debris { position: absolute; background: #fff; border-radius: 50%; box-shadow: 0 0 5px #00d4ff; opacity: 0.4; }

        /* UI ELEMENTS */
        .badge-3d { border: 1px solid #00d4ff; padding: 10px 25px; border-radius: 50px; color: #00d4ff; font-weight: 900; letter-spacing: 3px; font-size: 0.7rem; margin-bottom: 30px; }
        .outline { color: transparent; -webkit-text-stroke: 1px #fff; }
        .cyan-dot { color: #00d4ff; }

        .glass-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 50px; border-radius: 30px; backdrop-filter: blur(15px); transition: 0.4s; }
        .glass-card:hover { border-color: #00d4ff; transform: translateY(-15px); box-shadow: 0 20px 50px rgba(0,212,255,0.2); }
        
        .b1 { grid-column: span 2; }
        .b4 { grid-column: span 2; }

        /* TIMELINE */
        .timeline { position: relative; max-width: 800px; margin: 0 auto; padding-left: 50px; border-left: 2px solid rgba(0,212,255,0.2); }
        .timeline-item { position: relative; margin-bottom: 80px; }
        .step-num { position: absolute; left: -76px; width: 50px; height: 50px; background: #00d4ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #000; box-shadow: 0 0 20px #00d4ff; }

        .mega-btn { background: #fff; color: #000; border: none; padding: 25px 60px; border-radius: 100px; font-weight: 900; letter-spacing: 2px; cursor: pointer; transition: 0.3s; }
        .mega-btn:hover { transform: scale(1.1); box-shadow: 0 0 50px #fff; }

        .final-box { border: 2px solid #00d4ff; padding: 100px 50px; border-radius: 50px; background: linear-gradient(180deg, rgba(0,212,255,0.1) 0%, transparent 100%); }
        
        .scroll-hint { margin-top: 50px; opacity: 0.3; font-size: 0.7rem; letter-spacing: 5px; animation: bounce 2s infinite; }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-10px);} 60% {transform: translateY(-5px);} }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'Inter', sans-serif", margin: 0 },
  canvas3d: { position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px', zIndex: 1 },
  scene: { position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' },
  content: { position: 'relative', zIndex: 10, width: '90%', maxWidth: '1400px', margin: '0 auto' },
  nav: { display: 'flex', justifyContent: 'space-between', padding: '50px 0', alignItems: 'center' },
  logo: { fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.5rem' },
  hero: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  mainTitle: { fontFamily: 'Orbitron', fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 0.8 },
  subText: { fontSize: '1.2rem', color: '#888', marginTop: '30px', maxWidth: '600px', lineHeight: 1.6 },
  section: { padding: '150px 0' },
  sectionTitle: { fontFamily: 'Orbitron', fontSize: '3rem', textAlign: 'center', marginBottom: '100px' },
  bentoGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' },
  stats: { display: 'flex', justifyContent: 'space-around', padding: '100px 0', borderTop: '1px solid #222', borderBottom: '1px solid #222' },
  statItem: { textAlign: 'center' },
  ctaSection: { paddingBottom: '200px', textAlign: 'center' },
  footer: { padding: '50px 0', textAlign: 'center', opacity: 0.2, fontSize: '0.8rem' }
};