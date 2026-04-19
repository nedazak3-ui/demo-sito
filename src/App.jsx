import React, { useState, useEffect, useRef } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";

export default function App() {
  const { isSignedIn } = useAuth();
  
  // STATI ESISTENTI E NUOVI
  const [flippedCard, setFlippedCard] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Sistemi Webcraft online. Sono l\'AI di supporto. Come posso aiutarti?' }
  ]);
  const [showLegal, setShowLegal] = useState(false);

  const chatEndRef = useRef(null);
  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const LINK_STARTER = "https://buy.stripe.com/4gMeV61DwfrygKf0tC0sU00";
  const LINK_PRO = "https://buy.stripe.com/14AaEQ4PI4MU8dJb8g0sU01";

  // LOGICA CHATBOT IA
  const handleChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = { role: 'user', content: chatInput };
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      let reply = "Analisi in corso... I nostri sistemi 3D sono progettati per massimizzare le conversioni. Vuoi conoscere i dettagli dei nostri pacchetti?";
      const input = chatInput.toLowerCase();
      if (input.includes("prezzo") || input.includes("costa")) reply = "Starter: €499. Pro Business: €1.299. Custom AI: su preventivo.";
      if (input.includes("tempo") || input.includes("consegna")) reply = "Una Landing Page richiede circa 7 giorni. Un E-commerce 15-20 giorni.";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    }, 800);
  };

  const handlePurchase = (link) => {
    if (!isSignedIn) {
      alert("Per procedere con l'acquisto, devi prima registrarti o accedere.");
      return; 
    }
    window.location.href = link;
  };

  const stars = Array.from({ length: 120 }).map((_, i) => ({
    id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`, size: `${Math.random() * 2 + 1}px`
  }));

  return (
    <div style={s.page}>
      {/* NAVBAR */}
      <nav style={s.navbar}>
        <div style={s.navContainer}>
          <div style={s.logo}>WEBCRAFT</div>
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <SignedOut>
              <SignInButton mode="modal">
                <button style={s.navLink}>ACCEDI</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button style={s.navBtn}>REGISTRATI</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
          </div>
        </div>
      </nav>

      {/* SFONDO WARP */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div key={star.id} className="starburst" style={{top: star.top, left: star.left, width: star.size, height: star.size, animationDuration: star.duration}} />
        ))}
      </div>

      <div style={s.content}>
        {/* HERO SECTION */}
        <section style={s.hero}>
          <div className="reveal" style={s.badge}>🚀 Soluzioni Web ad alte prestazioni</div>
          <div className="scene">
            <div className="cube">
              <div className="face front">WEBCRAFT</div><div className="face back">FUTURE</div>
              <div className="face right">DESIGN</div><div className="face left">IMPACT</div>
              <div className="face top">3D</div><div className="face bottom">CODE</div>
            </div>
          </div>
          <h1 style={s.mainTitle}>ESPERIENZE <br /><span className="stroke-text">IMMERSIVE</span> <br /><span style={s.gradientText}>SENZA LIMITI.</span></h1>
          <p style={s.heroSub}>Scegli il piano perfetto per le tue esigenze e accedi alla tua area riservata per gestire i tuoi progetti in tempo reale.</p>
          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>VEDI TUTTI I PIANI</button>
        </section>

        {/* TRUST BAR (MARQUEE) */}
        <div className="marquee-container">
          <div className="marquee">
            <span>REACT • STRIPE • OPENAI • VERCEL • CLERK • THREE.JS • NODE.JS • TAILWIND • </span>
            <span>REACT • STRIPE • OPENAI • VERCEL • CLERK • THREE.JS • NODE.JS • TAILWIND • </span>
          </div>
        </div>

        {/* METODO WEBCRAFT */}
        <section style={s.section}>
          <h2 style={s.secTitle}>IL NOSTRO <span className="stroke-text">METODO</span></h2>
          <div style={s.bentoGrid}>
            {[ {n: "01", t: "Analisi", d: "Briefing strategico per definire i tuoi obiettivi."},
               {n: "02", t: "Design 3D", d: "Progettazione dell'interfaccia immersiva."},
               {n: "03", t: "Sviluppo", d: "Codice pulito, veloce e ottimizzato."},
               {n: "04", t: "Lancio", d: "Deploy e ottimizzazione SEO finale."}
            ].map((step, i) => (
              <div key={i} className="glass-card" style={{...s.bentoItem, padding: '30px'}}>
                <div style={{fontSize: '2rem', fontWeight: '900', color: '#00d4ff'}}>{step.n}</div>
                <h3>{step.t}</h3>
                <p style={{fontSize: '0.9rem', opacity: 0.6, textAlign: 'center'}}>{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PIANI DI ABBONAMENTO */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>PIANI DI <span className="stroke-text">ABBONAMENTO</span></h2>
          <div style={s.bentoGrid}>
            
            {/* STARTER */}
            <div className={`flip-card ${flippedCard === 'starter' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass-card" style={s.bentoItem}>
                  <div style={s.icon}>🛰️</div>
                  <h3>STARTER</h3>
                  <div style={s.price}>€499</div>
                  <button style={s.cardBtn} onClick={() => setFlippedCard('starter')}>ACQUISTA ORA</button>
                </div>
                <div className="flip-card-back glass-card" style={s.bentoItem}>
                  <h3 style={{color: '#00d4ff'}}>DETTAGLI</h3>
                  <p style={s.detailsText}>Landing Page 3D, SEO, Hosting 1 anno, 1 revisione inclusa.</p>
                  <button style={s.confirmBtn} onClick={() => handlePurchase(LINK_STARTER)}>CONFERMA</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>

            {/* PRO */}
            <div className={`flip-card ${flippedCard === 'pro' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass-card" style={{...s.bentoItem, borderColor: '#00d4ff'}}>
                  <div style={s.icon}>🚀</div>
                  <h3 style={{color: '#00d4ff'}}>PRO BUSINESS</h3>
                  <div style={s.price}>€1.299</div>
                  <button style={{...s.cardBtn, background: '#00d4ff', color: '#000'}} onClick={() => setFlippedCard('pro')}>ACQUISTA ORA</button>
                </div>
                <div className="flip-card-back glass-card" style={{...s.bentoItem, borderColor: '#00d4ff'}}>
                  <h3 style={{color: '#00d4ff'}}>DETTAGLI PRO</h3>
                  <p style={s.detailsText}>E-commerce completo, Area Clienti, Supporto VIP H24.</p>
                  <button style={s.confirmBtn} onClick={() => handlePurchase(LINK_PRO)}>CONFERMA</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>

            {/* CUSTOM AI */}
            <div className={`flip-card ${flippedCard === 'custom' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass-card" style={s.bentoItem}>
                  <div style={s.icon}>🛸</div>
                  <h3>CUSTOM AI</h3>
                  <div style={s.price}>PREVENTIVO</div>
                  <button style={s.cardBtn} onClick={() => setFlippedCard('custom')}>CONTATTACI</button>
                </div>
                <div className="flip-card-back glass-card" style={s.bentoItem}>
                  <h3 style={{color: '#00d4ff'}}>SU MISURA</h3>
                  <p style={s.detailsText}>Integrazione AI personalizzata e scalabilità infinita.</p>
                  <button style={s.confirmBtn} onClick={() => window.location.href = 'mailto:info@webcraft.site'}>SCRIVICI</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA FINALE */}
        <section style={s.ctaSection}>
          <div className="glass-card mega-cta" style={{padding: '60px', textAlign: 'center'}}>
            <h2 style={{fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, marginBottom: '30px'}}>PRONTO A DOMINARE?</h2>
            <button style={s.primaryBtn} onClick={() => setIsChatOpen(true)}>PARLA CON LA NOSTRA AI</button>
          </div>
        </section>
      </div>

      {/* AI BOT UI */}
      <div style={s.botContainer}>
        {isChatOpen && (
          <div className="glass-card" style={s.chatWindow}>
            <div style={s.chatHeader}>WEBCRAFT AI ASSISTANT</div>
            <div style={s.chatBody}>
              {messages.map((m, i) => (
                <div key={i} style={{...s.msg, alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? '#00d4ff' : 'rgba(255,255,255,0.1)', color: m.role === 'user' ? '#000' : '#fff'}}>
                  {m.content}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleChat} style={s.chatFooter}>
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Fai una domanda..." style={s.chatInput} />
            </form>
          </div>
        )}
        <button onClick={() => setIsChatOpen(!isChatOpen)} style={s.botTrigger}>
          {isChatOpen ? "✕" : "🤖"}
        </button>
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/vostro_numero" target="_blank" style={s.whatsapp}>💬</a>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.footerGrid}>
          <div>
            <div style={s.logo}>WEBCRAFT</div>
            <p style={{opacity: 0.4, fontSize: '0.7rem'}}>P.IVA 01234567890 • Turin, Italy</p>
          </div>
          <div style={{display: 'flex', gap: '30px'}}>
            <button onClick={() => setShowLegal(true)} style={s.footerBtn}>Privacy & Termini</button>
            <a href="mailto:info@webcraft.site" style={s.footerBtn}>Contatti</a>
          </div>
        </div>
      </footer>

      {/* MODALE LEGALE */}
      {showLegal && (
        <div style={s.modalOverlay} onClick={() => setShowLegal(false)}>
          <div style={s.modal} onClick={e => e.stopPropagation()}>
            <h3>Legal & Privacy</h3>
            <p style={{fontSize: '0.8rem', opacity: 0.7, lineHeight: '1.6'}}>Tutti i pagamenti sono processati via Stripe. I dati sono trattati secondo il GDPR. Consegna dei servizi entro 30 giorni.</p>
            <button style={{...s.primaryBtn, marginTop: '20px'}} onClick={() => setShowLegal(false)}>CHIUDI</button>
          </div>
        </div>
      )}

      <style>{`
        .marquee-container { overflow: hidden; white-space: nowrap; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); padding: 25px 0; margin-bottom: 50px; }
        .marquee { display: flex; animation: scroll 25s linear infinite; }
        .marquee span { padding-left: 50px; font-weight: 900; opacity: 0.2; font-size: 1.5rem; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .flip-card { perspective: 1000px; min-height: 420px; }
        .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
        .flip-card.active .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px; box-sizing: border-box; }
        .flip-card-back { transform: rotateY(180deg); background: rgba(0,212,255,0.1) !important; }
        .scene { width: 200px; height: 200px; perspective: 600px; margin: 40px auto; }
        .cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; }
        .face { position: absolute; width: 200px; height: 200px; border: 2px solid #00d4ff; background: rgba(0, 212, 255, 0.1); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; color: #00d4ff; backdrop-filter: blur(5px); }
        .front { transform: rotateY(0deg) translateZ(100px); } .back { transform: rotateY(180deg) translateZ(100px); }
        .right { transform: rotateY(90deg) translateZ(100px); } .left { transform: rotateY(-90deg) translateZ(100px); }
        .top { transform: rotateX(90deg) translateZ(100px); } .bottom { transform: rotateX(-90deg) translateZ(100px); }
        @keyframes rotateCube { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        .starburst { position: absolute; background: white; border-radius: 50%; box-shadow: 0 0 10px #00d4ff; animation: warp infinite linear; }
        @keyframes warp { 0% { transform: translateZ(-1000px); opacity: 0; } 100% { transform: translateZ(500px); opacity: 0; } }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; transition: 0.4s; }
        .mega-cta { border: 1px solid #00d4ff; }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', overflowX: 'hidden' },
  navbar: { position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 0', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  navContainer: { width: 'min(1400px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: '1.4rem', letterSpacing: '2px', color: '#00d4ff' },
  navLink: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' },
  navBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '10px 25px', borderRadius: '50px', fontWeight: '900', cursor: 'pointer', boxShadow: '0 0 15px rgba(0,212,255,0.4)' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, width: 'min(1400px, 90%)', margin: '0 auto', paddingTop: '100px' },
  hero: { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  badge: { display: 'inline-block', margin: '0 auto 20px', background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '10px 30px', borderRadius: '50px', border: '1px solid #00d4ff', fontWeight: 'bold' },
  mainTitle: { fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', lineHeight: '0.85', marginBottom: '30px' },
  gradientText: { background: 'linear-gradient(to right, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1.2rem', color: '#aaa', maxWidth: '750px', margin: '0 auto 40px' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '20px 50px', fontSize: '1.1rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer', boxShadow: '0 0 30px rgba(255,255,255,0.3)' },
  section: { padding: '100px 0' },
  secTitle: { fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center', marginBottom: '80px', fontWeight: '900' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  bentoItem: { display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' },
  icon: { fontSize: '3.5rem' },
  price: { fontSize: '3rem', fontWeight: 'bold', color: '#00d4ff', margin: '15px 0' },
  cardBtn: { background: '#fff', color: '#000', border: 'none', padding: '15px', width: '100%', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' },
  confirmBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '15px', width: '100%', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' },
  backLink: { background: 'none', color: '#fff', border: '1px solid #fff', padding: '10px', borderRadius: '50px', cursor: 'pointer', width: '100%' },
  detailsText: { fontSize: '1rem', opacity: 0.8, textAlign: 'center', marginBottom: '20px' },
  botContainer: { position: 'fixed', bottom: '30px', right: '30px', zIndex: 1001, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
  botTrigger: { width: '60px', height: '60px', borderRadius: '50%', background: '#00d4ff', border: 'none', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 5px 15px rgba(0,212,255,0.4)' },
  chatWindow: { width: '320px', height: '450px', marginBottom: '15px', borderRadius: '25px', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid rgba(0,212,255,0.3)' },
  chatHeader: { padding: '15px', background: 'rgba(0,212,255,0.2)', fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'center' },
  chatBody: { flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' },
  msg: { padding: '10px 15px', borderRadius: '15px', fontSize: '0.9rem', maxWidth: '85%' },
  chatFooter: { padding: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' },
  chatInput: { width: '100%', background: 'none', border: 'none', color: '#fff', outline: 'none' },
  whatsapp: { position: 'fixed', bottom: '105px', right: '30px', background: '#25d366', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, textDecoration: 'none', fontSize: '1.5rem', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' },
  footer: { padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '100px' },
  footerGrid: { width: 'min(1400px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  footerBtn: { background: 'none', border: 'none', color: '#fff', opacity: 0.4, cursor: 'pointer', fontSize: '0.9rem' },
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 },
  modal: { background: '#111', padding: '40px', borderRadius: '40px', maxWidth: '500px', textAlign: 'center', border: '1px solid #00d4ff' },
  ctaSection: { paddingBottom: '150px' }
};