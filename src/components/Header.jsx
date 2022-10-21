import Button from "./Button"

const Header = ({ onAdd, mostrarForm }) => {

    return (
        <header className="header">
            <h1>Tareas</h1>
            <Button color={mostrarForm ? "red" : "green"}  texto={mostrarForm ? "Cerrar" : "Agregar"} onClick={ onAdd }/>
        </header>
    )
}

export default Header
