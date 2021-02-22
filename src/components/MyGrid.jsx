import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  RowDD,
} from "@syncfusion/ej2-react-grids";
import React, { Fragment, useState } from "react";
import "../grid.css";

const MyGrid = (props) => {
  const onQueryCellInfo = (args) => {
    if (args.column.field === "Quantity") {
      if (args.data && args.data.Quantity > 1) {
        args.cell.querySelector(".quantitytext").classList.add("warning");
      }
    }
  };

  const qTemplate = (props) => {
    return (
      <div id="alloc" className="alloccount">
        <span className="quantitytext">{props.Quantity}</span>
      </div>
    );
  };

  return (
    <Fragment>
      <GridComponent>
        <GridComponent
          dataSource={props.data}
          width="auto"
          queryCellInfo={onQueryCellInfo}
          allowRowDragAndDrop={true}
          key="allocateVehicles"
        >
          <ColumnsDirective>
            <ColumnDirective field="ID" headerText="ID" width="100" />
            <ColumnDirective field="Name" headerText="Name" width="60" />
            <ColumnDirective field="Type" headerText="Type" width="60" />
            <ColumnDirective
              field="Quantity"
              template={qTemplate}
              headerText="Quantity"
              width="80"
              textAlign="Center"
            />
          </ColumnsDirective>
        </GridComponent>
        <Inject services={[RowDD]} />
      </GridComponent>
    </Fragment>
  );
};

export default MyGrid;
