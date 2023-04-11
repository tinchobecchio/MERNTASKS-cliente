import { useReducer } from 'react';
import tareaContext from './tareaContext'
import TareaReducer from "./tareaReducer";

import { 
    TAREAS_PROYECTO
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 3},
            {nombre: 'Elegir hosting', estado: true, proyectoId: 4},
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 3},
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 4},
            {nombre: 'Elegir colores', estado: false, proyectoId: 1},
            {nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 2},
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 3},
            {nombre: 'Elegir colores', estado: false, proyectoId: 4},
            {nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 3}
        ]
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState)


    // Crear las funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }





    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                obtenerTareas
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
    
}

export default TareaState