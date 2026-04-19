import React from "react";
import { ArrowRight, Sparkles, Zap, Code, Smartphone, mouse } from "lucide-react";

export default function App() {
  return (
    <div style={s.page}>
      {/* SFONDO 3D SPAZIALE NATIVO */}
      <div style={s.spaceContainer}>
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star" style={{
            ...s.star,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
          }} />
        ))}
      </div>

      <div style={s.content}>
        {/* HEADER */}
        <nav style={s.nav}>
          <div style={s.logo}>WEBCRAFT<span style={{color: '#00d4ff'}}>.</span></div>
          <button style={s.navBtn}>PROGETTI</button>
        </nav>

        {/* SECTION 1: HERO - IMPATTO TOTALE */}
        <section style={s.hero}>
          <div className="reveal" style={s.badge}>
            🚀 Web Design pensato solo per la qualità del servizio
          </div>
          <h1 style={s.mainTitle}>
            NON CREO SITI.<br />
            <span className="outline-text">COSTRUISCO</span><br />
            <span style={s.gradientText}>IMPATTO.</span>
          </h1>
          <p style={s.heroSub}>
            Freelance specializzato in esperienze digitali che lasciano il segno. 
            Design audace, velocità estrema, conversione garantita.
          </p>
          <div style={s.btnGroup}>
            <button style={s.primaryBtn}>INIZIA ORA <ArrowRight size={18} /></button>
            <button style={s.secondaryBtn}>IL MIO METODO</button>
          </div>
        </section>

        {/* SECTION 2: PERCHÉ WEBCRAFT (LUNGA) */}
        <section style={s.section}>
          <h2 style={s.sectionTitle}>PERCHÉ SCEGLIERE IL TOP <Sparkles /></h2>
          <div style={s.grid}>
            <div style={s.card}>
              <Zap size={40} color="#00d4ff" />
              <h3>VELOCITÀ BRUTALE</h3>
              <p>Siti che caricano in meno di 1 secondo. Il tempo è denaro, non ne faccio perdere ai tuoi clienti.</p>
            </div>
            <div style={s.card}>
              <Code size={40} color="#00d4ff" />
              <h3>CODICE SU MISURA</h3>
              <p>Niente template pronti. Ogni linea di codice è scritta per massimizzare le tue prestazioni.</p>
            </div>
            <div style={s.card}>
              <Smartphone size={40} color="#00d4ff" />
              <h3>MOBILE FIRST</h3>
              <p>Il 90% dei tuoi clienti ti vedrà da uno smartphone. Il mio design è perfetto su ogni schermo.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: CTA FINALE */}
        <section style={{...s.section, paddingBottom: '200px'}}>
          <div style={s.ctaBox}>
            <h2 style={{fontSize: '3rem', margin: 0}}>PRONTO AL SALTO DI QUALITÀ?</h2>
            <p style={{opacity: 0.7, fontSize: '1.2rem'}}>Smettila di essere invisibile. Diventa indimenticabile.</p>
            <button style={{...s.primaryBtn, margin: '0 auto'}}>PARLIAMO DEL TUO PROGETTO</button>
          </div>
        </section>
      </div>

      {/* CSS IN JS PER ANIMAZIONI NATIVE */}
      <style>{`
        @keyframes travel {
          from { transform: translateZ(0); opacity: 0; }
          to { transform: translateZ(1000px); opacity: 1; }
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px #00d4ff;
          animation: travel 4s infinite linear;
        }
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.5);
        }
        .reveal {
          animation: fadeIn 1.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#02040a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '500px', overflow: 'hidden' },
  content: { position: 'relative', zIndex: 1, padding: '0 5%' },
  nav: { display: 'flex', justifyContent: 'space-between', padding: '40px 0', alignItems: 'center' },
  logo: { fontSize: '1.8rem', fontWeight: '900', letterSpacing: '-1px' },
  navBtn: { background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer' },
  hero: { minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  badge: { background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '10px 20px', borderRadius: '50px', fontSize: '0.9rem', marginBottom: '20px', border: '1px solid #00d4ff' },
  mainTitle: { fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', lineHeight: '0.9', margin: '20px 0' },
  gradientText: { background: 'linear-gradient(90deg, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1.2rem', color: '#888', maxWidth: '600px', margin: '0 auto 40px' },
  btnGroup: { display: 'flex', gap: '20px' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '18px 40px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' },
  secondaryBtn: { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '18px 40px', borderRadius: '50px', cursor: 'pointer' },
  section: { padding: '150px 0' },
  sectionTitle: { fontSize: '3rem', textAlign: 'center', marginBottom: '80px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  card: { background: 'rgba(255,255,255,0.02)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' },
  ctaBox: { background: 'linear-gradient(180deg, rgba(0,212,255,0.1) 0%, transparent 100%)', padding: '100px 50px', borderRadius: '50px', textAlign: 'center', border: '1px solid rgba(0,212,255,0.2)', display: 'grid', gap: '30px' }
};