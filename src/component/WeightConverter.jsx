import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WeightConverter = () => {
  const [inputValue, setInputValue] = useState(1);
  const [inputUnit, setInputUnit] = useState("kg");
  const [outputUnit, setOutputUnit] = useState("g");
  
  const weightUnits = {
    kg: 1,
    g: 1000,
    lb: 2.20462,
    oz: 35.274,
  };

  const convertWeight = () => {
    let inKg = inputValue / weightUnits[inputUnit];
    return (inKg * weightUnits[outputUnit]).toFixed(2);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center">Weight Converter</h2>
        <div className="row mt-3">
          <div className="col-md-4">
            <label>Enter Weight:</label>
            <input
              type="number"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label>From:</label>
            <select
              className="form-control"
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}
            >
              {Object.keys(weightUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label>To:</label>
            <select
              className="form-control"
              value={outputUnit}
              onChange={(e) => setOutputUnit(e.target.value)}
            >
              {Object.keys(weightUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>
        <h4 className="text-center mt-4">Converted Weight: {convertWeight()} {outputUnit}</h4>
      </div>
    </div>
  );
};

export default WeightConverter;
