import { useState } from 'react';
import { GrPowerReset } from "react-icons/gr";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CustomSlider } from "./Slider";
import { ColorCheckbox } from './CheckBox';
import './PwsdGenerator.css';

interface selectGroup {
    upper: boolean,
    lower: boolean,
    numbers: boolean,
    specials: boolean
}
function PwsdGenerator() {
    const [length, setLength] = useState<number>(5);
    const [changePassword, setChangePassword] = useState<string>('');
    const [checked, isChecked] = useState<selectGroup>({
        upper: false,
        lower: true,
        numbers: false,
        specials: false
    });

    const increment = () => {
        if (length < 20) setLength(prev => prev + 1)
    }
    const decrement = () => {
        if (length > 1) setLength(prev => prev - 1)
    }

    const handleChecks = (value: boolean, type: string) => {
        isChecked(prev => ({ ...prev, [type]: value }));
    }

    const generatePassword = (len: number) => {
        const upperABC: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerabc: string = 'abcdefghijklmnopqrstuvwxyz';
        const numbers: string = '1234567890';
        const specials: string = "-[)#_(@'{;]+.^!,$%*?/)(*~";
        let password: string = '';

        for (let i = 1; i <= len; i++) {
            let randomChar: string = '';
            if (checked.upper) {
                const randomIndexABC: number = Math.floor(Math.random() * upperABC.length);
                randomChar += upperABC[randomIndexABC];
            }
            if (checked.lower) {
                const randomIndexabc: number = Math.floor(Math.random() * lowerabc.length);
                randomChar += lowerabc[randomIndexabc];
            }
            if (checked.numbers) {
                const randomNumbers: number = Math.floor(Math.random() * numbers.length);
                randomChar += numbers[randomNumbers];
            }
            if (checked.specials) {
                const randomSpecials: number = Math.floor(Math.random() * specials.length);
                randomChar += specials[randomSpecials];
            }
            // Agregar los caracteres random del randomChar al password
            if (randomChar !== '') {
                const randomIndex: number = Math.floor(Math.random() * randomChar.length);
                password += randomChar[randomIndex];
            }
        }
        return password;
    }

    const handleChangePassword = () => {
        const npassword: string = generatePassword(length);
        setChangePassword(npassword);
    }


    return (
        <section className="vm:justify-center vm:items-center vm:flex h-screen font-InriaSans">
            <div className='max-w-3xl lg:w-1/2 md:w-9/12 vm:rounded-xl vm:w-11/12 vm:h-auto bg-slate-200/90 w-full h-full'>
                <h1 className='h2 vm:py-6 text-center m-0 text-4xl py-3 '>Pswd Generator</h1>
                <div className='vm:mx-5 bg-sky-500 p-4 rounded-lg mx-3'>
                    <div className='px-3 py-1 bg-cyan-700 rounded-lg shadow-inner text-cyan-100'>
                        <span className='vm:pl-2 vm:w-0 text-white text-xs text-center w-full block py-2'>GENERATED</span>
                        <div className='vm:pl-2 vm:flex-row flex flex-col items-center'>
                            <p className='vm:text-3xl vm:text-left mb-3 w-full text-center py-2 text-2xl'>
                                {generatePassword(length) || changePassword}
                            </p>
                            <div className='vm:mr-10 mb-3'>
                                <div className='cursor-pointer select-none' onClick={handleChangePassword}>
                                    <GrPowerReset className='w-14 h-10' />
                                    <p className='mt-_8 text-center'>Change</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='vm:mx-5 mx-3 mt-6'>
                    <p className='p text-2xl text-cyan-700 font-bold'>Length:  <b className='text-cyan-600'>{length}</b>  characters</p>
                    <div className='grid grid-cols-2'>
                        <CustomSlider length={length} onChange={setLength} />
                        <button onClick={decrement} className='hover:bg-cyan-800 transition rounded-md cursor-pointer border-none bg-cyan-700 py-3 mr-2'>
                            <FaMinus className='h-5 w-5' />
                        </button>
                        <button onClick={increment} className='hover:bg-cyan-800 transition rounded-md cursor-pointer border-none bg-cyan-700 py-3 ml-2'>
                            <FaPlus className='h-5 w-5' />
                        </button>
                    </div>
                </div>
                <div className='vm:mx-5  mx-3 mt-6'>
                    <p className='text-2xl text-cyan-700 font-bold'>Characters Used:</p>
                    <div className='vm:my-6 flex flex-wrap gap-3 mt-3'>
                        <ColorCheckbox islabel='ABC' check={checked.upper} onCheck={(value) => handleChecks(value, 'upper')} />
                        <ColorCheckbox islabel='abc' check={checked.lower} onCheck={(value) => handleChecks(value, 'lower')} />
                        <ColorCheckbox islabel='123' check={checked.numbers} onCheck={(value) => handleChecks(value, 'numbers')} />
                        <ColorCheckbox islabel='#$&' check={checked.specials} onCheck={(value) => handleChecks(value, 'specials')} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PwsdGenerator