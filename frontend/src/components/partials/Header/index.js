import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from './styled';
import { isLogged } from "../../../helpers/AuthHandler";

const Header = () => {
    let logged = isLogged();

   return (
       <HeaderArea>
           <div className="container">
            <div className="logo">
                <Link to="/">
                    <span className="logo-1">O</span>
                    <span className="logo-2">L</span>
                    <span className="logo-3">X</span>
                </Link>
            </div>
            <nav>
                <ul>
                    {!logged &&
                       <>
                        <li>
                            <Link to="/signin">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Cadastrar</Link>
                        </li>
                       </>
                    }
                    {logged &&
                        <>
                            <li>
                                <Link to="/my-account">Minha conta</Link>
                            </li>
                            <li>
                                <Link to="/logout">sair</Link>
                            </li>
                            <li>
                                <Link to="/post-an-ad" className="button">Anunciar</Link>
                            </li>
                        </>
                    }
                    
                    
                </ul>
            </nav>
           </div>
       </HeaderArea>
   );
}
export default Header;