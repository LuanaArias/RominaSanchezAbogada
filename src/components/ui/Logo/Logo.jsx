import LogoImg from '../../../assets/favicon.png'
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