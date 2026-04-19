import React, { useState, useEffect, useRef } from "react";

// --- HOOK PER IL TRACCIAMENTO MOUSE 3D ---
const useMousePosition3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalizziamo le coordinate tra -1 e 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePosition;
};

export default function App() {
  const mouse = useMousePosition3D();
  const stars = Array.from({ length: 180 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 1.5}s`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 2 + 1}px`
  }));

  return (
    <div style={s.page}>
      {/* --- SFONDO STARFIELD 3D HYPERDRIVE --- */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div key={star.id} className="hyperstar" style={{
            ...s.star,
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* --- NAV BAR PRO (GLASS) --- */}
        <nav style={s.nav}>
          <div style={s.logo}>WEBCRAFT<span className="blink">_</span></div>
          <div style={s.status}><span style={s.dot}></span> ONLINE_CORE</div>
        </nav>

        {/* --- HERO SECTION CON NUCLEO ENERGETICO REATTIVO --- */}
        <section style={s.hero}>
          <div className="reveal badge" style={s.badge}>
            🚀 Web Design pensato solo per la qualità del servizio
          </div>

          {/* --- IL NUCLEO 3D INTERATTIVO (SEGUE IL MOUSE) --- */}
          <div className="scene3d">
            <div className="core-container" style={{
              transform: `rotateX(${mouse.y * 30}deg) rotateY(${mouse.x * 30}deg)`
            }}>
              <div className="core-ring pulse-ring"></div>
              <div className="core-ring second-ring"></div>
              <div className="core-sphere"></div>
            </div>
          </div>

          <h1 style={s.mainTitle}>
            INGEGNERIA <br />
            <span className="liquid-text">ESTETICA.</span> <br />
            <span className="stroke-text">NO LIMITS.</span>
          </h1>
          
          <p style={s.heroSub}>
            Progettiamo macchine da guerra digitali. Esperienze immersive ad alto 
            impatto che ridefiniscono il concetto di presenza online.
          </p>

          <button style={s.primaryBtn} className="magnet-btn">START_IMPACT</button>
        </section>

        {/* --- SEZIONE 2: BENTO GRID OLOGRAFICA (PROFONDITÀ 3D) --- */}
        <section style={s.section}>
          <h2 style={s.secTitle}>Il Campo Energetico dei Servizi</h2>
          <div style={s.bentoGrid}>
            <div className="holo-card bento-item" style={{gridColumn: 'span 2'}}>
              <div style={s.icon}>🌐</div>
              <h3>Mondi Immersivi</h3>
              <p>Non semplici siti. Creiamo ecosistemi 3D dove il tuo brand diventa un'esperienza fisica.</p>
            </div>
            <div className="holo-card bento-item">
              <div style={s.icon}>⚡</div>
              <h3>Performance</h3>
              <p>Caricamento istantaneo. Velocità che intimidisce la concorrenza.</p>
            </div>
            <div className="holo-card bento-item">
              <div style={s.icon}>🧬</div>
              <h3>Architettura</h3>
              <p>Codice scalabile React/Next.js di grado Enterprise.</p>
            </div>
            <div className="holo-card bento-item" style={{gridColumn: 'span 2'}}>
              <div style={s.icon}>🧠</div>
              <h3>AI_CORE</h3>
              <p>Integrazione di Intelligenza Artificiale per automazione e personalizzazione estrema.</p>
            </div>
          </div>
        </section>

        {/* --- CTA FINALE MONUMENTALE (PESANTE) --- */}
        <section style={s.ctaSection}>
          <div className="holo-card cta-box">
            <h2 style={{fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 900}}>VUOI DOMINARE?</h2>
            <p style={{fontSize: '1.5rem', opacity: 0.7, marginBottom: '50px'}}>Il futuro non aspetta. Scegli l'eccellenza assoluta.</p>
            <button style={s.primaryBtn}>PRENDI_IL_COMANDO</button>
          </div>
        </section>

        <footer style={s.footer}>
          © 2026 WEBCRAFT STUDIO • DIGITAL_SUPERIORITY
        </footer>
      </div>

      {/* --- CSS SUPER ENGINE OLTRE I LIMITI AZIENDALI --- */}
      <style>{`
        /* --- STELLE WARP SPEED --- */
        @keyframes hyperWarp {
          0% { transform: translateZ(-1000px); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateZ(1000px); opacity: 0; }
        }
        .hyperstar {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 15px #00d4ff;
          animation: hyperWarp infinite linear;
        }

        /* --- NUCLEO 3D INTERATTIVO CSS --- */
        .scene3d {
          width: 300px;
          height: 300px;
          perspective: 1000px;
          margin: 0 auto 50px auto;
        }
        .core-container {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s linear; /* Reattività fluida al mouse */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .core-sphere {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle at 30% 30%, #fff, #00d4ff 40%, #000 80%);
          border-radius: 50%;
          position: absolute;
          box-shadow: 0 0 100px #00d4ff, inset 0 0 30px rgba(0,212,255,0.5);
          animation: pulse 2s infinite ease-in-out;
        }
        .core-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid #00d4ff;
          box-shadow: 0 0 30px #00d4ff;
          animation: spin 10s infinite linear;
        }
        .pulse-ring { width: 220px; height: 220px; transform: rotateX(70deg); }
        .second-ring { width: 260px; height: 260px; transform: rotateX(-70deg) rotateY(45deg); animation: spinRev 15s infinite linear; }

        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 80px #00d4ff; }
          50% { transform: scale(1.1); box-shadow: 0 0 120px #7000ff, 0 0 150px #00d4ff; }
        }
        @keyframes spin { from { transform: rotateX(70deg) rotateZ(0deg); } to { transform: rotateX(70deg) rotateZ(360deg); } }
        @keyframes spinRev { from { transform: rotateX(-70deg) rotateY(45deg) rotateZ(0deg); } to { transform: rotateX(-70deg) rotateY(45deg) rotateZ(-360deg); } }

        /* --- EFFETTI TESTO AVANZATI --- */
        .liquid-text {
          background: linear-gradient(90deg, #fff, #00d4ff, #7000ff, #fff);
          background-size: 300% 100%;
          WebkitBackgroundClip: text;
          WebkitTextFillColor: transparent;
          animation: liquidFlow 10s infinite linear;
        }
        @keyframes liquidFlow { to { background-position: 300% 0; } }

        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }

        /* --- OLOGRAFICA CARD (GLASS + PROFONDITÀ) --- */
        .holo-card {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 40px;
          padding: 60px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .holo-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(0,212,255,0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .holo-card:hover {
          transform: perspective(2000px) rotateX(8deg) rotateY(${mouse.x * 5}deg) translateY(-15px);
          border-color: #00d4ff;
          box-shadow: 0 20px 80px rgba(0,212,255,0.2);
        }
        .holo-card:hover::before { transform: translateX(100%); }

        /* --- ELEMENTI INTERATTIVI --- */
        .bento-item { display: flex; flexDirection: column; gap: 20px; }
        .bento-item h3 { fontSize: 2rem; margin: 0; }
        .bento-item p { color: #888; fontSize: 1.1rem; lineHeight: 1.5; margin: 0; }

        .magnet-btn:hover {
          transform: scale(1.05) perspective(1000px) rotateX(${mouse.y * -10}deg) rotateY(${mouse.x * 10}deg);
          box-shadow: 0 0 60px #7000ff;
        }

        .cta-box { text-align: center; border: 2px solid #00d4ff; box-shadow: 0 0 50px rgba(0,212,255,0.3); }
        .blink { animation: blinker 1s linear infinite; }
        @keyframes blinker { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#010103', color: '#fff', minHeight: '100vh', fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif', overflowX: 'hidden', margin: 0 },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1200px', overflow: 'hidden' },
  content: { position: 'relative', zIndex: 2, width: 'min(1500px, 92%)', margin: '0 auto' },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px 0' },
  logo: { fontSize: '2rem', fontWeight: '900', letterSpacing: '-1px', color: '#fff' },
  status: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase' },
  dot: { width: '10px', height: '10px', borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 10px #00d4ff' },
  
  hero: { minHeight: '110vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', paddingBottom: '100px' },
  badge: { display: 'inline-block', margin: '0 auto 40px auto', background: 'rgba(0,212,255,0.05)', color: '#00d4ff', padding: '12px 30px', borderRadius: '100px', border: '1px solid rgba(0,212,255,0.3)', fontWeight: 'bold' },
  mainTitle: { fontSize: 'clamp(4rem, 15vw, 11rem)', fontWeight: '950', lineHeight: '0.82', marginBottom: '40px', letterSpacing: '-0.06em' },
  heroSub: { fontSize: '1.6rem', color: '#999', maxWidth: '850px', margin: '0 auto 60px auto', lineHeight: '1.6' },
  btnGroup: { display: 'flex', gap: '20px' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '25px 70px', fontSize: '1.3rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer', boxShadow: '0 10px 50px rgba(0,212,255,0.4)', transition: 'all 0.2s linear' },

  section: { padding: '150px 0' },
  secTitle: { fontSize: 'clamp(3rem, 6vw, 6rem)', textAlign: 'center', marginBottom: '120px', fontWeight: '900', letterSpacing: '-0.03em' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' },
  icon: { fontSize: '3.5rem', marginBottom: '20px' },
  ctaSection: { paddingBottom: '300px' },
  footer: { padding: '50px 0', textAlign: 'center', opacity: 0.2, fontSize: '0.9rem', letterSpacing: '3px' }
};