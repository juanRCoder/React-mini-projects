import { Link } from 'react-router-dom';
import './Principal.scss';

function Principal() {
    return (
        //Proyectos con las rutas principales
        <>
            <h1 className='ml-3 mt-4 text-slate-100 font-semibold text-2xl'>Mini Proyectos:</h1>
            <div className='m-3 text-sky-400'>
                <Link to={'/color-pallet'} className='font-bold'>1.collorPallet</Link>
            </div>
        </>
    )
}

export default Principal;