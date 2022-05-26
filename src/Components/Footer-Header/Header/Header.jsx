import React from 'react';
import './Header.css';
import Logo from '../../../assets/images/logo.png';

function Header(){
    return(
        <div>
            <header>
                <nav className="nav-header">
                    <div>
                        <a href="/"><img src={Logo} className="logo-header" alt="Logo"/></a>
                    </div>
                    <button className="button-menu-header">&#9776;</button>
                    <ul className="ul-menu-header">
                        <li className="li-menu"><p className="p-space-menu"><a href="/Sobre" className="li-text-menu">Sobre Nós</a></p></li> 
                        <li className="li-menu"><p className="p-space-menu"><a href="/Sofa" className="li-text-menu">Sofás</a></p></li>
                        <li className="li-menu"><p className="p-space-menu"><a href="/Produtos" className="li-text-menu">Produtos</a></p></li>
                        <li className="li-menu"><p className="p-space-menu"><a href="/Contato" className="li-text-menu">Contato</a></p></li>   
                    </ul>
                </nav>
            </header>
        </div>
    )
} 

export default Header;