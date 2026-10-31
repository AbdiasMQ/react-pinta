import './Button.css';

function Boton({ texto, tipo, onClick }) {
    return (
        <button
            className={`boton boton-${tipo}`}
            onClick={onClick}
        >
            {texto}
        </button>
    );
}

export default Boton;