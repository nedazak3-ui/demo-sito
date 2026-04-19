import React, { useState, useEffect } from "react";

const useMouse = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setPos({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return pos;
};

export default function App() {
  const mouse = useMouse();
  
  // Creiamo un'armata di 200 particelle con traiettorie diverse
  const particles = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    tx: Math.random() * 2000 - 1000,
    ty: Math.random() * 2000 - 1000,
    tz: Math.random() * 1000,
    s: Math.random() * 2 + 1,
    d: Math.random() * 10 + 5
  }));

  return (
    <div style={s.page}>
      {/* --- SFONDO QUANTUM FLUID (WOW FACTOR) --- */}
      <div style={s.canvas}>
        {particles.map((p) => (
          <div key={p.id} className="particle" style={{
            width: p.s, height: p.s,
            transform: `translate3d(${p.tx + (mouse.x * 100)}px, ${p.ty + (mouse.y * 100)}px, ${p.tz}px)`,
            animationDuration: `${p.d}s`,
            animationDelay: `-${Math.random() * 10}s`
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* NAV MINIMALISTA */}
        <nav style={s.nav}>
          <div style={s.logo}>WEBCRAFT<span style={{color:'#00d4ff'}}>®</span></div>
          <div style={s.contactLink}>DISPONIBILE PER PROGETTI 2026</div>
        </nav>

        {/* --- HERO SECTION: L'EFFETTO OLOGRAFICO --- */}
        <section style={s.hero}>
          <div style={{...s.glow, transform: `translate(${mouse.x * 50}px, ${mouse.y * 50}px)`}} />
          
          <h1 style={s.title}>
            <span className="reveal-text">WEBDESIGN</span><br />
            <span className="outline-text">BEYOND</span><br />
            <span className="glitch-text" data-text="REALITY">REALITY</span>
          </h1>

          <div style={s.heroFooter}>
            <p style={s.subText}>
              Ingegneria estetica per chi non accetta compromessi. <br />
              Costruiamo il futuro del web, un pixel alla volta.
            </p>
            <button className="cta-button">ESPLORA L'IMPATTO</button>
          </div>
        </section>

        {/* --- SECTION 2: IL BENTO BOX PROFESSIONALE --- */}
        <section style={s.gridSection}>
          <div className="card-3d" style={s.cardLarge}>
            <div className="card-content">
              <h2>01. IMMERSIONE</h2>
              <p>Interfacce che respirano e reagiscono all'utente in tempo reale.</p>
            </div>
          </div>
          <div className="card-3d" style={s.cardSmall}>
            <div className="card-content">
              <h2>02. VELOCITÀ</h2>
              <p>Ottimizzazione bruta.</p>
            </div>
          </div>
          <div className="card-3d" style={s.cardSmall}>
            <div className="card-content">
              <h2>03. IA</h2>
              <p>Core intelligente.</p>
            </div>
          </div>
        </section>

        <footer style={s.footer}>DESIGNED BY WEBCRAFT • TOKYO // MILANO // NEW YORK</footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');

        .particle {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          opacity: 0.3;
          box-shadow: 0 0 10px #00d4ff;
          animation: float infinite linear;
        }

        @keyframes float {
          0% { opacity: 0; transform: translate3d(var(--tx), var(--ty), -1000px); }
          50% { opacity: 0.6; }
          100% { opacity: 0; transform: translate3d(0, 0, 1000px); }
        }

        .reveal-text {
          animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1);
        }

        @keyframes reveal {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.6);
        }

        .glitch-text {
          position: relative;
          color: #fff;
        }

        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          background: #000;
          overflow: hidden;
          animation: glitch 2s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% { clip-path: inset(10% 0 30% 0); }
          100% { clip-path: inset(80% 0 5% 0); }
        }

        .cta-button {
          background: #fff;
          color: #000;
          border: none;
          padding: 20px 45px;
          font-family: 'Syncopate', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 3px;
          cursor: pointer;
          transition: 0.4s;
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        }

        .cta-button:hover {
          background: #00d4ff;
          transform: scale(1.1);
          box-shadow: 0 0 50px rgba(0,212,255,0.6);
        }

        .card-3d {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          padding: 40px;
          transition: 0.5s;
        }

        .card-3d:hover {
          background: rgba(0, 212, 255, 0.05);
          border-color: #00d4ff;
          transform: translateY(-20px) rotateY(10deg);
        }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'Syncopate', sans-serif", margin: 0, overflowX: 'hidden' },
  canvas: { position: 'fixed', inset: 0, perspective: '1500px', zIndex: 0 },
  content: { position: 'relative', zIndex: 2, width: '90%', maxWidth: '1400px', margin: '0 auto' },
  nav: { display: 'flex', justifyContent: 'space-between', padding: '60px 0', fontSize: '0.7rem', letterSpacing: '4px' },
  logo: { fontWeight: 700, fontSize: '1.2rem' },
  contactLink: { opacity: 0.5 },
  hero: { height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' },
  glow: { position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)', top: '20%', left: '20%', pointerEvents: 'none' },
  title: { fontSize: 'clamp(3rem, 12vw, 9rem)', lineHeight: '0.9', margin: 0, fontWeight: 700 },
  heroFooter: { marginTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' },
  subText: { fontSize: '1rem', color: '#888', maxWidth: '500px', lineHeight: '1.8', textTransform: 'uppercase', letterSpacing: '1px' },
  gridSection: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '100px 0' },
  cardLarge: { gridColumn: 'span 2', height: '400px' },
  cardSmall: { height: '400px' },
  footer: { padding: '100px 0', textAlign: 'center', fontSize: '0.6rem', opacity: 0.3, letterSpacing: '5px' }
};