import { useState } from 'react';
import './Calculator.scss';

function Calculator() {
    const [number, setNumber] = useState<string>('');
    const [valuePrev, setValuePrev] = useState<string>('');

    const addValue = (n: string) => {
        setNumber(prev => prev += n);
    }
    const minusValue = (n: string) => {
        const newValue: string = n.toString().slice(0, -1);
        setNumber(newValue);
    }
    const operar = (operation: string) => {
        const resto = operation.split('').filter(x => x == '%').join('');
        if (resto) {
            const valor = operation.split(/\+|-|\*|\//)[0];
            operation = operation.replace(resto, `*${valor}/100`);
        }
        console.log(operation);
        const result = eval(operation);
        setNumber(result);
        setValuePrev(`${operation}=`);
    }

    const reset = () => {
        setNumber('');
        setValuePrev('');
    }

    const values = ['7','8','9','*','4','5','6','-','1','2','3','+','-+','0','.']
    return (
        <main className="bg-sky-700 vs:items-center vs:justify-center vs:flex-col vs:flex bg- font-InriaSans h-screen ">
            <h1 className='h1 vs:pt-1 text-green-200 text-center py-6 text-5xl'>Calculator 5.0</h1>
            <section className='max-w-96 lg:w-4/12 vs:rounded-2xl vs:bg-sky-900/75 p-4 pt-0'>
                <div className='vs:mb-2 mb-5 py-5'>
                    <p className='font-bold text-md pt-2 text-sky-600 rounded-t-xl bg-sky-200 text-lg h-10 text-right pr-4'>{valuePrev}</p>
                    <input type='text' defaultValue={number}
                        className='vs:text-4xl font-bold text-5xl text-right pb-2 pr-4 border-none w-full text-sky-900 bg-sky-200 rounded-b-xl'
                    />
                </div>
                <div className="gap-1 grid grid-cols-4">
                    <button className='hover:bg-cyan-700 vs:bg-cyan-950 bg-cyan-950' onClick={() => addValue('%')}>%</button>
                    <button className='hover:bg-cyan-700 vs:bg-cyan-950 bg-cyan-950' onClick={() => addValue('/')}>/</button>
                    <button className='hover:bg-cyan-700 vs:bg-cyan-950 bg-cyan-950' onClick={() => minusValue(number)}>CE</button>
                    <button className='hover:bg-cyan-700 vs:bg-cyan-950 bg-cyan-950' onClick={() => reset()}>C</button>

                {values.map((v, i) => {
                    return <button key={i} className={`${v == '*' || v == '-' || v == '+' 
                            ? "hover:bg-cyan-700 vs:bg-cyan-950 bg-cyan-950"
                            : "hover:bg-cyan-500 vs:bg-cyan-600/75 bg-cyan-600/50"}`} 
                            onClick={() => addValue(v == '-+' ? '+/-': v)}>
                            {v == '*' ? 'X': (v == '-+' ? '+/-' : v)}
                        </button>
                })}
                <button className='hover:bg-red-600 vs:bg-red-500 bg-red-500' onClick={() => operar(number)}>=</button>
                </div>
            </section>
        </main>
    )
}

export default Calculator