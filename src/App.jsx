import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Sparkles,
  Globe,
  Layers3,
  MonitorSmartphone,
  BadgeCheck,
  MoveRight,
  Code2,
  Zap
} from "lucide-react";

// --- ENGINE 3D SPAZIALE (PARTICELLE) ---
const SpaceBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: 80 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10
    }));
    setParticles(p);
  }, []);

  return (
    <div style={canvasStyles.container}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0, z: -100 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [`${p.x}%`, `${p.x + (p.x - 50)}%`],
            y: [`${p.y}%`, `${p.y + (p.y - 50)}%`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: "#fff",
            borderRadius: "50%",
            boxShadow: "0 0 10px #9ce7ff",
            zIndex: -1,
          }}
        />
      ))}
      <div style={canvasStyles.vignette} />
    </div>
  );
};

// --- STILI AVANZATI ---
const canvasStyles = {
  container: {
    position: "fixed",
    inset: 0,
    background: "radial-gradient(circle at 50% 50%, #0a0f1d 0%, #03050a 100%)",
    overflow: "hidden",
    zIndex: -1,
    perspective: "1000px"
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.6) 100%)"
  }
};

const styles = {
  page: {
    color: "#f8fafc",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    overflowX: "hidden"
  },
  container: {
    width: "min(1200px, 90%)",
    margin: "0 auto",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 0",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backdropFilter: "blur(12px)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: 800,
    letterSpacing: "-1px",
    background: "linear-gradient(90deg, #fff, #9ce7ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  glassCard: {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
  },
  primaryBtn: {
    background: "#fff",
    color: "#000",
    padding: "16px 32px",
    borderRadius: "100px",
    border: "none",
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
  },
  heroTitle: {
    fontSize: "clamp(50px, 8vw, 100px)",
    fontWeight: 800,
    lineHeight: 0.9,
    letterSpacing: "-0.06em",
    textAlign: "center",
    margin: "40px 0"
  }
};

// --- COMPONENTI PRINCIPALI ---

export default function WebCraftPro() {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2], [1, 0.9]));

  return (
    <div style={styles.page}>
      <SpaceBackground />
      
      <div style={styles.container}>
        <header style={styles.nav}>
          <div style={styles.logo}>WEBCRAFT.</div>
          <button style={{...styles.primaryBtn, padding: "10px 20px", fontSize: "14px"}}>
            Parliamo del tuo progetto
          </button>
        </header>

        {/* HERO SECTION 3D */}
        <motion.section style={{ scale, paddingTop: 60, paddingBottom: 100 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ 
                background: "rgba(156,231,255,0.1)", 
                padding: "8px 20px", 
                borderRadius: "100px",
                border: "1px solid rgba(156,231,255,0.2)",
                color: "#9ce7ff",
                fontSize: "14px",
                fontWeight: 600
              }}
            >
              🚀 Web Design Freelance di Prossima Generazione
            </motion.div>

            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={styles.heroTitle}
            >
              NON CREO SITI. <br/>
              <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
                COSTRUISCO 
              </span> IMPATTO.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ 
                fontSize: "20px", 
                color: "#94a3b8", 
                textAlign: "center", 
                maxWidth: "700px",
                lineHeight: 1.6,
                marginBottom: "40px"
              }}
            >
              Il tuo business merita un'estetica che intimidisca la concorrenza. 
              Sviluppo esperienze digitali immersive che trasformano i visitatori in clienti devoti.
            </motion.p>

            <div style={{ display: "flex", gap: "20px" }}>
              <motion.button whileHover={{ scale: 1.05 }} style={styles.primaryBtn}>
                Guarda l'eccellenza <ArrowRight size={20} />
              </motion.button>
              <button style={{ 
                background: "transparent", 
                color: "#fff", 
                border: "1px solid rgba(255,255,255,0.2)", 
                padding: "16px 32px", 
                borderRadius: "100px",
                fontWeight: 600,
                cursor: "pointer"
              }}>
                Il mio metodo
              </button>
            </div>
          </div>
        </motion.section>

        {/* BENTO GRID SERVIZI */}
        <section style={{ padding: "100px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "24px" }}>
            
            <div style={{ ...styles.glassCard, gridColumn: "span 7" }}>
              <Zap color="#9ce7ff" size={40} />
              <h2 style={{ fontSize: "32px", marginTop: "20px" }}>Performance Brutale</h2>
              <p style={{ color: "#94a3b8", fontSize: "18px" }}>
                Siti che caricano in un battito di ciglia. La velocità non è un optional, è un'arma di marketing.
              </p>
            </div>

            <div style={{ ...styles.glassCard, gridColumn: "span 5", background: "linear-gradient(135deg, rgba(156,231,255,0.1), transparent)" }}>
              <Code2 color="#9ce7ff" size={40} />
              <h2 style={{ fontSize: "32px", marginTop: "20px" }}>Clean Code</h2>
              <p style={{ color: "#94a3b8", fontSize: "18px" }}>Architetture scalabili su misura.</p>
            </div>

            <div style={{ ...styles.glassCard, gridColumn: "span 12", textAlign: "center" }}>
              <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Un design che parla di Te.</h2>
              <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto", fontSize: "20px" }}>
                Ogni pixel è posizionato con un'intenzione psicologica: generare fiducia immediata.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section style={{ paddingBottom: "150px" }}>
          <motion.div 
            whileHover={{ y: -10 }}
            style={{ 
              ...styles.glassCard, 
              textAlign: "center", 
              background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
              border: "1px solid rgba(156,231,255,0.3)"
            }}
          >
            <h2 style={{ fontSize: "56px", letterSpacing: "-3px" }}>PRONTO AL LEVEL UP?</h2>
            <p style={{ fontSize: "20px", color: "#94a3b8", marginBottom: "40px" }}>
              Non essere uno dei tanti. Sii quello che tutti ricordano.
            </p>
            <button style={{ ...styles.primaryBtn, margin: "0 auto", padding: "20px 50px", fontSize: "18px" }}>
              Inizia il tuo Progetto <Sparkles size={20} />
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}