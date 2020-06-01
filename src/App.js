import React, { Component } from 'react';
import { fetchData , fetchDistrictData , fetchTableData } from './api/index'
import Cards from './Components/Cards/Cards';
import Table from './Components/table'
import Chart from './Components/Charts/Chart'
import TableCopy from './Components/tableCopy'
class App extends Component {

  state ={
    data:{},
    districtData : {},
    tableData:[]

  }

  async componentDidMount(){
    const data = await fetchData();
    const districtData = await fetchDistrictData();
    const tableData = await fetchTableData();
    this.setState({
       data : data,
       districtData : districtData,
       tableData : tableData

    })
   //console.log(this.state.tableData)
  }
  render(){

    const {
     data , tableData

  }  = this.state;

    return(
     <div>
       <Cards 
       data = {data} />

       <TableCopy 
        info ={tableData} />

        <Chart />
      
     </div>
    )
  }
}

export default App;
