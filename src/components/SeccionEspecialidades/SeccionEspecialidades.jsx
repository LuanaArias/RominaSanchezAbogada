import './SeccionEspecialidades.css';
import { useScroll } from '../../utils/scroll';
import { areasEstudio } from '../../constants/especialidades.jsx';

export function SeccionEspecialidades() {
  const { scrollTo } = useScroll();

  return (
    <section id="especialidades" className="especialidades-section">
      <div className="especialidades-section-header">
        <p className="especialidades-subtitle">Especialización</p>
        <h2 className="especialidades-title-section">Áreas de Práctica Jurídica</h2>
        <div className="especialidades-title-divider"></div>
        <p className="especialidades-main-description">
          Ofrezco asesoramiento legal integral en casos de <strong>Alta Complejidad</strong>, 
          garantizando la máxima confidencialidad y una defensa técnica de excelencia.
        </p>
      </div>

      <div className="especialidades-grid-areas">
        {areasEstudio.map((area) => (
          <div key={area.id} className="especialidades-area-card">
            <div className="especialidades-card-icon-container">
              <area.Icon />
            </div>
            <h3 className="especialidades-card-title">{area.title}</h3>
            <p className="especialidades-card-text">{area.desc}</p>
            <div className="especialidades-card-divider"></div>
          </div>
        ))}
      </div>
    </section>
  );
}