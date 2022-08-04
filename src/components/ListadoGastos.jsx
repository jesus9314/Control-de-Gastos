import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
	return (
		<div className="listado-gastos contenedor">
			<h2>{gastos.length ? "Gastos" : "No hay Gastos Aún"}</h2>
			{filtro ? (
				<>
					<h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos"}</h2>
					{gastosFiltrados.map((gasto) => (
						<Gasto key={gasto.id} eliminarGasto={eliminarGasto} gasto={gasto} setGastoEditar={setGastoEditar} />
					))}
				</>
			) : (
				<>
					<h2>{gastos.length ? "Gastos" : "No hay gastos"}</h2>
					{gastos.map((gasto) => (
						<Gasto key={gasto.id} eliminarGasto={eliminarGasto} gasto={gasto} setGastoEditar={setGastoEditar} />
					))}
				</>
			)}
		</div>
	);
};

export default ListadoGastos;
