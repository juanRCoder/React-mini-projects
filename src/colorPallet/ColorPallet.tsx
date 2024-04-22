import { useState, useEffect } from 'react';

function ColorPallet() {
    const [colors, setColors] = useState<string[]>([]);
    const [change, setChange] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [copy, setCopy] = useState(false);

    useEffect(() => {
        const requestFetch = async () => {
            try {
                const query = await fetch('https://api-random-colors.onrender.com/colors');
                const data = await query.json();
                if (!query.ok) throw new Error('No se pudo realizar la solicitud');

                const extractedColors = data.map((obj: string) => {
                    //Quitar 'rgb('  ')'
                    let rgb_hex = Object.values(obj)[0].split('(')[1].split(')')[0].split(',');
                    //convertir a color hexadecimal
                    return rgb_hex.map((num: string) => parseInt(num).toString(16).padStart(2, '0')).join('');
                });
                setColors(extractedColors);
            }
            catch (e) {
                console.error(e);
            }
        }
        requestFetch();

    }, [change])

    //COLORES ALEATORIOS (SIN LA API)
    // useEffect(() => {
    //     let lista: string[] = [];
    //     const baseColor: string = Math.floor(Math.random() * 16).toString(16).toUpperCase();

    //     //Solo agregar 4 elementos a la lista
    //     while (lista.length < 4) {
    //         const random1: string = Math.floor(Math.random() * 8).toString();
    //         const random2: string = Math.floor(Math.random() * 8).toString();
    //         const random3: string = Math.floor(Math.random() * 8).toString();
    //         const random4: string = Math.floor(Math.random() * 8).toString();

    //         if (random1 !== random2) {
    //             const color = `#${baseColor}${baseColor}${random1}${random3}${random2}${random4}`;
    //             lista.push(color);
    //         }
    //     }
    //     setColors(lista);

    // }, [change]);

    const copyToClipboard = async (color: string) => {
        try {
            await navigator.clipboard.writeText(color);
            setCopy(true);
            setTimeout(() => {
                setCopy(false);
            }, 1000);
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
        }
    };

    return (
        <>
            <main className={`relative flex items-center justify-center h-screen flex-col ${darkMode ? 'dark:bg-slate-900' : 'dark:bg-white'}`}>
                <div style={{
                    top: (copy ? '0px' : '-65px'),
                    transition: 'top 0.3s ease-in-out'
                }} className={`absolute z-10 w-full font-semibold text-center text-lg py-4 ${darkMode ? 'dark:bg-white dark:text-slate-800' : 'dark:bg-slate-800 dark:text-slate-50'}`}>
                    Color copiado!
                </div>
                <div className='absolute top-2 right-2 flex'>
                    <label className={`p-1 pr-3 font-semibold ${darkMode ? 'text-slate-50' : 'text-slate-800'}`}>Select-Mode: </label>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
                        <div className={`group peer ring-0 bg-slate-950 rounded-full outline-none  duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-white peer-focus:outline-none after:rounded-full after:absolute ${darkMode ? 'after:bg-slate-950' : 'after:bg-white'}  after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95 peer-checked:after:rotate-0 ${darkMode ? 'peer-checked:bg-white' : 'peer-checked:bg-slate-800'}`}>
                        </div>
                    </label>
                </div>
                <h1 className={`sm:text-5xl vs:text-center vs:mt-0 mt-8 w-11/12 text-left pb-5 font-bold text-4xl ${darkMode ? 'dark:text-slate-300 text-slate-800' : 'dark:text-gray-900 text-white'}`}>Color Palette</h1>
                <section className='vs:flex w-11/12 md:w-10/12 lg:w-4/6 max-w-screen-xl'>
                    {colors.map((color, index) => (
                        <div key={index} style={{ backgroundColor: `#${color}` }} onClick={() => copyToClipboard(color)} className='text-black font-semibold cursor-pointer w-full p-3 pt-6 pb-6 vs:pt-36 vs:pb-36 flex items-center justify-center'>#{color}</div>
                    ))}
                </section>
                <section className='vs:flex w-11/12 md:w-10/12 lg:w-4/6 max-w-screen-xl'>
                    <div style={{ backgroundColor: '#ffffff', color: '#000000' }} onClick={() => copyToClipboard('#FFFFFF')} className='font-semibold cursor-pointer w-full p-3 pt-6 pb-6 flex items-center justify-center'>#FFFFFF</div>
                    <div style={{ backgroundColor: '#000000', color: '#ffffff' }} onClick={() => copyToClipboard('#000000')} className='font-semibold cursor-pointer w-full p-3 pt-6 pb-6 flex items-center justify-center'>#000000</div>
                </section>
                <button onClick={() => setChange(!change)} className={`w-full  vs:flex  md:w-10/12 lg:w-4/6 max-w-screen-xl justify-center font-bold block p-3 py-5 md:rounded-bl-md md:rounded-br-md text-xl  ${darkMode ? 'dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-slate-400' : 'dark:text-slate-50 dark:bg-gray-950 dark:hover:bg-slate-900'} transition`}>Generator Pallet</button>
            </main>
        </>
    );
}

export default ColorPallet;
