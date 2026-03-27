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
          <div className="experience-badge">
            <span className="years">...+</span>
            <span className="text">Años de Trayectoria</span>
          </div>
        </div>

        <div className="sobre-mi-content">
          <span className="subtitle">Compromiso y Ética</span>
          <h2 className="title-section">Dra. Romina Sánchez</h2>
          <div className="title-divider-left"></div>
          
          <p className="description-highlight">
            Especialista en ......., dedicada a la protección integral de los derechos de mis clientes.
          </p>
          
          <p className="description-text">
            Mi enfoque se basa en la <strong>atención personalizada</strong> y la búsqueda constante de soluciones estratégicas. Entiendo que detrás de cada expediente hay una historia humana que requiere no solo conocimiento técnico, sino también sensibilidad y reserva.
          </p>

          <div className="formacion-academica">
            <h3>Formación Académica</h3>
            <ul>
              <li>Abogada - Universidad ....</li>
              <li>....</li>
              <li>......</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}