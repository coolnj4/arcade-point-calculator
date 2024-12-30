export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header
          style={{
            textAlign: "center",
            padding: "15px",
            background: "#007BFF",
            color: "#fff",
            fontSize: "18px",
          }}
        >
          <h1 style={{ margin: 0 }}>Arcade Point Calculator</h1>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
        <footer
          style={{
            textAlign: "center",
            marginTop: "20px",
            padding: "10px",
            background: "#f4f4f4",
            fontSize: "14px",
          }}
        >
          <p>&copy; 2024 Arcade Inc.</p>
        </footer>
      </body>
    </html>
  );
}
