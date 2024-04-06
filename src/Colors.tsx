import { useState, useEffect } from "react";

function Colors() {
    const [datos, setDatos]: any = useState(null);

    useEffect(() => {
        const request = async () => {
            try {
                const res = await fetch('https://perfect-tiara-yak.cyclic.app/colors');
                const data = await res.json();
                setDatos(data);
                console.log(data);
            }
            catch (e) {
                console.error('Error al consumir API', e);
            }
        }
        request();
    }, [])

    const RGBtoHex = (rgb: string) => {
        //Convierte, secciona la cadena rgb y pasa a un array de numeros con los colores rgb.
        const arrColors = rgb.slice(4, -1).split(',').map(Number);
        //Itera sobre los colores rgb y los vuelve hexadecimal.
        return `#${arrColors.map((c) => c.toString(16).padStart(2, '0')).join('')}`
    }

    return (
        <div>
            {datos && datos.map((color: { [key: string]: string }, i: number) => {
                const name = Object.keys(color)[0];
                const value = color[name];
                const hexaColor = RGBtoHex(value);

                return <div key={i}>
                    <span style={{ backgroundColor: hexaColor, padding: '10px' }}>
                    </span>
                    <p style={{ padding: '10px' }}>{hexaColor}</p>
                </div>;
            })}
        </div>
    )
}

export default Colors;