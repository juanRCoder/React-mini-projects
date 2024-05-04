import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import ColorPallet from '../assets/collorPallet.webp';
import TipAmount from '../assets/tipAmountApp.webp';
import './Principal.scss';

function Principal() {
    return (
        //Proyectos con las rutas principales
        <>
            <div className='justify-center flex mt-5'>
                <FaReact className='text-sky-400 w-8 h-8' />
                <h1 className='text-center px-3 text-slate-100 font-semibold text-2xl'>React mini projects</h1>
                <FaReact className='text-sky-400 w-8 h-8' />
            </div>
            <section className='mt-10'>
                {[
                    ['Collor Pallet', '/color-pallet', ColorPallet],
                    ['Tip Amount App', '/tip-amount', TipAmount],
                ].map(([text, path, icon], i) => (
                    <Link key={i} to={path} className='mt-5 transition hover:scale-105 cursor-pointer rounded-xl py-4 mx-8 items-center flex flex-col bg-app'>
                        <img className='h-32 w-32' src={icon} />
                        <p className="pt-1 font-semibold text-3xl text-center w-full">{text}</p>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default Principal;