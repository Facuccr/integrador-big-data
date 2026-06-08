import "./App.css";
import fondoMatrix from "./assets/Gemini_Generated_Image_bxbhi2bxbhi2bxbh.png";
const App = () => {
  return (
    <div className="app-container">
      <div className="top-ad-banner">
        <p>
          OFERTA LIMITADA: 50% OFF EN LA MATRICULACIÓN DEL BOOTCAMP FULL-STACK -
          INICIO PROXIMO MES
        </p>
      </div>

      <nav className="navbar">
        <div className="logo">Academia Tech</div>
        <ul className="nav-links">
          <li>Catálogo de Cursos</li>
          <li>Bootcamps</li>
          <li>Acceso Alumnos</li>
        </ul>
      </nav>

      <main className="main-content">
        <section
          className="hero-banner"
          style={{ backgroundImage: `url(${fondoMatrix})` }}
        >
          <div className="hero-overlay">
            <h1 className="hero-title">
              Impulsa tu Carrera en Desarrollo de Software
            </h1>
            <p className="hero-subtitle">
              Aprende a programar desde cero. Capacitaciones prácticas,
              certificaciones avaladas y acceso a una comunidad exclusiva.
            </p>
            <div className="cta-container">
              <button className="btn-neon">Matricularme Ahora</button>
              <button className="btn-outline">Acceder a Clase Gratuita</button>
            </div>
          </div>
        </section>

        <section className="advertising-section">
          <div className="ad-container">
            <div className="ad-content">
              <span className="ad-label">Patrocinado</span>
              <h2>¿Buscas escalar tu perfil profesional?</h2>
              <p>
                Descubre nuestro nuevo programa intensivo con salida laboral
                garantizada en 6 meses.
              </p>
              <button className="btn-neon-small">
                Ver Programa Institucional
              </button>
            </div>
          </div>
        </section>

        <section className="courses-section">
          <h2 className="section-title">Especializaciones Técnicas</h2>
          <div className="grid-container">
            <div className="card">
              <h3>Desarrollo Web Full-Stack</h3>
              <p>
                Domina el stack MERN y PERN. Creación de APIs con Node.js,
                Express, bases de datos relacionales y NoSQL.
              </p>
              <button className="btn-text">Ver Temario</button>
            </div>
            <div className="card">
              <h3>Ingeniería de Software</h3>
              <p>
                Elicitación de requisitos, modelado de procesos de negocio y
                administración de sistemas en servidores Linux.
              </p>
              <button className="btn-text">Ver Temario</button>
            </div>
            <div className="card">
              <h3>Big Data y Analítica Digital</h3>
              <p>
                Procesamiento de grandes volúmenes de datos con Python, Hadoop y
                visualización de métricas clave.
              </p>
              <button className="btn-text">Ver Temario</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>Trabajo Práctico Integrador - Big Data II (2026)</p>
          <p>
            Instituto Politécnico Formosa - Tecnicatura Superior en Desarrollo
            de Software
          </p>
          <p>Alumnos: Tomas Vega, Benitez Franco, Cristaldo Facundo</p>
          <p>Profesores: Silvia Hoferek, Micaela Benitez</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
