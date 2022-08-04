import { useState, useEffect } from "react";

const Filtros = ({filtro,setFiltro}) => {
	return (
		<div className="filtros sombra contenedor">
			<form>
				<div className="campo">
					<label>Filtrar Gastos</label>
					<select 
                    value={filtro} 
                    onChange={e => setFiltro(e.target.value)}>
						<option value="all">-- Todos --</option>
						<option value="ahorro">Ahorro</option>
						<option value="casa">casa</option>
						<option value="comida">comida</option>
						<option value="gasto">gastos</option>
						<option value="ocio">ocio</option>
						<option value="salud">salud</option>
						<option value="suscripciones">subscripciones</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Filtros;
