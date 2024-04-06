import { useState, useEffect } from "react";

function Colors() {
    const [datos, setDatos]: any = useState(null);
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        const request = async () => {
            try {
                const res = await fetch('https://perfect-tiara-yak.cyclic.app/colors');
                const data = await res.json();
                setDatos(data);
            }
            catch (e) {
                console.error('Error al consumir API', e);
            }
        }
        request();
    }, [changeColor])

    const RGBtoHex = (rgb: string) => {
        const arrColors = rgb.slice(4, -1).split(',').map(Number);
        return `#${arrColors.map((c) => c.toString(16).padStart(2, '0')).join('')}`
    }

    const copyHexaColor = async (hexaColor: string) => {
        try {
            // Copia el color hexadecimal al portapapeles utilizando API clipboard
            await navigator.clipboard.writeText(hexaColor);
            alert(`Color copiado: ${hexaColor}`);
            console.log(`Color copiado: ${hexaColor}`);
        } catch (error) {
            console.error('Error clipboard:', error);
        }
    }

    return (
        <>
            <section
                className="w-screen"
            >
                <h1>Random Colors</h1>
                {datos && datos.map((color: { [key: string]: string }, i: number) => {
                    const name = Object.keys(color)[0];
                    const value = color[name];
                    const hexaColor = RGBtoHex(value);

                    return (
                        <div key={i}
                            className="p-8"
                            style={{ backgroundColor: hexaColor }}
                        >
                            <p
                                className="cursor-pointer"
                                onClick={() => copyHexaColor(hexaColor)}
                            >
                                {hexaColor}
                            </p>
                        </div>)
                })}
            </section>
            <div className="flex outline mt-5 justify-center">
                <button
                    className="bg-gray-900 text-slate-300 p-2 pl-3 pr-3 rounded"
                    onClick={() => setChangeColor(!changeColor)}
                >
                    Update Colors
                </button>
            </div>

        </>
    )
}

export default Colors;