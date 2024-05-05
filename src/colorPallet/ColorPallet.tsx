import { useState, useEffect } from 'react';

function ColorPallet() {
    const [colors, setColors] = useState<string[]>([]);
    const [change, setChange] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [copy, setCopy] = useState(false);

    // useEffect(() => {
    //     const requestFetch = async () => {
    //         try {
    //             const query = await fetch('https://api-random-colors.onrender.com/colors');
    //             const data = await query.json();
    //             if (!query.ok) throw new Error('No se pudo realizar la solicitud');

    //             const extractedColors = data.map((obj: string) => {
    //                 //Quitar 'rgb('  ')'
    //                 let rgb_hex = Object.values(obj)[0].split('(')[1].split(')')[0].split(',');
    //                 //convertir a color hexadecimal
    //                 return rgb_hex.map((num: string) => parseInt(num).toString(16).padStart(2, '0')).join('');
    //             });
    //             setColors(extractedColors);
    //         }
    //         catch (e) {
    //             console.error(e);
    //         }
    //     }
    //     requestFetch();

    // }, [change])

    //COLORES ALEATORIOS (SIN LA API)
    useEffect(() => {
        const lista: string[] = [];
        const baseColor: string = Math.floor(Math.random() * 16).toString(16).toUpperCase();

        //Solo agregar 4 elementos a la lista
        while (lista.length < 5) {
            const random1: string = Math.floor(Math.random() * 8).toString();
            const random2: string = Math.floor(Math.random() * 8).toString();
            const random3: string = Math.floor(Math.random() * 8).toString();
            const random4: string = Math.floor(Math.random() * 8).toString();

            if (random1 !== random2) {
                const color = `#${baseColor}${baseColor}${random1}${random3}${random2}${random4}`;
                lista.push(color);
            }
        }
        setColors(lista);

    }, [change]);

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
        <main className={`relative flex items-center justify-center h-screen flex-col ${darkMode ? 'dark:bg-gray-950' : 'dark:bg-slate-300'}`}>
            <div style={{
                top: (copy ? '0px' : '-65px'),
                transition: 'top 0.3s ease-in-out'
            }} className={`absolute z-10 w-full font-semibold text-center text-lg py-4 ${darkMode ? 'dark:bg-white dark:text-amber-800' : 'dark:bg-amber-800 dark:text-slate-50'}`}>
                Color copiado!
            </div>
            <div className='absolute top-2 right-2 flex'>
                <label className={`p-1 pr-3 font-semibold ${darkMode ? 'text-slate-50' : 'text-amber-800'}`}>Select-Mode: </label>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
                    <div className={`group peer ring-0 bg-amber-900 rounded-full outline-none  duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-white peer-focus:outline-none after:rounded-full after:absolute ${darkMode ? 'after:bg-amber-900' : 'after:bg-white'}  after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95 peer-checked:after:rotate-0 ${darkMode ? 'peer-checked:bg-white' : 'peer-checked:bg-amber-800'}`}>
                    </div>
                </label>
            </div>
            <h1 className={`sm:text-5xl vs:text-center vs:mt-0 mt-8 w-11/12 text-left pb-5 font-bold text-4xl ${darkMode ? 'dark:text-slate-300 text-slate-800' : 'dark:text-amber-800 text-white'}`}>Color Palette</h1>
            <section className='w-full vs:flex  md:w-10/12 lg:w-4/6 max-w-screen-xl'>
                {colors.map((color, index) => (
                    <div key={index} style={{ backgroundColor: `${color}` }} onClick={() => copyToClipboard(color)} className='md:last:rounded-tr-3xl md:first:rounded-tl-3xl text-black font-semibold cursor-pointer w-full p-3 pt-5 pb-5 vs:pt-40 vs:pb-40 flex items-center justify-center'>
                        {color}
                    </div>
                ))}
            </section>
            <section className='w-full vs:flex md:w-10/12 lg:w-4/6 max-w-screen-xl'>
                <div style={{ backgroundColor: '#ffffff', color: '#000000' }} onClick={() => copyToClipboard('#FFFFFF')} className='border-l-2 border-slate-400 font-semibold cursor-pointer w-full p-3 pt-5 pb-5 flex items-center justify-center'>#FFFFFF</div>
                <div style={{ backgroundColor: '#000000', color: '#ffffff' }} onClick={() => copyToClipboard('#000000')} className='font-semibold cursor-pointer w-full p-3 pt-5 pb-5 flex items-center justify-center'>#000000</div>
            </section>
            <button onClick={() => setChange(!change)} className={
                `w-full md:w-10/12 lg:w-4/6 max-w-screen-xl justify-center font-bold block p-3 py-5 md:rounded-bl-3xl md:rounded-br-3xl text-xl  ${darkMode ? 'dark:text-slate-300 dark:bg-yellow-950 dark:hover:bg-yellow-900' : 'dark:text-slate-50 dark:bg-gray-950 dark:hover:bg-gray-900'} transition`}>Generator Pallet</button>
        </main>
    </>
    );
}

export default ColorPallet;
