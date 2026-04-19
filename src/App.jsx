// ... mantieni i tuoi import sopra (React, ecc.)

export default function WebCraftSite() {
  return (
    <div style={s.page}>
      {/* Sfondo e Hero rimangono i TUOI */}
      <div style={s.spaceContainer}>
        {/* Qui va il tuo codice per le stelle e il cubo che hai già */}
      </div>

      <main style={s.content}>
        {/* TUA HERO ORIGINALE */}
        <section style={s.hero}>
          <div style={s.badge}>🚀 Web Design pensato solo per la qualità del servizio</div>
          <h1 style={s.mainTitle}>
            ESPERIENZE<br />
            <span className="stroke-text">IMMERSIVE</span><br />
            <span style={s.gradientText}>SENZA LIMITI.</span>
          </h1>
          <p style={s.heroSub}>
            Non è solo un sito. È una macchina da guerra digitale progettata con 
            ingegneria estetica e performance brutali.
          </p>
          <div>
            <button style={s.primaryBtn} onClick={() => document.getElementById('contatti').scrollIntoView({behavior: 'smooth'})}>
              Inizia il viaggio
            </button>
          </div>
        </section>

        {/* AGGIUNTA 1: I TUOI SERVIZI (Usando la tua bentoGrid) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>SERVIZI <span className="stroke-text">ELITE</span></h2>
          <div style={s.bentoGrid}>
            <div className="glass-card">
              <div style={s.icon}>⚡</div>
              <h3>Performance</h3>
              <p>Sviluppo siti con velocità di caricamento istantanea per dominare i motori di ricerca.</p>
            </div>
            <div className="glass-card">
              <div style={s.icon}>💎</div>
              <h3>Design 3D</h3>
              <p>Interfacce immersive che catturano l'attenzione e non la lasciano più andare.</p>
            </div>
            <div className="glass-card">
              <div style={s.icon}>📈</div>
              <h3>Conversion</h3>
              <p>Ogni pixel è studiato per trasformare un semplice visitatore in un cliente pagante.</p>
            </div>
          </div>
        </section>

        {/* AGGIUNTA 2: PORTFOLIO (Usando il tuo stile) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>PROGETTI <span className="stroke-text">TOP</span></h2>
          <div style={{...s.bentoGrid, gridTemplateColumns: '1fr 1fr'}}>
             <div className="glass-card">
                <div style={{height: '250px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)'}}></div>
                <h4>Project Alpha</h4>
                <p>E-commerce di lusso ad alte prestazioni.</p>
             </div>
             <div className="glass-card">
                <div style={{height: '250px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)'}}></div>
                <h4>Nexus Dashboard</h4>
                <p>Sistema di gestione dati con UI futuristica.</p>
             </div>
          </div>
        </section>

        {/* AGGIUNTA 3: CONTATTI (Usando la tua mega-cta) */}
        <section id="contatti" style={{...s.section, ...s.ctaSection}}>
          <div className="glass-card mega-cta">
            <h2 style={{fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '20px'}}>PRONTO A DECOLLARE?</h2>
            <p style={{marginBottom: '40px', fontSize: '1.2rem', color: '#aaa'}}>Mandami un messaggio e trasformiamo il tuo business.</p>
            <a href="mailto:tua-email@webcraft.site" style={{textDecoration: 'none'}}>
               <button style={s.primaryBtn}>Lavoriamo Insieme</button>
            </a>
          </div>
        </section>
      </main>

      {/* TUO CSS ORIGINALE (Invariato) */}
      <style jsx>{`
        /* Qui incolla le tue animazioni warp e stelle che hai già */
        
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

// TUOI STILI ORIGINALI (Invariati)
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