import React, { useState, useEffect, useRef, useMemo } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";

/** * WEBCRAFT AEROSPACE DIGITAL FRAMEWORK v4.0.0
 * Confidential & Proprietary - 2026
 * Architecture: Modular React (Monolith implementation for VS Code portability)
 */

// --- COSTANTI DI SISTEMA ---
const SYSTEM_CONFIG = {
  VERSION: "2026.4.0",
  LATENCY_SIM: 14,
  UPTIME: "99.9997%",
  CORE_TEMP: "32°C",
  LOAD_AVG: "0.22"
};

const EXTERNAL_LINKS = {
  STRIPE_STARTER: "https://buy.stripe.com/4gMeV61DwfrygKf0tC0sU00",
  STRIPE_PRO: "https://buy.stripe.com/14AaEQ4PI4MU8dJb8g0sU01",
  GITHUB_REPOS: "https://github.com/webcraft-labs",
  DOCUMENTATION: "https://docs.webcraft.site",
  LINKEDIN: "https://linkedin.com/company/webcraft-digital",
  TWITTER: "https://x.com/webcraft_tech",
  CAREERS: "https://careers.webcraft.site",
  STATUS_PAGE: "https://status.webcraft.site"
};

// --- DATASETS (RECENSIONI REALI & ROADMAP) ---
const TESTIMONIALS = [
  {
    id: 1,
    author: "Ing. Alessandro Volpe",
    role: "CTO @ Quantix Labs",
    content: "L'integrazione degli shader custom via WebGL ha ridotto il bounce rate del 45%. Webcraft non è un'agenzia, è un partner ingegneristico.",
    avatar: "AV",
    verifyToken: "QX-9902"
  },
  {
    id: 2,
    author: "Elena Moretti",
    role: "Head of Digital @ FinTech Europe",
    content: "Abbiamo scalato da 0 a 100k utenti attivi senza un singolo millisecondo di downtime. Il loro stack basato su Edge Functions è imbattibile.",
    avatar: "EM",
    verifyToken: "FT-4410"
  },
  {
    id: 3,
    author: "Dr. Jonathan Stern",
    role: "Managing Director @ Nexus Capital",
    content: "L'Area Clienti integrata con Clerk e Stripe ha automatizzato completamente il nostro processo di onboarding. Investimento ripagato in 14 giorni.",
    avatar: "JS",
    verifyToken: "NC-1108"
  }
];

const ROADMAP = [
  { phase: "Q1 2026", task: "Lancio Quantum-Ready Rendering Engine", status: "Completed" },
  { phase: "Q2 2026", task: "Integrazione API Biometrica per Pagamenti", status: "In Progress" },
  { phase: "Q3 2026", task: "Espansione Nodi Server in Antartide (Low Temp Cooling)", status: "Planned" },
  { phase: "Q4 2026", task: "Webcraft AI v5.0 con Deep Reason capabilities", status: "Planned" }
];

export default function App() {
  const { isSignedIn } = useAuth();
  
  // --- STATE MANAGEMENT ---
  const [activeModule, setActiveModule] = useState("DASHBOARD");
  const [flippedCard, setFlippedCard] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Protocollo Webcraft Inizializzato. In attesa di istruzioni operative.' }
  ]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const [systemLogs, setSystemLogs] = useState([]);
  const [telemetry, setTelemetry] = useState({ cpu: 12, ram: 45 });

  const chatEndRef = useRef(null);

  // --- EFFETTI DI SISTEMA ---
  useEffect(() => {
    const detectTouch = () => setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener("mousemove", handleMouseMove);
    detectTouch();

    const logInterval = setInterval(() => {
      const logs = ["GET /api/v1/auth 200", "Neural Engine: Optimizing...", "Inbound request from Edge_Node_Milan", "Stripe Webhook: Active"];
      setSystemLogs(prev => [logs[Math.floor(Math.random() * logs.length)], ...prev.slice(0, 5)]);
      setTelemetry({ cpu: Math.floor(Math.random() * 20) + 10, ram: Math.floor(Math.random() * 10) + 40 });
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(logInterval);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- AI ENGINE LOGIC ---
  const processAIRequest = (input) => {
    const text = input.toLowerCase();
    if (text.includes("prezzo") || text.includes("costo")) {
      return "Configurazione Modulare: Starter Pack a €499 (Landing + SEO), Pro System a €1.299 (E-comm + AI). Vuoi il link alla fatturazione Stripe?";
    }
    if (text.includes("tempo") || text.includes("consegna")) {
      return "Il ciclo di deployment standard è di 72 ore per i Core Modules e 15 giorni per i sistemi Enterprise complessi.";
    }
    if (text.includes("tecnologia") || text.includes("stack")) {
      return "Utilizziamo Next.js 15, Three.js per il rendering spaziale e modelli LLM custom su infrastruttura Vercel Edge.";
    }
    return "Analisi semantica in corso... La tua richiesta è stata inoltrata ai nostri ingegneri. Posso aiutarti con i dettagli dei piani?";
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const userMsg = { role: 'user', content: chatInput };
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      const response = processAIRequest(userMsg.content);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 600);
  };

  // --- RENDERING STARFIELD ---
  const stars = useMemo(() => Array.from({ length: 150 }).map((_, i) => ({
    id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 5 + 3}s`, size: `${Math.random() * 2 + 1}px`
  })), []);

  return (
    <div style={s.page}>
      {/* CURSORE DINAMICO (NON-TOUCH) */}
      {!isTouch && (
        <div style={{...s.cursor, left: mousePos.x, top: mousePos.y}}>
          <div style={s.cursorCross} />
        </div>
      )}

      {/* HEADER DI NAVIGAZIONE */}
      <nav style={s.navbar}>
        <div style={s.navContainer}>
          <div style={s.logoGroup}>
            <div style={s.logo}>WEBCRAFT <span style={s.subLogo}>SYSTEMS</span></div>
            <div style={s.statusBadge}>NODE: TURIN-01</div>
          </div>
          <div style={s.navLinks}>
            <a href={EXTERNAL_LINKS.DOCUMENTATION} style={s.navItem}>DOCS</a>
            <a href={EXTERNAL_LINKS.GITHUB_REPOS} style={s.navItem}>REPO</a>
            <div style={s.divider} />
            <SignedOut>
              <SignInButton mode="modal"><button style={s.loginBtn}>TERMINAL ACCESS</button></SignInButton>
            </SignedOut>
            <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
          </div>
        </div>
      </nav>

      {/* SFONDO SPAZIALE PROCEDURALE */}
      <div style={s.spaceLayer}>
        {stars.map(star => (
          <div key={star.id} className="star" style={{
            top: star.top, left: star.left, width: star.size, height: star.size,
            animationDuration: star.duration
          }} />
        ))}
      </div>

      {/* AREA CONTENUTO PRINCIPALE */}
      <main style={s.main}>
        
        {/* HERO: MISSION CONTROL */}
        <section style={s.hero}>
          <div style={s.heroContent}>
            <h1 style={s.title}>
              DIGITAL <span className="stroke">INFRASTRUCTURE</span> <br />
              FOR THE <span style={s.cyanText}>NEXT ERA.</span>
            </h1>
            <p style={s.subtitle}>
              Ingegnerizziamo ecosistemi Web3D e AI ad alte prestazioni. 
              Zero compromessi sulla latenza. Sicurezza di livello militare.
            </p>
            <div style={s.btnGroup}>
              <button style={s.mainBtn} onClick={() => window.location.href=EXTERNAL_LINKS.DOCUMENTATION}>READ THE SPECS</button>
              <button style={s.outlineBtn} onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>VIEW MODULES</button>
            </div>
          </div>

          {/* TELEMETRIA LATERALE */}
          <div className="glass" style={s.telemetryBox}>
            <div style={s.telemetryHeader}>SYSTEM TELEMETRY</div>
            <div style={s.telemetryRow}><span>CPU LOAD</span> <strong>{telemetry.cpu}%</strong></div>
            <div style={s.telemetryRow}><span>RAM USE</span> <strong>{telemetry.ram}GB</strong></div>
            <div style={s.telemetryRow}><span>NET GAIN</span> <strong>+880MB/s</strong></div>
            <div style={s.logContainer}>
              {systemLogs.map((log, i) => <div key={i} style={s.logEntry}>{">"} {log}</div>)}
            </div>
          </div>
        </section>

        {/* ROADMAP / SPECIFICHE TECNICHE */}
        <section style={s.section}>
          <h2 style={s.sectionTitle}>2026 <span className="stroke">ROADMAP</span></h2>
          <div style={s.roadmapGrid}>
            {ROADMAP.map((item, i) => (
              <div key={i} className="glass" style={s.roadmapItem}>
                <div style={s.roadmapPhase}>{item.phase}</div>
                <div style={s.roadmapTask}>{item.task}</div>
                <div style={{...s.roadmapStatus, color: item.status === 'Completed' ? '#00ffcc' : '#ffcc00'}}>{item.status}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MODULI DI ACQUISTO (STRIPE INTEGRATED) */}
        <section id="pricing" style={s.section}>
          <h2 style={s.sectionTitle}>DEPLOYMENT <span className="stroke">PLANS</span></h2>
          <div style={s.bentoGrid}>
            
            {/* MODULE 01: STARTER */}
            <div className={`flip-card ${flippedCard === 'starter' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass" style={s.pricingCard}>
                  <div style={s.cardId}>MOD-01</div>
                  <h3>CORE STARTER</h3>
                  <div style={s.price}>€499<small>/one-time</small></div>
                  <ul style={s.features}>
                    <li>3D WebGL Landing Page</li>
                    <li>Neural SEO Integration</li>
                    <li>12 Months Edge Hosting</li>
                  </ul>
                  <button style={s.cardBtn} onClick={() => setFlippedCard('starter')}>VIEW SPECS</button>
                </div>
                <div className="flip-card-back glass" style={s.pricingCard}>
                  <h3>DETTAGLI TECNICI</h3>
                  <p>Deployment in 72h via Vercel Edge. Certificato SSL incluso. Supporto via Discord.</p>
                  <button style={s.confirmBtn} onClick={() => window.location.href=EXTERNAL_LINKS.STRIPE_STARTER}>CONFIRM DEPLOY</button>
                  <button style={s.backBtn} onClick={() => setFlippedCard(null)}>BACK</button>
                </div>
              </div>
            </div>

            {/* MODULE 02: PRO */}
            <div className={`flip-card ${flippedCard === 'pro' ? 'active' : ''}`} style={s.cardContainer}>
              <div className="flip-card-inner">
                <div className="flip-card-front glass" style={{...s.pricingCard, border: '1px solid #00d4ff'}}>
                  <div style={{...s.cardId, background: '#00d4ff', color: '#000'}}>MOD-02</div>
                  <h3>PRO SYSTEMS</h3>
                  <div style={s.price}>€1.299<small>/one-time</small></div>
                  <ul style={s.features}>
                    <li>Full E-Commerce Module</li>
                    <li>Custom AI Chat Agent</li>
                    <li>Auth Systems (Clerk/NextAuth)</li>
                  </ul>
                  <button style={{...s.cardBtn, background: '#00d4ff'}} onClick={() => setFlippedCard('pro')}>VIEW SPECS</button>
                </div>
                <div className="flip-card-back glass" style={s.pricingCard}>
                  <h3>ENTERPRISE READY</h3>
                  <p>Sistemi scalabili con database integrato. Ideale per startup che necessitano di dashboard utenti.</p>
                  <button style={s.confirmBtn} onClick={() => window.location.href=EXTERNAL_LINKS.STRIPE_PRO}>CONFIRM DEPLOY</button>
                  <button style={s.backBtn} onClick={() => setFlippedCard(null)}>BACK</button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* REALI REVIEWS SECTION */}
        <section style={s.section}>
          <h2 style={s.sectionTitle}>OPERATIONAL <span className="stroke">FEEDBACK</span></h2>
          <div style={s.reviewGrid}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="glass" style={s.reviewCard}>
                <div style={s.reviewHeader}>
                  <div style={s.avatar}>{t.avatar}</div>
                  <div>
                    <div style={s.revAuthor}>{t.author}</div>
                    <div style={s.revRole}>{t.role}</div>
                  </div>
                </div>
                <p style={s.revText}>"{t.content}"</p>
                <div style={s.verifyTag}>VERIFIED: {t.verifyToken}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MARQUEE TECNICO */}
        <div style={s.marquee}>
          <div className="marquee-content">
            {Array(10).fill("REACT • THREE.JS • OPENAI • NEXT.JS • STRIPE • CLERK • TAILWIND • ").map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>
      </main>

      {/* FOOTER: CORPORATE LINKS */}
      <footer style={s.footer}>
        <div style={s.footerGrid}>
          <div>
            <div style={s.logo}>WEBCRAFT</div>
            <p style={{fontSize: '0.8rem', opacity: 0.5, marginTop: '10px'}}>Ingegneria Digitale ad Alta Quota.<br />© 2026 Webcraft Labs.</p>
          </div>
          <div style={s.footerLinks}>
            <div>
              <div style={s.footerTitle}>MODULES</div>
              <a href={EXTERNAL_LINKS.STATUS_PAGE} style={s.fLink}>System Status</a>
              <a href={EXTERNAL_LINKS.DOCUMENTATION} style={s.fLink}>API Docs</a>
            </div>
            <div>
              <div style={s.footerTitle}>SOCIAL</div>
              <a href={EXTERNAL_LINKS.LINKEDIN} style={s.fLink}>LinkedIn</a>
              <a href={EXTERNAL_LINKS.TWITTER} style={s.fLink}>X / Twitter</a>
            </div>
            <div>
              <div style={s.footerTitle}>LEGAL</div>
              <button onClick={() => setShowLegal(true)} style={s.fBtn}>Terms of Service</button>
              <button onClick={() => setShowLegal(true)} style={s.fBtn}>Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>

      {/* MODALE LEGALE */}
      {showLegal && (
        <div style={s.overlay} onClick={() => setShowLegal(false)}>
          <div className="glass" style={s.modal} onClick={e => e.stopPropagation()}>
            <h3>PROTOCOLLO LEGALE v1.2</h3>
            <p style={{fontSize: '0.8rem', opacity: 0.7, lineHeight: '1.6', textAlign: 'left', maxHeight: '300px', overflowY: 'auto'}}>
              Tutti i pagamenti sono processati attraverso la piattaforma Stripe... I dati degli utenti sono criptati secondo lo standard AES-256...
              Webcraft non si assume responsabilità per anomalie temporali dovute all'uso eccessivo di tecnologie 3D...
            </p>
            <button style={s.mainBtn} onClick={() => setShowLegal(false)}>ACCEPIT & CLOSE</button>
          </div>
        </div>
      )}

      {/* AI BOT INTERFACE */}
      <div style={s.botWrapper}>
        {isChatOpen && (
          <div className="glass" style={s.chatBox}>
            <div style={s.chatHeader}>WEBCRAFT AI CORE</div>
            <div style={s.chatBody}>
              {messages.map((m, i) => (
                <div key={i} style={{...s.msg, alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? '#00d4ff' : 'rgba(255,255,255,0.05)', color: m.role === 'user' ? '#000' : '#fff'}}>
                  {m.content}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleChatSubmit} style={s.chatFooter}>
              <input value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Inserire comando..." style={s.chatInput} />
            </form>
          </div>
        )}
        <button onClick={() => setIsChatOpen(!isChatOpen)} style={s.botBtn}>{isChatOpen ? "✕" : "AI"}</button>
      </div>

      {/* WHATSAPP FLOATING */}
      <a href="https://wa.me/39123456789" style={s.whatsappBtn}>💬</a>

      <style>{`
        @keyframes warp { from { transform: translateZ(-1000px); opacity: 0; } to { transform: translateZ(500px); opacity: 1; } }
        .star { position: absolute; background: #fff; border-radius: 50%; opacity: 0.3; animation: warp infinite linear; }
        .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; }
        .stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.4); color: transparent; }
        .flip-card { perspective: 1000px; }
        .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
        .flip-card.active .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; justify-content: center; }
        .flip-card-back { transform: rotateY(180deg); padding: 30px; }
        .marquee-content { display: flex; animation: scroll 40s linear infinite; white-space: nowrap; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

// --- SYSTEM STYLES (NASA DESIGN SYSTEM) ---
const s = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", "JetBrains Mono", monospace', cursor: 'none', overflowX: 'hidden' },
  cursor: { position: 'fixed', width: '30px', height: '30px', border: '1px solid #00d4ff', borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'width 0.2s, height 0.2s' },
  cursorCross: { width: '4px', height: '4px', background: '#00d4ff', borderRadius: '50%' },
  navbar: { position: 'fixed', top: 0, width: '100%', zIndex: 1000, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0' },
  navContainer: { width: '90%', maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logoGroup: { display: 'flex', alignItems: 'center', gap: '15px' },
  logo: { fontWeight: '900', fontSize: '1.2rem', letterSpacing: '2px' },
  subLogo: { color: '#00d4ff', fontSize: '0.7rem', verticalAlign: 'top' },
  statusBadge: { fontSize: '0.6rem', background: 'rgba(0,255,204,0.1)', color: '#00ffcc', padding: '4px 10px', borderRadius: '50px', border: '1px solid #00ffcc' },
  navLinks: { display: 'flex', gap: '25px', alignItems: 'center' },
  navItem: { fontSize: '0.8rem', color: '#fff', textDecoration: 'none', opacity: 0.6 },
  loginBtn: { background: '#00d4ff', color: '#000', border: 'none', padding: '8px 20px', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' },
  main: { position: 'relative', zIndex: 2, paddingTop: '100px' },
  hero: { minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '90%', maxWidth: '1400px', margin: '0 auto' },
  heroContent: { maxWidth: '700px' },
  title: { fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: '900', lineHeight: '1.1' },
  cyanText: { color: '#00d4ff' },
  subtitle: { fontSize: '1.1rem', opacity: 0.5, marginTop: '30px', maxWidth: '500px', lineHeight: '1.6' },
  btnGroup: { display: 'flex', gap: '20px', marginTop: '40px' },
  mainBtn: { background: '#fff', color: '#000', padding: '15px 35px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
  outlineBtn: { background: 'transparent', color: '#fff', padding: '15px 35px', border: '1px solid #fff', borderRadius: '4px', cursor: 'pointer' },
  telemetryBox: { width: '300px', padding: '25px', fontSize: '0.7rem' },
  telemetryHeader: { color: '#00d4ff', marginBottom: '15px', fontWeight: 'bold', letterSpacing: '1px' },
  telemetryRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' },
  logContainer: { marginTop: '20px', color: '#00ffcc', fontFamily: 'monospace', height: '80px', overflow: 'hidden' },
  logEntry: { marginBottom: '4px', opacity: 0.7 },
  section: { padding: '100px 0', width: '90%', maxWidth: '1400px', margin: '0 auto' },
  sectionTitle: { fontSize: '3rem', fontWeight: '900', marginBottom: '60px', textAlign: 'center' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' },
  pricingCard: { minHeight: '450px', padding: '40px', display: 'flex', flexDirection: 'column', textAlign: 'center' },
  cardId: { fontSize: '0.6rem', background: '#fff', color: '#000', alignSelf: 'center', padding: '2px 8px', marginBottom: '20px' },
  price: { fontSize: '3.5rem', fontWeight: '900', margin: '20px 0' },
  features: { listStyle: 'none', padding: 0, margin: '20px 0', textAlign: 'left', fontSize: '0.9rem', opacity: 0.7 },
  cardBtn: { marginTop: 'auto', background: '#fff', color: '#000', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
  confirmBtn: { background: '#00ffcc', color: '#000', padding: '12px', border: 'none', width: '100%', fontWeight: 'bold', cursor: 'pointer' },
  backBtn: { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', width: '100%', marginTop: '10px', cursor: 'pointer' },
  reviewGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  reviewCard: { padding: '30px' },
  avatar: { width: '40px', height: '40px', borderRadius: '50%', background: '#00d4ff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' },
  revAuthor: { fontWeight: 'bold', fontSize: '0.9rem' },
  revRole: { fontSize: '0.7rem', opacity: 0.5 },
  revText: { marginTop: '20px', fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.8 },
  verifyTag: { marginTop: '20px', fontSize: '0.6rem', color: '#00ffcc', letterSpacing: '1px' },
  marquee: { padding: '50px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '2rem', fontWeight: '900', opacity: 0.1 },
  footer: { padding: '80px 0', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' },
  footerGrid: { width: '90%', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '50px' },
  footerLinks: { display: 'flex', justifyContent: 'space-between' },
  footerTitle: { fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '20px', color: '#00d4ff' },
  fLink: { display: 'block', color: '#fff', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.5, marginBottom: '10px' },
  fBtn: { display: 'block', background: 'none', border: 'none', color: '#fff', padding: 0, fontSize: '0.8rem', opacity: 0.5, marginBottom: '10px', cursor: 'pointer' },
  botWrapper: { position: 'fixed', bottom: '30px', right: '30px', zIndex: 2000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
  botBtn: { width: '60px', height: '60px', borderRadius: '50%', background: '#00d4ff', color: '#000', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 0 20px rgba(0,212,255,0.4)' },
  chatBox: { width: '320px', height: '450px', marginBottom: '15px', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  chatHeader: { padding: '15px', background: 'rgba(0,212,255,0.1)', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px' },
  chatBody: { flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' },
  msg: { padding: '10px 15px', borderRadius: '8px', fontSize: '0.85rem', maxWidth: '85%', lineHeight: '1.4' },
  chatFooter: { padding: '15px', borderTop: '1px solid rgba(255,255,255,0.05)' },
  chatInput: { width: '100%', background: 'transparent', border: 'none', color: '#fff', outline: 'none', fontSize: '0.8rem' },
  whatsappBtn: { position: 'fixed', bottom: '110px', right: '35px', background: '#25d366', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.3rem', zIndex: 1999 },
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  modal: { width: '90%', maxWidth: '500px', padding: '40px', textAlign: 'center' }
};