import { porqueelegirmeitems } from '../../constants/porqueelegirme';
import './SeccionElegirme.css' 

export function SeccionElegirme(){
  return (
    <section className='seccion-elegirme'>
      <div className="seccion-elegirme-header">
        <span className="elegirme-subtitle">Excelencia Jurídica</span>
        <h2 className="elegirme-title-section">¿Por qué elegirme?</h2>
        <div className="elegirme-title-divider"></div>
        <p className="elegirme-header-description">Mi compromiso es brindarte un servicio legal de excelencia, con ética profesional y resultados efectivos.</p>
      </div>

      <div className="seccion-elegirme-items-container">
        {porqueelegirmeitems.map((item, index) => (
          <div className="item-seccion-elegirme" key={index}>
            <div className="elegirme-icon-wrapper">
              <item.Icon />
            </div>
            <div className="elegirme-item-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}