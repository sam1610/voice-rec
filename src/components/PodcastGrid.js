import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import React, { useEffect, useMemo, useState } from "react";
import "ag-grid-enterprise"

const PodcastGrid = (props) => {
    const myStyle ={
        valign: "middle",
        height:20
    }

    const AudioCell= params =>
    <audio controls preload="none" style={myStyle}> 
    <source src={params.value} type="audio/mpeg" /> 
    </audio>


  const [rows, setRows] = useState();
  const [gridApi, setGridApi] = useState();
  var myIcons={
    sortAscending:()=>{
      return 'ASC'
    },
    sortDescending:()=>{
      return 'DESC'
    }
  }
 const icons=useMemo( ()=>{
  return{
    menu :'<i class="fa fa-bath" style="width:10px" />',
    filter:'<i class="fa fa-long-arrow-alt-down" />',
    columns:'<i class="fa fa-handshake"  />',
    sortAscending:'<i class="fa fa-long-arrow-alt-down"  />',
    sortDescending:'<i class="fa fa-long-arrow-alt-up"  />'
  }
 })
  var cols = [
    {   headerName:"Subject",
        field:"lang",
        rowGroup:true,
        hide:true
    },

    {
      headerName: "Episode Title",
      field: "title", 
      wrapText:true,
      autoheight:true,
      flex:2,
      resizable:true,
      filter:"agGridTextFilter",
      icons:{
        sortAscending:<i class='fa fa-sort-alpha-up' />,
        sortDescending:<i class='fa fa-sort-alpha-down' />}

    },
    {
      headerName: "Published",
      field: "pubDate",
      sortable:true,
      filter:"agDateColumnFilter",
      icons:myIcons
    },
    {
      headerName: "Episode",
      field: "mp3",
      flex:2,
      cellRenderer: AudioCell,

      },
    {
        headerName:"Description",
        field:"description",
        resizable:true,

    }
  ];

  useEffect(() => {
    fetch(props.rssfeed)
      .then((resp) => resp.text())
      .then((str) => {
        const parser = new window.DOMParser();
        const data = parser.parseFromString(str, "text/xml");
        const itemlist = data.querySelectorAll("item");
        const items = [];
        
        itemlist.forEach((el) => {
          items.push({
            title: el.querySelector("title").innerHTML,
            pubDate: new Date(el.querySelector("pubDate").textContent),
            mp3: el.querySelector("enclosure").getAttribute("url"),
            description:el.querySelector("description").textContent.replace(/(<([^>]+)>)/ig,""),
            lang:["Ar","Eng", "Fr"][Math.floor(Math.random()*3)]
          });
        });
        
        setRows(items);
      });
  }, [props.rssfeed]);
  const onGridReady=(params)=>{
        setGridApi(params.api)
  }
  useEffect(()=>{
    if(gridApi){
        gridApi.setQuickFilter(props.quickFilter)
    }
  },[gridApi, props.quickFilter])
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: props.height, width: props.width }}
    >
      <AgGridReact 
      onGridReady={onGridReady}
      columnDefs={cols} 
      rowData={rows} 
      pagination={true}
      animateRows={true}
      groupDisplayType={'groupRows'}
      sideBar={true}
      icons={icons}
      />
    </div>
  );
};

export default PodcastGrid;