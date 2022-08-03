import { useState } from "react"
import Msg from "./Msg";
import CerrarBtn from "../img/cerrar.svg"

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState("");
    const [categoria,setCategoria] = useState("")
    const [msg, setMsg] = useState("")

	const ocultarModal = () => {
		setAnimarModal(false);
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
				<legend>Nuevo Gasto</legend>
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
						<option value="Ahorro">Ahorro</option>
						<option value="comida">comida</option>
						<option value="casa">casa</option>
						<option value="gastos">gastos</option>
						<option value="ocio">ocio</option>
						<option value="salud">salud</option>
						<option value="subscripciones">subscripciones</option>
					</select>
				</div>
				<input type="submit" value="Añadir Gasto" />
			</form>
		</div>
	);
};

export default Modal;
