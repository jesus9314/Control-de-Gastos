import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Filtros from "./components/Filtros";
import ListadoGastos from "./components/ListadoGastos";
import { generarID } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

const App = () => {
	//1
	const [presupuesto, setPresupuesto] = useState(
		Number(localStorage.getItem('presupuesto')) ?? 0
	);
	//2
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	//3
	const [modal, setModal] = useState(false);
	//4
	const [animarModal, setAnimarModal] = useState(false);
	//5
	const [gastos, setGastos] = useState([...(JSON.parse(localStorage.getItem('gastos')) ?? [])]);
	//6
	const [gastoEditar, setGastoEditar] = useState({});
	//7
	const [filtro, setFiltro] = useState('')
	//8
	const [gastosFiltrados, setGastosFiltrados] = useState([])

	useEffect(() => {
	  localStorage.setItem('presupuesto',presupuesto ?? 0)
	}, [presupuesto])

	useEffect(()=>{
		localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
	},[gastos])

	useEffect(() => {
		if(filtro){
			const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
			setGastosFiltrados(gastosFiltrados)
			if(filtro==="all"){
				setGastosFiltrados(gastos)
			}
		}
	}, [filtro])
	

	useEffect(()=>{
		const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
		if(presupuestoLS>0){
			setIsValidPresupuesto(true)
		}
	},[])

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setModal(true);
			setTimeout(() => {
				setAnimarModal(true);
			}, 500);
		}
	}, [gastoEditar]);

	//Nuevo gasto
	const handleNuevoGasto = () => {
		setModal(true);
		setTimeout(() => {
			setAnimarModal(true);
		}, 500);
    setGastoEditar({})
	};

	const eliminarGasto = id =>{
		const gastosActualizados = gastos.filter( gasto => gasto.id !== id)
		setGastos(gastosActualizados)
	}

	//Guardamos el gasto
	const guardarGasto = (gasto) => {
		if(gasto.id){
			//actualizar
			const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
			setGastos(gastosActualizados)
			setGastoEditar({})
		}else{
			//Nuevo
			gasto.id = generarID();
			gasto.fecha = Date.now();
			setGastos([...gastos, gasto]);
		}
		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	return (
		<div className={modal ? "fijar" : ""}>
			<Header gastos={gastos} setGastos={setGastos} presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
			{isValidPresupuesto && (
				<>
					<main>
						<Filtros
						filtro={filtro}
						setFiltro={setFiltro}/>
						<ListadoGastos filtro={filtro} gastosFiltrados={gastosFiltrados} eliminarGasto={eliminarGasto} gastos={gastos} setGastoEditar={setGastoEditar} />
					</main>
					<div className="nuevo-gasto">
						<img src={IconoNuevoGasto} alt="Ícono nuevo gasto" onClick={handleNuevoGasto} />
					</div>
				</>
			)}
			{modal && <Modal setGastoEditar={setGastoEditar} gastoEditar={gastoEditar} setModal={setModal} guardarGasto={guardarGasto} animarModal={animarModal} setAnimarModal={setAnimarModal} />}
		</div>
	);
};

export default App;
