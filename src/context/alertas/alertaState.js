import { useReducer } from 'react'
import alertaContext from './alertaContext.js'
import alertaReducer from './alertaReducer.js'

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types/index.js'

const AlertaState = props => {

    const initialState = {
        alerta: null
    }

    const [ state, dispatch ] = useReducer(alertaReducer, initialState)


    // Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: { msg, categoria}
        })

        // Despues de 5 segundos limpiar la alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    );
}
 
export default AlertaState;