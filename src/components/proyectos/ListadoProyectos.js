import Proyecto from "./Proyecto";

const ListadoProyectos = () => {

    // array de proyectos falsos
    const proyectos = [
        {nombre: "Tienda Virtual"},
        {nombre: "Supermercado"},
        {nombre: "Heladeria"},
        {nombre: "Panaderia"},
    ]

    return (

        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Proyecto 
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyectos;