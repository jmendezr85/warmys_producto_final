import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, Table} from "react-bootstrap";
import {useState, useEffect} from "react";
import Axios  from "axios";
import logo from "../media/logo_trans2.png";

function Venta() {

  const [cantidad_add, set_cantidad_add] = useState(0);
  const [description_add, set_description_add] = useState("");
  const [unit_cost_add, set_unit_cost_add] = useState(0);
  const [state_add, set_state_add] = useState("true");


  const [cantidad_update, set_cantidad_update] = useState(0);
  const [description_update, set_description_update] = useState("");
  const [unit_cost_update, set_unit_cost_update] = useState(0);
  const [state_update, set_state_update] = useState("true");
  const [id_update, set_id_update] = useState(0);


  const [venta, set_venta] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/v1/venta/list").then((res) =>{
      console.log(res.data.venta)
      set_venta(res.data.venta)
    });
  }, [])

  const add_venta_db =() =>{
    console.log(cantidad_add+description_add+unit_cost_add+state_add)
    Axios.post("http://localhost:3001/api/v1/venta/add",{
      cantidad: cantidad_add,
      description: description_add,
      unit_cost: unit_cost_add,
      state: state_add
    });
  }

  const delete_venta = (_id) => {
    window.confirm("Estás Seguro que deseas Eliminar el elemento ",_id);
    Axios.delete("http://localhost:3001/api/v1/venta/delete/" + _id)
  }

  const update_venta = (_id) => {
    Axios.put("http://localhost:3001/api/v1/venta/update",{
      _id: _id,
      cantidad: cantidad_update,
      description: description_update,
      unit_cost: unit_cost_update,
      state: state_update
    });
  }

  return (
    <div className="App">
      <Container>
        <h1>
          REGISTRO DE VENTAS
        </h1>
        <a href="/" ><img src={logo}  width="60px"/></a>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="number" placeholder="Ingrese Cantidad" onChange ={(e) => {
              set_cantidad_add(e.target.value);
            }
            } />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="texto" placeholder="Ingrese el nombre del producto" onChange ={(e) => {
              set_description_add(e.target.value);
            }
            } />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUnitcost">
            <Form.Label>Costo por unidad</Form.Label>
            <Form.Control type="number" placeholder="Ingrese costo por unidad" onChange ={(e) => {
              set_unit_cost_add(e.target.value);
            }
            } />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUnitcost">
            <Form.Check 
            inline
            label = "Disponible"
            name = "estado"
            type = "radio"
            id = "1" onChange ={(e) => {
              set_state_add("true");
            }
            }/>
            <Form.Check 
            inline
            label = "Agotado"
            name = "estado"
            type = "radio"
            id = "0"
            onChange ={(e) => {
              set_state_add("false");
            }
            }/>
          </Form.Group>
          <Button variant="primary" onClick ={add_venta_db}>
            AÑADIR
          </Button>
        </Form>

        <hr/>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Cantidad</th>
              <th>Descripcion</th>
              <th>Costo por Unidad</th>
              <th>Estado</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              venta.map((value, key) =>
                <tr>
                  <td>
                    {key}
                  </td>
                  <td>
                    {value.cantidad}
                  </td>
                  <td>
                    {value.description}
                  </td>
                  <td>
                    {value.unit_cost}
                  </td>
                  <td>
                    {value.state.toString()}
                  </td>
                  <td>
                    <Button variant = "warning" onClick={
                      ()=>{
                        set_id_update(value._id);
                        set_cantidad_update(value.cantidad);
                        set_description_update(value.cantidad);
                        set_unit_cost_update(value.cantidad);
                        set_state_update(value.cantidad.toString());
                        
                        document.getElementById("cantidad_update").defaultValue = value.cantidad;
                        document.getElementById("description_update").defaultValue = value.description;
                        document.getElementById("unit_cost_update").defaultValue = value.unit_cost;
                      }
                      
                    }>EDITAR</Button>
                  </td>
                  <td>
                    <Button variant= "danger" onClick={
                      () => {delete_venta(value._id)}
                      }>ELIMINAR</Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>

  <hr/>

  <Form>
          <Form.Group className="mb-3" controlId="formBasicCantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control disabled="true" id ="cantidad_update" type="number" placeholder="Ingrese cantidad" onChange ={(e) => {
              set_cantidad_update(e.target.value);
            }
            } />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control id="description_update" type="texto" placeholder="Ingrese el nombre del producto" onChange ={(e) => {
              set_description_update(e.target.value);
            }
            } />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUnitcost">
            <Form.Label>Costo por unidad</Form.Label>
            <Form.Control id="unit_cost_update" type="number" placeholder="Ingrese costo por unidad" onChange ={(e) => {
              set_unit_cost_update(e.target.value);
            }
            } />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUnitcost">
            <Form.Check 
            inline
            label = "Disponible"
            name = "estado"
            type = "radio"
            id = "1" onChange ={(e) => {
              set_state_update("true");
            }
            }/>

            <Form.Check 
            inline
            label = "Agotado"
            name = "estado"
            type = "radio"
            id = "0"
            onChange ={(e) => {
              set_state_update("false");
            }
            }/>
          </Form.Group>


         
          <Button variant="warning" onClick ={
            ()=>{
              update_venta(id_update)}}>
            ACTUALIZAR
          </Button>
        </Form>

        
      
     



      </Container>
      
    </div>
  );
}

export default Venta;
