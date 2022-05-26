import React from "react";
import './Footer.css';
import LogoFacebook from '../../../assets/images/logo-facebook.png';
import LogoInstagram from '../../../assets/images/logo-instagram.png';
import LogoWhasapp from '../../../assets/images/logo-whatsapp.png';

function Footer(){
    return(
        <div>
            <footer className="footer-site">
                <nav className="nav-footer">
                    <div>
                        <li className="li-copyright">Estofados Oliveira ©copy 2022. Todos direitos reservados.</li>  
                    </div>
                    <ul className="ul-social">
                        <li className="li-rede-social"><a className="a-link-social" href=""><img className="image-social" src={LogoFacebook} alt="Facebook"/></a></li>            
                        <li className="li-rede-social"><a className="a-link-social" href="https://www.instagram.com/estofadosoliveiraa/"><img className="image-social" src={LogoInstagram} alt="Instagram"/></a></li>  
                        <li className="li-rede-social"><a className="a-link-social" href="https://api.whatsapp.com/send/?phone=%2B5519981562567&text&app_absent=0"><img className="image-social" src={LogoWhasapp} alt="Whatsapp"/></a></li>
                    </ul>          
                </nav>
            </footer>
        </div>
    )
}

export default Footer;