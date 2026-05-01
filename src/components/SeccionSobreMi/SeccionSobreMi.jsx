import './SeccionSobreMi.css';
import fotoSobreMi from '../.././assets/sobremifoto.jpg'
export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        {/* Columna de Imagen */}
        <div className="sobre-mi-image-wrapper">
          <div className="image-frame">
            <img 
              src={fotoSobreMi}
              alt="Dra. Romina Sánchez" 
              className="profile-photo"
            />
          </div>
        </div>

        <div className="sobre-mi-content">
          <span className="subtitle">Compromiso y Ética</span>
          <h2 className="title-section">Dra. Romina Sánchez</h2>
          <div className="title-divider-left"></div>
          
          <p className="description-highlight">
            Abogada especializada en derecho de familia y conflictos de alta complejidad, con intervención en casos atravesados por falsas denuncias, obstrucción de vínculos y dinámicas familiares críticas, así como en otras ramas del derecho que requieren una mirada estratégica e integral. 
          </p>
          
          <p className="description-text">
            Mi enfoque se basa en la <strong>atención personalizada</strong> y <strong>la búsqueda constante de soluciones estratégicas</strong>. Entiendo que detrás de cada expediente hay una historia humana que requiere no solo conocimiento técnico, sino también sensibilidad y reserva, por lo que trabajo con precisión, criterio y un compromiso sostenido con la verdad.
          </p>

          <div className="formacion-academica">
            <h3>Formación Académica</h3>
            <ul>
              <li>Abogada - Universidad de Moron</li>
              <li>Universidad de La Matanza</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}