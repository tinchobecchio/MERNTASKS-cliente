import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";

const RutaPrivada = ({ children }) => {

    const authContext = useContext(AuthContext)
    const { autenticado, cargando, usuarioAutenticado} = authContext

    useEffect(() => {
        usuarioAutenticado()
    }, [])

    if (!autenticado && !cargando) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

export default RutaPrivada;