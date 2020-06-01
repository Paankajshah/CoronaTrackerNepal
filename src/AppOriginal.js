import React, { Component } from 'react';
import { fetchData , fetchDistrictData } from './api/index'
import Cards from './Components/Cards/Cards';
import Chart from './Components/Charts/Chart'
class App extends Component {

  state ={
    data:{},
    districtData : {}

  }

  async componentDidMount(){
    const data = await fetchData();
    const districtData = await fetchDistrictData();
    this.setState({
       data : data,
       districtData : districtData

    })
   console.log(this.state)
  }
  render(){

    const {
     data

  }  = this.state;

    return(
     <div>
       <h1>App</h1>
       <Cards 
       data={data} />

       <Chart />
     </div>
    )
  }
}

export default App;
