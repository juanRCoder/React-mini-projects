import { Link } from 'react-router-dom';
import './Principal.scss';

function Principal() {
    return (
        //Proyectos con las rutas principales
        <div className='m-auto w-3/6 text-center mt-4 underline text-sky-400'>
            <Link to={'/....'} className='font-bold'>randomColors</Link>
        </div>
    )
}

export default Principal;