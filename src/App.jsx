import React, { useState, useEffect } from "react";

const useMousePerspective = () => {
  const [perspective, setPerspective] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPerspective({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return perspective;
};

export default function App() {
  const mouse = useMousePerspective();
  const particles = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    depth: Math.random() * 3 + 1,
  }));

  return (
    <div style={s.page}>
      {/* SFONDO DINAMICO: GRADIENTE PROFONDO */}
      <div style={s.backgroundOverlay}></div>

      {/* PARTICELLE REATTIVE */}
      <div style={s.spaceContainer}>
        {particles.map((p) => (
          <div key={p.id} style={{
            ...s.particle,
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            transform: `translate(${mouse.x * 15 * p.depth}px, ${mouse.y * 15 * p.depth}px)`,
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* --- SEZIONE 1: HERO --- */}
        <section style={s.hero}>
          <div style={s.badge}>🚀 WebCraft Engine v2.0</div>
          
          <div className="scene" style={s.scene}>
            <div className="cube" style={{
              ...s.cube,
              transform: `rotateX(${-mouse.y * 35}deg) rotateY(${mouse.x * 35}deg)`,
            }}>
              <div className="face front">CODE</div>
              <div className="face back">FUTURE</div>
              <div className="face right">DESIGN</div>
              <div className="face left">IMPACT</div>
              <div className="face top">3D</div>
              <div className="face bottom">HTML</div>
            </div>
          </div>

          <h1 style={{ ...s.mainTitle, transform: `perspective(1000px) rotateX(${mouse.y * -5}deg) rotateY(${mouse.x * 5}deg)` }}>
            ESPERIENZE <br />
            <span className="stroke-text">IMMERSIVE</span> <br />
            <span style={s.cyanText}>SENZA LIMITI.</span>
          </h1>
          <p style={s.heroSub}>Ingegneria estetica e performance brutali unite in un unico ecosistema digitale.</p>
        </section>

        {/* --- SEZIONE 2: I SERVIZI (BENTO GRID) --- */}
        <section style={s.section}>
          <h2 style={s.sectionTitle}>I NOSTRI PILASTRI</h2>
          <div style={s.grid}>
            <div className="feature-card" style={s.card}>
              <div style={s.icon}>⚡</div>
              <h3>Velocità Pura</h3>
              <p>Caricamenti istantanei ottimizzati per ogni dispositivo.</p>
            </div>
            <div className="feature-card" style={s.card}>
              <div style={s.icon}>💎</div>
              <h3>Design Premium</h3>
              <p>Interfacce curate nei minimi dettagli per massimizzare l'impatto.</p>
            </div>
            <div className="feature-card" style={s.card}>
              <div style={s.icon}>🌐</div>
              <h3>Core 3D</h3>
              <p>Integrazione di elementi tridimensionali interattivi di ultima generazione.</p>
            </div>
          </div>
        </section>

        {/* --- SEZIONE 3: CTA FINALE --- */}
        <section style={s.ctaSection}>
          <div style={s.ctaBox}>
            <h2 style={{fontSize: '3rem', marginBottom: '20px'}}>PRONTO AL DECOLLO?</h2>
            <p style={{marginBottom: '40px', opacity: 0.7}}>Inizia oggi a costruire il tuo futuro digitale con noi.</p>
            <button style={s.btn}>CONTATTACI ORA</button>
          </div>
        </section>

        <footer style={s.footer}>
          © 2026 WEBCRAFT STUDIO • DESIGNED FOR EXCELLENCE
        </footer>
      </div>

      <style>{`
        .scene { transform-style: preserve-3d; }
        .cube { transform-style: preserve-3d; animation: rotateAuto 20s infinite linear; transition: transform 0.1s ease-out; }
        .face {
          position: absolute; width: 200px; height: 200px;
          border: 2px solid #00d4ff; background: rgba(0, 212, 255, 0.1);
          display: flex; align-items: center; justify-content: center;
          font-weight: 900; color: #00d4ff; backdrop-filter: blur(5px);
          box-shadow: inset 0 0 20px rgba(0, 212, 255, 0.2);
        }
        .front { transform: rotateY(0deg) translateZ(100px); }
        .back { transform: rotateY(180deg) translateZ(100px); }
        .right { transform: rotateY(90deg) translateZ(100px); }
        .left { transform: rotateY(-90deg) translateZ(100px); }
        .top { transform: rotateX(90deg) translateZ(100px); }
        .bottom { transform: rotateX(-90deg) translateZ(100px); }

        @keyframes rotateAuto {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }

        .stroke-text { color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.6); }
        
        .feature-card:hover {
          border-color: #00d4ff;
          background: rgba(0, 212, 255, 0.05);
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#02040a', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, overflowX: 'hidden' },
  backgroundOverlay: { 
    position: 'fixed', inset: 0, zIndex: 0,
    background: 'radial-gradient(circle at 50% 50%, #0a192f 0%, #02040a 100%)' 
  },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' },
  particle: { position: 'absolute', background: '#fff', borderRadius: '50%', opacity: 0.4, boxShadow: '0 0 8px #00d4ff' },
  content: { position: 'relative', zIndex: 2, width: 'min(1200px, 90%)', margin: '0 auto' },
  hero: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  badge: { background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '8px 20px', borderRadius: '50px', border: '1px solid #00d4ff', marginBottom: '30px', fontWeight: 'bold' },
  scene: { width: '200px', height: '200px', marginBottom: '80px' },
  cube: { width: '100%', height: '100%', position: 'relative' },
  mainTitle: { fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', lineHeight: '0.9', marginBottom: '30px' },
  cyanText: { background: 'linear-gradient(90deg, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1.2rem', color: '#8892b0', maxWidth: '600px' },
  section: { padding: '100px 0' },
  sectionTitle: { fontSize: '3rem', textAlign: 'center', marginBottom: '60px', fontWeight: '900' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  card: { padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', transition: '0.3s' },
  icon: { fontSize: '2.5rem', marginBottom: '20px' },
  ctaSection: { padding: '150px 0', textAlign: 'center' },
  ctaBox: { padding: '80px', background: 'rgba(0,212,255,0.05)', borderRadius: '40px', border: '1px solid #00d4ff' },
  btn: { background: '#fff', color: '#000', padding: '18px 45px', borderRadius: '50px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1.1rem' },
  footer: { padding: '50px 0', textAlign: 'center', opacity: 0.3 }
};