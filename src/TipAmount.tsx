import { useState } from "react";
import iconDollar from './tipAmount/images/icon-dollar.svg';
import iconPerson from './tipAmount/images/icon-person.svg';

function TipAmount() {
    const [bill, setBill] = useState<string>('');
    const [people, setPeople] = useState<string>('');
    const [custom, setCustom] = useState<string>('');
    const [statusPeople, setStatusPeople] = useState<boolean>(false);

    const [totalForPerson, setTotalForPerson] = useState<number>(0);
    const [tipAmountForPerson, setTipAmountForPerson] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'bill') setBill(value);
        else if (name === 'people') value === '' ? setPeople('0') : setPeople(value);
        else if (name === 'custom') {
            value === '' ? Calculator(0) : Calculator(parseInt(value));
            setCustom(value);
        }
    }

    const Calculator = (tip: number) => {
        if (people !== '0' && people !== '') {
            setStatusPeople(false);
            const tipTotal: number = parseInt(bill) * ((tip) / 100);

            setTotalForPerson(Number(((parseInt(bill) + tipTotal) / parseInt(people)).toFixed(2)));
            setTipAmountForPerson(Number((tipTotal / parseInt(people)).toFixed(2)));
        } else {
            setStatusPeople(true);
        }
    }

    const resetInputs = () => {
        setBill('');
        setPeople('');
        setCustom('');
        setStatusPeople(false);
        setTotalForPerson(0);
        setTipAmountForPerson(0);
    }

    return (
        <>
            <main className="bg-cyan-100 flex flex-col justify-center">
                <h1 className="tracking-wider font-semibold text-sky-900 mt-3 m-auto mb-10 break-words font-spaceMono text-3xl w-20">SPLITTER</h1>
                <div className="bg-white p-4 outline outline-orange-50">
                    <section className="font-spaceMono">
                        {/* BILL */}
                        <div>
                            <label htmlFor="bill" className="text-xl font-semibold text-gray-500 block">Bill</label>
                            <div className="rounded-md bg-slate-200 mt-2 p-3 justify-between flex">
                                <img src={iconDollar}
                                    className="w-3 h-6 m-auto"
                                />
                                <input type="text" id="bill" name="bill" placeholder="0"
                                    className="placeholder:text-gray-400 w-full text-3xl font-semibold outline-none text-sky-900 text-right bg-transparent"
                                    value={bill}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* SELECT TIP */}
                        <div className="mt-4">
                            <label htmlFor="custom" className="text-xl font-semibold text-gray-500 block">Select Tip %</label>
                            <div className="mt-2 gap-4 grid grid-cols-2">
                                {[
                                    [5],
                                    [10],
                                    [15],
                                    [25],
                                    [50],
                                ].map(([number], i) => (
                                    <button key={i} className="transition font-bold hover:text-cyan-900 hover:bg-cyan-500 text-xl rounded-md bg-cyan-900 py-2"
                                        onClick={() => Calculator(number)}
                                    >
                                        {number}%
                                    </button>
                                ))}
                                <input type="number" name="custom" placeholder="Custom"
                                    className="text-sky-950 rounded-md focus:outline focus:outline-sky-600 text-xl font-bold bg-slate-200 text-right pr-2 placeholder:text-gray-500"
                                    value={custom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="people" className="text-xl font-semibold text-gray-500 block">Number of People</label>

                            {statusPeople &&
                                <p className="text-right font-semibold text-red-400">Can't the Zero</p>
                            }

                            <div className="rounded-md bg-slate-200 mt-2 p-3 justify-between flex">
                                <img src={iconPerson}
                                    className="w-4 h-4 m-auto"
                                />
                                <input type="text" id="people" name="people" placeholder="0"
                                    className="placeholder:text-gray-400 w-full text-3xl font-semibold outline-none text-sky-900 text-right bg-transparent"
                                    value={people}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="font-spaceMono p-4 rounded-md mt-8 bg-cyan-900">
                        {[
                            ['Tip Amount', '/ person', tipAmountForPerson],
                            ['Total', '/ person', totalForPerson],
                        ].map(([text, text2, amount], i) => (
                            <div key={i} className="my-3 flex">
                                <div className="w-2/4">
                                    <p className="font-bold">{text}</p>
                                    <p className="text-gray-400">{text2}</p>
                                </div>
                                <p className="font-bold text-3xl text-cyan-400 w-2/4 flex items-center justify-end">
                                    <svg className="scale-125 text-cyan-400 mr-2" xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path fill="#22d3ee" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" /></svg>
                                    {amount}
                                </p>
                            </div>
                        ))}
                        <button
                            onClick={resetInputs}
                            className="hover:bg-cyan-400 font-bold rounded-md text-2xl mt-4 py-1 w-full bg-cyan-500 text-sky-900"
                        >Reset</button>
                    </section>
                </div>
            </main>
        </>
    )
}

export default TipAmount;