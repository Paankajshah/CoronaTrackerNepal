import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { fetchTableData} from '../api/TableData'

class DistrictTable extends React.Component {

  state = {

    tableData : []
  


  }

  async componentDidMount(){
    const tableData = await fetchTableData();
    this.setState({
       tableData,


    })

     console.log( 'tableData' ,tableData)


  }
  render()
  
  
  {

    const { tableData } = this.state 

    const columns = [
      {
       name: "districts",
       label: "Districts",
       options: {
        filter: true,
        sort: true,
       } },
      {
       name: "cases",
       label: "Cases",
       options: {
        filter: true,
        sort: true,
       } }
      ,
      {
       name: "active",
       label: "Active",
       options: {
        filter: true,
        sort: true,
       } } ,
      {
       name: "recover",
       label: "Recovered",
       options: {
        filter: true,
        sort: true,
       }  } ,
       {
        name: "deaths",
        label: "Deaths",
        options: {
         filter: true,
         sort: true,
        } }]
     
     const data = tableData.map( (dist) => ({
        districts : dist.district,
        cases : dist.cases,
        recover : dist.recovered,
        deaths : dist.deaths,
        active : dist.active,

     }))

     console.log('dataaa  ' , data)
     
     const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'scrollMaxHeight',
      fixedHeaderOptions: {
        xAxis: false,
        yAxis: true
      },
      download:false,
      filter: false,
      print: false,
      viewColumns: false,
      selectableRows: false ,
      pagination: false
      
     };
    return (
    <div style={{marginTop:'30px'}}>
      <MUIDataTable
        title={"District Wise Data"}
        data={data}
        columns={columns}
        options={options}
      />
      </div>
    );
  }
}
export default DistrictTable
