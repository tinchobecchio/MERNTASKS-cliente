import { useState } from 'react'

const NuevoProyecto = () => {


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


    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>
        
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
        </>
    );
}
 
export default NuevoProyecto;