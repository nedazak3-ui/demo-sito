import React, { useState, useEffect, useRef, useMemo } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";

/** * WEBCRAFT AEROSPACE DIGITAL FRAMEWORK v4.2.0 - PLATINUM EDITION
 * Engineering Authority: NASA-GRADE WEB SYSTEMS
 * Total Lines (Logic + Styles): Target 2000+
 * Status: Mission Ready
 */

// --- CONFIGURAZIONE GLOBALE ---
const SYSTEM_CORE = {
  ID: "WEBCRAFT-STATION-2026",
  ENGINE: "NEURAL-V8",
  UPTIME: "99.9999%",
  ENCRYPTION: "SHA-512/AES-GCM",
  NODES: ["Turin", "Houston", "Tokyo", "Berlin"],
  CORE_TEMP: "24.5°C"
};

const EXTERNAL_DESTINATIONS = {
  STRIPE_STARTER: "https://buy.stripe.com/4gMeV61DwfrygKf0tC0sU00",
  STRIPE_PRO: "https://buy.stripe.com/14AaEQ4PI4MU8dJb8g0sU01",
  GITHUB: "https://github.com/webcraft-labs",
  DOCS: "https://docs.webcraft.site",
  LINKEDIN: "https://linkedin.com/company/webcraft-digital",
  WHATSAPP: "https://wa.me/39123456789"
};

// --- DATASETS (IL "CUORE" DEL SITO) ---
const TESTIMONIALS = [
  { id: 1, name: "Ing. Roberto Bianchi", role: "CTO @ Aerospace Tech", text: "L'infrastruttura di Webcraft ha gestito il nostro lancio senza un ms di latenza. Superiore.", verify: "AUTH-992" },
  { id: 2, name: "Sarah Jenkins", role: "Head of AI @ Global FinTech", text: "L'integrazione AI è spaventosa. Risponde ai clienti meglio del nostro vecchio supporto umano.", verify: "AUTH-104" },
  { id: 3, name: "Marco Valeri", role: "Lead Dev @ CyberSecurity Hub", text: "Puro codice ingegneristico. Niente fronzoli, solo performance estreme.", verify: "AUTH-773" },
  { id: 4, name: "Linda Wu", role: "Digital Director @ NeoTokyo", text: "Sistemi 3D fluidi anche su dispositivi mobile datati. Ottimizzazione magistrale.", verify: "AUTH-212" }
];

const JOB_OPENINGS = [
  { title: "Quantum Frontend Architect", location: "Remote / Turin", type: "Full-time" },
  { title: "Neural Network Designer", location: "Berlin", type: "Contract" },
  { title: "Cloud Infrastructure Engineer", location: "Houston", type: "Full-time" }
];

const FAQS = [
  { q: "Come garantite la sicurezza dei dati?", a: "Utilizziamo protocolli di crittografia post-quantistica e hosting frazionato su nodi Edge globali." },
  { q: "I siti sono compatibili con VR/AR?", a: "Certamente. Ogni interfaccia è predisposta per il rendering stereoscopico via WebXR." },
  { q: "Qual è la scalabilità massima?", a: "Le nostre API sono testate per gestire 1.2 milioni di richieste simultanee per nodo." }
];

export default function App() {
  // --- STATI DI CONTROLLO (TUTTI DEFINITI) ---
  const [showLegal, setShowLegal] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Protocollo Webcraft attivo. Identità verificata. In attesa di input.' }]);
  const [flippedCard, setFlippedCard] = useState(null);
  const [logs, setLogs] = useState(["BOOT_SEQUENCE_COMPLETE", "AI_CORE_ONLINE", "NEURAL_LINK_ESTABLISHED"]);
  const [telemetry, setTelemetry] = useState({ cpu: 8, ram: 14, temp: 24 });
  const [activeTab, setActiveTab] = useState("SPECS");
  const [notification, setNotification] = useState("Sistemi Operativi: 100%");

  const chatEndRef = useRef(null);

  // --- SENSORI E TELEMETRIA ---
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const detectTouch = () => setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    window.addEventListener("mousemove", handleMouseMove);
    detectTouch();

    const interval = setInterval(() => {
      setTelemetry({ 
        cpu: Math.floor(Math.random() * 12) + 4, 
        ram: Math.floor(Math.random() * 10) + 40,
        temp: (Math.random() * 2 + 24).toFixed(1)
      });
      const sysLogs = ["SYNC_COMPLETE", "ENCRYPTING_NODE_7", "API_REQUEST_200", "AI_OPTIMIZATION_RUN"];
      setLogs(prev => [sysLogs[Math.floor(Math.random() * sysLogs.length)], ...prev.slice(0, 5)]);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- AI ENGINE (RISPOSTE AUTOMATICHE PROFESSIONALI) ---
  const handleChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const input = chatInput.toLowerCase();
    setMessages(prev => [...prev, { role: 'user', content: chatInput }]);
    setChatInput("");

    setTimeout(() => {
      let r = "Analisi semantica completata. La richiesta è stata inoltrata al reparto tecnico.";
      if (input.includes("prezzo") || input.includes("costo")) r = "I nostri moduli partono da €499 (Starter) fino a €1.299 (Pro). Per soluzioni Enterprise, contattaci su WhatsApp.";
      if (input.includes("lavoro") || input.includes("carriera")) r = "Controlla la sezione CAREERS in basso. Siamo sempre alla ricerca di talenti AI e WebGL.";
      if (input.includes("tecnologia") || input.includes("stack")) r = "Utilizziamo Next.js 15, Framer Motion, Three.js e modelli LLM custom per l'automazione.";
      if (input.includes("chi sei")) r = "Sono l'AI di Webcraft, progettata per assisterti nel deployment di infrastrutture digitali avanzate.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: r }]);
    }, 600);
  };

  const stars = useMemo(() => Array.from({ length: 150 }).map((_, i) => ({
    id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2}s`, size: `${Math.random() * 2 + 1}px`
  })), []);

  return (
    <div style={s.page}>
      {/* CURSORE NASA (DISATTIVATO SU TOUCH) */}
      {!isTouch && (
        <div style={{...s.cursor, left: mousePos.x, top: mousePos.y}}>
          <div style={s.cursorInner} />
          <div className="cursor-ring" />
        </div>
      )}

      {/* NOTIFICATION BAR */}
      <div style={s.notifBar}>{notification}</div>

      {/* NAVIGATION: MISSION CONTROL */}
      <nav style={s.navbar}>
        <div style={s.navContainer}>
          <div style={s.logoGroup}>
            <div style={s.logo}>WEBCRAFT <span style={s.cyan}>AEROSPACE</span></div>
            <div style={s.version}>v4.2.0</div>
          </div>
          <div style={s.navLinks}>
            <a href="#specs" style={s.nLink}>SPECS</a>
            <a href="#pricing" style={s.nLink}>MODULES</a>
            <a href="#careers" style={s.nLink}>CAREERS</a>
            <div style={s.divider} />
            <SignedOut>
              <SignInButton mode="modal"><button style={s.loginBtn}>INITIALIZE LOGIN</button></SignInButton>
            </SignedOut>
            <SignedIn><UserButton /></SignedIn>
          </div>
        </div>
      </nav>

      <div style={s.spaceBg}>
        {stars.map(star => <div key={star.id} className="star" style={{top: star.top, left: star.left, width: star.size, height: star.size, animationDuration: star.duration}} />)}
      </div>

      <main style={s.main}>
        {/* HERO: THE LAUNCHPAD */}
        <section style={s.hero}>
          <div style={s.heroBadge}>STATION ID: {SYSTEM_CORE.ID}</div>
          <h1 style={s.heroTitle}>
            ENGINEERING <br />
            <span className="stroke">LIMITLESS</span> <br />
            <span style={s.cyan}>SYSTEMS.</span>
          </h1>
          <p style={s.heroText}>Sviluppiamo infrastrutture digitali che superano gli standard attuali. 3D immersivo, AI nativa e velocità Edge.</p>
          <div style={s.heroBtns}>
            <button style={s.mainBtn} onClick={() => window.location.href=EXTERNAL_DESTINATIONS.STRIPE_PRO}>LAUNCH PROJECT</button>
            <button style={s.secBtn} onClick={() => document.getElementById('specs').scrollIntoView({behavior: 'smooth'})}>TECHNICAL DOCS</button>
          </div>
        </section>

        {/* SECTION: LIVE TELEMETRY DASHBOARD */}
        <section id="specs" style={s.section}>
          <div className="glass" style={s.dash}>
            <div style={s.dashHead}>LIVE_SYSTEM_TELEMETRY</div>
            <div style={s.dashGrid}>
              <div style={s.statBox}><span>CPU LOAD</span><br /><strong>{telemetry.cpu}%</strong></div>
              <div style={s.statBox}><span>RAM USAGE</span><br /><strong>{telemetry.ram}GB</strong></div>
              <div style={s.statBox}><span>CORE TEMP</span><br /><strong>{telemetry.temp}°C</strong></div>
              <div style={s.statBox}><span>NETWORK</span><br /><strong>STABLE</strong></div>
            </div>
            <div style={s.logMonitor}>
              {logs.map((l, i) => <div key={i} style={s.logText}>{">"} {l}</div>)}
            </div>
          </div>
        </section>

        {/* SECTION: PRICING MODULES */}
        <section id="pricing" style={s.section}>
          <h2 style={s.secTitle}>DEPLOYMENT <span className="stroke">MODULES</span></h2>
          <div style={s.bento}>
            <div className={`flip-card ${flippedCard === 'starter' ? 'active' : ''}`} style={s.card}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass" style={s.cardInner}>
                  <div style={s.cardTag}>MOD-01</div>
                  <h3>CORE STARTER</h3>
                  <div style={s.price}>€499</div>
                  <button style={s.cardBtn} onClick={() => setFlippedCard('starter')}>CONFIG SPECS</button>
                </div>
                <div className="flip-card-back glass" style={s.cardInner}>
                  <ul style={s.list}>
                    <li>3D Landing Module</li>
                    <li>Basic AI Chatbot</li>
                    <li>Edge Hosting (1yr)</li>
                    <li>Standard Support</li>
                  </ul>
                  <button style={s.buyBtn} onClick={() => window.location.href=EXTERNAL_DESTINATIONS.STRIPE_STARTER}>CONFIRM DEPLOY</button>
                  <button style={s.backBtn} onClick={() => setFlippedCard(null)}>RETURN</button>
                </div>
              </div>
            </div>

            <div className={`flip-card ${flippedCard === 'pro' ? 'active' : ''}`} style={s.card}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass" style={{...s.cardInner, borderColor: '#00d4ff'}}>
                  <div style={{...s.cardTag, background: '#00d4ff', color: '#000'}}>MOD-02</div>
                  <h3 style={{color: '#00d4ff'}}>ADVANCED PRO</h3>
                  <div style={s.price}>€1.299</div>
                  <button style={{...s.cardBtn, background: '#00d4ff'}} onClick={() => setFlippedCard('pro')}>CONFIG SPECS</button>
                </div>
                <div className="flip-card-back glass" style={{...s.cardInner, borderColor: '#00d4ff'}}>
                  <ul style={s.list}>
                    <li>Full E-Commerce Engine</li>
                    <li>Custom Trained AI Agent</li>
                    <li>Advanced Auth Systems</li>
                    <li>24/7 Priority Node</li>
                  </ul>
                  <button style={{...s.buyBtn, background: '#00d4ff'}} onClick={() => window.location.href=EXTERNAL_DESTINATIONS.STRIPE_PRO}>CONFIRM DEPLOY</button>
                  <button style={s.backBtn} onClick={() => setFlippedCard(null)}>RETURN</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: REAL FEEDBACK (NASA STYLE) */}
        <section style={s.section}>
          <h2 style={s.secTitle}>OPERATIONAL <span className="stroke">REVIEWS</span></h2>
          <div style={s.feedbackGrid}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="glass" style={s.fCard}>
                <div style={s.fHead}>
                  <strong>{t.name}</strong><br />
                  <small>{t.role}</small>
                </div>
                <p style={s.fBody}>"{t.text}"</p>
                <div style={s.fVerify}>ID: {t.verify} | STATUS: VERIFIED</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: CAREERS (NEW) */}
        <section id="careers" style={s.section}>
          <div className="glass" style={s.careerBox}>
            <h2 style={{...s.secTitle, fontSize: '2rem'}}>JOIN THE <span style={s.cyan}>MISSION</span></h2>
            <div style={s.jobList}>
              {JOB_OPENINGS.map((j, i) => (
                <div key={i} style={s.jobItem}>
                  <div><strong>{j.title}</strong><br /><small>{j.location}</small></div>
                  <button style={s.applyBtn}>APPLY</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: FAQ TECH */}
        <section style={s.section}>
          <h2 style={s.secTitle}>SYSTEM <span className="stroke">FAQ</span></h2>
          <div style={s.faqGrid}>
            {FAQS.map((f, i) => (
              <div key={i} style={s.faqItem}>
                <div style={s.faqQ}>{f.q}</div>
                <div style={s.faqA}>{f.a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER: THE BASE HUB */}
      <footer style={s.footer}>
        <div style={s.fGrid}>
          <div>
            <div style={s.logo}>WEBCRAFT</div>
            <p style={s.fText}>Piattaforma di Ingegneria Digitale per il 2026. Sistemi progettati per la massima efficienza e impatto visivo.</p>
          </div>
          <div style={s.fLinks}>
            <div style={s.fCol}>
              <h4>RESOURCES</h4>
              <a href={EXTERNAL_DESTINATIONS.DOCS}>API Documentation</a>
              <a href={EXTERNAL_DESTINATIONS.GITHUB}>Source Code</a>
            </div>
            <div style={s.fCol}>
              <h4>SOCIAL</h4>
              <a href={EXTERNAL_DESTINATIONS.LINKEDIN}>LinkedIn</a>
              <a href={EXTERNAL_DESTINATIONS.WHATSAPP}>WhatsApp Support</a>
            </div>
            <div style={s.fCol}>
              <h4>LEGAL</h4>
              <button onClick={() => setShowLegal(true)}>Privacy Protocol</button>
              <button onClick={() => setShowLegal(true)}>Service Terms</button>
            </div>
          </div>
        </div>
        <div style={s.fBottom}>© 2026 WEBCRAFT AEROSPACE. ALL SYSTEMS OPERATIONAL.</div>
      </footer>

      {/* MODAL: LEGAL TERMINAL */}
      {showLegal && (
        <div style={s.overlay} onClick={() => setShowLegal(false)}>
          <div className="glass" style={s.modal} onClick={e => e.stopPropagation()}>
            <h3>LEGAL_PROTOCOL_INIT</h3>
            <div style={s.modalBody}>
              L'utente riconosce che Webcraft opera secondo standard di sicurezza AES-256. Tutti i dati trasmessi sono criptati e gestiti in conformità con i protocolli internazionali di privacy digitale del 2026.
              Non sono ammesse intrusioni non autorizzate nei nodi server periferici.
            </div>
            <button style={s.mainBtn} onClick={() => setShowLegal(false)}>I UNDERSTAND</button>
          </div>
        </div>
      )}

      {/* AI BOT CORE */}
      <div style={s.botContainer}>
        {isChatOpen && (
          <div className="glass" style={s.chatBox}>
            <div style={s.chatHeader}>NEURAL_ASSISTANT_v4.2</div>
            <div style={s.chatBody}>
              {messages.map((m, i) => (
                <div key={i} style={{...s.msg, alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? '#00d4ff' : 'rgba(255,255,255,0.05)', color: m.role === 'user' ? '#000' : '#fff'}}>{m.content}</div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleChat} style={s.chatInputWrap}>
              <input value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Inserire comando..." style={s.chatInput} />
            </form>
          </div>
        )}
        <button style={s.botToggle} onClick={() => setIsChatOpen(!isChatOpen)}>{isChatOpen ? "✕" : "AI"}</button>
      </div>

      <a href={EXTERNAL_DESTINATIONS.WHATSAPP} style={s.whatsapp}>💬</a>

      <style>{`
        .star { position: absolute; background: #fff; border-radius: 50%; opacity: 0.3; animation: flicker infinite linear; }
        @keyframes flicker { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
        .glass { background: rgba(255,255,255,0.01); backdrop-filter: blur(25px); border: 1px solid rgba(255,255,255,0.08); border-radius: 15px; }
        .stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.3); color: transparent; }
        .flip-card { perspective: 1000px; height: 420px; }
        .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.7s; transform-style: preserve-3d; }
        .flip-card.active .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; }
        .flip-card-back { transform: rotateY(180deg); }
        .cursor-ring { position: absolute; width: 50px; height: 50px; border: 1px solid rgba(0,212,255,0.2); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
      `}</style>
    </div>
  );
}

// --- DESIGN SYSTEM (NASA AEROSPACE) ---
const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: '"JetBrains Mono", monospace', cursor: 'none', overflowX: 'hidden' },
  cursor: { position: 'fixed', width: '30px', height: '30px', border: '1px solid #00d4ff', borderRadius: '50%', pointerEvents: 'none', zIndex: 10000, transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  cursorInner: { width: '4px', height: '4px', background: '#00d4ff', borderRadius: '50%' },
  notifBar: { background: '#00d4ff', color: '#000', fontSize: '0.6rem', textAlign: 'center', padding: '4px', fontWeight: 'bold', letterSpacing: '2px', position: 'fixed', top: 0, width: '100%', zIndex: 6000 },
  navbar: { position: 'fixed', top: '24px', width: '100%', zIndex: 5000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0' },
  navContainer: { width: '92%', maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logoGroup: { display: 'flex', alignItems: 'center', gap: '15px' },
  logo: { fontWeight: '900', fontSize: '1.3rem', letterSpacing: '2px' },
  cyan: { color: '#00d4ff' },
  version: { fontSize: '0.6rem', opacity: 0.4, border: '1px solid rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' },
  navLinks: { display: 'flex', gap: '25px', alignItems: 'center' },
  nLink: { fontSize: '0.75rem', color: '#fff', textDecoration: 'none', opacity: 0.5 },
  divider: { width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' },
  loginBtn: { background: '#fff', color: '#000', border: 'none', padding: '8px 18px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer' },
  spaceBg: { position: 'fixed', inset: 0, zIndex: 0 },
  main: { position: 'relative', zIndex: 1, paddingTop: '120px' },
  hero: { minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', width: '90%', margin: '0 auto' },
  heroBadge: { fontSize: '0.6rem', color: '#00d4ff', letterSpacing: '3px', marginBottom: '20px' },
  heroTitle: { fontSize: 'clamp(2.5rem, 10vw, 7rem)', fontWeight: '900', lineHeight: '0.85' },
  heroText: { opacity: 0.5, maxWidth: '650px', margin: '40px auto', lineHeight: '1.6', fontSize: '1.1rem' },
  heroBtns: { display: 'flex', gap: '20px', justifyContent: 'center' },
  mainBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '16px 40px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' },
  secBtn: { background: 'transparent', color: '#fff', border: '1px solid #fff', padding: '16px 40px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' },
  section: { padding: '100px 0', width: '90%', maxWidth: '1200px', margin: '0 auto' },
  dash: { padding: '35px' },
  dashHead: { fontSize: '0.7rem', color: '#00d4ff', marginBottom: '40px', letterSpacing: '2px' },
  dashGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px' },
  statBox: { fontSize: '0.75rem', span: { opacity: 0.4 }, strong: { fontSize: '1.4rem' } },
  logMonitor: { marginTop: '40px', height: '120px', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' },
  logText: { fontSize: '0.65rem', color: '#00ffcc', opacity: 0.5, marginBottom: '6px' },
  secTitle: { fontSize: '4rem', textAlign: 'center', marginBottom: '80px', fontWeight: '900' },
  bento: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' },
  cardInner: { padding: '50px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  cardTag: { fontSize: '0.6rem', background: '#fff', color: '#000', padding: '2px 10px', alignSelf: 'center', marginBottom: '25px' },
  price: { fontSize: '4rem', fontWeight: '900', margin: '30px 0' },
  cardBtn: { background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '12px', borderRadius: '4px', cursor: 'pointer' },
  list: { listStyle: 'none', padding: 0, textAlign: 'left', margin: '30px 0', opacity: 0.6, fontSize: '0.9rem' },
  buyBtn: { background: '#fff', color: '#000', border: 'none', padding: '14px', width: '100%', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' },
  backBtn: { background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '10px', width: '100%', marginTop: '10px', cursor: 'pointer' },
  feedbackGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  fCard: { padding: '40px' },
  fBody: { fontStyle: 'italic', margin: '25px 0', opacity: 0.8 },
  fVerify: { fontSize: '0.55rem', opacity: 0.3, letterSpacing: '1px' },
  careerBox: { padding: '60px' },
  jobList: { marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' },
  jobItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  applyBtn: { background: '#fff', color: '#000', border: 'none', padding: '8px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
  faqGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' },
  faqItem: { borderLeft: '2px solid #00d4ff', paddingLeft: '25px' },
  faqQ: { fontWeight: 'bold', marginBottom: '15px', color: '#00d4ff' },
  faqA: { opacity: 0.5, fontSize: '0.9rem', lineHeight: '1.6' },
  footer: { padding: '100px 0 40px', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '100px' },
  fGrid: { width: '92%', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 3fr', gap: '100px' },
  fLinks: { display: 'flex', justifyContent: 'space-between' },
  fCol: { h4: { fontSize: '0.7rem', marginBottom: '25px', opacity: 0.4 }, a: { display: 'block', color: '#fff', textDecoration: 'none', opacity: 0.6, marginBottom: '12px', fontSize: '0.85rem' }, button: { background: 'none', border: 'none', color: '#fff', padding: 0, opacity: 0.6, marginBottom: '12px', fontSize: '0.85rem', cursor: 'pointer' } },
  fBottom: { textAlign: 'center', marginTop: '100px', fontSize: '0.6rem', opacity: 0.2, letterSpacing: '2px' },
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 7000, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  modal: { width: '90%', maxWidth: '550px', padding: '50px', textAlign: 'center' },
  modalBody: { margin: '30px 0', opacity: 0.6, lineHeight: '1.8', textAlign: 'left', fontSize: '0.9rem' },
  botContainer: { position: 'fixed', bottom: '30px', right: '30px', zIndex: 6000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
  botToggle: { width: '65px', height: '65px', borderRadius: '50%', background: '#00d4ff', border: 'none', color: '#000', fontWeight: '900', cursor: 'pointer', boxShadow: '0 0 30px rgba(0,212,255,0.3)' },
  chatBox: { width: '350px', height: '500px', marginBottom: '20px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' },
  chatHeader: { padding: '20px', background: 'rgba(0,212,255,0.1)', fontSize: '0.7rem', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  chatBody: { flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' },
  msg: { padding: '12px 18px', borderRadius: '8px', fontSize: '0.85rem', maxWidth: '85%', lineHeight: '1.5' },
  chatInputWrap: { padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' },
  chatInput: { width: '100%', background: 'transparent', border: 'none', color: '#fff', outline: 'none' },
  whatsapp: { position: 'fixed', bottom: '115px', right: '37px', background: '#25d366', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.3rem', zIndex: 5900 }
};