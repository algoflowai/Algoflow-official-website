"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const CHATBOT_API_URL = "https://lcn4r526tb.execute-api.ap-south-2.amazonaws.com/prod/chat";

const quickActions = ["Our Services", "AI Solutions", "Get a Quote", "Book a Call"];

const MIN_W = 340, MIN_H = 440, MAX_W = 960, MAX_H = 980;
const DEFAULT_W = 420, DEFAULT_H = 600;

/* ─── Icons ─────────────────────────────────────────────────────────────── */
const BotIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" />
    <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" />
  </svg>
);
const SparkleIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);
const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const MinimizeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const MaximizeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);
const RestoreIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" />
    <line x1="10" y1="14" x2="21" y2="3" /><line x1="3" y1="21" x2="14" y2="10" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ─── Typing Dots ─────────────────────────────────────────────────────── */
const TypingDots = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "12px 16px" }}>
    {[0, 1, 2].map(i => (
      <motion.span key={i}
        style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "block" }}
        animate={{ y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
      />
    ))}
  </div>
);

/* ─── Message Bubble ─────────────────────────────────────────────────────── */
const MessageBubble = ({ msg }) => {
  const [copied, setCopied] = useState(false);
  const isUser = msg.role === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", marginBottom: 16, gap: 10 }}
    >
      {!isUser && (
        <div style={{
          width: 32, height: 32, borderRadius: "50%", flexShrink: 0, marginTop: 18,
          background: "linear-gradient(135deg, #15803d, #22c55e)",
          display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
          boxShadow: "0 0 12px rgba(34,197,94,0.4), 0 2px 8px rgba(0,0,0,0.4)",
          border: "1px solid rgba(34,197,94,0.3)",
        }}>
          <BotIcon size={15} />
        </div>
      )}

      <div style={{ maxWidth: "76%", display: "flex", flexDirection: "column", gap: 4, alignItems: isUser ? "flex-end" : "flex-start" }}>
        <span style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase",
          color: isUser ? "rgba(34,197,94,0.7)" : "rgba(148,163,184,0.7)",
        }}>
          {isUser ? "You" : "AlgoFlow AI"}
        </span>

        <div style={{
          padding: "11px 15px",
          borderRadius: isUser ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
          fontSize: 13.5, lineHeight: 1.65,
          background: isUser
            ? "linear-gradient(135deg, #15803d 0%, #16a34a 100%)"
            : "rgba(13, 24, 41, 0.85)",
          color: isUser ? "#fff" : "#e2e8f0",
          border: isUser
            ? "1px solid rgba(74,222,128,0.25)"
            : "1px solid rgba(34,197,94,0.15)",
          boxShadow: isUser
            ? "0 4px 20px rgba(21,128,61,0.35), inset 0 1px 0 rgba(255,255,255,0.1)"
            : "0 2px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(34,197,94,0.05)",
          backdropFilter: isUser ? "none" : "blur(12px)",
          WebkitBackdropFilter: isUser ? "none" : "blur(12px)",
        }}>
          {msg.role === "assistant" ? (
            <ReactMarkdown components={{
              p: ({ children }) => <p style={{ margin: "0 0 7px", color: "#e2e8f0" }}>{children}</p>,
              ul: ({ children }) => <ul style={{ margin: "6px 0", paddingLeft: 20, listStyleType: "disc", color: "#e2e8f0" }}>{children}</ul>,
              ol: ({ children }) => <ol style={{ margin: "6px 0", paddingLeft: 20, listStyleType: "decimal", color: "#e2e8f0" }}>{children}</ol>,
              li: ({ children }) => <li style={{ marginBottom: 4, fontSize: 13.5, color: "#cbd5e1" }}>{children}</li>,
              strong: ({ children }) => <strong style={{ fontWeight: 700, color: "#4ade80" }}>{children}</strong>,
              em: ({ children }) => <em style={{ fontStyle: "italic", color: "#94a3b8" }}>{children}</em>,
              code: ({ children }) => <code style={{ background: "rgba(34,197,94,0.1)", color: "#4ade80", padding: "1px 5px", borderRadius: 4, fontSize: 12.5 }}>{children}</code>,
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 4, marginTop: 6,
                  padding: "5px 13px", borderRadius: 8,
                  background: "linear-gradient(135deg, #15803d, #22c55e)",
                  color: "#fff", fontSize: 12.5, fontWeight: 600, textDecoration: "none",
                  boxShadow: "0 2px 10px rgba(34,197,94,0.35)",
                  border: "1px solid rgba(74,222,128,0.2)",
                }}>{children} →</a>
              ),
            }}>{msg.text}</ReactMarkdown>
          ) : msg.text}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10.5, color: "rgba(100,116,139,0.8)" }}>
            {msg.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
          {msg.role === "assistant" && msg.text && (
            <button onClick={handleCopy} title="Copy" style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "2px 5px", borderRadius: 4,
              color: copied ? "#22c55e" : "rgba(100,116,139,0.6)",
              display: "flex", alignItems: "center", gap: 3,
              fontSize: 10.5, transition: "color 0.2s",
            }}>
              {copied ? <CheckIcon /> : <CopyIcon />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          )}
        </div>
      </div>

      {isUser && (
        <div style={{
          width: 32, height: 32, borderRadius: "50%", flexShrink: 0, marginTop: 18,
          background: "rgba(13, 24, 41, 0.9)",
          border: "1.5px solid rgba(34,197,94,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700, color: "#22c55e",
          boxShadow: "0 0 8px rgba(34,197,94,0.2)",
        }}>
          U
        </div>
      )}
    </motion.div>
  );
};

/* ─── Resize handles ─────────────────────────────────────────────────────── */
const HANDLES = [
  { id: "n",  cursor: "n-resize",  style: { top: 0, left: 10, right: 10, height: 6 } },
  { id: "s",  cursor: "s-resize",  style: { bottom: 0, left: 10, right: 10, height: 6 } },
  { id: "e",  cursor: "e-resize",  style: { top: 10, right: 0, bottom: 10, width: 6 } },
  { id: "w",  cursor: "w-resize",  style: { top: 10, left: 0, bottom: 10, width: 6 } },
  { id: "ne", cursor: "ne-resize", style: { top: 0, right: 0, width: 16, height: 16 } },
  { id: "nw", cursor: "nw-resize", style: { top: 0, left: 0, width: 16, height: 16 } },
  { id: "se", cursor: "se-resize", style: { bottom: 0, right: 0, width: 16, height: 16 } },
  { id: "sw", cursor: "sw-resize", style: { bottom: 0, left: 0, width: 16, height: 16 } },
];

/* ─── Main Widget ────────────────────────────────────────────────────────── */
export default function ChatbotWidget() {
  const [isOpen, setIsOpen]       = useState(false);
  const [input, setInput]         = useState("");
  const [messages, setMessages]   = useState([{
    id: 1, role: "assistant",
    text: "👋 Hi! I'm the **AlgoFlow AI** assistant.\n\nI can help you explore our AI solutions, custom software services, pricing, and more. What are you building?",
    time: new Date(),
  }]);
  const [isTyping, setIsTyping]   = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [unread, setUnread]       = useState(0);
  const [pulse, setPulse]         = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [mobile, setMobile]       = useState(false);

  const [pos, setPos] = useState(() => ({
    x: typeof window !== "undefined" ? window.innerWidth  - DEFAULT_W - 24 : 100,
    y: typeof window !== "undefined" ? window.innerHeight - DEFAULT_H - 90 : 100,
  }));
  const [size, setSize] = useState({ w: DEFAULT_W, h: DEFAULT_H });

  const snapshot    = useRef(null);
  const dragRef     = useRef(null);
  const resizeRef   = useRef(null);
  const inputRef    = useRef(null);
  const messagesEnd = useRef(null);

  const canSend = input.trim().length > 0 && !isTyping;

  /* ── Mobile detect ── */
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Lock body scroll on mobile ── */
  useEffect(() => {
    document.body.style.overflow = (mobile && isOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile, isOpen]);

  /* ── Pulse FAB ── */
  useEffect(() => {
    if (isOpen) return;
    const id = setInterval(() => { setPulse(true); setTimeout(() => setPulse(false), 1200); }, 5000);
    return () => clearInterval(id);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) { inputRef.current?.focus(); setUnread(0); }
  }, [isOpen]);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* ── Drag ── */
  const startDrag = useCallback((e) => {
    if (mobile || maximized || e.button !== 0) return;
    e.preventDefault();
    dragRef.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  }, [mobile, maximized, pos]);

  /* ── Resize ── */
  const startResize = useCallback((e, handle) => {
    if (mobile || maximized || e.button !== 0) return;
    e.preventDefault(); e.stopPropagation();
    resizeRef.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y, pw: size.w, ph: size.h, handle };
    document.body.style.userSelect = "none";
    document.body.style.cursor = e.currentTarget.style.cursor;
  }, [mobile, maximized, pos, size]);

  useEffect(() => {
    const onMove = (e) => {
      if (dragRef.current) {
        const { mx, my, px, py } = dragRef.current;
        setPos({
          x: Math.max(0, Math.min(px + e.clientX - mx, window.innerWidth  - size.w)),
          y: Math.max(0, Math.min(py + e.clientY - my, window.innerHeight - size.h)),
        });
      }
      if (resizeRef.current) {
        const { mx, my, px, py, pw, ph, handle } = resizeRef.current;
        const dx = e.clientX - mx, dy = e.clientY - my;
        let nx = px, ny = py, nw = pw, nh = ph;
        if (handle.includes("e")) nw = Math.min(MAX_W, Math.max(MIN_W, pw + dx));
        if (handle.includes("s")) nh = Math.min(MAX_H, Math.max(MIN_H, ph + dy));
        if (handle.includes("w")) { nw = Math.min(MAX_W, Math.max(MIN_W, pw - dx)); nx = px + pw - nw; }
        if (handle.includes("n")) { nh = Math.min(MAX_H, Math.max(MIN_H, ph - dy)); ny = py + ph - nh; }
        setSize({ w: nw, h: nh }); setPos({ x: nx, y: ny });
      }
    };
    const onUp = () => {
      dragRef.current = null; resizeRef.current = null;
      document.body.style.userSelect = ""; document.body.style.cursor = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup",   onUp);
    return () => { window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp); };
  }, [size.w, size.h]);

  /* ── Maximize ── */
  const toggleMax = () => {
    if (mobile) return;
    if (!maximized) {
      snapshot.current = { pos: { ...pos }, size: { ...size } };
      setPos({ x: 0, y: 0 });
      setSize({ w: window.innerWidth, h: window.innerHeight });
    } else {
      setPos(snapshot.current.pos); setSize(snapshot.current.size);
    }
    setMaximized(m => !m);
  };

  /* ── Send ── */
  const sendMessage = useCallback(async (text) => {
    setMessages(prev => [...prev, { id: Date.now(), role: "user", text, time: new Date() }]);
    setInput(""); setIsTyping(true);
    try {
      const res  = await fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId }),
      });
      const data = await res.json();
      let parsed = data;
      if (data.body && typeof data.body === "string") { try { parsed = JSON.parse(data.body); } catch {} }
      const reply = parsed?.reply || "I'm sorry, I didn't get that. Could you try again?";
      setSessionId(parsed?.sessionId || sessionId);
      const words = reply.split(" ");
      let idx = 0;
      const botMsg = { id: Date.now() + 1, role: "assistant", text: "", time: new Date() };
      setMessages(prev => [...prev, botMsg]);
      const tick = setInterval(() => {
        idx++;
        setMessages(prev => {
          const u = [...prev];
          u[u.length - 1] = { ...u[u.length - 1], text: words.slice(0, idx).join(" ") };
          return u;
        });
        if (idx >= words.length) {
          clearInterval(tick); setIsTyping(false);
          if (!isOpen) setUnread(n => n + 1);
        }
      }, 22);
    } catch {
      setMessages(prev => [...prev, { id: Date.now() + 2, role: "assistant", text: "Connection issue — please try again.", time: new Date() }]);
      setIsTyping(false);
    }
  }, [sessionId, isOpen]);

  const handleSubmit = (e) => { e.preventDefault(); if (canSend) sendMessage(input.trim()); };

  /* ─── Render ─────────────────────────────────────────────────────────── */
  return (
    <>
      <style>{`
        .af-cb * { box-sizing: border-box; font-family: 'Inter', -apple-system, sans-serif; }

        /* Scrollbar */
        .af-cb ::-webkit-scrollbar { width: 4px; }
        .af-cb ::-webkit-scrollbar-track { background: rgba(5,13,26,0.4); }
        .af-cb ::-webkit-scrollbar-thumb { background: rgba(34,197,94,0.25); border-radius: 4px; }
        .af-cb ::-webkit-scrollbar-thumb:hover { background: rgba(34,197,94,0.45); }

        /* Input focus */
        .af-input:focus { outline: none !important; border-color: rgba(34,197,94,0.6) !important; box-shadow: 0 0 0 3px rgba(34,197,94,0.1), 0 0 20px rgba(34,197,94,0.08) !important; }

        /* Send button */
        .af-send:hover:not(:disabled) { background: linear-gradient(135deg, #16a34a, #15803d) !important; box-shadow: 0 0 20px rgba(34,197,94,0.5) !important; transform: scale(1.04); }
        .af-send:disabled { opacity: 0.35; cursor: not-allowed; }

        /* Quick action buttons */
        .af-qa:hover:not(:disabled) { background: rgba(34,197,94,0.12) !important; border-color: rgba(34,197,94,0.5) !important; color: #4ade80 !important; box-shadow: 0 0 12px rgba(34,197,94,0.15) !important; }
        .af-qa:disabled { opacity: 0.35; cursor: not-allowed; }

        /* Control buttons */
        .af-ctrl:hover { background: rgba(34,197,94,0.12) !important; border-color: rgba(34,197,94,0.3) !important; }
        .af-close:hover { background: rgba(220,38,38,0.4) !important; border-color: rgba(220,38,38,0.4) !important; }

        /* Resize handles */
        .af-rh { position: absolute; z-index: 20; transition: background 0.15s; }
        .af-rh:hover { background: rgba(34,197,94,0.12) !important; }

        /* FAB animations */
        @keyframes af-glow { 0%,100% { box-shadow: 0 4px 20px rgba(34,197,94,0.45) } 50% { box-shadow: 0 4px 32px rgba(34,197,94,0.7), 0 0 0 8px rgba(34,197,94,0.08) } }
        @keyframes af-ping { 0% { transform: scale(1); opacity: 0.75 } 80%,100% { transform: scale(2.2); opacity: 0 } }

        /* Neural dot grid pattern */
        .af-neural {
          background-image: radial-gradient(circle, rgba(34,197,94,0.18) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* Mobile sheet */
        .af-mobile-sheet {
          position: fixed !important;
          left: 0 !important; right: 0 !important;
          bottom: 0 !important; top: auto !important;
          width: 100% !important; height: 92dvh !important;
          border-radius: 22px 22px 0 0 !important;
        }
        @media (max-width: 639px) {
          .af-fab { right: 16px !important; bottom: 16px !important; width: 54px !important; height: 54px !important; }
          .af-cb-input { font-size: 16px !important; }
        }
      `}</style>

      <div className="af-cb" style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none" }}>

        {/* ── Backdrop (mobile) ── */}
        <AnimatePresence>
          {isOpen && mobile && (
            <motion.div
              key="af-backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute", inset: 0,
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
                pointerEvents: "all",
              }}
            />
          )}
        </AnimatePresence>

        {/* ── Chat Window ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="af-chat"
              className={mobile ? "af-mobile-sheet" : ""}
              initial={mobile ? { y: "100%" } : { opacity: 0, scale: 0.94, y: 16 }}
              animate={mobile ? { y: 0 }      : { opacity: 1, scale: 1,    y: 0  }}
              exit={mobile    ? { y: "100%" } : { opacity: 0, scale: 0.94, y: 16 }}
              transition={mobile
                ? { type: "spring", stiffness: 340, damping: 36 }
                : { type: "spring", stiffness: 380, damping: 32 }
              }
              style={{
                position: "absolute",
                ...(mobile ? {} : {
                  left: pos.x, top: pos.y,
                  width: size.w, height: size.h,
                  borderRadius: maximized ? 0 : 20,
                }),
                overflow: "hidden",
                display: "flex", flexDirection: "column",
                background: "rgba(6, 13, 27, 0.97)",
                backdropFilter: "blur(40px) saturate(160%)",
                WebkitBackdropFilter: "blur(40px) saturate(160%)",
                border: (mobile || maximized) ? "none" : "1px solid rgba(34,197,94,0.2)",
                boxShadow: mobile
                  ? "0 -8px 60px rgba(34,197,94,0.12), 0 -2px 20px rgba(0,0,0,0.5)"
                  : maximized ? "none"
                  : "0 0 0 1px rgba(34,197,94,0.08), 0 20px 60px rgba(0,0,0,0.6), 0 0 60px rgba(34,197,94,0.06)",
                pointerEvents: "all",
              }}
            >
              {/* Resize handles (desktop only) */}
              {!mobile && !maximized && HANDLES.map(h => (
                <div key={h.id} className="af-rh"
                  style={{ cursor: h.cursor, borderRadius: h.id.length === 2 ? 4 : 0, ...h.style }}
                  onPointerDown={e => startResize(e, h.id)}
                />
              ))}

              {/* SE grip dots */}
              {!mobile && !maximized && (
                <div style={{
                  position: "absolute", bottom: 5, right: 5, zIndex: 25,
                  display: "grid", gridTemplateColumns: "repeat(3, 4px)", gap: 2.5,
                  opacity: 0.25, pointerEvents: "none",
                }}>
                  {[...Array(9)].map((_, i) => i > 2 && (
                    <span key={i} style={{ width: 3, height: 3, borderRadius: "50%", background: "#22c55e" }} />
                  ))}
                </div>
              )}

              {/* Mobile drag pill */}
              {mobile && (
                <div style={{ flexShrink: 0, display: "flex", justifyContent: "center", padding: "10px 0 4px", background: "rgba(6,13,27,0.97)" }}>
                  <div style={{ width: 40, height: 4, borderRadius: 4, background: "rgba(34,197,94,0.25)" }} />
                </div>
              )}

              {/* ── Header ── */}
              <div
                onPointerDown={!mobile ? startDrag : undefined}
                style={{
                  flexShrink: 0,
                  padding: mobile ? "12px 16px 14px" : "14px 16px",
                  background: "linear-gradient(135deg, #050e08 0%, #071508 50%, #060d1b 100%)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  borderBottom: "1px solid rgba(34,197,94,0.18)",
                  cursor: mobile || maximized ? "default" : "grab",
                  userSelect: "none",
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Neural dot pattern overlay */}
                <div className="af-neural" style={{
                  position: "absolute", inset: 0,
                  opacity: 0.4, pointerEvents: "none",
                }} />

                {/* Glow orbs */}
                <div style={{ position: "absolute", top: -30, right: -10, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: -20, left: 40, width: 70, height: 70, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

                {/* Avatar + title */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 1 }}>
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: "50%",
                      background: "linear-gradient(135deg, #052e16 0%, #14532d 100%)",
                      border: "1.5px solid rgba(34,197,94,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#22c55e",
                      boxShadow: "0 0 16px rgba(34,197,94,0.3), inset 0 1px 0 rgba(34,197,94,0.1)",
                    }}>
                      <BotIcon size={20} />
                    </div>
                    {/* Online pulse */}
                    <span style={{
                      position: "absolute", bottom: 1, right: 1,
                      width: 10, height: 10, borderRadius: "50%",
                      background: "#22c55e",
                      border: "2px solid #050e08",
                      boxShadow: "0 0 6px rgba(34,197,94,0.8)",
                    }} />
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 700, fontSize: 15, letterSpacing: 0.1,
                      background: "linear-gradient(90deg, #ffffff 0%, #d1fae5 60%, #22c55e 100%)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      AlgoFlow AI
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11.5, color: "rgba(74,222,128,0.85)", fontWeight: 500 }}>
                        <SparkleIcon size={11} />
                        AI Assistant · Online
                      </span>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: 5, zIndex: 1 }}
                  onPointerDown={e => e.stopPropagation()}>
                  {!mobile && (
                    <>
                      <button className="af-ctrl" onClick={toggleMax} title={maximized ? "Restore" : "Maximize"} style={{
                        background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
                        borderRadius: 8, padding: "6px 8px", cursor: "pointer", color: "rgba(34,197,94,0.8)",
                        display: "flex", alignItems: "center", transition: "all 0.2s",
                      }}>
                        {maximized ? <RestoreIcon /> : <MaximizeIcon />}
                      </button>
                      <button className="af-ctrl" onClick={() => setIsOpen(false)} title="Minimize" style={{
                        background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
                        borderRadius: 8, padding: "6px 8px", cursor: "pointer", color: "rgba(34,197,94,0.8)",
                        display: "flex", alignItems: "center", transition: "all 0.2s",
                      }}>
                        <MinimizeIcon />
                      </button>
                    </>
                  )}
                  <button className="af-ctrl af-close" onClick={() => setIsOpen(false)} title="Close" style={{
                    background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
                    borderRadius: 8, padding: mobile ? "8px 10px" : "6px 8px",
                    cursor: "pointer", color: "rgba(34,197,94,0.8)",
                    display: "flex", alignItems: "center", transition: "all 0.2s",
                  }}>
                    {mobile ? <ChevronDownIcon /> : <CloseIcon />}
                  </button>
                </div>
              </div>

              {/* ── Messages ── */}
              <div style={{
                flex: 1, overflowY: "auto",
                padding: "18px 16px 10px",
                display: "flex", flexDirection: "column", minHeight: 0,
                background: "linear-gradient(180deg, #060d1b 0%, #050b18 100%)",
                WebkitOverflowScrolling: "touch",
              }}>
                {/* Date divider */}
                <div style={{ textAlign: "center", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.2))" }} />
                  <span style={{ fontSize: 10.5, color: "rgba(100,116,139,0.7)", fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    {new Date().toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" })}
                  </span>
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(34,197,94,0.2), transparent)" }} />
                </div>

                <AnimatePresence initial={false}>
                  {messages.map(msg => <MessageBubble key={msg.id} msg={msg} />)}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                    style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 14 }}
                  >
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: "linear-gradient(135deg, #15803d, #22c55e)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                      boxShadow: "0 0 12px rgba(34,197,94,0.4)",
                      border: "1px solid rgba(34,197,94,0.3)", flexShrink: 0,
                    }}>
                      <BotIcon size={15} />
                    </div>
                    <div style={{
                      background: "rgba(13, 24, 41, 0.85)",
                      border: "1px solid rgba(34,197,94,0.15)",
                      borderRadius: "4px 16px 16px 16px",
                      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
                    }}>
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEnd} />
              </div>

              {/* ── Quick Actions ── */}
              <div style={{
                flexShrink: 0,
                padding: mobile ? "10px 12px" : "10px 16px",
                background: "rgba(5, 13, 26, 0.98)",
                borderTop: "1px solid rgba(34,197,94,0.1)",
                display: "flex",
                flexWrap: mobile ? "nowrap" : "wrap",
                gap: 7,
                overflowX: mobile ? "auto" : "visible",
                scrollbarWidth: "none",
              }}>
                {!mobile && (
                  <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(34,197,94,0.5)", width: "100%", marginBottom: 1, letterSpacing: 0.8, textTransform: "uppercase" }}>
                    Quick Actions
                  </span>
                )}
                {quickActions.map((q, i) => (
                  <motion.button key={i} className="af-qa"
                    onClick={() => sendMessage(q)} disabled={isTyping} whileTap={{ scale: 0.95 }}
                    style={{
                      fontSize: mobile ? 12 : 12, fontWeight: 600,
                      padding: mobile ? "7px 13px" : "6px 12px",
                      borderRadius: 20,
                      border: "1px solid rgba(34,197,94,0.2)",
                      background: "rgba(34,197,94,0.06)",
                      color: "rgba(74,222,128,0.85)",
                      cursor: isTyping ? "not-allowed" : "pointer",
                      letterSpacing: 0.1,
                      transition: "all 0.2s",
                      opacity: isTyping ? 0.4 : 1,
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                      minHeight: mobile ? 36 : "auto",
                    }}
                  >{q}</motion.button>
                ))}
              </div>

              {/* ── Input Bar ── */}
              <div style={{
                flexShrink: 0,
                padding: mobile ? "10px 12px" : "12px 16px 14px",
                paddingBottom: mobile ? "max(16px, env(safe-area-inset-bottom, 16px))" : 14,
                background: "rgba(5, 13, 26, 0.98)",
                borderTop: "1px solid rgba(34,197,94,0.08)",
              }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input
                    ref={inputRef}
                    className="af-cb-input af-input"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey && canSend) { e.preventDefault(); sendMessage(input.trim()); } }}
                    placeholder="Ask me anything…"
                    disabled={isTyping}
                    autoComplete="off"
                    autoCorrect="on"
                    autoCapitalize="sentences"
                    style={{
                      flex: 1,
                      padding: mobile ? "13px 16px" : "11px 15px",
                      borderRadius: 12,
                      border: "1px solid rgba(34,197,94,0.2)",
                      background: "rgba(13, 24, 41, 0.8)",
                      fontSize: mobile ? 16 : 13.5,
                      color: "#e2e8f0",
                      fontFamily: "inherit",
                      transition: "all 0.2s",
                    }}
                  />
                  <motion.button
                    type="submit"
                    className="af-send"
                    disabled={!canSend}
                    whileTap={canSend ? { scale: 0.93 } : {}}
                    style={{
                      width: mobile ? 48 : 44, height: mobile ? 48 : 44,
                      flexShrink: 0, borderRadius: 12, border: "none",
                      background: "linear-gradient(135deg, #22c55e, #15803d)",
                      color: "#fff", cursor: canSend ? "pointer" : "not-allowed",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: canSend ? "0 0 16px rgba(34,197,94,0.4)" : "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <SendIcon />
                  </motion.button>
                </form>
                {!mobile && (
                  <div style={{ textAlign: "center", marginTop: 8, fontSize: 10.5, color: "rgba(100,116,139,0.5)", letterSpacing: 0.2 }}>
                    <a href="https://algoflowai.com/" target="_blank" rel="noreferrer" style={{ color: "rgba(34,197,94,0.6)", textDecoration: "none" }}>
                      Powered by AlgoFlow AI
                    </a>
                    <span> · Enter to send</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── FAB ── */}
        <motion.button
          className="af-fab"
          onClick={() => setIsOpen(o => !o)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          style={{
            position: "absolute",
            ...(mobile ? { right: 16, bottom: 16 } : {
              left:   isOpen ? pos.x + size.w - 58 : "auto",
              right:  isOpen ? "auto" : 24,
              top:    isOpen ? pos.y + size.h + 12 : "auto",
              bottom: isOpen ? "auto" : 24,
            }),
            opacity: mobile && isOpen ? 0 : 1,
            pointerEvents: mobile && isOpen ? "none" : "all",
            width: 58, height: 58, borderRadius: "50%", border: "none",
            background: isOpen
              ? "linear-gradient(135deg, #15803d, #14532d)"
              : "linear-gradient(135deg, #22c55e, #15803d)",
            color: "#fff", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: isOpen
              ? "0 4px 20px rgba(21,128,61,0.5)"
              : "0 4px 24px rgba(34,197,94,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
            animation: pulse && !isOpen ? "af-glow 1.2s ease-in-out" : "none",
            transition: "background 0.3s, box-shadow 0.3s, opacity 0.2s",
            border: "1px solid rgba(74,222,128,0.25)",
          }}
        >
          {!isOpen && (
            <span style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              border: "2px solid rgba(34,197,94,0.45)",
              animation: "af-ping 2s ease-out infinite",
              pointerEvents: "none",
            }} />
          )}

          <AnimatePresence>
            {unread > 0 && !isOpen && (
              <motion.span
                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                style={{
                  position: "absolute", top: -2, right: -2,
                  background: "#dc2626", color: "#fff",
                  fontSize: 10, fontWeight: 700, width: 18, height: 18,
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", border: "2px solid #060d1b",
                  boxShadow: "0 2px 8px rgba(220,38,38,0.5)",
                }}
              >{unread}</motion.span>
            )}
          </AnimatePresence>

          <motion.div
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            {isOpen ? <CloseIcon /> : <BotIcon size={22} />}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}
