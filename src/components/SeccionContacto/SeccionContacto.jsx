import { useState } from 'react';
import './SeccionContacto.css'
import { IconoWsp } from '../ui/Iconos/IconoWsp/IconoWsp';
import { IconoEmail } from '../ui/Iconos/IconoEmail/IconoEmail';
export function SeccionContacto(){
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleWhatsAppSend = (e) => {
        e.preventDefault();

        // Tu número de teléfono con código de país 
        const telefono = "541155705655"; 
    
        // Armamos el texto con saltos de línea codificados (%0A)
        const mensajeWsp = `Hola Dra. Romina Sánchez, mi nombre es ${nombre}.
            Me gustaría realizar una consulta:
            ${descripcion}
            Muchas gracias.`;
    
        // Creamos la URL de WhatsApp
        const url = `https://wa.me/${telefono}?text=${mensajeWsp}`;
    
        // Abrimos en una pestaña nueva
        window.open(url, '_blank');

    };

    const handleEmailSend = () => {

        const destinatario = "drasanchezro@gmail.com";

        const asunto =
            encodeURIComponent("Nueva consulta desde la web");

        const cuerpo = encodeURIComponent(
        `Hola Dra. Romina Sánchez,

Mi nombre es ${nombre} y me gustaría realizar una consulta.

Detalle de la consulta:
${descripcion}

Quedo atento/a a su respuesta.

Muchas gracias.`
        );

        const gmailLink =
            `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;

        window.open(gmailLink, "_blank");
    };

    return(
        <section id="contacto" className="section-formulario-contacto">
            <div className="formulario-wrapper">
                <div className="formulario-header">
                    <h2 className='contacto-title-section'>Contáctame</h2>
                    <p className='contacto-main-description'>¿Necesitas asesoría legal? Completa el formulario y la Dra. Romina Sánchez te contactará por WhatsApp lo antes posible.</p>
                </div>

                <form className="form-simple" onSubmit={handleWhatsAppSend}>
                    <div className="input-group">
                        <label htmlFor="nombre">NOMBRE COMPLETO</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            placeholder="Tu nombre" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="descripcion">MENSAJE</label>
                        <textarea 
                            id="descripcion" 
                            placeholder="Describe brevemente tu situación legal..." 
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required 
                            rows="5"
                        />
                    </div>

                    <div className="submit-wrapper">
                        <button type="submit" className="btn submit-wsp">
                            ENVIAR A WHATSAPP
                            <IconoWsp />
                        </button>
                        <button
                            type="button"
                            className="btn submit-email"
                            onClick={handleEmailSend}
                        >
                            ENVIAR EMAIL
                            <IconoEmail />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}