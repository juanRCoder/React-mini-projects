import { useState } from "react";

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
        if (people !== '0') {
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
            <div>
                <div className="p-2 outline outline-amber-300 inline-block">
                    <div>
                        <label htmlFor="bill">Bill</label>
                        <input type="number" id="bill" name="bill" placeholder="0"
                            value={bill}
                            className="mb-3 pl-3 ml-3"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {[
                            [5],
                            [10],
                            [15],
                            [25],
                            [50],
                        ].map(([number], i) => (
                            <button key={i} className="hover:bg-violet-600 m-2 p-1 outline outline-violet-600"
                                onClick={() => Calculator(number)}
                            >
                                {number}%
                            </button>
                        ))}
                        <input type="text" name="custom" placeholder="Custom"
                            className="text-right m-2 p-1 outline outline-violet-600"
                            value={custom}
                            onChange={handleChange}
                        />
                    </div>
                    {statusPeople &&
                        <p className="font-semibold text-red-600">Can't the Zero</p>
                    }
                    <label htmlFor="people">Number of People</label>
                    <input type="number" id="people" name="people" placeholder="0"
                        className="pl-3 ml-3"
                        value={people}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3 p-2 outline outline-green-400">
                    <p><b>Tip Amount / person</b></p>
                    <p>$ {tipAmountForPerson}</p>
                    <p><b>Tip Amount / person</b></p>
                    <p>$ {totalForPerson}</p>
                    <button
                        onClick={resetInputs}
                        className="w-full block hover:bg-orange-500 p-3 outline outline-orange-500 mt-3"
                    >Reset</button>
                </div>
            </div>
        </>
    )
}

export default TipAmount;