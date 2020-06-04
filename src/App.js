import React, { Component } from 'react';
import { fetchData , fetchDistrictData , fetchTableData , fetchDailyData } from './api/index'
import Cards from './Components/Cards/Cards';
import Table from './Components/table'
import classes from 'classnames'

import styles from './App.css'
import Chart from './Components/Charts/Chart'
import DistrictTable from './Components/table'
import TableCopy from './Components/tableCopy'
class App extends Component {

  state ={
    data:{},
    districtData : {},
    tableData:[],
    chartData:{},
    newData:{}

  }

  async componentDidMount(){
    const data = await fetchData();
    const districtData = await fetchDistrictData();
    const tableData = await fetchTableData();
    const chartData = await fetchDailyData();
    const newData = chartData.slice(-1)[0]
    this.setState({
       data : data,
       districtData : districtData,
       tableData : tableData,
       chartData: chartData,
       newData


    })

    console.log('fetchData last data ' , chartData.slice(-1)[0])

   //console.log(this.state.tableData)
  }
  render(){

    const {
     data , tableData , newData

  }  = this.state;

    const spinner = data.length!==0 && tableData ? (<div>
      <div>
      <Cards 
       data ={data}
       newData={newData} 
       />

       </div>

       <div>
       <DistrictTable />
        </div>

        <div>
      <TableCopy 
       info ={tableData} />

       </div>

       <div >

       <Chart />
     </div>
    </div>): <div> <h1>Loading......</h1></div>

    return(
      <div  className={classes.container}>

      {spinner}
      </div>
     
    )
  }
}

export default App;
