import React, { useState, useEffect } from "react";

// Hook per tracciare il mouse e creare l'effetto parallasse
const useMousePerspective = () => {
  const [perspective, setPerspective] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calcoliamo la posizione del mouse rispetto al centro dello schermo (valori da -1 a 1)
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

  // Generiamo 80 particelle di sfondo con posizioni casuali
  const particles = Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3}px`,
    depth: Math.random() * 2 + 0.5, // Velocità di parallasse diversa per ogni particella
  }));

  return (
    <div style={s.page}>
      {/* --- SFONDO PARTICELLE REATTIVE --- */}
      <div style={s.spaceContainer}>
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              ...s.particle,
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              // Spostiamo le particelle in base al mouse, usando la loro "profondità"
              transform: `translate(${mouse.x * 20 * p.depth}px, ${mouse.y * 20 * p.depth}px)`,
            }}
          />
        ))}
      </div>

      <div style={s.content}>
        {/* --- HERO SECTION --- */}
        <section style={s.hero}>
          <div style={s.badge}>
            🚀 Web Design pensato solo per la qualità del servizio
          </div>

          {/* --- IL CUBO 3D MAGNETICO (SEGUE IL MOUSE) --- */}
          <div className="scene" style={s.scene}>
            <div
              className="cube"
              style={{
                ...s.cube,
                // Applichiamo la rotazione automatica + l'inclinazione del mouse
                transform: `rotateX(${-mouse.y * 30}deg) rotateY(${mouse.x * 30}deg) rotateZ(0deg)`,
              }}
            >
              <div className="face front">CODE</div>
              <div className="face back">FUTURE</div>
              <div className="face right">DESIGN</div>
              <div className="face left">IMPACT</div>
              <div className="face top">3D</div>
              <div className="face bottom">HTML</div>
            </div>
          </div>

          {/* --- TITOLO DINAMICO (SEGUE IL MOUSE) --- */}
          <h1
            style={{
              ...s.mainTitle,
              // Il titolo si inclina leggermente per dare profondità
              transform: `perspective(1000px) rotateX(${mouse.y * -5}deg) rotateY(${mouse.x * 5}deg)`,
            }}
          >
            ESPERIENZE <br />
            <span className="stroke-text">IMMERSIVE</span> <br />
            <span style={s.cyanText}>SENZA LIMITI.</span>
          </h1>

          <p style={s.heroSub}>
            Non è solo un sito. È una macchina da guerra digitale progettata
            con ingegneria estetica e performance brutali.
          </p>
        </section>
      </div>

      {/* --- CSS ENGINE PER GLI EFFETTI 3D --- */}
      <style>{`
        /* Definizione delle facce del cubo (come nel tuo screenshot) */
        .scene { transform-style: preserve-3d; }
        .cube {
          transform-style: preserve-3d;
          /* Rimuoviamo l'animazione automatica per controllarla col mouse,
             oppure la lasciamo se vuoi che giri SEMPRE ma si inclini col mouse.
             Proviamo a lasciarla per ora: */
          animation: rotateCube 20s infinite linear;
        }
        .face {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 2px solid #00d4ff;
          background: rgba(0, 212, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.5rem;
          color: #00d4ff;
          backdrop-filter: blur(5px);
          font-family: sans-serif;
          letter-spacing: 2px;
        }

        /* Posizionamento delle facce nello spazio 3D */
        .front  { transform: rotateY(0deg) translateZ(100px); }
        .back   { transform: rotateY(180deg) translateZ(100px); }
        .right  { transform: rotateY(90deg) translateZ(100px); }
        .left   { transform: rotateY(-90deg) translateZ(100px); }
        .top    { transform: rotateX(90deg) translateZ(100px); }
        .bottom { transform: rotateX(-90deg) translateZ(100px); }

        /* Animazione di rotazione automatica di base */
        @keyframes rotateCube {
          from { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg); }
        }

        /* Effetto testo outline per "IMMERSIVE" */
        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.6);
        }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden', margin: 0 },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden' },
  particle: { position: 'absolute', background: '#fff', borderRadius: '50%', opacity: 0.3, boxShadow: '0 0 10px #00d4ff', transition: 'transform 0.1s ease-out' },
  content: { position: 'relative', zIndex: 2, width: 'min(1200px, 90%)', margin: '0 auto' },
  hero: { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', perspective: '1000px' },
  badge: { background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '10px 25px', borderRadius: '50px', border: '1px solid #00d4ff', marginBottom: '40px', fontWeight: 'bold', fontSize: '0.9rem' },
  scene: { width: '200px', height: '200px', margin: '0 auto 60px auto', perspective: '1000px' },
  cube: { width: '100%', height: '100%', position: 'relative', transition: 'transform 0.1s ease-out' },
  mainTitle: { fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: '900', lineHeight: '0.85', marginBottom: '30px', letterSpacing: '-0.04em', transition: 'transform 0.1s ease-out' },
  cyanText: { background: 'linear-gradient(to right, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1.3rem', color: '#888', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }
};