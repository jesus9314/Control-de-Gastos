import { useState } from "react";
import Msg from "./Msg";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto,setIsValidPresupuesto }) => {
    const [msg, setMsg] = useState('')
	const handlePresupuesto = (e) => {
		e.preventDefault();
		if (!presupuesto || presupuesto < 0) {
            setMsg('No es un presupuesto Válido')
            return
		}
        setMsg('')
        setIsValidPresupuesto(true)
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<form onSubmit={handlePresupuesto} className="formulario">
				<div className="campo">
					<label htmlFor="">Definir Presupuesto</label>
					<input className="nuevo-presupuesto" type="number" placeholder="Añade tu presupuesto" value={presupuesto} onChange={(e) => setPresupuesto(Number(e.target.value))} />
				</div>
				<input type="submit" value="Añadir" />
                {msg && <Msg tipo="error">{msg}</Msg>}
			</form>
		</div>
	);
};

export default NuevoPresupuesto;
