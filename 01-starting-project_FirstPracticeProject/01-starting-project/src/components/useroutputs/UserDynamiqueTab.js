export default function UserDynamiqueTab(props) {

    return (

        <tr>
            <td>{props.year}</td>
            <td>{props.savingsEndOfYear}</td>
            <td>{props.yearlyInterest}</td>
            <td>{props.totalInterest}</td>
            <td>{props.yearlyContributionT}</td>
        </tr>
    )
}

