import UserDynamiqueTab from "./UserDynamiqueTab";
import {useState} from "react";

export default function UserOutput(props) {
const [test1,setTest1]= useState([]);

// function trysetTest(props.data){
//     setTest1()
// }

    return (

        <table className="result">

            <thead>
            <tr>

                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>

            <tbody>
            {props.data.map((entry) => (

                <UserDynamiqueTab
                    year={entry.year}
                    savingsEndOfYear={entry.savingsEndOfYear}
                    yearlyInterest={entry.yearlyInterest}
                    totalInterest={entry.totalInterest}
                    yearlyContributionT={entry.yearlyContributionT}
                    key={entry.key}
                >{console.log(entry)}</UserDynamiqueTab>

            ))}
            </tbody>
        </table>
    )
}