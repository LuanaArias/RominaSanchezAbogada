import LogoImg from '../../../assets/logoRomina.png'
import './Logo.css'
export function Logo(){
    return(
        <>
            <div className='logo-principal-container' >
                <img src={LogoImg} alt="Logo Romina Sanchez" className='imagen-logo'/>
            </div>
        </>
    )
}