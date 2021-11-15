import "../estilos/Principal.css";
import logo2 from "../media/logo_tienda.png";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import Axios  from "axios";



function Registro() {

  const [name_add, set_name_add] = useState(0);
  const [email_add, set_email_add] = useState("");
  const [password_add, set_password_add] = useState(0);


  const [set_registro] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/v1/registros/list").then((res) =>{
      console.log(res.data.registro)
      set_registro(res.data.registro)
    });
  }, [])

  const add_registro_db =() =>{
    console.log(name_add+email_add+password_add)
    Axios.post("http://localhost:3001/api/v1/registros/add",{
      name: name_add,
      email: email_add,
      password: password_add,
    
    });
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
              <label for="name">
                <b>Nuevo Usuario</b> <Form.Control type="text" placeholder="Ingrese nombre" onChange ={(e) => {
              set_name_add(e.target.value);
                    }
                  } />
              </label>
              

              <label for="email">
              <b>Nuevo email</b> <Form.Control type="text" placeholder="Ingrese nuevo email" onChange ={(e) => {
              set_email_add(e.target.value);
                    }
                  } />
              </label>


              <label for="password">
                <b>password</b> <Form.Control type="password" placeholder="Ingrese password" onChange ={(e) => {
                      set_password_add(e.target.value);
                    }
                  } />
              </label>
              
              <div>
                <label>
                  <b>Selecciona tu Rol</b>
                </label>
                <input
                  class="oc"
                  type="radio"
                  id="vendedor"
                  name="mi_rol"
                  value="Vendedor"
                />
                <label class="oc"> Vendedor</label>
                <input
                
                  class="oc"
                  type="radio"
                  id="administrador"  
                  name="mi_rol"
                  value="Administrador"
                />
                <label class="oc"> Administrador</label>
              </div>
              <Button variant="primary" onClick ={add_registro_db}>AÑADIR</Button>
            </div>

            <div className="container" className="abajo">
              <Link to="/">
                <button type="button" className="cancelbtn">
                  Cancelar
                </button>
              </Link>
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

export default Registro;
