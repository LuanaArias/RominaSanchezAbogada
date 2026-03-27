import { useState, useEffect } from 'react';
import './Navbar.css';
import { Logo } from '../ui/Logo/Logo';
import { BotonModo } from '../ui/BotonModo/BotonModo';

export function Navbar({ tema, alternar }) {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id); 
    }
  };

  useEffect(() => {
  const sections = ["hero", "especialidades", "contacto"]; 
  
  const observerOptions = {
    root: null,
    rootMargin: '-80% 0px -50% 0px', 
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
  return (
    <nav className="navbar">
      <Logo />

      <div className="nav-actions">
        <div className="nav-links">
          <button 
            className={activeSection === "hero" ? "active" : ""} 
            onClick={() => scrollTo("hero")}
          >
            Inicio
          </button>
          <button 
            className={activeSection === "especialidades" ? "active" : ""} 
            onClick={() => scrollTo("especialidades")}
          >
            Servicios
          </button>
          <button 
            className={activeSection === "contacto" ? "active" : ""} id='boton-contacto-navbar' 
            onClick={() => scrollTo("contacto")}
          >
            Contacto
          </button>
        </div>
        <BotonModo tema={tema} alternar={alternar}/>
      </div>
    </nav>
  );
}