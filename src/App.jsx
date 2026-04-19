import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Zap,
  MousePointer2
} from "lucide-react";

// --- ENGINE PARTICELLE 3D POTENZIATO ---
const SpaceBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generiamo particelle con diverse profondità (Z-axis)
    const p = Array.from({ length: 100 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 5 + 3, // Più veloci per l'effetto "viaggio"
      delay: Math.random() * 5
    }));
    setParticles(p);
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#03050a",
      zIndex: -1,
      overflow: "hidden",
      perspective: "800px" // Forza la prospettiva 3D
    }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, z: -500, x: `${p.x}%`, y: `${p.y}%` }}
          animate={{
            opacity: [0, 1, 0],
            z: [ -500, 1000], // Le particelle "volano" verso la telecamera
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeIn"
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: "#9ce7ff",
            borderRadius: "50%",
            boxShadow: "0 0 15px #9ce7ff, 0 0 30px #2dd4bf",
          }}
        />
      ))}
      {/* Effetto nebbia spaziale per profondità */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(3,5,10,0.8) 100%)",
        pointerEvents: "none"
      }} />
    </div>
  );
};

export default function App() {
  return (
    <div style={{ color: "#f8fafc", fontFamily: "sans-serif", minHeight: "100vh" }}>
      <SpaceBackground />
      
      <div style={{ width: "min(1200px, 90%)", margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", padding: "30px 0", alignItems: "center" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "-1px" }}>WEBCRAFT</div>
          <button style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "10px 20px", borderRadius: "100px", cursor: "pointer", backdropFilter: "blur(10px)" }}>Contatti</button>
        </header>

        <section style={{ padding: "100px 0", textAlign: "center" }}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              background: "rgba(156,231,255,0.1)", 
              padding: "10px 20px", 
              borderRadius: "100px", 
              color: "#9ce7ff", 
              marginBottom: "30px",
              border: "1px solid rgba(156,231,255,0.2)"
            }}
          >
            <Sparkles size={16} /> 🚀 Web Design pensato solo per la qualità del servizio
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "clamp(40px, 8vw, 90px)", fontWeight: 800, lineHeight: 1, marginBottom: "30px", letterSpacing: "-0.05em" }}
          >
            NON CREO SITI. <br/>
            <span style={{ color: "transparent", WebkitTextStroke: "1px #fff", opacity: 0.7 }}>COSTRUISCO</span> IMPATTO.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: "1.2rem", color: "#94a3b8", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.6 }}
          >
            Trasformo la tua visione in un'esperienza digitale premium che cattura l'attenzione in meno di 3 secondi.
          </motion.p>

          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6 }}
             style={{ display: "flex", justifyContent: "center", gap: "15px" }}
          >
            <button style={{ background: "#fff", color: "#000", padding: "18px 35px", borderRadius: "100px", border: "none", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
              Inizia Ora <ArrowRight size={20} />
            </button>
          </motion.div>
        </section>

        {/* BENTO GRID 3D EFFECT */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", paddingBottom: "100px" }}>
          {[
            { icon: <Zap color="#9ce7ff" />, title: "Velocità Luce", desc: "Siti ottimizzati per caricare istantaneamente." },
            { icon: <Code2 color="#9ce7ff" />, title: "Codice Pulito", desc: "Sviluppo moderno con le ultime tecnologie." },
            { icon: <MousePointer2 color="#9ce7ff" />, title: "Esperienza UX", desc: "Interfacce pensate per convertire i visitatori." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "40px",
                borderRadius: "24px",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease"
              }}
            >
              {item.icon}
              <h3 style={{ fontSize: "24px", margin: "20px 0 10px" }}>{item.title}</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.5 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}