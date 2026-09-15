export default function Home() {
  const cards = [
    ["Revenue", "£50,000"],
    ["Expenses", "£32,000"],
    ["Net Profit", "£18,000"],
    ["Cash Balance", "£15,000"],
    ["Outstanding Invoices", "£4,500"],
    ["VAT Estimate", "£2,100"],
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#071d2b",
          color: "white",
          padding: "24px 40px",
        }}
      >
        <div style={{ fontSize: 13, opacity: 0.7 }}>
          N&T AI-POWERED ACCOUNTING
        </div>

        <h1 style={{ margin: "7px 0" }}>
          Accounting Intelligence Centre
        </h1>

        <div style={{ opacity: 0.8 }}>
          Bookkeeping • Financial Intelligence • Sustainability
        </div>
      </header>

      <div style={{ display: "flex" }}>
        <aside
          style={{
            width: 230,
            minHeight: "calc(100vh - 115px)",
            background: "white",
            padding: 25,
            borderRight: "1px solid #ddd",
          }}
        >
          <strong>N&T ACCOUNTING</strong>

          {[
            "Dashboard",
            "Transactions",
            "Sales Invoices",
            "Purchase Bills",
            "Expenses",
            "Documents",
            "Profit & Loss",
            "AI Insights",
            "VAT",
            "Payroll",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              {item}
            </div>
          ))}

          <div
            style={{
              marginTop: 25,
              padding: 12,
              background: "#eef8f4",
              borderRadius: 8,
            }}
          >
            N&T Intelligence →
          </div>
        </aside>

        <section style={{ flex: 1, padding: 35 }}>
          <div style={{ marginBottom: 25 }}>
            <div style={{ fontSize: 13, color: "#64748b" }}>
              CLIENT
            </div>

            <h2 style={{ margin: "5px 0" }}>
              NT-001 — N&T Demo Business
            </h2>

            <span
              style={{
                background: "#dcfce7",
                padding: "6px 10px",
                borderRadius: 20,
                fontSize: 12,
              }}
            >
              PROTOTYPE v0.1
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 16,
            }}
          >
            {cards.map(([title, value]) => (
              <div
                key={title}
                style={{
                  background: "white",
                  padding: 22,
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    color: "#64748b",
                    fontSize: 13,
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    fontSize: 27,
                    fontWeight: 700,
                    marginTop: 8,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 20,
              marginTop: 25,
            }}
          >
            <div
              style={{
                background: "white",
                padding: 24,
                borderRadius: 12,
              }}
            >
              <h3>Recent Transactions</h3>

              <p>British Gas — Electricity Expense — £1,200</p>
              <hr />

              <p>Client Invoice NT-1001 — Sales — £5,000</p>
              <hr />

              <p>Software Subscription — Expense — £250</p>
            </div>

            <div
              style={{
                background: "#071d2b",
                color: "white",
                padding: 24,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  opacity: 0.7,
                }}
              >
                N&T AUTOMATED INSIGHT
              </div>

              <h3>Financial Intelligence</h3>

              <p style={{ lineHeight: 1.6 }}>
                Net profit is currently £18,000. Energy expenditure has
                been identified as an area for financial and sustainability
                analysis.
              </p>

              <div
                style={{
                  marginTop: 20,
                  fontSize: 12,
                  opacity: 0.7,
                }}
              >
                Prototype demonstration — not financial or tax advice.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
