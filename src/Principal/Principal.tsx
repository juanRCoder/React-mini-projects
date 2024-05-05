import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import ColorPallet from '../assets/collorPallet.webp';
import TipAmount from '../assets/tipAmountApp.webp';
import './Principal.scss';
import PwsdGenerator from '../assets/pswd-generator.webp';

function Principal() {
    return (
        //Proyectos con las rutas principales
        <>
            <div className='vm:mt-8 justify-center flex mt-5'>
                <FaReact className='text-sky-400 w-8 h-8' />
                <h1 className='vm:text-4xl vs:text-3xl text-center px-3 text-slate-100 font-semibold text-2xl'>React mini projects</h1>
                <FaReact className='text-sky-400 w-8 h-8' />
            </div>
            <section className='lg:grid-cols-5 md:grid-cols-4 vm:mt-5 vm:grid-cols-3 vs:grid-cols-2 vs:grid mt-10'>
                {[
                    ['Collor Pallet', '/color-pallet', ColorPallet],
                    ['Tip Amount App', '/tip-amount', TipAmount],
                    ['Pswd Generator', '/pswd-generator', PwsdGenerator],
                ].map(([text, path, icon], i) => (
                    <Link key={i} to={path} className='vs:mx-4 mt-5 transition hover:scale-105 cursor-pointer rounded-xl py-4 mx-8 items-center flex flex-col bg-app'>
                        <img className='vm:w-24 vm:h-24 vs:h-28 vs:w-28 h-32 w-32' src={icon} />
                        <p className="vm:text-xl vs:text-2xl pt-1 font-semibold text-3xl text-center w-full">{text}</p>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default Principal;