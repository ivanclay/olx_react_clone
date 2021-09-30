import React from "react";
import { FooterArea } from './styled';

const Footer = () => {
   return (
        <> 
            <hr style={{border: '1px solid #FFF'}}/>
            <FooterArea>
                Todos os direitos reservados <br/>
                Clone Site
            </FooterArea>
       </>
   );
}

export default Footer;