import iconDollar from './tipAmount/images/icon-dollar.svg';
import iconHuman from './tipAmount/images/icon-person.svg';
import { useState } from 'react';

function TipAmount() {
    const [tipp, setTipp] = useState(null);

    const handleTip = (tip: any) => {
        setTipp(tip)
    }

    return (
        <main className='justify-center items-center flex flex-col bg-cyan-100 h-screen w-screen'>
            <h1 className='text-2xl text-center tracking-tightestt font-bold font-spaceMono text-slate-800 mb-7 w-20 break-words'>
                SPLITTER
            </h1>
            <section className="bg-white w-full">
                <section className=''>
                    <span className='text-md block pb-1 pt-4 pl-4 text-gray-400	font-semibold font-spaceMono'>
                        Bill
                    </span>
                    <div className='items-center rounded-lg pl-3 p-2 mr-3 ml-3 flex outline bg-gray-200'>
                        <img src={iconDollar}
                            className=''
                            alt="dollar"
                            title='dollar'
                        />
                        <input
                            className='text-2xl font-bold font-spaceMono outline-none text-cyan-800 border-none w-full text-right  bg-transparent'
                            type="number"
                            id=""
                        />
                    </div>
                </section>
                <section className=''>
                    <span className='text-md block pb-1 pt-4 pl-4 text-gray-400	font-semibold font-spaceMono'>
                        Number of People
                    </span>
                    <div className='items-center rounded-lg pl-3 p-2 mr-3 ml-3 flex outline bg-gray-200'>
                        <img src={iconHuman}
                            className=''
                            alt="dollar"
                            title='dollar'
                        />
                        <input
                            className='text-2xl font-bold font-spaceMono outline-none text-cyan-800 border-none w-full text-right  bg-transparent'
                            type="number"
                            id=""
                        />
                    </div>
                </section>
                <section className=''>
                    <span className='text-md block pb-1 pt-4 pl-4 text-gray-400	font-semibold font-spaceMono'>
                        Select Tip %
                    </span>
                    <div className='mt-3 gap-4 ml-3 mr-3 grid grid-cols-2'>
                        {[
                            [5],
                            [10],
                            [15],
                            [25],
                            [50],
                        ].map(([tip], i) => (
                            <span key={i}
                                className={`${tipp === tip ? 'bg-cyan-600' : ''} font-semibold text-xl rounded-md p-2 text-center bg-cyan-900 hover:bg-cyan-600 transition cursor-pointer font-spaceMono`}
                                onClick={() => handleTip(tip)}
                            >
                                {tip}%
                            </span>
                        ))}
                    </div>
                </section>
                <section className='outline outline-slate-950'>
                    <div className='flex'>
                        <div>
                            <p>Tip Amount</p>
                            <p>/ person</p>
                        </div>
                        <p>
                            <img src={iconDollar}
                                alt='dollar'
                                title='dollar'
                            />
                        </p>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default TipAmount