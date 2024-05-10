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
            <div className='items-center justify-center flex mt-6 '>
                <FaReact className='text-sky-400 w-12 h-12'/>
                <h1 className='vm:text-4xl vs:text-3xl text-center vs:px-5 px-2 text-slate-100 font-semibold text-22'>React-mini-projects</h1>
                <FaReact className='text-sky-400 w-12 h-12'/>
            </div>
            <section className='gap-8 mx-5 vs:grid-cols-3 vs:grid'>
                {[
                    ['Collor Pallet', '/color-pallet', ColorPallet, ],
                    ['Tip Amount App', '/tip-amount', TipAmount],
                    ['Pswd Generator', '/pswd-generator', PwsdGenerator],
                    // ['Calculator', '/calculator', PwsdGenerator],
                ].map(([text, path, icon], i) => (
                    <Link key={i} to={path} className={`mt- stext-white bg-teal-100/25 shadow-inner font-bold no-underline my-8 transition hover:scale-105 cursor-pointer rounded-xl py-2 items-center flex flex-col`}>
                        <img className='vm:w-20 vm:h-20 h-24 w-24' src={icon} />
                        <p className="text-white vm:text-lg vs:text-lg font-semibold text-2xl text-center w-full">{text}</p>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default Principal;
