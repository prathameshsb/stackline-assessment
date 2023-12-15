// components/Dashboard.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadData } from "../actions";

const Dashboard = ({ data, loadData }) => {
  console.log(loadData);
  useEffect(() => {
    const mockApiCall = async () => {
      try {
        const response = await fetch("/stackline.json");
        const jsonData = await response.json();
        loadData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    mockApiCall();
  }, [loadData]);

  return (
    <div>
      <h1>Stackline Dashboard</h1>

      <table>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {data[0]?.sales?.map((sale) => (
            <tr key={sale.weekEnding}>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales}</td>
              <td>${sale.wholesaleSales}</td>
              <td>{sale.unitsSold}</td>
              <td>${sale.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(Dashboard);
