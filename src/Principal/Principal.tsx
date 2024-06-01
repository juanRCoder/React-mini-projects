import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import ColorPallet from '../assets/collorPallet.webp';
import TipAmount from '../assets/tipAmountApp.webp';
import PwsdGenerator from '../assets/pswd-generator.webp';
import Calculator from '../assets/calculator.webp';
import './Principal.css';

function Principal() {
    return (
        //Proyectos con las rutas principales
        <>
            <div className='items-center justify-center flex mt-6 '>
                <FaReact className='text-sky-300 w-12 h-12'/>
                <h1 className='cls vm:text-4xl vs:text-3xl text-center vs:px-5 px-2 text-white font-semibold text-22'>React-mini-projects</h1>
                <FaReact className='text-sky-300 w-12 h-12'/>
            </div>
            <section className='mt-8 gap-5 mx-5 lg:grid-cols-6 md:grid-cols-3 vs:grid-cols-2 vs:grid'>
                {[
                    ['Collor Pallet', '/color-pallet', ColorPallet],
                    ['Tip Amount App', '/tip-amount', TipAmount],
                    ['Pswd Generator', '/pswd-generator', PwsdGenerator],
                    ['Calculator', '/calculator', Calculator],
                ].map(([text, path, icon], i) => (
                    <Link key={i} to={path} className={`hover:font-bold text-white mt-4 vs:mt-0  bg-slate-100/20 shadow-inner font-bold no-underline transition hover:scale-105 cursor-pointer rounded-xl py-2 items-center flex flex-col`}>
                        <img className='vm:w-20 vm:h-20 h-24 w-24' src={icon} />
                        <p className="pt-1 vs:text-lg font-semibold text-2xl text-center w-full">{text}</p>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default Principal;
