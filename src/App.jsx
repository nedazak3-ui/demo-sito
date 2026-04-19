import React, { useState, useEffect, useRef } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";

export default function App() {
  const { isSignedIn } = useAuth();
  
  // STATI
  const [flippedCard, setFlippedCard] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Sistemi Webcraft online. Sono l\'AI di supporto. Come posso aiutarti?' }
  ]);
  const [showLegal, setShowLegal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // CURSORE PERSONALIZZATO (Punto 3)
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const chatEndRef = useRef(null);
  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const LINK_STARTER = "https://buy.stripe.com/4gMeV61DwfrygKf0tC0sU00";
  const LINK_PRO = "https://buy.stripe.com/14AaEQ4PI4MU8dJb8g0sU01";

  // LOGICA CHATBOT
  const handleChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: chatInput }]);
    setChatInput("");
    setTimeout(() => {
      let reply = "Analisi in corso... I nostri sistemi 3D sono progettati per massimizzare le conversioni.";
      const input = chatInput.toLowerCase();
      if (input.includes("prezzo")) reply = "Starter: €499. Pro: €1.299. Pagamenti sicuri via Stripe.";
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
      {/* CURSORE (Punto 3) */}
      <div style={{...s.cursor, left: mousePos.x, top: mousePos.y}} />

      {/* NAVBAR */}
      <nav style={s.navbar}>
        <div style={s.navContainer}>
          <div style={s.logo}>WEBCRAFT</div>
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <SignedOut>
              <SignInButton mode="modal"><button style={s.navLink}>ACCEDI</button></SignInButton>
              <SignUpButton mode="modal"><button style={s.navBtn}>REGISTRATI</button></SignUpButton>
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
          <div className="reveal" style={s.badge}>✨ Disponibile ora: AI Integration 2.0</div>
          <div className="scene">
            <div className="cube">
              <div className="face front">WEBCRAFT</div><div className="face back">FUTURE</div>
              <div className="face right">DESIGN</div><div className="face left">IMPACT</div>
              <div className="face top">3D</div><div className="face bottom">CODE</div>
            </div>
          </div>
          <h1 style={s.mainTitle}>ESPERIENZE <br /><span className="stroke-text">IMMERSIVE</span> <br /><span style={s.gradientText}>SENZA LIMITI.</span></h1>
          <button style={s.primaryBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>VEDI TUTTI I PIANI</button>
        </section>

        {/* STATS BAR (Punto 29) */}
        <div style={s.statsBar}>
          <div style={s.statItem}><h3>+150</h3><p>PROGETTI</p></div>
          <div style={s.statItem}><h3>99%</h3><p>CLIENTI FELICI</p></div>
          <div style={s.statItem}><h3>24H</h3><p>SUPPORTO AI</p></div>
        </div>

        {/* TRUST BAR (MARQUEE) */}
        <div className="marquee-container">
          <div className="marquee">
            <span>REACT • STRIPE • OPENAI • VERCEL • CLERK • THREE.JS • NODE.JS • TAILWIND • </span>
            <span>REACT • STRIPE • OPENAI • VERCEL • CLERK • THREE.JS • NODE.JS • TAILWIND • </span>
          </div>
        </div>

        {/* TESTIMONIALS (Punto 27) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>COSA DICONO <span className="stroke-text">DI NOI</span></h2>
          <div style={s.bentoGrid}>
            <div className="glass-card testimonial">
              <p>"Hanno trasformato il mio business. Il sito 3D converte il doppio del precedente."</p>
              <div style={{color: '#00d4ff', marginTop: '15px'}}>— Marco Rossi, CEO TechFlow</div>
            </div>
            <div className="glass-card testimonial">
              <p>"L'integrazione AI è spaventosa. Risponde ai clienti meglio di un umano."</p>
              <div style={{color: '#00d4ff', marginTop: '15px'}}>— Sara Bianchi, Marketing Manager</div>
            </div>
          </div>
        </section>

        {/* TABELLA COMPARATIVA (Punto 17) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>CONFRONTA <span className="stroke-text">LE VERSIONI</span></h2>
          <div className="glass-card" style={s.tableWrap}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Funzionalità</th>
                  <th style={s.th}>Starter</th>
                  <th style={s.th}>Pro Business</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={s.td}>Design 3D Immersivo</td><td style={s.td}>✅</td><td style={s.td}>✅</td></tr>
                <tr><td style={s.td}>Supporto AI Dedicato</td><td style={s.td}>❌</td><td style={s.td}>✅</td></tr>
                <tr><td style={s.td}>Gestione E-commerce</td><td style={s.td}>❌</td><td style={s.td}>✅</td></tr>
                <tr><td style={s.td}>Revisioni Illimitate</td><td style={s.td}>❌</td><td style={s.td}>✅</td></tr>
              </tbody>
            </table>
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
                  <button style={s.cardBtn} onClick={() => setFlippedCard('starter')}>DETTAGLI</button>
                </div>
                <div className="flip-card-back glass-card" style={s.bentoItem}>
                  <p>Landing Page 3D, SEO, Hosting 1 anno.</p>
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
                  <button style={{...s.cardBtn, background: '#00d4ff', color: '#000'}} onClick={() => setFlippedCard('pro')}>DETTAGLI</button>
                </div>
                <div className="flip-card-back glass-card" style={{...s.bentoItem, borderColor: '#00d4ff'}}>
                  <p>E-commerce, Area Clienti, AI VIP.</p>
                  <button style={s.confirmBtn} onClick={() => handlePurchase(LINK_PRO)}>CONFERMA</button>
                  <button style={s.backLink} onClick={() => setFlippedCard(null)}>INDIETRO</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (Punto 22) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>DOMANDE <span className="stroke-text">FREQUENTI</span></h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {[
              {q: "I pagamenti sono sicuri?", a: "Tutte le transazioni avvengono su protocolli Stripe criptati."},
              {q: "Posso annullare l'abbonamento?", a: "Sì, in qualsiasi momento dalla tua dashboard."},
              {q: "Ricevo fattura?", a: "Certamente, il sistema invia la fattura automatica dopo l'acquisto."}
            ].map((faq, i) => (
              <div key={i} className="glass-card" style={{padding: '20px', marginBottom: '10px', cursor: 'pointer'}} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><b>{faq.q}</b> <span>{openFaq === i ? '-' : '+'}</span></div>
                {openFaq === i && <p style={{marginTop: '15px', opacity: 0.6}}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* LEAD MAGNET (Punto 18) */}
        <section style={s.section}>
          <div className="glass-card" style={s.newsletter}>
            <h3>🎁 Scarica la guida: Web 3D nel 2026</h3>
            <p>Lascia la tua mail per ricevere il PDF gratuito.</p>
            <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
              <input style={s.chatInput} placeholder="Tua email..." />
              <button style={s.navBtn}>INVIA</button>
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
                <div key={i} style={{...s.msg, alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? '#00d4ff' : 'rgba(255,255,255,0.1)', color: m.role === 'user' ? '#000' : '#fff'}}>{m.content}</div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleChat} style={s.chatFooter}>
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Fai una domanda..." style={s.chatInput} />
            </form>
          </div>
        )}
        <button onClick={() => setIsChatOpen(!isChatOpen)} style={s.botTrigger}>{isChatOpen ? "✕" : "🤖"}</button>
      </div>

      <a href="https://wa.me/tuonumero" target="_blank" style={s.whatsapp}>💬</a>

      <footer style={s.footer}>
        <div style={s.footerGrid}>
          <div><div style={s.logo}>WEBCRAFT</div><p style={{opacity: 0.4, fontSize: '0.7rem'}}>© 2026 Webcraft. P.IVA 01234567890</p></div>
          <button onClick={() => setShowLegal(true)} style={s.footerBtn}>Privacy & Termini</button>
        </div>
      </footer>

      {showLegal && (
        <div style={s.modalOverlay} onClick={() => setShowLegal(false)}>
          <div style={s.modal} onClick={e => e.stopPropagation()}>
            <h3>Legal Docs</h3>
            <p style={{fontSize: '0.8rem', opacity: 0.7}}>Sito conforme GDPR 2026. Pagamenti Stripe 3D Secure.</p>
            <button style={s.primaryBtn} onClick={() => setShowLegal(false)}>CHIUDI</button>
          </div>
        </div>
      )}

      <style>{`
        .marquee-container { overflow: hidden; white-space: nowrap; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); padding: 25px 0; margin-bottom: 50px; }
        .marquee { display: flex; animation: scroll 25s linear infinite; }
        .marquee span { padding-left: 50px; font-weight: 900; opacity: 0.2; font-size: 1.5rem; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .flip-card { perspective: 1000px; min-height: 420px; transition: transform 0.3s; }
        .flip-card:hover { transform: scale(1.02); }
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
        .glass-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px; }
        .testimonial { padding: 40px; text-align: center; font-style: italic; }
      `}</style>
    </div>
  );
}

const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', overflowX: 'hidden', cursor: 'none' },
  cursor: { position: 'fixed', width: '20px', height: '20px', background: '#00d4ff', borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, transition: 'transform 0.1s ease', transform: 'translate(-50%, -50%)', mixBlendMode: 'difference' },
  navbar: { position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 0', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  navContainer: { width: 'min(1400px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: '1.4rem', letterSpacing: '2px', color: '#00d4ff' },
  navLink: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' },
  navBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '10px 25px', borderRadius: '50px', fontWeight: '900', cursor: 'pointer' },
  spaceContainer: { position: 'fixed', inset: 0, zIndex: 0, perspective: '1000px' },
  content: { position: 'relative', zIndex: 2, width: 'min(1400px, 90%)', margin: '0 auto', paddingTop: '100px' },
  hero: { minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
  badge: { display: 'inline-block', margin: '0 auto 20px', background: 'rgba(0,212,255,0.1)', color: '#00d4ff', padding: '10px 30px', borderRadius: '50px', border: '1px solid #00d4ff', fontWeight: 'bold' },
  mainTitle: { fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', lineHeight: '0.85', marginBottom: '30px' },
  gradientText: { background: 'linear-gradient(to right, #fff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  primaryBtn: { background: '#fff', color: '#000', border: 'none', padding: '20px 50px', fontSize: '1.1rem', fontWeight: '900', borderRadius: '100px', cursor: 'pointer' },
  statsBar: { display: 'flex', justifyContent: 'space-around', padding: '60px 0', textAlign: 'center' },
  statItem: { h3: { fontSize: '3rem', color: '#00d4ff', margin: 0 }, p: { opacity: 0.5, margin: 0 } },
  section: { padding: '80px 0' },
  secTitle: { fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center', marginBottom: '80px', fontWeight: '900' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  bentoItem: { display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', textAlign: 'center' },
  tableWrap: { padding: '40px', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { padding: '20px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#00d4ff' },
  td: { padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  newsletter: { padding: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', border: '1px solid #00d4ff' },
  icon: { fontSize: '3.5rem' },
  price: { fontSize: '3rem', fontWeight: 'bold', color: '#00d4ff' },
  cardBtn: { background: '#fff', color: '#000', border: 'none', padding: '15px', width: '100%', borderRadius: '50px', fontWeight: 'bold' },
  confirmBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '15px', width: '100%', borderRadius: '50px', fontWeight: 'bold', marginBottom: '10px' },
  backLink: { background: 'none', color: '#fff', border: '1px solid #fff', padding: '10px', borderRadius: '50px', width: '100%' },
  botContainer: { position: 'fixed', bottom: '30px', right: '30px', zIndex: 1001, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
  botTrigger: { width: '60px', height: '60px', borderRadius: '50%', background: '#00d4ff', border: 'none', fontSize: '1.5rem', cursor: 'pointer' },
  chatWindow: { width: '320px', height: '450px', marginBottom: '15px', borderRadius: '25px', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid rgba(0,212,255,0.3)' },
  chatHeader: { padding: '15px', background: 'rgba(0,212,255,0.2)', fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'center' },
  chatBody: { flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' },
  msg: { padding: '10px 15px', borderRadius: '15px', fontSize: '0.9rem', maxWidth: '85%' },
  chatFooter: { padding: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' },
  chatInput: { width: '100%', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', padding: '10px', borderRadius: '10px', outline: 'none' },
  whatsapp: { position: 'fixed', bottom: '105px', right: '30px', background: '#25d366', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, textDecoration: 'none', fontSize: '1.5rem' },
  footer: { padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)' },
  footerGrid: { width: 'min(1400px, 90%)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  footerBtn: { background: 'none', border: 'none', color: '#fff', opacity: 0.4, cursor: 'pointer' },
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 },
  modal: { background: '#111', padding: '40px', borderRadius: '40px', maxWidth: '500px', textAlign: 'center', border: '1px solid #00d4ff' }
};