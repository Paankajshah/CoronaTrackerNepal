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
  console.log("Chart JSX " ,this.state.data)
  }

  


    


    render(){

        let { data } = this.state      

        const lineChart1 = data.length ?
            ( <Line
                data={{
                    labels: data.map(({date} )=> date),
                    datasets :[{
                        data:data.map(({cases} )=> cases),
                        borderWidth: 2,
                        borderCapStyle: 'round',
                        pointRadius:0,
                       // pointBackgroundColor: '#ff6862',
                        label: 'Infected',
                        borderColor: 'blue',
                        pointHoverBackgroundColor:'blue',
                        pointHoverRadius: 5,
                        fill: true
                    
                    }]
                }}
                options={ {
                    scales: {
                        yAxes: [{
                            //gridLines: false,
                            gridLines:  {  drawOnChartArea: false , lineWidth:2, color:'blue' },
                            position: 'right',
                            ticks: {
                                maxTicksLimit:5,
                                fontColor:'blue',
                                callback: function(value, index, values) {
                                    if(value > 99){
                                    return value / 1e3 + 'K';}
                                    else{
                                        return value
                                    }
                                }
                            },
                        
                        }],
                        xAxes: [{
                            gridLines: {  drawOnChartArea: false , lineWidth:2, color:'blue' },
                            
                            
                            ticks: {
                                fontColor: 'blue' ,
                                autoSkip: true,
                                maxTicksLimit: 1,
                                padding:5,
                                maxRotation: 0,
                                minRotation: 0,
                                pointLabels:{
                                    display: true
                                },
                            },
                            type:'time',
                            time:{
                                unit: 'day'
                            }
                            

                        }]
                    },
                    tooltips: {
                        titleFontSize:20,
                        bodyFontSize:15,
                        callbacks: {
                            title: function(tooltipItem, data) {
                              return data['labels'][tooltipItem[0]['index']];
                            },
                            label: function(tooltipItem, data) {
                              //  return ;
                                return 'Infected  ' + data['datasets'][0]['data'][tooltipItem['index']] ;
                              },},
                        enabled:true,
                        mode: 'index',
                        intersect: false
                    },
                     hover: {
                        mode: 'index',
                        intersect: false
                     },
                    /*
                     touchstart: {
                        mode: 'index',
                        intersect: false
                     },
                     touchmove:{
                        mode: 'index',
                        intersect: false
                     },*/

                     tooltipEvents: ["mousemove", "touchstart", "touchmove", "click"],
                }
            }
                />): null
                const lineChart2 = data.length ?
                ( <Line
                    data={{
                        labels: data.map(({date} )=> date),
                        datasets :[{
                            data:data.map(({recovery} )=> recovery),
                            borderWidth: 2,
                            borderCapStyle: 'round',
                            pointRadius:0,
                           // pointBackgroundColor: '#ff6862',
                            label: 'Recovered',
                            borderColor: 'green',
                            pointHoverBackgroundColor:'green',
                            pointHoverRadius: 5,
                            fill: true
                        
                        }]
                    }}
                    options={ {
                        scales: {
                            yAxes: [{
                                //gridLines: false,
                                gridLines: {  drawOnChartArea: false , lineWidth:2, color:'green' },
                                position: 'right',
                                ticks: {
                                    maxTicksLimit:5,
                                    callback: function(value, index, values) {
                                        if(value > 999){
                                        return value / 1e3 + 'K';}
                                        else{
                                            return value
                                        }
                                    }
                                },
                            
                            }],
                            xAxes: [{
                                gridLines: {  drawOnChartArea: false , lineWidth:2, color:'green' },
                                
                                ticks: {
    
                                    fontColor: 'green' ,
                                    //autoSkip: true,
                                    maxTicksLimit: 1,
                                    padding:5,
                                    maxRotation: 0,
                                    minRotation: 0,
                                    pointLabels:{
                                        display: true
                                    },
                                },
                                type:'time',
                                time:{
                                    unit: 'day'
                                }
                                
    
                            }]
                        },
                        tooltips: {
                            titleFontSize:20,
                            bodyFontSize:15,
                            callbacks: {
                                title: function(tooltipItem, data) {
                                  return data['labels'][tooltipItem[0]['index']];
                                },
                                label: function(tooltipItem, data) {
                                  //  return ;
                                    return 'Recovered  ' + data['datasets'][0]['data'][tooltipItem['index']] ;
                                  },},
                            enabled:true,
                            mode: 'index',
                            intersect: false
                        },
                         hover: {
                            mode: 'index',
                            intersect: false
                         },
                        /*
                         touchstart: {
                            mode: 'index',
                            intersect: false
                         },
                         touchmove:{
                            mode: 'index',
                            intersect: false
                         },*/
    
                         tooltipEvents: ["mousemove", "touchstart", "touchmove", "click"],
                    }
                }
                    />): null
                    const lineChart3 = data.length ?
                    ( <Line
                        data={{
                            labels: data.map(({date} )=> date),
                            datasets :[{
                                data:data.map(({deaths} )=> deaths),
                                borderWidth: 2,
                                borderCapStyle: 'round',
                                pointRadius:0,
                               // pointBackgroundColor: '#ff6862',
                                label: 'Deaths',
                                
                                borderColor: 'red',
                                pointHoverBackgroundColor:'red',
        
                                pointHoverRadius: 5,
                                fill: true
                            
                            }]
                        }}
                        options={ {
                            scales: {
                                yAxes: [{
                                    //gridLines: false,
                                    gridLines: {drawOnChartArea: false , lineWidth:2, color:'red' },
                                    position: 'right',
                                    ticks: {
                                        maxTicksLimit:5,
                                        callback: function(value, index, values) {
                                            if(value > 999){
                                            return value / 1e3 + 'K';}
                                            else{
                                                return value
                                            }
                                        }
                                    },
                                
                                }],
                                xAxes: [{
                                    gridLines: {drawOnChartArea: false , lineWidth:2, color:'red'},
                                    
                                    ticks: {
        
                                        fontColor: 'red' ,
                                        //autoSkip: true,
                                        maxTicksLimit: 1,
                                        padding:5,
                                        maxRotation: 0,
                                        minRotation: 0,
                                        pointLabels:{
                                            display: true
                                        },
                                    },
                                    type:'time',
                                    time:{
                                        unit: 'day'
                                    }
                                    
        
                                }]
                            },
                            tooltips: {
                                titleFontSize:20,
                                bodyFontSize:15,
                                callbacks: {
                                    title: function(tooltipItem, data) {
                                      return data['labels'][tooltipItem[0]['index']];
                                    },
                                    label: function(tooltipItem, data) {
                                      //  return ;
                                        return 'Deaths  ' + data['datasets'][0]['data'][tooltipItem['index']] ;
                                      },},
                                enabled:true,
                                mode: 'index',
                                intersect: false
                            },
                             hover: {
                                mode: 'index',
                                intersect: false
                             },
                            /*
                             touchstart: {
                                mode: 'index',
                                intersect: false
                             },
                             touchmove:{
                                mode: 'index',
                                intersect: false
                             },*/
        
                             tooltipEvents: ["mousemove", "touchstart", "touchmove", "click"],
                        }
                    }
                        />): null
            
      // console.log(data)

 

       
        return(<div  style={{margin:'auto'}}>
        <div style={{backgroundColor:'hsl(212, 100%, 80%)' , borderRadius:'10px' , margin:'30px 25px 0px 25px'}}>{lineChart1}</div>
        <div style={{backgroundColor:'hsl(116, 100%, 80%)' , borderRadius:'10px' , margin:'30px 25px 0px 25px'}}>{lineChart2}</div>
        <div style={{backgroundColor:'hsl(342, 100%, 80%)' , borderRadius:'10px' , margin:'30px 25px 0px 25px'}}>{lineChart3}</div>
        </div>
        )
    }
}



export default Chart