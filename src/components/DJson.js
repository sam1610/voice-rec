import  Box from "@mui/material/Box"
import { useDemoData    } from "@mui/x-data-grid-generator";
import {   DataGrid  } from "@mui/x-data-grid";
import "./App.css";


function Sxpro(){
    const {data} =useDemoData({
        dataSet: " Commodity",
        rowLength:30,
        maxColumn: 5
    });
    return(
        <Box  sx={{ height:300, width:'100%'}} >
            <DataGrid 
            {...data}
            sx={{
                boxShadow :2,
                border:2,
                borderColor :'primary.light', "& .MuiDataGrid-cell:hover":{
                    color:'primary.main'
                },

            }}
            />


        </Box>



    )

}

export default Sxpro; 