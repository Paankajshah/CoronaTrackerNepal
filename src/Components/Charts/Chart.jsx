import React, { Component } from 'react'
import { fetchDailyData } from '../../api/index'
import { Line } from 'react-chartjs-2'
import styles from './Chart.module.css'
import classes from 'classnames'
class Chart extends Component{

    state ={
        data:{}
    
      }

    
  async componentWillMount(){
    const data = await fetchDailyData();
    this.setState({
       data : data

    })
  console.log(this.state.data)
  }


    


    render(){

        const { data } = this.state

        const lineChart = data.length ?
            ( <Line 
                data={{
                    labels: data.map(({date} )=> date),
                    datasets :[{
                        data:data.map(({cases} )=> cases),
                        borderWidth: 2,
                        borderCapStyle: 'round',
                        pointBackgroundColor: '#ff6862',
                        label: 'Infected',
                        borderColor: 'blue',

                        pointHoverRadius: 2,
                        fill: true
                    
                    },
                    {
                        data:data.map(({deaths} )=> deaths),
                        borderWidth: 2,
                        borderCapStyle: 'round',
                        pointBackgroundColor: '#6c757d',
                        pointHoverRadius: 2,
                        label: 'Deaths',
                        borderColor: 'red',

                        fill: true

                        
                    },
                    {
                        data:data.map(({recovery} )=> recovery),
                        borderWidth: 2,
                        
                        borderCapStyle: 'round',
                        pointBackgroundColor: '#7ebf80',
                        label: 'Recovered',
                        borderColor: 'green',
                        pointHoverRadius: 2,
                        fill: true

                       
                      
                    }]
                }}
                />): null

      // console.log(data)

 

       
        return(
        <div className={styles.container}>{lineChart}</div>

        )
    }
}



export default Chart