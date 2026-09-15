export const metadata = {
  title: "N&T AI-Powered Accounting",
  description:
    "N&T AI-Powered Accounting, Bookkeeping and Financial Intelligence Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#f4f7f9",
        }}
      >
        {children}
      </body>
    </html>
  );
}
