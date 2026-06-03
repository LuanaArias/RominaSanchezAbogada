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

          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=drasanchezro@gmail.com"
            className="email-link"
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="currentColor"/>
            </svg>
            <span>drasanchezro@gmail.com</span>
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