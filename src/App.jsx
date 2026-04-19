import React from "react";

export default function App() {
  const stars = Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`,
    size: `${Math.random() * 2 + 1}px`
  }));

  return (
    <div style={s.page}>
      {/* SFONDO WARP VELOCITÀ LUCE */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div key={star.id} className="starburst" style={{
            ...s.star,
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* HERO SECTION CON CUBO 3D GEOMETRICO */}
        <section style={s.hero}>
          <div className="reveal" style={s.badge}>
            🚀 Web Design pensato solo per la qualità del servizio
          </div>

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

          <h1 style={s.mainTitle}>
            ESPERIENZE <br />
            <span className="stroke-text">IMMERSIVE</span> <br />
            <span style={s.gradientText}>SENZA LIMITI.</span>
          </h1>
          
          <p style={s.heroSub}>
            Non è solo un sito. È una macchina da guerra digitale progettata 
            con ingegneria estetica e performance brutali.
          </p>

          <button style={s.primaryBtn} onClick={() => document.getElementById('contatti').scrollIntoView({behavior: 'smooth'})}>
            SCATENA IL POTENZIALE
          </button>
        </section>

        {/* SECTION 2: GRID INTERATTIVA */}
        <section style={s.section}>
          <h2 style={s.secTitle}>L'Ingegneria del Successo</h2>
          <div style={s.bentoGrid}>
            <div className="glass-card" style={{...s.bentoItem, gridColumn: 'span 2'}}>
              <div style={s.icon}>🌐</div>
              <h3>Ecosistemi Digitali</h3>
              <p>Creiamo mondi, non semplici pagine. Ogni interazione è studiata per lasciare l'utente a bocca aperta.</p>
            </div>
            <div className="glass-card" style={s.bentoItem}>
              <div style={s.icon}>🛡️</div>
              <h3>Sicurezza Elite</h3>
              <p>Codice blindato e infrastrutture cloud ultra-sicure.</p>
            </div>
            <div className="glass-card" style={s.bentoItem}>
              <div style={s.icon}>☄️</div>
              <h3>Interfacce 3D</h3>
              <p>Navigazione spaziale che distrugge la concorrenza.</p>
            </div>
            <div className="glass-card" style={{...s.bentoItem, gridColumn: 'span 2'}}>
              <div style={s.icon}>🤖</div>
              <h3>AI Integration</h3>
              <p>Sistemi intelligenti che automatizzano il tuo business mentre dormi.</p>
            </div>
          </div>
        </section>

        {/* AGGIUNTA: SEZIONE PORTFOLIO (Sempre stile Glassmorphism) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>Progetti <span className="stroke-text">Selezionati</span></h2>
          <div style={{...s.bentoGrid, gridTemplateColumns: '1fr 1fr'}}>
             <div className="glass-card">
                <div style={{height: '250px', background: 'rgba(0,212,255,0.05)', borderRadius: '20px', marginBottom: '20px', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem'}}>📱</div>
                <h4>Nexus E-commerce</h4>
                <p>Un'esperienza di acquisto fluida con performance da record.</p>
             </div>
             <div className="glass-card">
                <div style={{height: '250px', background: 'rgba(0,212,255,0.05)', borderRadius: '20px', marginBottom: '20px', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem'}}>💻</div>
                <h4>SaaS Dashboard</h4>
                <p>Interfaccia di controllo per sistemi cloud complessi.</p>
             </div>
          </div>
        </section>

        {/* CTA FINALE MONUMENTALE */}
        <section id="contatti" style={s.ctaSection}>
          <div className="glass-card mega-cta">
            <h2 style={{fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900}}>PRONTO A DOMINARE?</h2>
            <p style={{fontSize: '1.5rem', opacity: 0.7, marginBottom: '40px'}}>La mediocrità non è un'opzione. Scegli l'eccellenza.</p>
            <a href="mailto:tua-email@webcraft.site" style={{textDecoration: 'none'}}>
               <button style={s.primaryBtn}>CONTATTACI ORA</button>
            </a>
          </div>
        </section>
      </div>

      <style>{`
        /* CUBO 3D CSS */
        .scene {
          width: 200px;
          height: 200px;
          perspective: 600px;
          margin: 40px auto;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 15s infinite linear;
        }
        .face {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 2px solid #00d4ff;
          background: rgba(0, 212, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          color: #00d4ff;
          backdrop-filter: blur(5px);
        }
        .front  { transform: rotateY(0deg) translateZ(100px); }
        .back   { transform: rotateY(180deg) translateZ(100px); }
        .right  { transform: rotateY(90deg) translateZ(100px); }
        .left   { transform: rotateY(-90deg) translateZ(100px); }
        .top    { transform: rotateX(90deg) translateZ(100px); }
        .bottom { transform: rotateX(-90deg) translateZ(100px); }

        @keyframes rotateCube {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }

        /* STELLE 3D */
        @keyframes warp {
          0% { transform: translateZ(-1000px); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateZ(500px); opacity: 0; }
        }
        .starburst {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px #00d4ff;
          animation: warp infinite linear;
        }

        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          padding: 60px;
          transition: 0.4s;
        }
        .glass-card:hover {
          border-color: #00d4ff;
          background: rgba(0, 212, 255, 0.05);
          transform: perspective(1000px) rotateX(5deg) translateY(-10px);
        }
        .mega-cta {
          text-align: center;
          background: linear-gradient(135deg, rgba(0,212,255,0.1) 0%, transparent 100%);
          border: 1px solid #00d4ff;
        }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', overflowX: 'hidden' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, width: 'min(1400px, 90%)', margin: '0 auto' },
  hero: { minHeight: '110vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  badge: { display: 'inline-block', margin: '0 auto 20px', background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '10px 30px', borderRadius: '50px', border: '1px solid #00d4ff', fontWeight: 'bold' },
  mainTitle: { fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: '900', lineHeight: '0.85', marginBottom: '30px' },
  gradientText: { background: 'linear-gradient(to right, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1.4rem', color: '#aaa', maxWidth: '750px', margin: '0 auto 40px' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '25px 60px', fontSize: '1.2rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer', boxShadow: '0 0 40px rgba(0,212,255,0.5)' },
  section: { padding: '150px 0' },
  secTitle: { fontSize: 'clamp(2.5rem, 5vw, 5rem)', textAlign: 'center', marginBottom: '100px', fontWeight: '900' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' },
  bentoItem: { display: 'flex', flexDirection: 'column', gap: '20px' },
  icon: { fontSize: '3rem' },
  ctaSection: { paddingBottom: '200px' }
};