import React, { useState, useEffect } from "react";

// Hook per il movimento magnetico degli elementi
const usePerspective = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (e) => {
      setOffset({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);
  return offset;
};

export default function App() {
  const p = usePerspective();

  // Generazione di 3 strati di profondità per le particelle
  const layers = [
    { id: 'near', count: 30, size: 4, speed: '2s', blur: '2px' },
    { id: 'mid', count: 60, size: 2, speed: '5s', blur: '1px' },
    { id: 'far', count: 100, size: 1, speed: '10s', blur: '0px' }
  ];

  return (
    <div style={s.page}>
      {/* --- ENGINE 3D PROFONDO --- */}
      <div style={s.viewport}>
        {layers.map(layer => (
          <div key={layer.id} className={`layer-${layer.id}`} style={{
            ...s.layer,
            transform: `translate3d(${p.x * (layer.id === 'near' ? 1.5 : 0.5)}px, ${p.y * (layer.id === 'near' ? 1.5 : 0.5)}px, 0)`
          }}>
            {[...Array(layer.count)].map((_, i) => (
              <div key={i} className="particle-3d" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: layer.size,
                height: layer.size,
                filter: `blur(${layer.blur})`,
                animationDuration: layer.speed,
                animationDelay: `-${Math.random() * 10}s`
              }} />
            ))}
          </div>
        ))}
      </div>

      {/* --- CONTENUTO OVERLAY --- */}
      <div style={s.content}>
        <nav style={s.nav}>
          <div style={s.logo}>WEBCRAFT <span style={s.version}>[V3.0_ULTRA]</span></div>
          <div style={s.navStatus}>SYSTEM_STABLE // 2026</div>
        </nav>

        <section style={s.hero}>
          <div className="float-badge">QUANTUM COMPUTING DESIGN</div>
          
          <h1 style={{...s.title, transform: `translate3d(${p.x * -0.5}px, ${p.y * -0.5}px, 50px)`}}>
            <span className="text-depth">IMPATTO</span><br />
            <span className="text-main">TRIDIMENSIONALE</span>
          </h1>

          <div style={s.heroMain}>
            <div className="hero-description">
              Sviluppiamo architetture digitali che sfidano la percezione. 
              Non è un sito, è una dimensione parallela per il tuo brand.
            </div>
            
            <div className="button-container">
              <button className="btn-3d">
                <span className="btn-content">INIZIA IL VIAGGIO</span>
                <div className="btn-glitch"></div>
              </button>
            </div>
          </div>
        </section>

        {/* --- GRID 3D PESANTE --- */}
        <section style={s.gridSection}>
          <div className="card-complex" style={{transform: `rotateY(${p.x * 0.2}deg) rotateX(${p.y * -0.2}deg)`}}>
            <div className="card-inner">
              <div className="card-number">01</div>
              <h3>HYPER-SPEED</h3>
              <p>Ottimizzazione neurale per caricamenti istantanei sotto i 400ms.</p>
            </div>
          </div>
          <div className="card-complex" style={{transform: `rotateY(${p.x * 0.2}deg) rotateX(${p.y * -0.2}deg)`}}>
            <div className="card-inner">
              <div className="card-number">02</div>
              <h3>ELITE UX</h3>
              <p>Interfacce che reagiscono fisicamente al tocco e al movimento.</p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes warpDrive {
          0% { transform: translateZ(-1500px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateZ(1000px); opacity: 0; }
        }

        .particle-3d {
          position: absolute;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 15px #00d4ff, 0 0 30px #fff;
          animation: warpDrive infinite linear;
        }

        .text-depth {
          color: transparent;
          -webkit-text-stroke: 2px #fff;
          font-size: 0.7em;
          letter-spacing: 15px;
          display: block;
        }

        .text-main {
          background: linear-gradient(180deg, #fff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(0,212,255,0.5));
        }

        .btn-3d {
          position: relative;
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
          padding: 25px 60px;
          font-weight: 900;
          letter-spacing: 5px;
          cursor: pointer;
          overflow: hidden;
          transition: 0.3s;
        }

        .btn-3d:hover {
          background: #fff;
          color: #000;
          box-shadow: 0 0 50px #fff;
        }

        .card-complex {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 60px;
          position: relative;
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: 0.1s;
        }

        .card-inner {
          transform: translateZ(50px);
        }

        .card-number {
          font-size: 5rem;
          font-weight: 900;
          opacity: 0.1;
          position: absolute;
          top: -20px;
          right: 20px;
        }

        .float-badge {
          background: rgba(0,212,255,0.1);
          border: 1px solid #00d4ff;
          color: #00d4ff;
          padding: 10px 30px;
          letter-spacing: 3px;
          font-size: 0.8rem;
          margin-bottom: 40px;
          animation: float 3s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', overflowX: 'hidden', margin: 0 },
  viewport: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px', background: 'radial-gradient(circle at center, #001520 0%, #000 100%)' },
  layer: { position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out' },
  content: { position: 'relative', zIndex: 10, width: '90%', maxWidth: '1400px', margin: '0 auto' },
  nav: { display: 'flex', justifyContent: 'space-between', padding: '50px 0', letterSpacing: '2px', fontSize: '0.8rem' },
  version: { color: '#00d4ff', marginLeft: '10px' },
  navStatus: { opacity: 0.5 },
  hero: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  title: { fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 0.9, margin: 0, transition: 'transform 0.1s linear' },
  heroMain: { marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' },
  gridSection: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '100px 0' }
};