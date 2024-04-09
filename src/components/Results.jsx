import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
  const calculatedData = calculateInvestmentResults(userInput);
  const initialInvestment =
    calculatedData[0].valueEndOfYear -
    calculatedData[0].interest -
    calculatedData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((data) => {
          const totalInterestValue =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;

          const totalAmountInvested = data.valueEndOfYear - totalInterestValue;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterestValue)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
