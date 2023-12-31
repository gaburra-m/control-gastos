import { useState } from "react"
import Mensaje from "./Mensaje"

function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) {
  const [mensaje, setMensaje] = useState("")
  const handlePresupuesto = (e) => {
    e.preventDefault()
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido")
      return
    }
    setMensaje("")
    setIsValidPresupuesto(true)
  }
  return (
    <section className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </section>
  )
}

export default NuevoPresupuesto
