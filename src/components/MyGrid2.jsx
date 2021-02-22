import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  RowDD,
} from "@syncfusion/ej2-react-grids";
import React, { Fragment, useState } from "react";
import "../grid.css";

const MyGrid2 = (props) => {
  const onQueryCellInfo = (args) => {
    if (args.column.field === "Size") {
      if (args.data && args.data.Size > 1) {
        args.cell.querySelector(".sizetext").classList.add("warning");
      }
    }
  };

  const sTemplate = (props) => {
    return (
      <div id="size">
        <span className="sizetext">{props.Size}</span>
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
              field="Size"
              template={sTemplate}
              headerText="Size"
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

export default MyGrid2;
