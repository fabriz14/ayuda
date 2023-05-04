import React , {Component, useState}from "react";
import '../css/ListaDeProducto.css';
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/estilos.css';
import Input from '../components/Input';
import Button from '../elementos/Button';
import ModalForm from './ModalForm';
import Stock from './Stock';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ContenedorBotonCentrado, Boton } from "../elementos/Formularios";

class Lista extends Component{
    constructor(props){
        super(props);
        this.state={
            productos:[]
        }

 
        
        this.getProductos = this.getProductos.bind(this);
    }
    
    componentDidMount(){
        this.getProductos();
    }

    getProductos=async()=>{
        await axios.get('http://127.0.0.1:8000/api/getProductos')
        .then(res=>{
            this.setState({productos: res.data.producto});
            console.log(res.data.producto)
        }).catch((error)=>{
            console.log(error);
        });
    }
    render(){
        return(
            <div class="home">
                <br></br>
                <ContenedorBotonCentrado><h1>Productos registrados</h1></ContenedorBotonCentrado>
                <table className="table">
                    <thead className="thead-dark">
                        <br></br>
                        <tr>
                        <th scope='col'>Producto</th>
                        <th scope='col'>Cantidad(uds)</th>
                        <th scope='col'>Modificar datos</th>
                        <th scope='col'>Agregar stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.productos.map(product=>
                                <tr key={product.id}>
                                        <th>{product.producto}</th>
                                        <th>  0 </th>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <center>
					<Boton id= "guardarP" type="submit" > Guardar </Boton>
				</center>
				<center>
					<Boton id= "borrarP"  type="button" className="btn mx-5"> Cancelar </Boton>
				</center>
            </div>
           
        
        )
    }
}
export default Lista;