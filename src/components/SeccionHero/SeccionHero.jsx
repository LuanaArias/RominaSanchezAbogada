import imagenFondo from '../../assets/imagenHero.jpg'
import "./SeccionHero.css";

export function SeccionHero() {
    return (
        <section
            id='hero'
            className="section-hero"
            style={{
                backgroundImage:
                    `url(${imagenFondo})`,
            }}
        >
            <div className="section-hero-overlay">
                <div className="section-hero-container">
                    <div className="section-hero-content">
                        <h1>
                            Dra. Romina Sanchez
                        </h1>

                        <p>Comprometida con la defensa de tus derechos</p>

                        <div className="section-hero-buttons">
                            <a href="#especialidades" className="btn outline">
                                Especialidades →
                            </a>

                            <a href="#contacto" className="btn primary">
                                Contáctanos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}