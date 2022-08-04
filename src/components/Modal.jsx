import { useState,useEffect } from "react"
import Msg from "./Msg";
import CerrarBtn from "../img/cerrar.svg"

const Modal = ({ setModal, animarModal, setAnimarModal,guardarGasto,gastoEditar,setGastoEditar }) => {
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState("");
    const [categoria,setCategoria] = useState("")
	const [id,setId] = useState("")
	const [fecha,setFecha] = useState("")
    const [msg, setMsg] = useState("")

    useEffect(()=>{
        if(Object.keys(gastoEditar).length>0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
			setId(gastoEditar.id)
			setFecha(gastoEditar.fecha)
        }
    },[])

	const ocultarModal = () => {
		setAnimarModal(false);
		setGastoEditar({})
		setTimeout(() => {
			setModal(false);
		}, 500);
	}

    const handleSubmit = e =>{
        e.preventDefault()
        if([nombre,cantidad,categoria].includes("")){
            setMsg("Todos los campos son obligatorios")
            setTimeout(() =>{
                setMsg('')
            },3000)
        }else{
			guardarGasto({nombre,cantidad,categoria,id,fecha})
		}
    }

	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
			</div>
			<form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
				<legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo gasto'}</legend>
                {
                    msg && <Msg tipo="error">{msg}</Msg>
                }
				<div className="campo">
					<label htmlFor="nombre">Nombre Gasto</label>
					<input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Añade el Nombre del gasto" />
				</div>
				<div className="campo">
					<label htmlFor="cantidad">Cantidad</label>
					<input id="cantidad" type="number" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} placeholder="Añade la cantidad del gasto" />
				</div>
				<div className="campo">
					<label htmlFor="categoria">categoria</label>
					<select 
                    id="categoria"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}>
						<option value="">-- Seleccione --</option>
						<option value="ahorro">Ahorro</option>
						<option value="casa">casa</option>
						<option value="comida">comida</option>
						<option value="gastos">gastos</option>
						<option value="ocio">ocio</option>
                        <option value="salud">salud</option>
						<option value="suscripciones">subscripciones</option>
					</select>
				</div>
				<input 
				type="submit"
				 value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añador gasto'} />
			</form>
		</div>
	);
};

export default Modal;
