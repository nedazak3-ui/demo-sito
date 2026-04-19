import React, { useState, useEffect, useRef } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";

export default function App() {
  const { isSignedIn } = useAuth();
  
  // STATI
  const [flippedCard, setFlippedCard] = useState(null);
  const [showLegal, setShowLegal] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Sistemi Webcraft online. Sono l\'AI di supporto. Come posso aiutarti?' }
  ]);

  const chatEndRef = useRef(null);
  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  // LINKS STRIPE
  const LINK_STARTER = "https://buy.stripe.com/4gMeV61DwfrygKf0tC0sU00";
  const LINK_PRO = "https://buy.stripe.com/14AaEQ4PI4MU8dJb8g0sU01";

  // LOGICA CHATBOT
  const handleChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = { role: 'user', content: chatInput };
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      let reply = "I nostri sistemi stanno analizzando la tua richiesta. I pacchetti Webcraft includono design 3D e integrazione Stripe. Vuoi sapere di più sui costi?";
      const input = chatInput.toLowerCase();
      if (input.includes("prezzo") || input.includes("costa")) reply = "Starter: €499. Pro Business: €1.299. Custom AI: su preventivo.";
      if (input.includes("tempo") || input.includes("consegna")) reply = "Landing Page in 7 giorni, E-commerce in 15-20 giorni.";
      if (input.includes("chi") || input.includes("webcraft")) reply = "Siamo un'agenzia digitale d'élite specializzata in esperienze immersive e AI.";
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

  const stars = Array.from({ length: 100 }).map((_, i) => ({
    id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`, size: `${Math.random() * 2 + 1}px`
  }));

  return (
    <div style={s.page}>
      {/* NAVBAR */}
      <nav style={s.navbar}>
        <div style={s.navContainer}>
          <div style={s.logo}>WEBCRAFT</div>
          <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
            <SignedOut>
              <SignInButton mode="modal"><button style={s.loginBtn}>ACCEDI</button></SignInButton>
              <SignUpButton mode="modal"><button style={s.registerBtn}>REGISTRATI</button></SignUpButton>
            </SignedOut>
            <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
          </div>
        </div>
      </nav>

      {/* SFONDO STELLARE */}
      <div style={s.spaceContainer}>
        {stars.map((star) => (
          <div key={star.id} className="starburst" style={{top: star.top, left: star.left, width: star.size, height: star.size, animationDuration: star.duration}} />
        ))}
      </div>

      <div style={s.content}>
        {/* HERO SECTION */}
        <section style={s.hero}>
          <div className="scene"><div className="cube">
            <div className="face front">WEBCRAFT</div><div className="face back">FUTURE</div>
            <div className="face right">AI</div><div className="face left">3D</div>
            <div className="face top">STRIPE</div><div className="face bottom">CLERK</div>
          </div></div>
          <h1 style={s.mainTitle}>ESPERIENZE <br /><span className="stroke-text">IMMERSIVE</span> <br /><span style={s.gradientText}>SENZA LIMITI.</span></h1>
          <p style={s.heroSub}>Convertiamo il traffico in profitto con interfacce 3D e intelligenza artificiale integrata.</p>
          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>GUARDA LE OFFERTE</button>
        </section>

        {/* TRUST BAR SCORREVOLE */}
        <div style={s.trustBar}>
          <div className="marquee">
            <span>REACT • STRIPE • OPENAI • VERCEL • CLERK • THREE.JS • NODE.JS • TAILWIND • </span>
            <span>REACT • STRIPE • OPENAI • VERCEL • CLERK • THREE.JS • NODE.JS • TAILWIND • </span>
          </div>
        </div>

        {/* PROCESSO */}
        <section style={s.section}>
          <h2 style={s.secTitle}>IL NOSTRO <span className="stroke-text">METODO</span></h2>
          <div style={s.processGrid}>
            {[ {n: "01", t: "Analisi", d: "Briefing strategico per definire i tuoi obiettivi."},
               {n: "02", t: "Design 3D", d: "Progettazione dell'interfaccia immersiva."},
               {n: "03", t: "Sviluppo", d: "Codice pulito, veloce e ottimizzato."},
               {n: "04", t: "Lancio", d: "Deploy e ottimizzazione SEO finale."}
            ].map((step, i) => (
              <div key={i} className="glass-card" style={s.processStep}>
                <div style={s.stepNum}>{step.n}</div>
                <h4 style={{margin: '10px 0'}}>{step.t}</h4>
                <p style={{fontSize: '0.8rem', opacity: 0.6}}>{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PIANI DI ABBONAMENTO */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>PIANI DI <span className="stroke-text">SUCCESSO</span></h2>
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
                  <p style={s.detailsText}>Landing Page 3D, SEO, Hosting 1 anno, 1 revisione inclusa.</p>
                  <button style={s.confirmBtn} onClick={() => handlePurchase(LINK_STARTER)}>CONFERMO</button>
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
                  <button style={{...s.cardBtn, background: '#00d4ff'}} onClick={() => setFlippedCard('pro')}>ACQUISTA ORA</button>
                </div>
                <div className="flip-card-back glass-card" style={{...s.bentoItem, borderColor: '#00d4ff'}}>
                  <p style={s.detailsText}>E-commerce completo, Area Clienti, Supporto VIP H24.</p>
                  <button style={s.confirmBtn} onClick={() => handlePurchase(LINK_PRO)}>CONFERMO</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>

            {/* CUSTOM */}
            <div className={`flip-card ${flippedCard === 'custom' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass-card" style={s.bentoItem}>
                  <div style={s.icon}>🛸</div>
                  <h3>CUSTOM AI</h3>
                  <div style={s.price}>PREVENTIVO</div>
                  <button style={s.cardBtn} onClick={() => setFlippedCard('custom')}>CONTATTACI</button>
                </div>
                <div className="flip-card-back glass-card" style={s.bentoItem}>
                  <p style={s.detailsText}>Ecosistemi complessi, Automazioni AI e scalabilità infinita.</p>
                  <button style={s.confirmBtn} onClick={() => window.location.href='mailto:info@webcraft.site'}>SCRIVICI</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* AI BOT UI */}
      <div style={s.botContainer}>
        {isChatOpen && (
          <div className="glass-card" style={s.chatWindow}>
            <div style={s.chatHeader}>WEBCRAFT AI</div>
            <div style={s.chatBody}>
              {messages.map((m, i) => (
                <div key={i} style={{...s.msg, alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? '#00d4ff' : 'rgba(255,255,255,0.1)', color: m.role === 'user' ? '#000' : '#fff'}}>
                  {m.content}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleChat} style={s.chatFooter}>
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Chiedimi qualcosa..." style={s.chatInput} />
            </form>
          </div>
        )}
        <button onClick={() => setIsChatOpen(!isChatOpen)} style={s.botTrigger}>
          {isChatOpen ? "✕" : "🤖"}
        </button>
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/tuonumero" target="_blank" style={s.whatsapp}>💬</a>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.footerGrid}>
          <div>
            <div style={s.logo}>WEBCRAFT</div>
            <p style={{opacity: 0.4, fontSize: '0.7rem'}}>© 2026 Webcraft. P.IVA 01234567890</p>
          </div>
          <div style={{display: 'flex', gap: '20px'}}>
            <button onClick={() => setShowLegal(true)} style={s.footerBtn}>Privacy & Termini</button>
            <a href="mailto:info@webcraft.site" style={s.footerBtn}>Email</a>
          </div>
        </div>
      </footer>

      {/* MODALE LEGALE */}
      {showLegal && (
        <div style={s.modalOverlay} onClick={() => setShowLegal(false)}>
          <div style={s.modal} onClick={e => e.stopPropagation()}>
            <h3>Privacy & Condizioni</h3>
            <p style={{fontSize: '0.8rem', opacity: 0.7, lineHeight: '1.6'}}>Tutti i pagamenti sono gestiti da Stripe. Il completamento del servizio avviene entro le tempistiche concordate. I dati personali sono protetti dal GDPR.</p>
            <button style={{...s.primaryBtn, marginTop: '20px'}} onClick={() => setShowLegal(false)}>CHIUDI</button>
          </div>
        </div>
      )}

      <style>{`
        .marquee { display: flex; overflow: hidden; white-space: nowrap; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); padding: 20px 0; }
        .marquee span { display: inline-block; padding-left: 50px; animation: scroll 25s linear infinite; font-weight: 900; opacity: 0.15; font-size: 1.5rem; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .flip-card { perspective: 1000px; height: 380px; }
        .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
        .flip-card.active .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 35px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 25px; box-sizing: border-box; }
        .flip-card-back { transform: rotateY(180deg); background: rgba(0,212,255,0.1) !important; }
        .cube { width: 100px; height: 100px; position: relative; transform-style: preserve-3d; animation: rotateCube 12s infinite linear; }
        .face { position: absolute; width: 100px; height: 100px; border: 1px solid #00d4ff; background: rgba(0, 212, 255, 0.1); display: flex; align-items: center; justify-content: center; font-size: 0.6rem; color: #00d4ff; backdrop-filter: blur(5px); }
        .front { transform: rotateY(0deg) translateZ(50px); } .back { transform: rotateY(180deg) translateZ(50px); }
        .right { transform: rotateY(90deg) translateZ(50px); } .left { transform: rotateY(-90deg) translateZ(50px); }
        .top { transform: rotateX(90deg) translateZ(50px); } .bottom { transform: rotateX(-90deg) translateZ(50px); }
        @keyframes rotateCube { from { transform: rotateX(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
        .starburst { position: absolute; background: white; border-radius: 50%; animation: warp infinite linear; }
        @keyframes warp { 0% { transform: translateZ(-1000px); opacity: 0; } 100% { transform: translateZ(500px); opacity: 0; } }
        .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', overflowX: 'hidden' },
  navbar: { position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '15px 0', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  navContainer: { width: 'min(1200px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', color: '#00d4ff', letterSpacing: '2px', fontSize: '1.2rem' },
  loginBtn: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem' },
  registerBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, width: 'min(1200px, 90%)', margin: '0 auto', paddingTop: '100px' },
  hero: { minHeight: '85vh', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  mainTitle: { fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', lineHeight: '0.9', margin: '30px 0' },
  gradientText: { background: 'linear-gradient(to right, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSub: { fontSize: '1rem', color: '#aaa', maxWidth: '600px', margin: '0 auto 40px' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '18px 45px', borderRadius: '50px', fontWeight: '900', cursor: 'pointer', boxShadow: '0 10px 30px rgba(255,255,255,0.2)' },
  trustBar: { margin: '80px 0' },
  section: { padding: '80px 0' },
  secTitle: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px', fontWeight: '900' },
  processGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' },
  processStep: { padding: '35px', borderRadius: '35px', textAlign: 'center' },
  stepNum: { fontSize: '2.5rem', fontWeight: '900', color: '#00d4ff' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  bentoItem: { textAlign: 'center', gap: '10px' },
  price: { fontSize: '2.8rem', fontWeight: 'bold', color: '#00d4ff', margin: '15px 0' },
  cardBtn: { background: '#fff', color: '#000', border: 'none', padding: '15px', width: '100%', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' },
  confirmBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '15px', width: '100%', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' },
  backLink: { background: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '50px', cursor: 'pointer', fontSize: '0.7rem' },
  detailsText: { fontSize: '0.9rem', opacity: 0.8, marginBottom: '25px', lineHeight: '1.6' },
  icon: { fontSize: '3rem' },
  whatsapp: { position: 'fixed', bottom: '105px', right: '30px', background: '#25d366', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, textDecoration: 'none', fontSize: '1.5rem', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' },
  botContainer: { position: 'fixed', bottom: '30px', right: '30px', zIndex: 1001, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
  botTrigger: { width: '65px', height: '65px', borderRadius: '50%', background: '#00d4ff', border: 'none', color: '#000', fontSize: '1.8rem', cursor: 'pointer', boxShadow: '0 5px 20px rgba(0,212,255,0.5)' },
  chatWindow: { width: '320px', height: '450px', marginBottom: '15px', borderRadius: '25px', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid rgba(0,212,255,0.3)' },
  chatHeader: { padding: '18px', background: 'rgba(0,212,255,0.15)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px', textAlign: 'center' },
  chatBody: { flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' },
  msg: { padding: '10px 15px', borderRadius: '18px', fontSize: '0.85rem', maxWidth: '85%' },
  chatFooter: { padding: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' },
  chatInput: { width: '100%', background: 'none', border: 'none', color: '#fff', outline: 'none', fontSize: '0.9rem' },
  footer: { padding: '50px 0', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 2 },
  footerGrid: { width: 'min(1200px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  footerBtn: { background: 'none', border: 'none', color: '#fff', opacity: 0.4, cursor: 'pointer', fontSize: '0.75rem', textDecoration: 'none' },
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 },
  modal: { background: '#111', padding: '50px', borderRadius: '40px', maxWidth: '500px', textAlign: 'center', border: '1px solid #00d4ff' }
};