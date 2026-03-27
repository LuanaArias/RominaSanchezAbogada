import { Navbar } from "../Navbar/Navbar";

export function Header({ tema, alternar }){
    return(
        <header>
            <Navbar tema={tema} alternar={alternar}/>
        </header>
    )
}