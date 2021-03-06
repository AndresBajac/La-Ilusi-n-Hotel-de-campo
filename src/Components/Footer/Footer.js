import Button from '../Button/Button';
import './Footer.css'

const Footer = () => {

   return(
     <div className="footerContainer">
         {/* Footer informacion */}
       <div className="footerInfo">
           <div className="footerSocial">
           <h3>
               La Ilusión
           </h3>
           <p>Inicio</p>
           <p>Tienda</p>
           <p>Sobre Nosotros</p>
           <p>Contacto</p>
           </div>
           {/* soporte */}
           <div className="footerSocial">
           <h3>
               Soporte
           </h3>
           <p>FAQs</p>
           <p>Centro de soporte</p>
           <p>Terminos & condiciones</p>
           <p>Contacto</p>
           </div>
           {/* Social Medias */}
           <div className="footerSocial">
           <h3>
               Nuestras Redes
           </h3>
           <p>Facebook</p>
           <p>Instagram</p>
           <p>Twitter</p>
           <p>Pinterest</p>
           </div>
            {/* newsletter */}
           <div className="footerSocial suscriter">
           <h3>
               Unete al Newsletter
           </h3>
           <input type="text" placeholder="lailusion@hoteldecampo.com"></input>
           <Button label="Suscribete ahora"/>
           </div>
       </div>
       {/* footer creador */}
       <div className="footerCreator">
           <h2>© 2021 <a href="https://www.linkedin.com/in/andresbajac" target="_blank" rel="noreferrer">Andrés Bajac </a>CopyLeft - prohibido prohibir </h2>
       </div>
     </div>

   )
}

export default Footer