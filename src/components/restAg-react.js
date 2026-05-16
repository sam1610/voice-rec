import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

const InitialRowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
];

export function CarsGrid() {

    // set to default data
    const [rowData, setRowData] = useState(InitialRowData);
    var cols = [
        {headerName:"Make",
        field:"make",
        editable:true},
        {   headerName:"Model",
        field:"model"},
        {   headerName:"Price",
        field:"price",
    editable:true},
    ]

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>   
           <AgGridReact 
      
      columnDefs={cols} 
      rowData={rowData} 
      pagination={true}
      animateRows={true}
      />
       </div>
   )
};