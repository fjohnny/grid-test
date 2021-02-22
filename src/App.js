import React, { useState } from "react";
import "./App.css";
import MyGrid from "./components/MyGrid";
import MyGrid2 from "./components/MyGrid2";
import MyTab from "./components/MyTab";

function App() {
  const [gridData1, setGridData1] = useState([
    {
      ID: "001",
      Name: "Item 1",
      Type: "Grid1",
      Quantity: 1,
    },
    {
      ID: "002",
      Name: "Item 2",
      Type: "Grid1",
      Quantity: 2,
    },
    {
      ID: "003",
      Name: "Item 3",
      Type: "Grid1",
      Quantity: 1,
    },
  ]);
  const [gridData2, setGridData2] = useState([
    {
      ID: "001",
      Name: "Item 1",
      Type: "Grid2",
      Size: 1,
    },
    {
      ID: "002",
      Name: "Item 2",
      Type: "Grid2",
      Size: 1,
    },
    {
      ID: "003",
      Name: "Item 3",
      Type: "Grid2",
      Size: 2,
    },
  ]);
  const [tabIndex, setTabIndex] = useState(0);

  const handleButtonClick = () => {
    const newData1 = [...gridData1];
    newData1[0].Quantity = 3;
    newData1[1].Quantity = 1;
    setGridData1(newData1);

    const newData2 = [...gridData2];
    newData2[0].Size = 5;
    newData1[1].Size = 2;
    setGridData2(newData2);
  };

  const showSelectedGrid = () => {
    switch (tabIndex) {
      case 0:
        return <MyGrid data={gridData1} />;

      case 1:
        return <MyGrid2 data={gridData2} />;

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="Container">
        <MyTab index={tabIndex} setIndex={setTabIndex} />
      </div>
      <div className="Container">{showSelectedGrid()}</div>
      <div className="Container">
        <button onClick={handleButtonClick}>Change Data</button>
      </div>
    </div>
  );
}

export default App;
