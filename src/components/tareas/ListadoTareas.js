import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext

    // Extraer las tareas del state
    const tareasContext = useContext(tareaContext)
    const { tareasproyecto } = tareasContext


    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto


    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }


    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasproyecto.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </>
    );
}
 
export default ListadoTareas;