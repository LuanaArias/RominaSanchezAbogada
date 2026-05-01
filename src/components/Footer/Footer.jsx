import { Logo } from '../ui/Logo/Logo';
import './Footer.css';
import { FaWhatsapp } from 'react-icons/fa'; 

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2 className="footer-logo"><Logo /></h2>
          <p className="footer-tagline">
            Excelencia jurídica y compromiso ético.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre Mí</a></li>
            <li><a href="#especialidades">Especialidades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>

          <a 
            href="https://wa.me/541167512241" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp />
            <span>+54 11 6751 2241</span>
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {new Date().getFullYear()} Romina Sanchez Abogada. 
            Todos los derechos reservados.
          </p>

          <p className="dev-credit">
            Diseño y Desarrollo por{" "}
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Luana Arias Lavia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}