import React from "react";

export default function App() {
  // Generiamo 100 stelle con posizioni e ritardi casuali
  const stars = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 3}px`
  }));

  return (
    <div style={s.page}>
      {/* --- SFONDO SPAZIALE 3D NATIVO --- */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div 
            key={star.id} 
            className="star" 
            style={{
              position: 'absolute',
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              background: 'white',
              borderRadius: '50%',
              opacity: 0,
              boxShadow: '0 0 10px #00d4ff',
              animation: `warp ${star.duration} linear infinite`,
              animationDelay: star.delay
            }} 
          />
        ))}
      </div>

      <div style={s.content}>
        {/* HEADER */}
        <nav style={s.nav}>
          <div style={s.logo}>WEBCRAFT<span style={{color: '#00d4ff'}}>.</span></div>
          <div style={{fontSize: '0.9rem', opacity: 0.6}}>Freelance Developer</div>
        </nav>

        {/* HERO SECTION */}
        <section style={s.hero}>
          <div className="fade-in" style={s.badge}>
            🚀 Web Design pensato solo per la qualità del servizio
          </div>
          
          <h1 style={s.mainTitle}>
            NON CREO SITI.<br />
            <span className="stroke-text">COSTRUISCO</span><br />
            <span style={s.gradientText}>IMPATTO.</span>
          </h1>

          <p style={s.heroSub}>
            Trasformo la tua visione in un'esperienza digitale premium che cattura l'attenzione in meno di 3 secondi.
          </p>

          <button style={s.primaryBtn}>
            INIZIA ORA
          </button>
        </section>

        {/* SECTION CARDS - 3D HOVER EFFETTO */}
        <section style={s.gridSection}>
          <div className="card" style={s.card}>
            <div style={s.iconBlue}>⚡</div>
            <h3>VELOCITÀ LUCE</h3>
            <p>Ottimizzazione estrema per prestazioni fuori dal comune.</p>
          </div>
          <div className="card" style={s.card}>
            <div style={s.iconBlue}>💎</div>
            <h3>QUALITÀ PREMIUM</h3>
            <p>Design curato in ogni singolo pixel per trasmettere lusso.</p>
          </div>
          <div className="card" style={s.card}>
            <div style={s.iconBlue}>🛠️</div>
            <h3>SOLUZIONI 3D</h3>
            <p>Interfacce immersive che i tuoi competitor non hanno.</p>
          </div>
        </section>
      </div>

      {/* --- ANIMAZIONI CSS DIRETTE --- */}
      <style>{`
        @keyframes warp {
          0% { transform: translateZ(-500px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateZ(500px); opacity: 0; }
        }
        
        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.6);
        }

        .fade-in {
          animation: fadeIn 2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #00d4ff !important;
          background: rgba(0, 212, 255, 0.05) !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

const s = {
  page: { 
    background: '#010205', 
    color: '#fff', 
    minHeight: '200vh', // Lungo per scrollare
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
    overflowX: 'hidden'
  },
  spaceContainer: { 
    position: 'fixed', 
    inset: 0, 
    zIndex: 0, 
    perspective: '800px', // Questo crea l'effetto 3D
    background: 'radial-gradient(circle at center, #0a1020 0%, #010205 100%)'
  },
  content: { 
    position: 'relative', 
    zIndex: 1, 
    width: 'min(1200px, 90%)', 
    margin: '0 auto' 
  },
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '40px 0' 
  },
  logo: { fontSize: '1.5rem', fontWeight: '900' },
  hero: { 
    minHeight: '80vh', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center' 
  },
  badge: { 
    background: 'rgba(0,212,255,0.1)', 
    border: '1px solid rgba(0,212,255,0.3)', 
    padding: '8px 20px', 
    borderRadius: '100px', 
    color: '#00d4ff', 
    fontSize: '0.9rem', 
    marginBottom: '30px' 
  },
  mainTitle: { 
    fontSize: 'clamp(3rem, 12vw, 8rem)', 
    fontWeight: '950', 
    lineHeight: '0.9', 
    margin: 0,
    letterSpacing: '-0.04em'
  },
  gradientText: { 
    background: 'linear-gradient(to right, #fff, #00d4ff)', 
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent' 
  },
  heroSub: { 
    fontSize: '1.2rem', 
    color: '#888', 
    maxWidth: '600px', 
    marginTop: '30px',
    lineHeight: '1.6'
  },
  primaryBtn: {
    marginTop: '40px',
    background: '#fff',
    color: '#000',
    border: 'none',
    padding: '20px 50px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '100px',
    cursor: 'pointer',
    boxShadow: '0 0 30px rgba(255,255,255,0.2)'
  },
  gridSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '100px 0'
  },
  card: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.05)',
    padding: '40px',
    borderRadius: '24px',
    textAlign: 'left'
  },
  iconBlue: {
    fontSize: '2rem',
    marginBottom: '20px'
  }
};