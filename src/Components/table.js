import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { fetchTableData} from '../api/TableData'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Collapse } from "@material-ui/core";

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


  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {

      }
      }
    }
  )
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
        setCellHeaderProps: (value) => {

        return {
            style: {
              textDecoration: 'underline',
              color: 'black',
              fontWeight:'bold'
            }
        };
      }
        
      }},
      {
       name: "cases",
       label: "Cases",
       options: {
        filter: true,
        sort: true,
        sortDirection: 'desc',

        
        setCellHeaderProps: (value) => {

          return {
              style: {
                textDecoration: 'underline',
                color: 'red',
                fontWeight:'bold'
              },

          };
        },
        
       } }
      ,
      {
       name: "active",
       label: "Active",
       options: {
        filter: true,
        sort: true,
        setCellHeaderProps: (value) => {

          return {
              style: {
                textDecoration: 'underline',
                color: 'blue',
                fontWeight:'bold'
              }
          };
        }
       } } ,
      {
       name: "recover",
       label: "Recovered",
       options: {
        filter: true,
        sort: true,
        setCellHeaderProps: (value) => {

          return {
              style: {
                textDecoration: 'underline',
                color: 'green',
                fontWeight:'bold'
              }
          };
        }
       }  } ,
       {
        name: "deaths",
        label: "Deaths",
        options: {
         filter: true,
         sort: true,
         setCellHeaderProps: (value) => {

          return {
              style: {
                textDecoration: 'underline',
                color: 'grey',
                fontWeight:'bold'
              }
          };
        }
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
      
     };
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
    <div style={{marginTop:'30px'}}>
      <MUIDataTable
        title={"District Wise Data"}
        data={data}
        columns={columns}
        options={options}
      />
      </div>
      </MuiThemeProvider>
    );
  }
}
export default DistrictTable
