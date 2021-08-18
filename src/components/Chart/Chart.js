import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const expenseDataPointsValues = props.expenseDataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...expenseDataPointsValues);
  return (
    <div className="chart">
      {props.expenseDataPoints.map((expenseDataPoint) => (
        <ChartBar
          key={expenseDataPoint.label}
          value={expenseDataPoint.value}
          maxValue={totalMaximum}
          label={expenseDataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
