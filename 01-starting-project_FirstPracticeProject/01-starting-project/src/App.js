import logo from './assets/investment-calculator-logo.png';
import UserInputs from "./components/userImport/UserInputs";

import UserOutput from "./components/useroutputs/UserOutput";
import {useState} from "react";

function App() {
//arrivé des données:
    const [tabData, setTabData] = useState([]);

    function saveTabData(entry) {
        setTabData((prevData) => [...prevData, entry]);
    }



    //sortie des données:

    const calculateHandler = (userInput) => {
        const yearlyData = [];

        let currentSavings = +userInput.current;
        const yearlyContribution = +userInput.yearly ;
        const expectedReturn = +userInput.expected / 100;
        const duration = +userInput.investment;
        let totalInterest =0;
        let yearlyContributionT =+userInput.current;

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            totalInterest += yearlyInterest;
            yearlyContributionT +=yearlyContribution;

            yearlyData.push({
                year:i + 1,
                savingsEndOfYear: Math.round(currentSavings),
                yearlyInterest: Math.round(yearlyInterest),
                totalInterest: Math.round(totalInterest),
                yearlyContributionT: Math.round(yearlyContributionT),
                key:Math.random()
            }
            );
        }
        setDataFinal(yearlyData)
    };

    const [finalData, setFinalData] = useState([

    ]);


    function setDataFinal(entry) {
        setFinalData((prevData) => [...prevData, ...entry]);
    }

    return (
        <div>
            <header className="header">
                <img src={logo} alt="logo"/>
                <h1>Investment Calculator</h1>
            </header>
            <UserInputs onCalculateHandler={calculateHandler} onSaveData={saveTabData}></UserInputs>
            <UserOutput data={finalData}></UserOutput>
        </div>
    );
}

export default App;
