import { useState } from "react";
import Output from "./Output";

function Input() {

    const [money, setMoney] = useState("");
    const [rate, setRate] = useState("");
    const [goal, setGoal] = useState("");
    const [outputData, setOutputData] = useState([]);


    const handleClick = () => {
        let year = new Date().getFullYear();
        let currentMoney = parseFloat(money);
        let interestRate = parseFloat(rate);
        let goalAmount = parseFloat(goal);
        let results = [];

        while (currentMoney < goalAmount) {
            let newMoney = Math.floor(currentMoney * (1 + interestRate / 100));
            results.push({
                year: ++year,
                money: currentMoney,
                rate: interestRate,
                endYear: newMoney
            });
            currentMoney = newMoney;
        }

        setOutputData(results);
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Input Your Invest Money: </label>
                <input
                    value={money}
                    onChange={(e) => setMoney(e.target.value)}
                    type="text"
                />
                <br />
                <label>Input Rate: </label>
                <input
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    type="text"
                />
                <br />
                <label>Input Your Goal: </label>
                <input
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    type="text"
                />
                <br />
                <Output data={outputData} />
                <button type="button" onClick={handleClick}>
                    Submit
                </button>
            </form>



        </div>
    );
}

export default Input;
