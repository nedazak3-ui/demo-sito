import React, { useState, useEffect } from 'react';

export default function WebCraftSite() {
  const [stars, setStars] = useState([]);

  // Effetto per generare stelle di sfondo dinamiche
  useEffect(() => {
    const starArray = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      duration: Math.random() * 3 + 2 + 's',
      delay: Math.random() * 5 + 's'
    }));
    setStars(starArray);
  }, []);

  return (
    <div style={s.page}>
      {/* Background Animato */}
      <div style={s.spaceContainer}>
        {stars.map(star => (
          <div key={star.id} className="star" style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: '2px',
            height: '2px',
            background: '#fff',
            borderRadius: '50%',
            opacity: 0.5,
            animation: `pulse ${star.duration} infinite ${star.delay}`
          }} />
        ))}
      </div>

      <main style={s.content}>
        {/* HERO SECTION */}
        <section style={s.hero}>
          <div style={s.badge}>DISPONIBILE PER NUOVI PROGETTI</div>
          <h1 style={s.mainTitle}>
            WEBCRAFT<span style={s.strokeText}>.SITE</span><br />
            <span style={s.gradientText}>DIGITAL ARTISAN</span>
          </h1>
          <p style={s.heroSub}>
            Trasformo idee complesse in esperienze web ultra-veloci, 
            moderne e ad altissima conversione.
          </p>
          <div>
            <button style={s.primaryBtn} onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
              Inizia un Progetto
            </button>
          </div>
        </section>

        {/* SEZIONE SERVIZI (BENTO GRID) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>Servizi <span className="stroke-text">Premium</span></h2>
          <div style={s.bentoGrid}>
            <div className="glass-card">
              <div style={s.icon}>🚀</div>
              <h3>Performance</h3>
              <p>Siti web ottimizzati per punteggi Lighthouse 100/100. La velocità è il primo fattore di vendita.</p>
            </div>
            <div className="glass-card">
              <div style={s.icon}>🎨</div>
              <h3>Design</h3>
              <p>Interfacce uniche, studiate per il tuo brand. Niente template pre-fatti, solo artigianato digitale.</p>
            </div>
            <div className="glass-card">
              <div style={s.icon}>📱</div>
              <h3>Responsive</h3>
              <p>Esperienza perfetta su smartphone, tablet e desktop. Il tuo business ovunque.</p>
            </div>
          </div>
        </section>

        {/* SEZIONE PORTFOLIO (Anteprima) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>Progetti <span className="stroke-text">Selezionati</span></h2>
          <div style={{...s.bentoGrid, gridTemplateColumns: '1fr 1fr'}}>
             <div className="glass-card">
                <div style={{height: '200px', background: '#111', borderRadius: '20px', marginBottom: '20px'}}></div>
                <h4>E-commerce Next.js</h4>
                <p>Un negozio online fluido con pagamenti integrati.</p>
             </div>
             <div className="glass-card">
                <div style={{height: '200px', background: '#111', borderRadius: '20px', marginBottom: '20px'}}></div>
                <h4>SaaS Dashboard</h4>
                <p>Gestione dati complessi con interfaccia minimalista.</p>
             </div>
          </div>
        </section>

        {/* SEZIONE CONTATTO (MEGA CTA) */}
        <section id="contact" style={{...s.section, ...s.ctaSection}}>
          <div className="glass-card mega-cta">
            <h2 style={{fontSize: '3rem', marginBottom: '20px'}}>Hai un'idea?</h2>
            <p style={{marginBottom: '40px', fontSize: '1.2rem'}}>Parliamo di come portarla online con le migliori tecnologie attuali.</p>
            <a href="mailto:tua-email@esempio.it" style={{textDecoration: 'none'}}>
               <button style={s.primaryBtn}>Mandami una Mail</button>
            </a>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
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
          padding: 40px;
          transition: 0.4s ease;
        }
        .glass-card:hover {
          border-color: #00d4ff;
          background: rgba(0, 212, 255, 0.05);
          transform: translateY(-10px);
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
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0 },
  content: { position: 'relative', zIndex: 2, width: 'min(1200px, 90%)', margin: '0 auto' },
  hero: { minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  badge: { display: 'inline-block', margin: '0 auto 20px', background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '10px 30px', borderRadius: '50px', border: '1px solid #00d4ff', fontWeight: 'bold', fontSize: '0.9rem' },
  mainTitle: { fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', lineHeight: '1', marginBottom: '30px' },
  gradientText: { background: 'linear-gradient(to right, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1.2rem', color: '#aaa', maxWidth: '600px', margin: '0 auto 40px' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '20px 45px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '100px', cursor: 'pointer', transition: '0.3s' },
  section: { padding: '100px 0' },
  secTitle: { fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center', marginBottom: '60px', fontWeight: '900' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  icon: { fontSize: '2.5rem', marginBottom: '20px' },
  ctaSection: { paddingBottom: '150px' }
};