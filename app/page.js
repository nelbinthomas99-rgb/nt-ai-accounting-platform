const money = (value) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

const kpis = [
  {
    title: "Total Revenue",
    value: 50000,
    change: "↑ 12%",
    note: "vs last month",
    icon: "▥",
    tone: "green",
  },
  {
    title: "Total Expenses",
    value: 32000,
    change: "↑ 6%",
    note: "vs last month",
    icon: "▣",
    tone: "red",
  },
  {
    title: "Net Profit",
    value: 18000,
    change: "↑ 20%",
    note: "vs last month",
    icon: "↗",
    tone: "blue",
  },
  {
    title: "Cash Balance",
    value: 15000,
    change: "↑ 8%",
    note: "vs last month",
    icon: "◉",
    tone: "purple",
  },
  {
    title: "Outstanding Invoices",
    value: 4500,
    change: "↓ 10%",
    note: "vs last month",
    icon: "▤",
    tone: "gold",
  },
  {
    title: "VAT Estimate",
    value: 2100,
    change: "↑ 5%",
    note: "prototype estimate",
    icon: "%",
    tone: "teal",
  },
];

const transactions = [
  {
    date: "15 Sep 2026",
    description: "British Gas",
    type: "Expense",
    amount: "£1,200",
    status: "Paid",
    category: "Utilities",
  },
  {
    date: "14 Sep 2026",
    description: "Client Invoice NT-1001",
    type: "Sales",
    amount: "£5,000",
    status: "Sent",
    category: "Income",
  },
  {
    date: "12 Sep 2026",
    description: "Software Subscription",
    type: "Expense",
    amount: "£250",
    status: "Paid",
    category: "Software",
  },
  {
    date: "10 Sep 2026",
    description: "Office Rent",
    type: "Expense",
    amount: "£800",
    status: "Paid",
    category: "Rent",
  },
  {
    date: "08 Sep 2026",
    description: "Client Payment",
    type: "Sales",
    amount: "£2,000",
    status: "Received",
    category: "Income",
  },
];

const revenueBars = [42, 49, 57, 50, 65, 58, 73, 77, 82];
const expenseBars = [28, 32, 39, 31, 45, 38, 50, 53, 55];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

function NavItem({ icon, children, badge, active }) {
  return (
    <div className={`navItem ${active ? "active" : ""}`}>
      <span className="navIcon">{icon}</span>
      <span>{children}</span>
      {badge && <span className="navBadge">{badge}</span>}
    </div>
  );
}

function SectionTitle({ children }) {
  return <div className="sectionTitle">{children}</div>;
}

function KpiCard({ item }) {
  return (
    <div className={`kpiCard ${item.tone}`}>
      <div className="kpiTop">
        <div className="kpiIcon">{item.icon}</div>
        <span>{item.title}</span>
      </div>

      <div className="kpiValue">{money(item.value)}</div>

      <div className="kpiBottom">
        <strong>{item.change}</strong>
        <span>{item.note}</span>
      </div>

      <div className="spark">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function Panel({ children, className = "" }) {
  return <div className={`panel ${className}`}>{children}</div>;
}

function BarChart() {
  return (
    <div className="chartWrap">
      <div className="chartLegend">
        <span>
          <b className="dot greenDot" /> Revenue
        </span>
        <span>
          <b className="dot blueDot" /> Expenses
        </span>
      </div>

      <div className="barChart">
        {months.map((month, index) => (
          <div className="barGroup" key={month}>
            <div className="bars">
              <div
                className="bar revenueBar"
                style={{ height: `${revenueBars[index]}%` }}
              />
              <div
                className="bar expenseBar"
                style={{ height: `${expenseBars[index]}%` }}
              />
            </div>
            <span>{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CashChart() {
  const points1 = [
    "0,92",
    "50,98",
    "100,88",
    "150,63",
    "200,70",
    "250,55",
    "300,55",
    "350,28",
    "400,40",
  ].join(" ");

  const points2 = [
    "0,118",
    "50,118",
    "100,116",
    "150,102",
    "200,86",
    "250,104",
    "300,88",
    "350,75",
    "400,84",
  ].join(" ");

  return (
    <div>
      <div className="chartLegend">
        <span>
          <b className="dot greenDot" /> Cash In
        </span>
        <span>
          <b className="dot blueDot" /> Cash Out
        </span>
      </div>

      <div className="cashChart">
        <svg viewBox="0 0 400 145" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cashFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#20e3a2" stopOpacity=".35" />
              <stop offset="100%" stopColor="#20e3a2" stopOpacity="0" />
            </linearGradient>
          </defs>

          <polygon
            points={`0,145 ${points1} 400,145`}
            fill="url(#cashFill)"
          />

          <polyline
            points={points1}
            fill="none"
            stroke="#20e3a2"
            strokeWidth="4"
          />

          <polyline
            points={points2}
            fill="none"
            stroke="#3b9cff"
            strokeWidth="4"
          />
        </svg>

        <div className="monthRow">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          background: #06121f;
        }

        body {
          margin: 0;
          color: #eaf2ff;
          background:
            radial-gradient(circle at 65% 0%, rgba(17, 97, 145, .20), transparent 30%),
            linear-gradient(135deg, #06111d 0%, #081827 45%, #07131f 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        button, input, select {
          font: inherit;
        }

        .appShell {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 248px minmax(0, 1fr);
        }

        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          padding: 24px 18px;
          background:
            linear-gradient(180deg, rgba(4, 28, 42, .98), rgba(3, 19, 31, .98));
          border-right: 1px solid rgba(128, 183, 219, .14);
          box-shadow: 20px 0 60px rgba(0,0,0,.16);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 4px 6px 23px;
        }

        .brandMark {
          width: 46px;
          height: 46px;
          border-radius: 15px 4px 15px 4px;
          background:
            linear-gradient(135deg, #34f5ad, #0d8f76 65%, #076276);
          transform: rotate(-8deg);
          box-shadow: 0 0 28px rgba(52,245,173,.26);
          position: relative;
        }

        .brandMark:after {
          content: "";
          position: absolute;
          width: 2px;
          height: 37px;
          background: rgba(255,255,255,.75);
          left: 22px;
          top: 5px;
          transform: rotate(38deg);
        }

        .brandName {
          font-size: 28px;
          line-height: .95;
          font-weight: 900;
          letter-spacing: -.8px;
        }

        .brandSub {
          margin-top: 7px;
          color: #39e7b0;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .brandTag {
          color: #6f8ca2;
          font-size: 10px;
          margin: -12px 6px 21px;
        }

        .sectionTitle {
          color: #6e8ba2;
          font-size: 10px;
          letter-spacing: 1.7px;
          font-weight: 800;
          margin: 22px 8px 8px;
        }

        .navItem {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 42px;
          padding: 10px 12px;
          margin: 3px 0;
          color: #c4d4e2;
          font-size: 13px;
          border-radius: 10px;
          cursor: default;
        }

        .navItem:hover {
          background: rgba(255,255,255,.04);
        }

        .navItem.active {
          color: #fff;
          background:
            linear-gradient(90deg, rgba(20,127,218,.42), rgba(15,99,155,.20));
          border: 1px solid rgba(65, 169, 255, .20);
          box-shadow: inset 3px 0 #36a9ff;
        }

        .navIcon {
          width: 20px;
          text-align: center;
          color: #e7f5ff;
          font-size: 16px;
        }

        .navBadge {
          margin-left: auto;
          padding: 4px 8px;
          border-radius: 999px;
          color: #061b17;
          background: #32e69f;
          font-size: 9px;
          font-weight: 900;
        }

        .netZero {
          margin-top: 24px;
          padding: 17px;
          border-radius: 14px;
          background:
            linear-gradient(145deg, rgba(19, 111, 89, .36), rgba(10, 67, 76, .32));
          border: 1px solid rgba(57,231,176,.22);
        }

        .netZero strong {
          display: block;
          color: #8ff7cf;
          font-size: 13px;
          margin-bottom: 7px;
        }

        .netZero p {
          margin: 0;
          color: #9ab4c7;
          font-size: 11px;
          line-height: 1.55;
        }

        .main {
          min-width: 0;
        }

        .topbar {
          min-height: 72px;
          display: grid;
          grid-template-columns: minmax(220px, 1fr) 280px 210px auto;
          align-items: center;
          gap: 14px;
          padding: 12px 24px;
          background: rgba(6, 20, 33, .86);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(124, 178, 215, .13);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .search {
          height: 43px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 15px;
          border: 1px solid rgba(126,174,208,.13);
          border-radius: 10px;
          background: rgba(255,255,255,.035);
          color: #708da4;
          font-size: 12px;
        }

        .selectBox {
          height: 43px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 13px;
          border: 1px solid rgba(126,174,208,.16);
          border-radius: 10px;
          background: rgba(255,255,255,.025);
        }

        .selectBox small {
          color: #6e8ba2;
          font-size: 9px;
        }

        .selectBox strong {
          font-size: 11px;
          margin-top: 2px;
        }

        .profile {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          white-space: nowrap;
        }

        .avatar {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #1979e7, #0d3f75);
          font-weight: 900;
          box-shadow: 0 0 24px rgba(36,135,255,.22);
        }

        .profileText strong {
          display: block;
          font-size: 11px;
        }

        .profileText span {
          color: #708da4;
          font-size: 9px;
        }

        .content {
          padding: 22px 24px 30px;
          max-width: 1800px;
          margin: 0 auto;
        }

        .hero {
          min-height: 125px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 25px;
          padding: 22px 26px;
          border-radius: 18px;
          border: 1px solid rgba(75, 160, 216, .16);
          background:
            radial-gradient(circle at 76% 35%, rgba(35,230,167,.17), transparent 18%),
            linear-gradient(105deg, rgba(8,40,63,.95), rgba(8,57,74,.72), rgba(7,25,42,.96));
          box-shadow: 0 20px 60px rgba(0,0,0,.16);
        }

        .hero:before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .24;
          background-image:
            linear-gradient(rgba(80,173,210,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(80,173,210,.12) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: linear-gradient(90deg, transparent, black 45%, black);
        }

        .heroContent,
        .heroStatus {
          position: relative;
          z-index: 1;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(25px, 3vw, 38px);
          letter-spacing: -1.3px;
        }

        .hero p {
          color: #9db3c5;
          margin: 7px 0 0;
          font-size: 13px;
        }

        .heroStatus {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .aiPulse {
          min-width: 220px;
          padding: 14px 16px;
          border-radius: 13px;
          background: rgba(4,24,36,.65);
          border: 1px solid rgba(54,232,173,.22);
        }

        .aiPulse strong {
          display: block;
          font-size: 11px;
          color: #8ff7cf;
          margin-bottom: 6px;
        }

        .aiPulse span {
          display: block;
          color: #8aa5b8;
          font-size: 9px;
          line-height: 1.55;
        }

        .prototype {
          padding: 12px 18px;
          border-radius: 13px;
          background: linear-gradient(135deg, rgba(41,142,255,.22), rgba(70,86,255,.14));
          border: 1px solid rgba(84,154,255,.25);
          text-align: center;
        }

        .prototype strong {
          display: block;
          color: #76c8ff;
          font-size: 12px;
        }

        .prototype span {
          color: #718da3;
          font-size: 9px;
        }

        .kpiGrid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
          margin-top: 15px;
        }

        .kpiCard {
          min-height: 142px;
          position: relative;
          overflow: hidden;
          padding: 17px;
          border-radius: 15px;
          background: linear-gradient(145deg, rgba(16,36,52,.96), rgba(8,24,38,.96));
          border: 1px solid rgba(122,177,214,.15);
          box-shadow: 0 12px 35px rgba(0,0,0,.12);
        }

        .kpiCard:after {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          right: -45px;
          bottom: -60px;
          border-radius: 50%;
          filter: blur(10px);
          opacity: .15;
        }

        .kpiCard.green:after { background: #21e6a1; }
        .kpiCard.red:after { background: #ff536f; }
        .kpiCard.blue:after { background: #2498ff; }
        .kpiCard.purple:after { background: #9d6bff; }
        .kpiCard.gold:after { background: #ffbd3f; }
        .kpiCard.teal:after { background: #2ee3dc; }

        .kpiTop {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #a6bbca;
          font-size: 10px;
          font-weight: 700;
        }

        .kpiIcon {
          width: 33px;
          height: 33px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: #dffaf0;
          background: rgba(47,225,167,.12);
          font-weight: 900;
        }

        .kpiValue {
          margin-top: 13px;
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -.7px;
        }

        .kpiBottom {
          margin-top: 7px;
          display: flex;
          gap: 6px;
          align-items: center;
          font-size: 9px;
          color: #7893a7;
        }

        .kpiBottom strong {
          color: #33e4a5;
          font-size: 11px;
        }

        .red .kpiBottom strong {
          color: #ff667b;
        }

        .gold .kpiBottom strong {
          color: #ffca55;
        }

        .spark {
          position: absolute;
          bottom: 13px;
          right: 15px;
          height: 30px;
          display: flex;
          align-items: flex-end;
          gap: 3px;
          opacity: .55;
        }

        .spark i {
          display: block;
          width: 4px;
          background: #38dfaa;
          border-radius: 3px 3px 0 0;
        }

        .spark i:nth-child(1) { height: 9px; }
        .spark i:nth-child(2) { height: 16px; }
        .spark i:nth-child(3) { height: 12px; }
        .spark i:nth-child(4) { height: 23px; }
        .spark i:nth-child(5) { height: 28px; }

        .dashboardGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr) 260px;
          gap: 14px;
          margin-top: 14px;
        }

        .panel {
          min-width: 0;
          padding: 17px;
          border-radius: 15px;
          background:
            linear-gradient(145deg, rgba(11,34,51,.94), rgba(7,25,39,.94));
          border: 1px solid rgba(119,178,216,.15);
          box-shadow: 0 14px 40px rgba(0,0,0,.12);
        }

        .panelHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .panelHeader h3 {
          margin: 0;
          font-size: 15px;
        }

        .panelHeader button {
          color: #8ca7ba;
          background: rgba(255,255,255,.025);
          border: 1px solid rgba(127,181,216,.14);
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 9px;
        }

        .chartLegend {
          display: flex;
          gap: 18px;
          color: #8aa3b6;
          font-size: 9px;
          margin: 12px 0 10px;
        }

        .chartLegend span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .greenDot { background: #23dfa0; }
        .blueDot { background: #2e9dff; }

        .barChart {
          height: 205px;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          gap: 5px;
          padding: 12px 5px 0;
          border-bottom: 1px solid rgba(119,178,216,.13);
          background:
            repeating-linear-gradient(
              to bottom,
              rgba(124,178,214,.08),
              rgba(124,178,214,.08) 1px,
              transparent 1px,
              transparent 46px
            );
        }

        .barGroup {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
          gap: 7px;
        }

        .bars {
          flex: 1;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 4px;
        }

        .bar {
          width: 27%;
          min-width: 6px;
          border-radius: 4px 4px 0 0;
        }

        .revenueBar {
          background: linear-gradient(#35efa9, #0fa875);
          box-shadow: 0 0 13px rgba(37,222,157,.18);
        }

        .expenseBar {
          background: linear-gradient(#3ea9ff, #176fd8);
        }

        .barGroup span {
          color: #718da2;
          font-size: 8px;
          padding-bottom: 5px;
        }

        .cashChart {
          height: 215px;
          padding-top: 10px;
          background:
            repeating-linear-gradient(
              to bottom,
              rgba(124,178,214,.07),
              rgba(124,178,214,.07) 1px,
              transparent 1px,
              transparent 48px
            );
        }

        .cashChart svg {
          width: 100%;
          height: 175px;
          overflow: visible;
        }

        .monthRow {
          display: flex;
          justify-content: space-between;
          color: #718da2;
          font-size: 8px;
        }

        .healthPanel {
          display: flex;
          flex-direction: column;
        }

        .healthCircle {
          width: 125px;
          height: 125px;
          margin: 12px auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background:
            radial-gradient(circle at center, #0a2031 57%, transparent 58%),
            conic-gradient(#2ce7a5 0 92%, #16394a 92% 100%);
          box-shadow: 0 0 32px rgba(44,231,165,.12);
        }

        .healthCircle strong {
          font-size: 28px;
        }

        .healthCircle span {
          font-size: 10px;
          color: #7895aa;
        }

        .checkList {
          display: grid;
          gap: 8px;
          color: #91a9ba;
          font-size: 9px;
        }

        .checkList div:before {
          content: "✓";
          display: inline-grid;
          place-items: center;
          width: 15px;
          height: 15px;
          margin-right: 7px;
          border-radius: 50%;
          color: #06251b;
          background: #2ee3a4;
          font-weight: 900;
        }

        .actions {
          grid-column: 1 / 3;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
        }

        .actionBtn {
          min-height: 50px;
          border: 0;
          border-radius: 10px;
          color: white;
          font-weight: 800;
          font-size: 11px;
          cursor: default;
          background: linear-gradient(135deg, #0fc786, #08a568);
          box-shadow: 0 9px 24px rgba(13,194,128,.15);
        }

        .actionBtn.blue {
          background: linear-gradient(135deg, #1b8fff, #1268d8);
        }

        .actionBtn.purple {
          background: linear-gradient(135deg, #7a5cff, #5332c7);
        }

        .actionBtn.dark {
          background: #0b2639;
          border: 1px solid rgba(126,181,217,.18);
          box-shadow: none;
        }

        .lowerGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(0, .9fr) 300px;
          gap: 14px;
          margin-top: 14px;
        }

        .tableWrap {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9px;
        }

        th {
          color: #6f8ca1;
          text-align: left;
          padding: 10px 8px;
          font-weight: 700;
          border-bottom: 1px solid rgba(119,178,216,.13);
        }

        td {
          color: #b7cad8;
          padding: 11px 8px;
          border-bottom: 1px solid rgba(119,178,216,.08);
          white-space: nowrap;
        }

        .status {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 999px;
          color: #8ff5cf;
          background: rgba(33,212,150,.13);
        }

        .status.sent {
          color: #80c8ff;
          background: rgba(39,147,255,.13);
        }

        .copilot {
          background:
            radial-gradient(circle at 10% 10%, rgba(120,78,255,.15), transparent 28%),
            linear-gradient(145deg, rgba(12,34,53,.96), rgba(8,24,39,.96));
        }

        .copilotInput {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 42px;
          margin: 12px 0;
          padding: 0 12px;
          border-radius: 10px;
          color: #68859a;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(122,178,214,.13);
          font-size: 9px;
        }

        .suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .suggestion {
          padding: 6px 8px;
          border-radius: 999px;
          color: #8ca7ba;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(122,178,214,.10);
          font-size: 8px;
        }

        .aiInsight {
          margin-top: 12px;
          padding: 14px;
          border-radius: 11px;
          background:
            linear-gradient(135deg, rgba(27,143,121,.14), rgba(31,84,139,.13));
          border: 1px solid rgba(43,221,166,.15);
        }

        .aiInsight strong {
          color: #a2f7d9;
          font-size: 11px;
        }

        .aiInsight p {
          margin: 7px 0 0;
          color: #94acbd;
          font-size: 9px;
          line-height: 1.55;
        }

        .miniStack {
          display: grid;
          gap: 14px;
        }

        .miniCard {
          padding: 16px;
          border-radius: 14px;
          background:
            linear-gradient(145deg, rgba(11,34,51,.95), rgba(7,25,39,.95));
          border: 1px solid rgba(119,178,216,.15);
        }

        .miniCard h4 {
          margin: 0 0 10px;
          font-size: 12px;
        }

        .miniNumber {
          font-size: 23px;
          font-weight: 900;
        }

        .miniSub {
          color: #718da2;
          font-size: 9px;
        }

        .progress {
          height: 8px;
          overflow: hidden;
          margin: 12px 0 7px;
          border-radius: 999px;
          background: #132e40;
        }

        .progress > div {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #20dfa0, #2d9dff);
        }

        .sustainability {
          background:
            radial-gradient(circle at 85% 20%, rgba(40,230,164,.16), transparent 30%),
            linear-gradient(145deg, rgba(9,47,47,.95), rgba(7,27,41,.95));
        }

        .sustainability .miniNumber {
          color: #40eab0;
        }

        .alerts {
          margin-top: 14px;
        }

        .alert {
          display: grid;
          grid-template-columns: 30px 1fr auto;
          gap: 8px;
          align-items: center;
          padding: 9px 0;
          border-bottom: 1px solid rgba(119,178,216,.08);
        }

        .alertIcon {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: rgba(255,184,55,.13);
          color: #ffc34d;
        }

        .alert strong {
          display: block;
          font-size: 9px;
        }

        .alert span {
          color: #6f8ba0;
          font-size: 8px;
        }

        .tinyButton {
          padding: 5px 8px;
          border-radius: 7px;
          color: #65bfff;
          border: 1px solid rgba(59,159,255,.18);
          background: rgba(38,142,238,.08);
          font-size: 8px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 20px 2px 5px;
          color: #647f93;
          font-size: 9px;
        }

        .footer strong {
          color: #c9d9e4;
        }

        @media (max-width: 1450px) {
          .kpiGrid {
            grid-template-columns: repeat(3, 1fr);
          }

          .topbar {
            grid-template-columns: 1fr 240px 180px;
          }

          .profile {
            display: none;
          }

          .lowerGrid {
            grid-template-columns: 1fr 1fr;
          }

          .miniStack {
            grid-column: 1 / -1;
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1100px) {
          .appShell {
            grid-template-columns: 78px minmax(0, 1fr);
          }

          .sidebar {
            padding: 20px 10px;
          }

          .brandName,
          .brandSub,
          .brandTag,
          .sectionTitle,
          .navItem > span:not(.navIcon):not(.navBadge),
          .netZero {
            display: none;
          }

          .brand {
            justify-content: center;
            padding-left: 0;
            padding-right: 0;
          }

          .navItem {
            justify-content: center;
          }

          .dashboardGrid {
            grid-template-columns: 1fr 1fr;
          }

          .healthPanel {
            grid-column: 1 / -1;
          }

          .actions {
            grid-column: 1 / -1;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .heroStatus {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 760px) {
          .appShell {
            display: block;
          }

          .sidebar {
            display: none;
          }

          .topbar {
            position: static;
            grid-template-columns: 1fr;
            padding: 12px;
          }

          .selectBox {
            display: none;
          }

          .content {
            padding: 12px;
          }

          .heroStatus {
            display: none;
          }

          .kpiGrid,
          .dashboardGrid,
          .lowerGrid,
          .miniStack {
            grid-template-columns: 1fr;
          }

          .actions {
            grid-template-columns: 1fr 1fr;
          }

          .footer {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="appShell">
        <aside className="sidebar">
          <div className="brand">
            <div className="brandMark" />
            <div>
              <div className="brandName">N&amp;T</div>
              <div className="brandSub">AI ACCOUNTING</div>
            </div>
          </div>

          <div className="brandTag">Finance Today. A Sustainable Tomorrow.</div>

          <NavItem icon="⌂" active>
            Dashboard
          </NavItem>

          <SectionTitle>ACCOUNTING</SectionTitle>
          <NavItem icon="⇄">Transactions</NavItem>
          <NavItem icon="▤">Sales Invoices</NavItem>
          <NavItem icon="▧">Purchase Bills</NavItem>
          <NavItem icon="▣">Expenses</NavItem>
          <NavItem icon="◫">Banking &amp; Reconciliation</NavItem>
          <NavItem icon="□">Documents</NavItem>

          <SectionTitle>REPORTING</SectionTitle>
          <NavItem icon="▥">Profit &amp; Loss</NavItem>
          <NavItem icon="▦">Balance Sheet</NavItem>
          <NavItem icon="%">VAT</NavItem>
          <NavItem icon="▤" badge="SOON">
            Payroll
          </NavItem>

          <SectionTitle>INTELLIGENCE</SectionTitle>
          <NavItem icon="✦" badge="BETA">
            AI Insights
          </NavItem>
          <NavItem icon="◉">Sustainability &amp; Carbon</NavItem>
          <NavItem icon="↗">Forecasting</NavItem>
          <NavItem icon="♡">Financial Health</NavItem>

          <SectionTitle>MANAGEMENT</SectionTitle>
          <NavItem icon="♙">Clients</NavItem>
          <NavItem icon="⌘">Integrations</NavItem>
          <NavItem icon="⚙">Settings</NavItem>

          <div className="netZero">
            <strong>◒ Net Zero Smarter Business</strong>
            <p>
              AI-assisted accounting and sustainability intelligence for a
              greener future.
            </p>
          </div>
        </aside>

        <main className="main">
          <header className="topbar">
            <div className="search">
              <span>⌕</span>
              <span>Search invoices, transactions, clients...</span>
            </div>

            <div className="selectBox">
              <small>Client</small>
              <strong>NT-001 — N&amp;T Demo Business</strong>
            </div>

            <div className="selectBox">
              <small>Reporting Period</small>
              <strong>September 2026</strong>
            </div>

            <div className="profile">
              <span>●</span>
              <div className="avatar">NT</div>
              <div className="profileText">
                <strong>Nelbin Thomas</strong>
                <span>Founder</span>
              </div>
            </div>
          </header>

          <div className="content">
            <section className="hero">
              <div className="heroContent">
                <h1>Good evening, Nelbin.</h1>
                <p>
                  Your AI-assisted accounting, financial intelligence and
                  sustainability overview.
                </p>
              </div>

              <div className="heroStatus">
                <div className="aiPulse">
                  <strong>✦ N&amp;T Intelligence Engine</strong>
                  <span>Prototype analysis active</span>
                  <span>Financial + sustainability signals</span>
                </div>

                <div className="prototype">
                  <strong>PROTOTYPE v0.1</strong>
                  <span>Secure development environment</span>
                </div>
              </div>
            </section>

            <section className="kpiGrid">
              {kpis.map((item) => (
                <KpiCard key={item.title} item={item} />
              ))}
            </section>

            <section className="dashboardGrid">
              <Panel>
                <div className="panelHeader">
                  <h3>Income vs Expenses</h3>
                  <button>Last 9 Months⌄</button>
                </div>
                <BarChart />
              </Panel>

              <Panel>
                <div className="panelHeader">
                  <h3>Cash Flow</h3>
                  <button>Last 9 Months⌄</button>
                </div>
                <CashChart />
              </Panel>

              <Panel className="healthPanel">
                <div className="panelHeader">
                  <h3>Financial Health</h3>
                </div>

                <div className="healthCircle">
                  <div style={{ textAlign: "center" }}>
                    <strong>92</strong>
                    <span>/100</span>
                    <div
                      style={{
                        color: "#9bb2c2",
                        fontSize: 9,
                        marginTop: 2,
                      }}
                    >
                      Excellent
                    </div>
                  </div>
                </div>

                <div className="checkList">
                  <div>Demo transactions structured</div>
                  <div>VAT tracking prototype</div>
                  <div>Documents module planned</div>
                  <div>Client isolation planned</div>
                  <div>AI analysis prototype</div>
                </div>
              </Panel>

              <div className="actions">
                <button className="actionBtn">＋ New Invoice</button>
                <button className="actionBtn blue">＋ Add Expense</button>
                <button className="actionBtn purple">▤ Upload Receipt</button>
                <button className="actionBtn dark">✦ AI Categorise</button>
                <button className="actionBtn dark">More Actions⌄</button>
              </div>
            </section>

            <section className="lowerGrid">
              <Panel>
                <div className="panelHeader">
                  <h3>Recent Transactions</h3>
                  <button>View all →</button>
                </div>

                <div className="tableWrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>AI Category</th>
                      </tr>
                    </thead>

                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={`${transaction.date}-${transaction.description}`}>
                          <td>{transaction.date}</td>
                          <td>{transaction.description}</td>
                          <td>{transaction.type}</td>
                          <td>{transaction.amount}</td>
                          <td>
                            <span
                              className={`status ${
                                transaction.status === "Sent" ? "sent" : ""
                              }`}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td>✦ {transaction.category}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Panel>

              <Panel className="copilot">
                <div className="panelHeader">
                  <h3>✦ N&amp;T AI Copilot</h3>
                  <button>BETA</button>
                </div>

                <div className="copilotInput">
                  <span>Ask about your business finances...</span>
                  <strong>→</strong>
                </div>

                <div className="suggestions">
                  <span className="suggestion">
                    Why did expenses increase?
                  </span>
                  <span className="suggestion">
                    Which invoices are overdue?
                  </span>
                  <span className="suggestion">
                    How can I reduce energy costs?
                  </span>
                  <span className="suggestion">
                    Show a cash-flow forecast
                  </span>
                </div>

                <div className="aiInsight">
                  <strong>✦ Prototype Insight</strong>
                  <p>
                    Energy expenditure has been identified as an area for
                    combined financial and sustainability analysis. Future
                    versions can compare verified accounting and activity data
                    before generating recommendations.
                  </p>
                </div>
              </Panel>

              <div className="miniStack">
                <div className="miniCard">
                  <h4>Aged Receivables</h4>
                  <div className="miniNumber">£4,500</div>
                  <div className="miniSub">Demo outstanding total</div>
                  <div className="progress">
                    <div style={{ width: "72%" }} />
                  </div>
                  <div className="miniSub">
                    Current £2,000 • 1–30 days £1,500
                  </div>
                </div>

                <div className="miniCard">
                  <h4>Aged Payables</h4>
                  <div className="miniNumber">£2,800</div>
                  <div className="miniSub">Demo outstanding total</div>
                  <div className="progress">
                    <div style={{ width: "58%" }} />
                  </div>
                  <div className="miniSub">
                    Current £1,600 • 1–30 days £800
                  </div>
                </div>

                <div className="miniCard sustainability">
                  <h4>◒ Sustainability &amp; Carbon</h4>
                  <div className="miniNumber">Connected Intelligence</div>
                  <div className="miniSub">
                    Future accounting-to-energy/carbon analysis
                  </div>
                </div>
              </div>
            </section>

            <section className="lowerGrid alerts">
              <Panel>
                <div className="panelHeader">
                  <h3>VAT Position</h3>
                  <button>PROTOTYPE</button>
                </div>

                <div className="miniNumber">£2,100</div>
                <div className="miniSub">
                  Demonstration estimate — not an HMRC submission
                </div>

                <div className="progress">
                  <div style={{ width: "64%" }} />
                </div>
              </Panel>

              <Panel>
                <div className="panelHeader">
                  <h3>N&amp;T Sustainability Connection</h3>
                  <button>PHASE 2</button>
                </div>

                <div className="aiInsight">
                  <strong>Accounting → Sustainability</strong>
                  <p>
                    Future N&amp;T workflows can connect appropriate financial
                    transactions with verified energy, carbon and sustainability
                    data to support SME decision-making.
                  </p>
                </div>
              </Panel>

              <Panel>
                <div className="panelHeader">
                  <h3>Upcoming &amp; Alerts</h3>
                  <button>Demo</button>
                </div>

                <div className="alert">
                  <div className="alertIcon">!</div>
                  <div>
                    <strong>Invoices require review</strong>
                    <span>Prototype workflow</span>
                  </div>
                  <div className="tinyButton">View</div>
                </div>

                <div className="alert">
                  <div className="alertIcon">%</div>
                  <div>
                    <strong>VAT review</strong>
                    <span>Prototype only</span>
                  </div>
                  <div className="tinyButton">Review</div>
                </div>

                <div className="alert">
                  <div className="alertIcon">✦</div>
                  <div>
                    <strong>Energy expense signal</strong>
                    <span>Automated insight prototype</span>
                  </div>
                  <div className="tinyButton">Analyse</div>
                </div>
              </Panel>
            </section>

            <footer className="footer">
              <div>
                <strong>N&amp;T AI Accounting</strong>
                {"  "}• Bookkeeping • Financial Intelligence • Sustainability
              </div>

              <div>
                Prototype demonstration • Not financial or tax advice
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
