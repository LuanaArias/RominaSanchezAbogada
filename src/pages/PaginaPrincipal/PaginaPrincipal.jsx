import { SeccionCasos } from "../../components/SeccionCasos/SeccionCasos";
import { SeccionContacto } from "../../components/SeccionContacto/SeccionContacto";
import { SeccionElegirme } from "../../components/SeccionElegirme/SeccionElegirme";
import { SeccionEspecialidades } from "../../components/SeccionEspecialidades/SeccionEspecialidades";
import { SeccionHero } from "../../components/SeccionHero/SeccionHero";
import { SeccionSobreMi } from "../../components/SeccionSobreMi/SeccionSobreMi";

export function PaginaPrincipal(){
    return(
        <>
            <SeccionHero />
            <SeccionSobreMi />
            <SeccionElegirme />
            <SeccionEspecialidades />
            <SeccionCasos />
            <SeccionContacto />
        </>
    )
}