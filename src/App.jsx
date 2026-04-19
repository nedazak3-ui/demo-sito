import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Siti professionali su misura",
    text: "Ogni progetto viene costruito attorno all'identità del brand, alle preferenze del cliente e agli obiettivi del business.",
  },
  {
    icon: Layers3,
    title: "Direzione visiva premium",
    text: "Tipografia, composizione, profondità e dettagli vengono curati per dare un'immagine forte, elegante e autorevole.",
  },
  {
    icon: MonitorSmartphone,
    title: "Esperienza impeccabile",
    text: "Il sito viene progettato per essere fluido, chiaro e credibile su desktop, tablet e mobile.",
  },
];

const portfolio = [
  {
    title: "Atelier Forma",
    category: "Luxury / Beauty",
    text: "Un concept sofisticato e minimale per un brand beauty che vuole apparire esclusivo e curato fin dal primo sguardo.",
  },
  {
    title: "Nordic Structure",
    category: "Architecture",
    text: "Una presenza online elegante e autorevole per studi di architettura, real estate e aziende che puntano sulla percezione premium.",
  },
  {
    title: "Velocity Club",
    category: "Fitness / Performance",
    text: "Un layout deciso e immersivo, pensato per trasmettere energia, posizionamento forte e un'identità contemporanea.",
  },
];

const process = [
  "Analizzo il brand, il target e l'immagine da trasmettere.",
  "Progetto una direzione visiva chiara e coerente con le vostre preferenze.",
  "Sviluppo un sito professionale con animazioni eleganti e forte impatto visivo.",
  "Consegno una presenza online progettata per distinguersi e valorizzare il business.",
];

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 10% 15%, rgba(84, 214, 255, 0.10), transparent 20%), radial-gradient(circle at 88% 14%, rgba(180, 85, 255, 0.12), transparent 22%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.06), transparent 26%), linear-gradient(180deg, #03050a 0%, #070b14 40%, #03050a 100%)",
    color: "#f8fafc",
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  container: {
    width: "min(1280px, calc(100% - 40px))",
    margin: "0 auto",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 0",
    position: "sticky",
    top: 0,
    zIndex: 40,
    backdropFilter: "blur(18px)",
  },
  logo: {
    fontFamily: 'Georgia, Times New Roman, serif',
    fontSize: "26px",
    letterSpacing: "-0.04em",
    fontWeight: 700,
  },
  navSub: {
    color: "#94a3b8",
    fontSize: 13,
    marginTop: 4,
  },
  ghostBtn: {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    borderRadius: 18,
    padding: "14px 20px",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },
  primaryBtn: {
    border: "none",
    background: "linear-gradient(135deg, #dfe7ff 0%, #9ce7ff 55%, #cbb8ff 100%)",
    color: "#060b15",
    borderRadius: 18,
    padding: "16px 24px",
    fontWeight: 800,
    fontSize: 15,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    boxShadow: "0 16px 50px rgba(131, 214, 255, 0.18)",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    borderRadius: 999,
    padding: "10px 16px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    color: "#dbe7f4",
    backdropFilter: "blur(12px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
    width: "fit-content",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 40,
    padding: "46px 0 80px",
  },
  heroTop: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: 36,
    alignItems: "center",
  },
  title: {
    fontFamily: 'Georgia, Times New Roman, serif',
    fontSize: "clamp(60px, 8vw, 112px)",
    lineHeight: 0.88,
    letterSpacing: "-0.05em",
    margin: "20px 0 22px",
    maxWidth: 780,
  },
  gradientText: {
    background: "linear-gradient(90deg, #eef2ff 0%, #9ce7ff 45%, #d5b4ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroText: {
    color: "#b7c4d4",
    fontSize: 20,
    lineHeight: 1.85,
    maxWidth: 700,
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 30,
  },
  glass: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 30,
    boxShadow: "0 22px 60px rgba(0,0,0,0.28)",
    backdropFilter: "blur(18px)",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0,1fr))",
    gap: 16,
    marginTop: 28,
  },
  statCard: {
    padding: 22,
  },
  statBig: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },
  statSmall: {
    marginTop: 8,
    color: "#94a3b8",
    lineHeight: 1.6,
    fontSize: 14,
  },
  section: {
    padding: "34px 0 110px",
  },
  kicker: {
    color: "#98dfff",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily: 'Georgia, Times New Roman, serif',
    fontSize: "clamp(38px, 5vw, 64px)",
    lineHeight: 0.94,
    letterSpacing: "-0.05em",
    margin: 0,
    maxWidth: 900,
  },
  sectionText: {
    color: "#94a3b8",
    fontSize: 18,
    lineHeight: 1.85,
    maxWidth: 760,
    marginTop: 16,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0,1fr))",
    gap: 22,
  },
  serviceCard: {
    padding: 30,
    minHeight: 250,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 18,
    background: "rgba(156,231,255,0.10)",
    border: "1px solid rgba(156,231,255,0.10)",
    color: "#a5ebff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  split: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  },
  panel: {
    padding: 32,
  },
  processItem: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    color: "#d9e3ef",
    marginBottom: 18,
    lineHeight: 1.75,
  },
  portfolioCard: {
    overflow: "hidden",
  },
  portfolioTop: {
    height: 280,
    position: "relative",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background:
      "radial-gradient(circle at top left, rgba(156,231,255,0.18), rgba(7,11,20,1) 64%)",
  },
  portfolioBody: {
    padding: 24,
  },
  portfolioTag: {
    position: "absolute",
    left: 18,
    top: 18,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.06)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
  },
};

function ThreeSceneHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{ position: "relative", perspective: "1600px", minHeight: 620 }}
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "50%",
          top: "52%",
          width: 420,
          height: 420,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156,231,255,0.22), rgba(156,231,255,0.02) 65%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 470,
            height: 470,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 80px rgba(156,231,255,0.08), inset 0 0 50px rgba(255,255,255,0.02)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "1px solid rgba(180,85,255,0.10)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0], rotateY: [0, 8, 0], rotateX: [10, 0, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "50%",
          top: "52%",
          width: 270,
          height: 270,
          transform: "translate(-50%, -50%) rotateX(18deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 44,
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.22), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 28px 80px rgba(0,0,0,0.35)",
            backdropFilter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 30,
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "radial-gradient(circle at top left, rgba(156,231,255,0.18), rgba(255,255,255,0.02) 40%, rgba(3,5,10,0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 38,
            top: 44,
            width: 70,
            height: 10,
            borderRadius: 999,
            background: "rgba(255,255,255,0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 38,
            top: 68,
            width: 152,
            height: 56,
            borderRadius: 18,
            background: "rgba(255,255,255,0.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 38,
            top: 140,
            width: 102,
            height: 40,
            borderRadius: 14,
            background: "linear-gradient(135deg, #9ce7ff, #d1c1ff)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 38,
            bottom: 42,
            width: 82,
            height: 82,
            borderRadius: 22,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "14%",
          top: "18%",
          width: 140,
          height: 140,
          borderRadius: 28,
          border: "1px solid rgba(255,255,255,0.10)",
          background: "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
      />

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          right: "10%",
          top: "24%",
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "1px solid rgba(156,231,255,0.14)",
          background: "radial-gradient(circle, rgba(156,231,255,0.18), rgba(255,255,255,0.02) 70%)",
          backdropFilter: "blur(14px)",
        }}
      />

      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "22%",
          bottom: "8%",
          width: 180,
          height: 110,
          borderRadius: 26,
          border: "1px solid rgba(255,255,255,0.10)",
          background: "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.24)",
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "50%",
          bottom: 28,
          width: 300,
          height: 28,
          transform: "translateX(-50%)",
          borderRadius: 999,
          background: "rgba(156,231,255,0.12)",
          filter: "blur(16px)",
        }}
      />
    </motion.div>
  );
}

function ServiceCard({ icon: Icon, title, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      style={{ ...styles.glass, ...styles.serviceCard }}
    >
      <div style={styles.iconBox}><Icon size={24} /></div>
      <h3 style={{ fontSize: 24, margin: "0 0 12px", letterSpacing: "-0.03em" }}>{title}</h3>
      <p style={{ color: "#94a3b8", lineHeight: 1.8, margin: 0 }}>{text}</p>
    </motion.div>
  );
}

function PortfolioCard({ item, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      style={{ ...styles.glass, ...styles.portfolioCard }}
    >
      <div style={styles.portfolioTop}>
        <div style={styles.portfolioTag}>{item.category}</div>
        <motion.div
          whileHover={{ scale: 1.04, rotate: -4 }}
          transition={{ duration: 0.35 }}
          style={{
            position: "absolute",
            left: "50%",
            top: "52%",
            width: 240,
            height: 140,
            transform: "translate(-50%, -50%) rotate(-8deg)",
            borderRadius: 32,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "linear-gradient(145deg, rgba(255,255,255,0.20), rgba(255,255,255,0.04))",
            boxShadow: "0 28px 60px rgba(0,0,0,0.30)",
          }}
        />
      </div>
      <div style={styles.portfolioBody}>
        <h3 style={{ fontSize: 30, margin: "0 0 12px", letterSpacing: "-0.04em" }}>{item.title}</h3>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, margin: 0 }}>{item.text}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.nav}>
          <div>
            <div style={styles.logo}>Studio Visivo</div>
            <div style={styles.navSub}>Siti professionali personalizzati</div>
          </div>
          <button style={styles.ghostBtn}>Contattami</button>
        </header>

        <section style={styles.hero}>
          <div style={styles.heroTop}>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={styles.badge}
              >
                <Sparkles size={16} color="#9ce7ff" />
                Creo siti professionali in base alle vostre preferenze e alla vostra identità
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                style={styles.title}
              >
                Un sito che
                <br />
                <span style={styles.gradientText}>si fa guardare.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                style={styles.heroText}
              >
                Progetto e sviluppo siti professionali con una direzione visiva forte, pensati per
                impressionare il cliente nei primi secondi e dare al vostro brand un'immagine moderna,
                credibile e visivamente superiore alla media.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18 }}
                style={styles.row}
              >
                <button style={styles.primaryBtn}>
                  Richiedi una proposta
                  <ArrowRight size={16} />
                </button>
                <button style={styles.ghostBtn}>Guarda i lavori</button>
              </motion.div>
            </div>

            <ThreeSceneHero />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            style={styles.statsRow}
          >
            <div style={{ ...styles.glass, ...styles.statCard }}>
              <div style={styles.statBig}>Wow</div>
              <div style={styles.statSmall}>Impatto visivo pensato per colpire subito</div>
            </div>
            <div style={{ ...styles.glass, ...styles.statCard }}>
              <div style={styles.statBig}>Custom</div>
              <div style={styles.statSmall}>Ogni progetto segue preferenze e identità del brand</div>
            </div>
            <div style={{ ...styles.glass, ...styles.statCard }}>
              <div style={styles.statBig}>Premium</div>
              <div style={styles.statSmall}>Composizione, tipografia e dettaglio curati con precisione</div>
            </div>
            <div style={{ ...styles.glass, ...styles.statCard }}>
              <div style={styles.statBig}>24h</div>
              <div style={styles.statSmall}>Per sviluppare una prima demo d'impatto</div>
            </div>
          </motion.div>
        </section>

        <section style={styles.section}>
          <div style={styles.kicker}>Servizi</div>
          <h2 style={styles.sectionTitle}>Non solo un sito. Una presenza online che alza la percezione del vostro brand.</h2>
          <p style={styles.sectionText}>
            L'obiettivo non è riempire una pagina di sezioni uguali a tutte le altre, ma costruire un'esperienza visiva che trasmetta qualità, gusto e serietà professionale.
          </p>
          <div style={{ ...styles.grid3, marginTop: 30 }}>
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.08} />
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.split}>
            <div style={{ ...styles.glass, ...styles.panel }}>
              <div style={styles.kicker}>Approccio</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: "clamp(34px, 4vw, 54px)" }}>
                Estetica forte, struttura chiara, identità riconoscibile.
              </h2>
              <p style={styles.sectionText}>
                Un sito di livello non si limita a essere bello: deve avere equilibrio, profondità, ritmo visivo e una direzione artistica precisa. È questo che fa percepire il lavoro come professionale.
              </p>
            </div>

            <div style={{ ...styles.glass, ...styles.panel, display: "grid", gap: 18 }}>
              {[
                "Tipografia più elegante e meno standard.",
                "Sezioni più ampie e respirate per dare lusso visivo.",
                "Elementi 3D e pseudo-3D per creare un effetto wow immediato.",
                "Animazioni morbide e non banali per dare movimento senza sembrare template."
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, color: "#dbe7f4", lineHeight: 1.75 }}>
                  <BadgeCheck size={20} color="#9ce7ff" style={{ marginTop: 4 }} />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.kicker}>Concept portfolio</div>
          <h2 style={styles.sectionTitle}>Ogni concept è pensato per far dire: “ok, questo è di un altro livello”.</h2>
          <p style={styles.sectionText}>
            Una demo forte non serve solo a mostrare cosa sai fare. Serve a convincere il cliente che puoi far salire di livello anche la sua attività.
          </p>
          <div style={{ ...styles.grid3, marginTop: 30 }}>
            {portfolio.map((item, index) => (
              <PortfolioCard key={item.title} item={item} delay={index * 0.08} />
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.split}>
            <div style={{ ...styles.glass, ...styles.panel }}>
              <div style={styles.kicker}>Processo</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: "clamp(34px, 4vw, 54px)" }}>
                Un metodo curato per ottenere un risultato davvero professionale.
              </h2>
              <div style={{ marginTop: 24 }}>
                {process.map((item) => (
                  <div key={item} style={styles.processItem}>
                    <CheckCircle2 size={20} color="#9ce7ff" style={{ marginTop: 4 }} />
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...styles.glass, ...styles.panel }}>
              <div style={styles.kicker}>Perché funziona</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: "clamp(34px, 4vw, 54px)" }}>
                Perché il cliente compra prima con gli occhi, poi con la logica.
              </h2>
              <p style={styles.sectionText}>
                Se l'impatto visivo è alto, la percezione di valore cresce subito. Ed è proprio questo che trasforma una semplice pagina in uno strumento che rende il brand più forte e più credibile.
              </p>
              <div style={{ ...styles.row, marginTop: 26 }}>
                <button style={styles.primaryBtn}>
                  Voglio una demo così
                  <MoveRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section style={{ ...styles.section, paddingBottom: 130 }}>
          <div style={{ ...styles.glass, padding: 40 }}>
            <div style={styles.kicker}>Contatto</div>
            <h2 style={styles.sectionTitle}>Volete un sito costruito per impressionare davvero?</h2>
            <p style={styles.sectionText}>
              Posso realizzare una proposta visiva professionale, personalizzata e coerente con la vostra immagine, pensata per distinguervi e lasciare un'impressione forte fin dal primo sguardo.
            </p>
            <div style={styles.row}>
              <button style={styles.primaryBtn}>
                <Mail size={16} />
                Richiedi una proposta
              </button>
              <button style={styles.ghostBtn}>Scrivimi ora</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
