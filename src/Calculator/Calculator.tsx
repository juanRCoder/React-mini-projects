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
    return (
        <main className="vs:items-center vs:justify-center vs:flex-col vs:flex vs:bg-emerald-200 bg- font-InriaSans h-screen bg-emerald-900">
            <h1 className='vs:pt-1 vs:text-emerald-900 text-green-200 text-center py-6 text-5xl'>Calculator 5.0</h1>
            <section className='lg:w-4/12 vs:rounded-2xl vs:bg-emerald-900 p-4 pt-0'>
                <div className='vs:mb-2 mb-5 py-5'>
                    <p className='font-bold text-md pt-2 text-emerald-600 rounded-t-xl bg-emerald-200 text-lg h-10 text-right pr-4'>{valuePrev}</p>
                    <input type='text' defaultValue={number}
                        className='vs:text-4xl font-bold text-5xl text-right pb-2 pr-4 border-none w-full text-emerald-800 bg-emerald-200 rounded-b-xl'
                    />
                </div>
                <div className="gap-1 grid grid-cols-4">
                    <button className='hover:bg-emerald-700 bg-emerald-800' onClick={() => addValue('%')}>%</button>
                    <button className='hover:bg-emerald-700 bg-emerald-800' onClick={() => addValue('/')}>/</button>
                    <button className='hover:bg-emerald-700 bg-emerald-800' onClick={() => minusValue(number)}>CE</button>
                    <button className='hover:bg-emerald-700 bg-emerald-800' onClick={() => reset()}>C</button>

                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('7')}>7</button>
                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('8')}>8</button>
                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('9')}>9</button>
                    <button className='hover:bg-emerald-700 bg-emerald-800' onClick={() => addValue('*')}>X</button>

                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('4')}>4</button>
                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('5')}>5</button>
                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('6')}>6</button>
                    <button className='hover:bg-emerald-700 bg-emerald-800' onClick={() => addValue('-')}>-</button>

                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('1')}>1</button>
                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('2')}>2</button>
                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('3')}>3</button>
                    <button className='hover:bg-emerald-700 bg-emerald-800' onClick={() => addValue('+')}>+</button>

                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('-')}>+/-</button>
                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('0')}>0</button>
                    <button className='hover:bg-emerald-500 bg-emerald-600' onClick={() => addValue('.')}>.</button>
                    <button className='hover:bg-red-300 bg-red-400' onClick={() => operar(number)}>=</button>
                </div>
            </section>
        </main>
    )
}

export default Calculator