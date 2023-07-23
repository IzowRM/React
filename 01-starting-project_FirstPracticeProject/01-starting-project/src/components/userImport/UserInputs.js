import {useState} from "react";

export default function UserInputs(props) {

    const [fromData, setFormData] = useState({
        current: "",
        yearly: "",
        expected: "",
        investment: "",
    })

    function handlerChange(event) {

        const {name, value} = event.target;

        setFormData((entry) => ({
            ...entry,
            [name]: value
        }))
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSaveData(fromData);
        props.onCalculateHandler(fromData);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings"> Current Savings ($)</label>
                    <input
                        type="number"
                        name="current"
                        id="current-savings"
                        value={fromData.current}
                        onChange={handlerChange}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number"
                           name="yearly"
                           id="yearly-contribution"
                           value={fromData.yearly}
                           onChange={handlerChange}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number"
                           id="expected-return"
                           name="expected"
                           value={fromData.expected}
                           onChange={handlerChange}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number"
                           id="duration"
                           name="investment"
                           value={fromData.investment}
                           onChange={handlerChange}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}