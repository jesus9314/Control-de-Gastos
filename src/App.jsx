import { useState } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import IconoNuevoGasto from './img/nuevo-gasto.svg'

const App = () => {
  const [presupuesto, setPresupuesto] =useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] =useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal, setAnimarModal] =useState(false)

  //Nuevo gasto
  const handleNuevoGasto = () =>{
    setModal(true)
    setTimeout(() =>{
      setAnimarModal(true)
    },500)
  }

  //Guardamos el gasto
  const guardarGasto = gasto =>{
    console.log(gasto)
}

  return (
    <div>
      <Header
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      isValidPresupuesto = {isValidPresupuesto}
      setIsValidPresupuesto = {setIsValidPresupuesto}
      />
      {
        isValidPresupuesto && (
          <div className="nuevo-gasto">
            <img 
            src={IconoNuevoGasto} 
            alt="Ícono nuevo gasto"
            onClick={handleNuevoGasto} />
          </div>
        )
      }
      {
        modal && <Modal
                  setModal = {setModal}
                  animarModal = {animarModal}
                  setAnimarModal = {setAnimarModal}/>
      }
      
    </div>
  )
}

export default App
