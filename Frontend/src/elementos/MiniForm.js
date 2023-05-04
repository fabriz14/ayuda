import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Formulario = styled.form`

	display: grid;
    background: #faf7f0;
    
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;
const FormularioModificarProducto = styled.form`

	display:row;
    background: #faf7f0;
    
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;
const Label = styled.label`
	background: #faf7f0;
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;

	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	background: #faf7f0;
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	background: #faf7f0;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 1px solid transparent;
    border-bottom-color: #000000;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LeyendaError = styled.p`
	background: #faf7f0;
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;

	${props => props.valido === 'true' && css`
		display: none;
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	background: #faf7f0;
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

const ContenedorTerminos = styled.div`
	grid-column: span 2;

	input {
		margin-right: 10px;
	}

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	background: #faf7f0;
	display: block;
	direction: ltr;
	grid-auto-flow: row;
	flex-direction: row;
	align-items: center;
	grid-column: span 2;

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold; 
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	padding: 16px 32px;
	text-align:center;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const MensajeExito = styled.p`
	background: #faf7f0;
	font-size: 14px;
	color: ${colores.exito};
`;

const MensajeError = styled.div`
	background: #faf7f0;
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

const ImageModal = ({ image , isOpen, onClose}) => {
	const [open, setOpen] = useState(false);
  
	const handleOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
  
	return (
	  <div>
		<img src={image} alt="Imagen" onClick={handleOpen} />
		<Modal open={open} onClose={handleClose}>
		  <img src={image} alt="Imagen" />
		</Modal>
	  </div>
	);
  };
  
export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError,
	FormularioModificarProducto
};