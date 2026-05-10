import { ImageResponse } from "next/og";

export const alt = "AlgoFlow AI — Custom AI & Software Development Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #050d1a 0%, #0a1628 55%, #0d1f3c 100%)",
                    fontFamily: "system-ui, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Grid pattern */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        display: "flex",
                    }}
                />

                {/* Glow orb */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "600px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />

                {/* Top green bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #22c55e, #16a34a, #22c55e)",
                        display: "flex",
                    }}
                />

                {/* Logo + wordmark */}
                <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "36px" }}>
                    <div
                        style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "14px",
                            background: "linear-gradient(135deg, #22c55e, #16a34a)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "34px",
                            boxShadow: "0 0 32px rgba(34,197,94,0.4)",
                        }}
                    >
                        ⚡
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "46px",
                            fontWeight: "800",
                            color: "#ffffff",
                            letterSpacing: "-1.5px",
                        }}
                    >
                        AlgoFlow&nbsp;
                        <span style={{ color: "#22c55e", display: "flex" }}>AI</span>
                    </div>
                </div>

                {/* Headline */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: "56px",
                        fontWeight: "800",
                        color: "#ffffff",
                        textAlign: "center",
                        lineHeight: 1.1,
                        letterSpacing: "-2px",
                        maxWidth: "960px",
                    }}
                >
                    <span style={{ display: "flex" }}>Custom AI &amp; Software</span>
                    <span style={{ color: "#22c55e", display: "flex" }}>Development Company</span>
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        marginTop: "24px",
                        fontSize: "22px",
                        color: "rgba(255,255,255,0.55)",
                        textAlign: "center",
                        display: "flex",
                    }}
                >
                    AI · Mobile Apps · Web Platforms · Computer Vision · NLP/LLMs · Automation
                </div>

                {/* Badge pills */}
                <div style={{ display: "flex", gap: "14px", marginTop: "44px" }}>
                    {["DPIIT Certified", "ABDM Integrated", "50+ Clients", "6+ Countries"].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                padding: "10px 22px",
                                borderRadius: "100px",
                                background: "rgba(34,197,94,0.1)",
                                border: "1px solid rgba(34,197,94,0.35)",
                                color: "#22c55e",
                                fontSize: "17px",
                                fontWeight: "600",
                                display: "flex",
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Bottom URL */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        fontSize: "18px",
                        color: "rgba(255,255,255,0.3)",
                        display: "flex",
                    }}
                >
                    www.algoflowai.com
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}
