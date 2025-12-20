import React from "react";

export default function StyledShowcase() {
  const styles = {
    page: {
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
      background: "#0b1220",
      minHeight: "100vh",
      padding: 24,
      color: "#e5e7eb",
    },
    container: {
      maxWidth: 1000,
      margin: "0 auto",
      display: "grid",
      gap: 16,
    },
    header: {
      padding: 18,
      borderRadius: 16,
      background: "linear-gradient(135deg, #1f2937, #111827)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    },
    title: { margin: 0, fontSize: 28, letterSpacing: 0.2 },
    subtitle: { margin: "6px 0 0", opacity: 0.85, lineHeight: 1.5 },

    row: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 16,
    },

    card: {
      padding: 16,
      borderRadius: 16,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
    },

    pill: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      borderRadius: 999,
      background: "rgba(59,130,246,0.15)",
      border: "1px solid rgba(59,130,246,0.35)",
      color: "#bfdbfe",
      fontSize: 13,
    },

    badge: {
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: 999,
      background: "rgba(16,185,129,0.18)",
      border: "1px solid rgba(16,185,129,0.35)",
      color: "#a7f3d0",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0.4,
      textTransform: "uppercase",
    },

    button: {
      padding: "10px 14px",
      borderRadius: 12,
      background: "#f59e0b",
      color: "#111827",
      border: "none",
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 10px 20px rgba(245,158,11,0.25)",
    },
    buttonSecondary: {
      padding: "10px 14px",
      borderRadius: 12,
      background: "transparent",
      color: "#e5e7eb",
      border: "1px solid rgba(255,255,255,0.18)",
      cursor: "pointer",
    },

    list: { margin: 0, paddingLeft: 18, lineHeight: 1.8, opacity: 0.9 },

    input: {
      width: "100%",
      padding: "10px 12px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(17,24,39,0.6)",
      color: "#e5e7eb",
      outline: "none",
    },

    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      overflow: "hidden",
      borderRadius: 14,
      border: "1px solid rgba(255,255,255,0.08)",
    },
    th: {
      textAlign: "left",
      padding: 12,
      background: "rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      fontSize: 13,
      letterSpacing: 0.3,
      color: "#cbd5e1",
    },
    td: {
      padding: 12,
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      fontSize: 14,
    },

    footer: {
      padding: 14,
      borderRadius: 16,
      background: "rgba(255,255,255,0.03)",
      border: "1px dashed rgba(255,255,255,0.16)",
      textAlign: "center",
      opacity: 0.85,
    },

    divider: {
      height: 1,
      background: "rgba(255,255,255,0.08)",
      margin: "12px 0",
    },

    highlight: {
      padding: 12,
      borderRadius: 14,
      background: "rgba(236,72,153,0.12)",
      border: "1px solid rgba(236,72,153,0.25)",
    },
  };

  const features = [
    { name: "Inline styling", value: "OK" },
    { name: "Grid layout", value: "OK" },
    { name: "Cards + badges", value: "OK" },
    { name: "Table + list", value: "OK" },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>Styled Showcase</h1>
          <p style={styles.subtitle}>
            Stateless კომპონენტი ბევრი ელემენტით: ბარათები, ღილაკები, badges,
            input, list და table — ყველა ელემენტი გასტილულია inline style-ით.
          </p>

          <div style={styles.divider} />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={styles.pill}>✅ Responsive Grid</span>
            <span style={styles.pill}>🎨 Custom Styles</span>
            <span style={styles.pill}>⚡ Stateless</span>
            <span style={styles.badge}>demo</span>
          </div>
        </header>

        {/* Main Row */}
        <section style={styles.row}>
          {/* Left Card */}
          <div style={styles.card}>
            <h2 style={{ margin: 0, fontSize: 18 }}>კომპონენტის ელემენტები</h2>
            <p style={{ margin: "8px 0 0", opacity: 0.9, lineHeight: 1.6 }}>
              აქ არის სხვადასხვა UI ელემენტები, რომ “ბევრი ელემენტი” პირობა
              შესრულდეს და ყველა გასტილდეს.
            </p>

            <div style={styles.divider} />

            <ul style={styles.list}>
              <li>სათაური + ქვესათაური</li>
              <li>badge / pill</li>
              <li>2 ღილაკი (primary/secondary)</li>
              <li>input ველი</li>
              <li>highlight ბლოკი</li>
            </ul>

            <div style={styles.divider} />

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button style={styles.button} type="button">
                Primary Action
              </button>
              <button style={styles.buttonSecondary} type="button">
                Secondary Action
              </button>
            </div>

            <div style={{ height: 12 }} />

            <input
              style={styles.input}
              placeholder="მაგალითად: შეიყვანე ტექსტი..."
              readOnly
            />

            <div style={{ height: 12 }} />

            <div style={styles.highlight}>
              <strong style={{ display: "block", marginBottom: 6 }}>
                Highlight Box
              </strong>
              <span style={{ opacity: 0.9, lineHeight: 1.5 }}>
                ეს არის გამოკვეთილი ბლოკი განსხვავებული ფერით/ბორდერით.
              </span>
            </div>
          </div>

          {/* Right Card */}
          <aside style={styles.card}>
            <h2 style={{ margin: 0, fontSize: 18 }}>სტატუსები</h2>
            <p style={{ margin: "8px 0 0", opacity: 0.9, lineHeight: 1.6 }}>
              პატარა ცხრილი ვიზუალური დივერსიფიკაციისთვის.
            </p>

            <div style={styles.divider} />

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Feature</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, idx) => (
                  <tr key={f.name}>
                    <td style={{ ...styles.td, opacity: 0.95 }}>{f.name}</td>
                    <td style={styles.td}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "6px 10px",
                          borderRadius: 999,
                          background:
                            idx % 2 === 0
                              ? "rgba(16,185,129,0.16)"
                              : "rgba(59,130,246,0.14)",
                          border:
                            idx % 2 === 0
                              ? "1px solid rgba(16,185,129,0.28)"
                              : "1px solid rgba(59,130,246,0.26)",
                          color: idx % 2 === 0 ? "#a7f3d0" : "#bfdbfe",
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        {idx % 2 === 0 ? "✓" : "●"} {f.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ height: 12 }} />

            <div
              style={{
                padding: 12,
                borderRadius: 14,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 6 }}>
                Tip
              </div>
              <div style={{ lineHeight: 1.5, opacity: 0.9 }}>
                თუ Tailwind-ს იყენებ, იგივე დიზაინს კლასებითაც მარტივად ააწყობ.
              </div>
            </div>
          </aside>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          © {new Date().getFullYear()} • Stateless UI Demo • Inline Styled
        </footer>
      </div>
    </div>
  );
}