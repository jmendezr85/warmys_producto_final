/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../estilos/Principal.css";
import logo2 from "../media/logo_tienda.png";
import { Link } from "react-router-dom";
import React, { Fragment, } from "react";
import GoogleLogin from 'react-google-login';
import Axios  from "axios";

function Login() {
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.nt.Yt);
    var name = respuesta.nt.Se
    var email = respuesta.nt.Yt

    Axios.post("http://localhost:3001/api/v1/registros/add", {
      name: name,
      email: email,
      password: "1"


    });

    if (email){
      window.location.href="/venta"

    }



  }


  return (
    <Fragment>
      <div className="fondologin">
        <div className="formulario">
          <form action="action_page.php" method="post">
            <div className="imgcontainer">
              <img src={logo2} alt="Avatar" class="avatar" />
            </div>

            <div className="container">
              <label for="uname">
                <b>Usuario</b>
              </label>
              <input
                type="text"
                placeholder="Ingresa el usuario"
                name="uname"
                required
              />

              <label for="psw">
                <b>Contraseña</b>
              </label>
              <input
                type="password"
                placeholder="Ingresa la Contraseña"
                name="psw"
                required
              />

              <button type="submit" id="logearse">
                Loguearse
              </button>

              <label>
                <input type="checkbox" checked="checked" name="remember" />{" "}
                Recordarme
              </label>
              <label>
                <span className="oc">
                  {" "}
                  <a href="#">Olvidaste la Contraseña?</a>
                </span>
              </label>
            </div>

            <div className="container" className="abajo">
              <Link to="/">
                <button type="button" class="cancelbtn">
                  Regresar
                </button>
              </Link>
              <span className="psw">
                {" "}
                <Link to="/registro">Registrarse</Link>
              </span>
            </div>
            <div >
              <GoogleLogin
                clientId="496654533117-1ck3nsdvtiqiabnvkjcsqavke8jfpt0e.apps.googleusercontent.com"
                buttonText="iniciar sesion"
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
                className="gmail"


              />,
            </div>
          </form>

        </div>
      </div>
      <footer className="piedepagina">
        <div>
          Todos los derechos reservados | Misión-Tic 2022 | WARMYS
        </div>
      </footer>
    </Fragment>


  );
}

export default Login;
