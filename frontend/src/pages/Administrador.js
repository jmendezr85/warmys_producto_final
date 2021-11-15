import "../estilos/Principal.css";
import logo from "../media/logo_trans2.png";
import logo2 from "../media/logo_tienda.png";
import { Link } from "react-router-dom";

function Administrador() {
  return (
    <div>
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
              <Link to="/">Salir</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main_fondo">

        

          <div className="lateral">
            <h2>Menú Administrador</h2>
            <ul>
              <li>
                <a href="#">REGISTRAR VENTA</a>
              </li>
              <li>
                <a href="productos">GESTIONAR PRODUCTO</a>
              </li>
              <li>
                <a href="#">GESTIONAR USUARIO</a>
              </li>
            
            
            </ul>
          </div>

          <div className="section">
            <div >Area para tablas</div>
          </div>

       


      </main>

      <footer className="piedepagina">
        <div>
          Todos los derechos reservados | Misión-Tic 2022 | THE-FIVE-GEEKS
        </div>
      </footer>
    </div>
  );
}




export default Administrador;
