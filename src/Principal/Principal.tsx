import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import './Principal.css';

function Principal() {
    return (
        //Proyectos con las rutas principales
        <>
            <main className='h-full principal_maximo'>
                <section className='h-screen'>
                    <div className='pt-6'>
                        <div className='ml-6 flex gap-3 items-center'><FaReact className='text-sky-300 w-11 h-11' /><h1 className='font-semibold vm:text-3xl text-2xl'>projects</h1></div>
                        <section className='my-8 gap-5 mx-5 lg:grid-cols-6 md:grid-cols-4 vs:grid-cols-2 vsx:grid-cols-1 vs:grid'>
                            {[
                                ['Collor Pallet', '/color-pallet', ],
                                ['Tip Amount App', '/tip-amount', ],
                                ['Calculator', '/calculator', ],
                            ].map(([text, path, ], i) => (
                                <Link key={i} to={path} className={`hover:font-bold text-white vs:mt-0 mt-4  bg-slate-100/20 shadow-inner font-bold no-underline transition hover:scale-105 cursor-pointer rounded-xl py-2 items-center flex flex-col`}>
                                  
                                    <p className="pt-1 vm:text-lg vs:text-xl font-semibold text-2xl text-center">{text}</p>
                                </Link>
                            ))}
                        </section>
                    </div>
                    <div className=''>
                        <div className='ml-6 flex gap-3 items-center'><FaReact className='text-sky-300 w-11 h-11' /><h1 className='font-semibold vm:text-3xl text-2xl'>web pages-sites</h1></div>
                        <section className='my-8 gap-5 mx-5 lg:grid-cols-6 md:grid-cols-4 vs:grid-cols-2 vsx:grid-cols-1 vs:grid'>
                            {[
                                ['Rimberio', '/rimberio'],
                            ].map(([text, path], i) => (
                                <Link key={i} to={path} className={`hover:font-bold text-white vs:mt-0 mt-4  bg-slate-100/20 shadow-inner font-bold no-underline transition hover:scale-105 cursor-pointer rounded-xl py-2 items-center flex flex-col`}>
                                    <p className="pt-1 vm:text-lg vs:text-xl font-semibold text-2xl text-center">{text}</p>
                                </Link>
                            ))}
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Principal;
