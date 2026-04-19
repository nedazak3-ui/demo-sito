import React, { useState, useEffect } from "react";

const useMouse = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e) => setPos({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2
    });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);
  return pos;
};

export default function App() {
  const mouse = useMouse();

  return (
    <div style={s.page}>
      {/* SFONDO ATMOSFERICO: Nebulosa di luce soffusa */}
      <div style={s.ambience}></div>

      <div style={s.content}>
        {/* HERO ARTISTICA */}
        <section style={s.hero}>
          <div style={s.sculptureContainer}>
            {/* LOGO 3D VOLUMETRICO (Testo che diventa oggetto) */}
            <div className="art-3d" style={{
              ...s.artObject,
              transform: `rotateX(${10 + mouse.y * 20}deg) rotateY(${mouse.x * 25}deg)`
            }}>
              <div className="text-3d-layer" data-text="CRAFT">CRAFT</div>
              <div className="text-3d-layer" data-text="CRAFT" style={{transform: 'translateZ(-20px)', opacity: 0.5}}>CRAFT</div>
              <div className="text-3d-layer" data-text="CRAFT" style={{transform: 'translateZ(-40px)', opacity: 0.2}}>CRAFT</div>
              
              {/* Elementi geometrici orbitanti */}
              <div className="ring-art"></div>
              <div className="floating-sphere"></div>
            </div>
            
            {/* Ombra dinamica soft */}
            <div style={{
              ...s.floorShadow,
              transform: `translateX(${mouse.x * 50}px) scale(${1 - Math.abs(mouse.y) * 0.1})`
            }}></div>
          </div>

          <div style={s.textContent}>
            <h1 style={s.mainTitle}>
              THE ART OF <br />
              <span className="glass-text">DIMENSION</span>
            </h1>
            <p style={s.artistSub}>
              "La perfezione non è quando non c'è più nulla da aggiungere, ma quando non c'è più nulla da togliere."
            </p>
          </div>
        </section>

        {/* SEZIONE ESPOSITIVA (MOLTO LUNGA) */}
        <section style={s.gallerySection}>
          <div className="art-card" style={s.artCard}>
            <span style={s.cardNum}>VOL. 01</span>
            <h3>SCULTURA DIGITALE</h3>
            <p>Codice trasformato in materia tangibile attraverso il rendering GPU.</p>
          </div>

          <div className="art-card" style={{...s.artCard, alignSelf: 'flex-end'}}>
            <span style={s.cardNum}>VOL. 02</span>
            <h3>LUCE REALE</h3>
            <p>Simulazione fotorealistica di riflessi su superfici metalliche e vitree.</p>
          </div>
        </section>

        <section style={s.ctaSection}>
          <button className="art-btn">ENTRA NEL FUTURO</button>
        </section>

        <footer style={s.footer}>EST. 2026 // WEBCRAFT FINE ART</footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,900;1,900&family=Inter:wght@300;900&display=swap');

        .art-3d {
          position: relative;
          transform-style: preserve-3d;
          width: 400px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s cubic-bezier(0.1, 0, 0.1, 1);
        }

        .text-3d-layer {
          position: absolute;
          font-family: 'Bodoni Moda', serif;
          font-size: 8rem;
          font-weight: 900;
          color: #fff;
          letter-spacing: -5px;
          text-shadow: 0 0 20px rgba(0,212,255,0.3);
        }

        .ring-art {
          position: absolute;
          width: 500px;
          height: 500px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          transform: rotateX(80deg);
          animation: spin 10s infinite linear;
        }

        .floating-sphere {
          position: absolute;
          width: 30px;
          height: 30px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 50px #00d4ff;
          offset-path: path('M 0,0 m -150,0 a 150,150 0 1,0 300,0 a 150,150 0 1,0 -300,0');
          animation: orbit 5s infinite linear;
        }

        @keyframes spin { from { transform: rotateX(80deg) rotateZ(0); } to { transform: rotateX(80deg) rotateZ(360deg); } }
        @keyframes orbit { from { offset-distance: 0%; } to { offset-distance: 100%; } }

        .glass-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.8);
          font-style: italic;
        }

        .art-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 30px 80px;
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: 1rem;
          letter-spacing: 5px;
          cursor: pointer;
          transition: 0.5s;
          mix-blend-mode: screen;
        }

        .art-btn:hover {
          background: #00d4ff;
          box-shadow: 0 0 100px rgba(0,212,255,0.5);
          letter-spacing: 10px;
        }

        .art-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: #fff;
        }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#080808', color: '#fff', minHeight: '400vh', fontFamily: "'Inter', sans-serif", margin: 0, overflowX: 'hidden' },
  ambience: { 
    position: 'fixed', inset: 0, zIndex: 0,
    background: 'radial-gradient(circle at 50% 40%, #1a1a1a 0%, #080808 70%)'
  },
  content: { position: 'relative', zIndex: 10, width: '90%', maxWidth: '1400px', margin: '0 auto' },
  hero: { height: '110vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  sculptureContainer: { position: 'relative', height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1500px' },
  floorShadow: { 
    position: 'absolute', bottom: '-50px', width: '400px', height: '40px', 
    background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 80%)',
    filter: 'blur(15px)', transition: '0.2s ease-out'
  },
  textContent: { textAlign: 'center', marginTop: '50px' },
  mainTitle: { fontSize: 'clamp(3rem, 12vw, 9rem)', fontWeight: 900, lineHeight: 0.8, margin: 0 },
  artistSub: { fontSize: '0.9rem', letterSpacing: '3px', color: '#555', marginTop: '30px', textTransform: 'uppercase' },
  gallerySection: { padding: '200px 0', display: 'flex', flexDirection: 'column', gap: '200px' },
  artCard: { 
    width: 'min(500px, 100%)', padding: '60px', border: '1px solid rgba(255,255,255,0.05)', 
    background: 'rgba(255,255,255,0.01)', transition: '0.6s' 
  },
  cardNum: { fontSize: '0.7rem', opacity: 0.3, letterSpacing: '5px' },
  ctaSection: { height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  footer: { padding: '100px 0', textAlign: 'center', fontSize: '0.6rem', opacity: 0.2, letterSpacing: '10px' }
};