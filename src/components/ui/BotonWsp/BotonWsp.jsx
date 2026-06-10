import { IconoWsp } from '../Iconos/IconoWsp/IconoWsp';
import './BotonWsp.css'
export function BotonWsp(){
    return (
        <a
            href="https://wa.me/541167512241"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contactar por WhatsApp"
        >
            <IconoWsp />
        </a>
    );
}