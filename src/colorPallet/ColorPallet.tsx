import { useState, useEffect } from 'react';

function ColorPallet() {
    const [colors, setColors] = useState<string[]>([]);
    const [change, setChange] = useState<boolean>(false);
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
        <main className={`px-2 font-InriaSans relative flex items-center justify-center h-screen flex-col`}>
            <div style={{
                top: (copy ? '0px' : '-65px'),
                transition: 'top 0.3s ease-in-out'
            }} className="bg-black/50 absolute z-10 w-full font-semibold text-center text-lg py-2">
                Color copiado!
            </div>
            <h1 className="lg:text-6xl sm:text-5xl vs:text-center vs:mt-0 text-white mt-12 w-11/12 pb-2 text-center tracking-tighter text-5xl">Color Palette</h1>
            <section className='vs:gap-1 w-full vs:flex  md:w-10/12 lg:w-4/6 max-w-screen-lg'>
                {colors.map((color, index) => (
                    <div key={index} style={{ backgroundColor: `${color}99` }} onClick={() => copyToClipboard(color)} className='transition lg:hover:scale-95 vs:last:rounded-tr-3xl vs:first:rounded-tl-3xl vs:first:rounded-none first:rounded-tr-3xl first:rounded-tl-3xl md:last:rounded-tr-3xl md:first:rounded-tl-3xl text-center my-1 font-semibold cursor-pointer w-full p-3 pt-4 pb-4 lg:pt-72 vs:pt-60'>
                        {color}
                    </div>
                ))}
            </section>
            <section className='vs:gap-2 w-full vs:flex md:w-10/12 lg:w-4/6 max-w-screen-lg'>
                <div style={{ backgroundColor: '#ffffff99', color: '#00000099' }} onClick={() => copyToClipboard('#FFFFFF')} className='transition lg:hover:scale-95 vs:rounded-bl-3xl font-semibold cursor-pointer w-full p-3 pt-5 pb-5 lg:m-auto vs:ml-1 my-1 text-center'>#FFFFFF</div>
                <div style={{ backgroundColor: '#00000099', color: '#ffffff99' }} onClick={() => copyToClipboard('#000000')} className='transition lg:hover:scale-95 vs:rounded-br-3xl vs:rounded-none rounded-bl-3xl rounded-br-3xl font-semibold cursor-pointer w-full p-3 pt-5 pb-5 text-center'>#000000</div>
            </section>
            <button onClick={() => setChange(!change)} className="vs:h-auto border-none h-auto py-4 mt-5 rounded-xl w-full md:w-10/12 lg:w-4/6 bg-black hover:bg-stone-950 max-w-screen-lg justify-center font-InriaSans font-bold block cursor-pointer text-2xl">Generator Pallet</button>
        </main>
    </>
    );
}

export default ColorPallet;
