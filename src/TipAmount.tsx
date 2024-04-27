import { useState } from "react";

function TipAmount() {
    const [bill, setBill] = useState<number>(0);
    const [people, setPeople] = useState<number>(0);
    const [statusPeople, setStatusPeople] = useState<boolean>(false);

    const [totalForPerson, setTotalForPerson] = useState<number>(0);
    const [tipAmountForPerson, setTipAmountForPerson] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'bill') setBill(parseInt(value));
        else if (name === 'people') value === '' ? setPeople(0) : setPeople(parseInt(value));
        else if (name === 'custom') value === '' ? Calculator(0) : Calculator(parseInt(value));
    }

    const Calculator = (tip: number) => {
        if (people !== 0) {
            setStatusPeople(false);
            const tipTotal: number = bill * ((tip) / 100);

            setTotalForPerson(Number(((bill + tipTotal) / people).toFixed(2)));
            setTipAmountForPerson(Number((tipTotal / people).toFixed(2)));
        } else {
            setStatusPeople(true);
        }
    }

    return (
        <>
            <div>
                <div className="p-2 outline outline-amber-300 inline-block">
                    <div>
                        <label htmlFor="bill">Bill</label>
                        <input type="number" id="bill" name="bill" placeholder="0"
                            className="mb-3 pl-3 ml-3"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {[
                            [10],
                            [15],
                            [20],
                            [25],
                        ].map(([number], i) => (
                            <button key={i} className="hover:bg-violet-600 m-2 p-1 outline outline-violet-600"
                                onClick={() => Calculator(number)}
                            >
                                {number}%
                            </button>
                        ))}
                        <input type="number" name="custom" placeholder="Custom"
                            className="text-right m-2 p-1 outline outline-violet-600"
                            onChange={handleChange}
                        />
                    </div>
                    {statusPeople &&
                        <p className="font-semibold text-red-600">Can't the Zero</p>
                    }
                    <label htmlFor="people">Number of People</label>
                    <input type="number" id="people" name="people" placeholder="0"
                        className="pl-3 ml-3"
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3 p-2 outline outline-green-400">
                    <p><b>Tip Amount / person</b></p>
                    <p>$ {tipAmountForPerson}</p>
                    <p><b>Tip Amount / person</b></p>
                    <p>$ {totalForPerson}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full block hover:bg-orange-500 p-3 outline outline-orange-500 mt-3"
                    >Reset</button>
                </div>
            </div>
        </>
    )
}

export default TipAmount;