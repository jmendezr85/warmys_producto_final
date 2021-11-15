import { Link } from 'react-router-dom';
import fondo from "../media/fondo.jpg";
import logo from "../media/logo_trans2.png";
import "../estilos/Principal.css"

function Principal() {
  return (
    <div className="fondologin">
      <header>
      <img src={logo} alt="Logotipo" className="logo_nav" />
        <nav>
        <ul>
            <li>
            <Link to="login">Contacto</Link>
            </li>
            <li>
              <Link to="#">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="login">Ingresar</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
          <img src={fondo} alt="fondo pagina" className="imgfondo" />
      
      <footer className="piedepagina">
        <div>
          Todos los derechos reservados | Misión-Tic 2022 | WARMYS
        </div>
      </footer>
    </div>
    </div>
  );
}


export default Principal;
