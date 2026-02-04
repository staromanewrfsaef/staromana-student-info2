import "./home.css";

function Home() {
  return (
    <div className="card home-card">
      <h3><span className="hero-emoji">🎓</span>Welcome</h3>
      <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
        This Student Info App is built using React.js to demonstrate
        components, props, state management, client-side routing,
        and API integration with a modern and professional interface.
      </p>
    </div>
  );
}

export default Home;
