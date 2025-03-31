import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EconomicCalculator = () => {
  const [activeTab, setActiveTab] = useState("inflation");

  // Inflation Calculator
  const [amount, setAmount] = useState(1000);
  const [inflationRate, setInflationRate] = useState(2);
  const [years, setYears] = useState(5);
  const calculateInflation = () => {
    return (amount * Math.pow(1 + inflationRate / 100, years)).toFixed(2);
  };

  // GDP Growth Calculator
  const [initialGDP, setInitialGDP] = useState(1000);
  const [finalGDP, setFinalGDP] = useState(1200);
  const [gdpYears, setGdpYears] = useState(5);
  const calculateGDPGrowth = () => {
    return (((finalGDP / initialGDP) ** (1 / gdpYears) - 1) * 100).toFixed(2);
  };

  // Loan/EMI Calculator
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanYears, setLoanYears] = useState(10);
  const calculateEMI = () => {
    let r = interestRate / 100 / 12;
    let n = loanYears * 12;
    return ((loanAmount * r) / (1 - Math.pow(1 + r, -n))).toFixed(2);
  };

  // Cost-Benefit Analysis
  const [cost, setCost] = useState(10000);
  const [benefit, setBenefit] = useState(15000);
  const calculateCostBenefit = () => {
    return (benefit / cost).toFixed(2);
  };

  return (
    <div className="container mt-5 ">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center">Economic Calculator</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "inflation" ? "active" : ""}`} onClick={() => setActiveTab("inflation")}>
              Inflation Calculator
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "gdp" ? "active" : ""}`} onClick={() => setActiveTab("gdp")}>
              GDP Growth Calculator
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "loan" ? "active" : ""}`} onClick={() => setActiveTab("loan")}>
              Loan/EMI Calculator
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "cost" ? "active" : ""}`} onClick={() => setActiveTab("cost")}>
              Cost-Benefit Analysis
            </button>
          </li>
        </ul>

        <div className="mt-4">
          {activeTab === "inflation" && (
            <div>
              <h4>Inflation Calculator</h4>
              <label>Amount</label>
              <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
              <label>Inflation rate </label>
              <input type="number" className="form-control mt-2" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} placeholder="Inflation Rate (%)" />
              <label>Years</label>
              <input type="number" className="form-control mt-2" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Years" />
              <h5 className="mt-3">Future Value: {calculateInflation()}</h5>
            </div>
          )}

          {activeTab === "gdp" && (
            <div>
              <h4>GDP Growth Calculator</h4>
              <label>Initial GDP</label>
              <input type="number" className="form-control" value={initialGDP} onChange={(e) => setInitialGDP(e.target.value)} placeholder="Initial GDP" />
              <label>Final GDP</label>
              <input type="number" className="form-control mt-2" value={finalGDP} onChange={(e) => setFinalGDP(e.target.value)} placeholder="Final GDP" />
              <label>Years</label>
              <input type="number" className="form-control mt-2" value={gdpYears} onChange={(e) => setGdpYears(e.target.value)} placeholder="Years" />
              <h5 className="mt-3">Growth Rate: {calculateGDPGrowth()}%</h5>
            </div>
          )}

          {activeTab === "loan" && (
            <div>
              <h4>Loan/EMI Calculator</h4>
              <label>Loan Amount</label>
              <input type="number" className="form-control" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="Loan Amount" />
              <label>Interest Rate (%)</label>
              <input type="number" className="form-control mt-2" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="Interest Rate (%)" />
              <label >Years</label>
              <input type="number" className="form-control mt-2" value={loanYears} onChange={(e) => setLoanYears(e.target.value)} placeholder="Years" />
              <h5 className="mt-3">Monthly EMI: {calculateEMI()}</h5>
            </div>
          )}

          {activeTab === "cost" && (
            <div>
              <h4>Cost-Benefit Analysis</h4>
              <label>Total Cost</label>
              <input type="number" className="form-control" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Total Cost" />
              <label>Total Benefit</label>
              <input type="number" className="form-control mt-2" value={benefit} onChange={(e) => setBenefit(e.target.value)} placeholder="Total Benefit" />
              <h5 className="mt-3">Benefit-Cost Ratio: {calculateCostBenefit()}</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EconomicCalculator;
