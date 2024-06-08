import lg1 from '../../assets/imgsRimberio/lg1.webp';
import op1 from '../../assets/imgsRimberio/option1.webp';
import op2 from '../../assets/imgsRimberio/option2.webp';
import op3 from '../../assets/imgsRimberio/option3.webp';
import op4 from '../../assets/imgsRimberio/option4.webp';
import op5 from '../../assets/imgsRimberio/option5.webp';
import op6 from '../../assets/imgsRimberio/option6.webp';
import { FaCircleExclamation, FaTiktok, FaInstagram, FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import './Rimberio.scss';

function Rimberio() {
    const [toggle, setToogle] = useState(false);

    const handleClick = () => {
        setToogle(!toggle);
    }

    return (
        <>
            <section className=' w-full flex flex-col backdrop-blur-md fixed top-0 left-0 z-20 justify-between'>
                <div className='flex justify-between sticky top-0'>
                    <div className='pl-5 w-1/2'>
                        <img src={lg1} className="h-16" alt="logo" title='logo' />
                    </div>
                    <nav className='w-1/2 hidden sm:flex sm:items-center sm:justify-end'>
                        {[
                            ['Home', '#home'],
                            ['Product', '#product'],
                            ['to Order', '#toOrder'],
                        ].map(([title, url], index) => (
                            <a key={index} href={url} className="font-medium font-dosis text-md mr-7 text-white hover:text-cream transition">{title}</a>
                        ))}
                    </nav>
                    <GiHamburgerMenu className='h-full absolute right-0 w-8 mr-4 text-cream block sm:hidden cursor-pointer' onClick={() => handleClick()} />
                </div>
                <div className='h-screen flex-col w-full pl-8 text-2xl z-20' style={{ display: toggle ? 'flex' : 'none' }}>
                    {[
                        ['Home', '#home'],
                        ['Product', '#product'],
                        ['to Order', '#toOrder'],
                    ].map(([title, url], i) => (
                        <a key={i} href={url} className="font-medium font-dosis text-md text-white hover:text-cream transition pt-3 pb-3">{title}</a>
                    ))}
                </div>
            </section>
            <div className="img flex items-center justify-center pt-28 pb-28 min-w-470 md:block md:pl-8 lg:pl-16 lg:pt-48 lg:pb-48">
                <div className='relative z-10 m-auto w-11/12 flex items-left flex-col min-w-470 sm:items-start lg:w-8/12 md:text-left md:m-0'>
                    <p className='text-white select-none	text-5xl font-bold font-dosis text-center leading-none w-full min-w-470 sm:text-left sm:text-7xl md:text-8xl'>
                        El placer de lo dulce hecho realidad!
                    </p>
                    <button className='bg-brow1 text-white hover:bg-brow2 hover:scale-110 transition font-semibold text-xl rounded-md cursor-pointer h-auto mt-10 pt-1 pb-1 w-44 m-auto sm:m-0 sm:mt-10 md:text-2xl md:pt-2 md:pb-2'>
                        Pide ya!
                    </button>
                </div>
                <span className='overlay'></span>
            </div>
            <section className=' bg-brow2 content grid grid-cols-1 pt-10 pb-10 min-w-470 sm:grid-cols-2 md:grid-cols-3 md:pt-20 md:pb-20 lg:pl-8 lg:pr-8'>
                {[
                    ['about us', <FaCircleExclamation className='w-14 h-14 m-auto text-center text-cream' />],
                    ['cakes', <FaBirthdayCake className='w-14 h-14 m-auto text-center text-cream' />],
                    ['events', <MdEventNote className='w-14 h-14 m-auto text-center text-cream' />],
                ].map(([title, icon]) => (
                    <div className='pl-4 pr-4 pb-5 pt-5 min-w-470 md:pl-8 md:pr-8'>
                        {icon}
                        <h1 className='text-4xl font-semibold font-dosis m-auto text-center pt-3 pb-3'>{title}</h1>
                        <p className='text-cream'>
                            lorem lore meorlasod m doasdoas dmqwe maisdm qiwem a dqlwe masidm qwiem asdloqwm iasmd wmlorem lore meorlasod m doasdoas ore meorlasod m doasdoas dmqwe mai
                        </p>
                    </div>
                ))}
            </section>
            <section className='content bg-cream font-dosis m-auto pb-12'>
                <h1 className='text-center font-bold text-4xl text-brow2 pt-16 pb-2'>
                    Main Products
                </h1>
                <p className='text-brow1 text-xl font-medium pb-8 pl-4 pr-4 text-justify min-w-470 md:text-center md:pl-8 md:pr-8'>
                    lorem lore meorlasod m em lore meorlasem lore meorlas doasdoas dmqwe maisdm qiwem a dqlwe masidm
                </p>
                <div className='grid grid-cols-1 gap-8 pl-4 pr-4 pb-12 min-w-470 sm:grid-cols-2 md:grid-cols-3 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16'>
                    {[
                        [op1, 'product1', '#product1'],
                        [op2, 'product2', '#product2'],
                        [op3, 'product3', '#product3'],
                        [op4, 'product4', '#product4'],
                        [op5, 'product5', '#product5'],
                        [op6, 'product6', '#product6'],
                    ].map(([img, name, link], i) => (
                        <div key={i} className='h-64 flex items-center justify-center border-4 border-brow1 overflow-hidden relative group'>
                            <img src={img} className='h-full w-full group-hover:scale-125 transition duration-300 cursor-pointer border-none' alt='img' title='img' />
                            <span className='absolute bg-black h-full w-full flex items-center justify-center opacity-0 transition group-hover:opacity-100'>
                                <a href={link} className='p-4 pl-6 pr-6 text-3xl'>{name}</a>
                            </span>
                        </div>

                    ))}
                </div>
                <span className='block bg-brow2 m-auto w-56 text-center pt-2 pb-2 hover:scale-110 cursor-pointer shadow-brow1 shadow-lg font-semibold transition text-2xl rounded'>See More</span>
            </section>
            <section className='content flex flex-col min-w-470 md:flex-row'>
                <div className='bg-brow1 min-w-470 md:w-10/12 lg:pl-5 lg:pr-5'>
                    <h1 className='text-center mt-12 m-auto w-11/12 font-extrabold text-3xl text-cream lg:text-5xl'>Want to order?</h1>
                    <p className='mt-4 m-auto pl-4 pr-4 text-md text-left lg:text-lg'>Fill out the form below and enjoy the delights of our desserts, for more information.</p>
                    <form className='mt-4 m-auto pl-4 pr-4'>
                        {[
                            ['All Name', 'text'],
                            ['Gmail', 'gmail'],
                            ['Number Phone', 'number'],
                        ].map(([label, type], i) => (
                            <div key={i} className='flex flex-col mb-3'>
                                <label className='pb-2 text-xl'>{label}:</label>
                                <input type={type} className='border-none bg-cream h-10 rounded-sm outline-none text-brow1 font-dosis pl-2 text-xl' required />
                            </div>
                        ))}
                        <input type='submit' className='border-none bg-brow2 w-full m-auto mt-8 mb-10 pt-2 pb-2 text-xl cursor-pointer hover:scale-105 transition' />
                    </form>
                </div>
                <div className='w-full h-96 min-w-470 md:h-auto'>
                    <div className='img8 h-full w-full border-non' />
                </div>
            </section>
            <footer className='content bg-brow2 relative pt-12 pb-14 flex items-center flex-col min-w-470 sm:grid sm:grid-cols-2 md:grid-cols-3 md:pt-8 lg:pl-10 lg-pr-10'>
                <div className='pl-4 pr-4 mb-7 sm:mb-0 md:pl-8'>
                    <h1 className='font-bold text-2xl pb-2 md:text-lg lg:text-2xl'>Follow us on social media:</h1>
                    {[
                        ['@rimberioOficial', <FaFacebook className='h-12 w-12 p-2' />],
                        ['@rimberio', <FaTiktok className='h-12 w-12 p-2' />],
                        ['@rimberioCakes', <FaInstagram className='h-12 w-12 p-2' />],
                    ].map(([text, icon], i) => (
                        <div key={i} className='flex'>
                            {icon}
                            <p className='grid place-items-center p-4 pl-1'>{text}</p>
                        </div>
                    ))}
                </div>
                <div className='pl-4 pr-4'>
                    <h1 className='font-bold text-2xl pb-2 md:text-lg lg:text-2xl'>Order, contact us directly:</h1>
                    {[
                        ['(+51) 123 456 789', <FaPhone className='h-12 w-12 p-2' />],
                        ['rimberio@gmail.com', <CgMail className='h-12 w-12 p-2' />],
                        ['1234-567', <PiPhoneDisconnectFill className='h-12 w-12 p-2' />],
                    ].map(([text, icon], i: number) => (
                        <div key={i} className='flex'>
                            {icon}
                            <p className='grid place-items-center p-4 pl-1'>{text}</p>
                        </div>
                    ))}
                </div>
                <div className=' w-60 h-60  lg:ml-24'>
                    <div className='img9 w-full h-full'></div>
                </div>
                <span className='absolute bottom-2 w-full text-center'>Diseñado & Desarrollado por Juan Ramirez &copy; 2024</span>
            </footer>
        </>
    )
}

export default Rimberio;