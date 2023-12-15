// components/Dashboard.js
import React from "react";
import { connect } from "react-redux";
import { loadData } from "../actions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({ data, loadData }) => {
  const monthlyData = data[0]?.sales.filter((sale, index, array) => {
    const currentMonth = new Date(sale.weekEnding).getMonth();
    const nextMonth =
      index < array.length - 1
        ? new Date(array[index + 1].weekEnding).getMonth()
        : null;
    return nextMonth !== currentMonth;
  });
  return (
    <div className="charts-container">
      <LineChart
        width={800}
        height={400}
        data={monthlyData}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="weekEnding"
          tickFormatter={(value) =>
            new Date(value).toLocaleString("default", { month: "long" })
          }
        />
        <YAxis hide={true} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state?.data,
});

export default connect(mapStateToProps, { loadData })(Chart);
