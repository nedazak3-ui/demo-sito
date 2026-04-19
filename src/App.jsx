import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

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
      {/* NAVBAR CON CLERK INTEGRATO */}
      <nav style={{
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 100, 
        padding: '20px 0', 
        background: 'rgba(0,0,0,0.7)', 
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{width: 'min(1400px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{fontWeight: '900', fontSize: '1.4rem', letterSpacing: '2px', color: '#00d4ff'}}>WEBCRAFT</div>
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            
            <SignedOut>
              <SignInButton mode="modal">
                <button style={{background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold'}}>ACCEDI</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button style={{
                  background: '#00d4ff', 
                  color: '#000', 
                  border: 'none', 
                  padding: '10px 25px', 
                  borderRadius: '50px', 
                  fontWeight: '900', 
                  cursor: 'pointer',
                  boxShadow: '0 0 15px rgba(0,212,255,0.4)'
                }}>REGISTRATI</button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

          </div>
        </div>
      </nav>

      {/* SFONDO WARP VELOCITÀ LUCE */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div key={star.id} className="starburst" style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* HERO SECTION */}
        <section style={s.hero}>
          <div className="reveal" style={s.badge}>
            🚀 Soluzioni Web ad alte prestazioni
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
            Scegli il piano perfetto per le tue esigenze e accedi alla tua area riservata per gestire i tuoi progetti in tempo reale.
          </p>

          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
            VEDI TUTTI I PIANI DI SERVIZIO
          </button>
        </section>

        {/* SECTION 2: GRID SERVIZI */}
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
          </div>
        </section>

        {/* PIANI DI ABBONAMENTO */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>PIANI DI <span className="stroke-text">ABBONAMENTO</span></h2>
          <div style={s.bentoGrid}>
            
            <div className="glass-card" style={s.bentoItem}>
              <div style={s.icon}>🛰️</div>
              <h3>STARTER</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0', color: '#00d4ff'}}>€499</div>
              <ul style={{textAlign: 'left', padding: '0', listStyle: 'none', lineHeight: '2', fontSize: '0.9rem', opacity: 0.8}}>
                <li>✅ 1 Pagina Web Immersiva</li>
                <li>✅ Design 3D Standard</li>
                <li>✅ Hosting Annuale</li>
              </ul>
              <button style={{...s.primaryBtn, padding: '15px', width: '100%', fontSize: '1rem', marginTop: '20px'}}>ACQUISTA ORA</button>
            </div>

            <div className="glass-card" style={{...s.bentoItem, borderColor: '#00d4ff', boxShadow: '0 0 30px rgba(0,212,255,0.2)'}}>
              <div style={s.icon}>🚀</div>
              <h3 style={{color: '#00d4ff'}}>PRO BUSINESS</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0'}}>€1.299</div>
              <ul style={{textAlign: 'left', padding: '0', listStyle: 'none', lineHeight: '2', fontSize: '0.9rem'}}>
                <li>✅ E-commerce & Multi-page</li>
                <li>✅ AREA RISERVATA CLIENTI</li>
                <li>✅ Gestione Progetti Real-time</li>
                <li>✅ Supporto Prioritario</li>
              </ul>
              <button style={{...s.primaryBtn, background: '#00d4ff', color: '#000', padding: '15px', width: '100%', fontSize: '1rem', marginTop: '20px'}}>ACQUISTA ORA</button>
            </div>

            <div className="glass-card" style={s.bentoItem}>
              <div style={s.icon}>🛸</div>
              <h3>CUSTOM AI</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0', color: '#00d4ff'}}>PREVENTIVO</div>
              <ul style={{textAlign: 'left', padding: '0', listStyle: 'none', lineHeight: '2', fontSize: '0.9rem', opacity: 0.8}}>
                <li>✅ Integrazione AI Personale</li>
                <li>✅ Dashboard su misura</li>
                <li>✅ Scalabilità Infinita</li>
              </ul>
              <button style={{...s.primaryBtn, padding: '15px', width: '100%', fontSize: '1rem', marginTop: '20px'}}>CONTATTACI</button>
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section style={s.ctaSection}>
          <div className="glass-card mega-cta">
            <h2 style={{fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900}}>PRONTO A DOMINARE?</h2>
            <p style={{fontSize: '1.5rem', opacity: 0.7, marginBottom: '40px'}}>Non aspettare che lo faccia la concorrenza.</p>
            <button style={s.primaryBtn}>PARLIAMO DEL TUO PROGETTO</button>
          </div>
        </section>
      </div>

      <style>{`
        .scene { width: 200px; height: 200px; perspective: 600px; margin: 40px auto; }
        .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; }
        .face { position: absolute; width: 200px; height: 200px; border: 2px solid #00d4ff; background: rgba(0, 212, 255, 0.1); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; color: #00d4ff; backdrop-filter: blur(5px); }
        .front { transform: rotateY(0deg) translateZ(100px); }
        .back { transform: rotateY(180deg) translateZ(100px); }
        .right { transform: rotateY(90deg) translateZ(100px); }
        .left { transform: rotateY(-90deg) translateZ(100px); }
        .top { transform: rotateX(90deg) translateZ(100px); }
        .bottom { transform: rotateX(-90deg) translateZ(100px); }
        @keyframes rotateCube { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes warp { 0% { transform: translateZ(-1000px); opacity: 0; } 20% { opacity: 1; } 100% { transform: translateZ(500px); opacity: 0; } }
        .starburst { position: absolute; background: white; border-radius: 50%; box-shadow: 0 0 10px #00d4ff; animation: warp infinite linear; }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; padding: 40px; transition: 0.4s; }
        .glass-card:hover { border-color: #00d4ff; background: rgba(0, 212, 255, 0.05); transform: perspective(1000px) rotateX(5deg) translateY(-10px); }
        .mega-cta { text-align: center; background: linear-gradient(135deg, rgba(0,212,255,0.1) 0%, transparent 100%); border: 1px solid #00d4ff; }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', overflowX: 'hidden' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, width: 'min(1400px, 90%)', margin: '0 auto', paddingTop: '100px' },
  hero: { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  badge: { display: 'inline-block', margin: '0 auto 20px', background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '10px 30px', borderRadius: '50px', border: '1px solid #00d4ff', fontWeight: 'bold' },
  mainTitle: { fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', lineHeight: '0.85', marginBottom: '30px' },
  gradientText: { background: 'linear-gradient(to right, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1.2rem', color: '#aaa', maxWidth: '750px', margin: '0 auto 40px' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '20px 50px', fontSize: '1.1rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer', boxShadow: '0 0 30px rgba(0,212,255,0.3)' },
  section: { padding: '100px 0' },
  secTitle: { fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center', marginBottom: '80px', fontWeight: '900' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  bentoItem: { display: 'flex', flexDirection: 'column', gap: '15px' },
  icon: { fontSize: '2.5rem' },
  ctaSection: { paddingBottom: '150px' }
};