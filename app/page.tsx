export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "linear-gradient(135deg, #a0e9ff 0%, #d0b3ff 100%)",
      fontFamily: "system-ui, Arial"
    }}>
      <div style={{ textAlign: "center", color: "#222" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Zarina Global Gnostic — Kitob platformasi
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Maqsad = Jarayon = Natija
        </p>
      </div>
    </main>
  );
}
