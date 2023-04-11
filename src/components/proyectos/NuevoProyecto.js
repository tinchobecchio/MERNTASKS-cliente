import { useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario, mostrarFormulario } = proyectosContext

    // State para Proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    })
    // Extraer nombre de proyecto
    const { nombre } = proyecto

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario agrega un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault()

        // validar el proyecto


        // agregar al state


        // reiniciar el form
    }

    // Mostrar el formulario
    const onClickFormulario = () =>{
        mostrarFormulario()
    }

    
    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>
        
            {formulario
                ?
                    (
                        <form 
                            className='formulario-nuevo-proyecto'
                            onSubmit={onSubmitProyecto}
                        >
                            <input
                                type="text" 
                                className='input-text'
                                placeholder='Nombre Proyecto'
                                name='nombre'
                                value={nombre}
                                onChange={onChangeProyecto}
                            />

                            <input 
                                type="submit"
                                className='btn btn-primario btn-block'
                                value="Agregar Proyecto" 
                            />

                        </form>
                    )
                : null
            }
        </>
    );
}
 
export default NuevoProyecto;