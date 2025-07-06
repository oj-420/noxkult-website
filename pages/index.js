export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        fontFamily: "monospace"
      }}
    >
      <img
        src="/noxkult-logo.jpeg"
        alt="Noxkult Logo"
        style={{ width: "200px", marginBottom: "20px" }}
      />
      <h1 style={{ fontSize: "3rem", animation: "glitch 1s infinite" }}>noxkult</h1>
      <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>
        Join the kult —{" "}
        <a
          href="https://instagram.com/noxkult"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          @noxkult
        </a>
      </p>

      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
}