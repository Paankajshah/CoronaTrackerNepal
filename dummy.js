import React, { Component } from 'react'
import { Line, Scatter } from 'react-chartjs-2'
class Chart extends Component{

    state ={
        fata:[
                {
                    gate:'2020-02-01',
                    date: 'pankaj',
                    cases : '0',
                    base : '5',
                },
                {
                    gate:'2020-02-02',

                    date: 'rishab',
                    cases : '40',
                    base : '60'
                
                },
                {
                    gate:'2020-02-03',
                    base : '180',

                    date: 'sudan',
                    cases : '120'
                },{
                    gate:'2020-02-04',
                    base : '60',

                    date: 'sudan',
                    cases : '200'
                },{
                    gate:'2020-02-05',

                    base : '60',
                    date: 'sudan',
                    cases : '350'
                },{

                    gate:'2020-02-06',
                    base : '60',
                    date: 'sudan',
                    cases : '500'
                },{

                    gate:'2020-02-07',
                    base : '60',
                    date: 'sudan',
                    cases : '700'
                },{

                    base : '60',
                    gate:'2020-02-08',
                    date: 'sudan',
                    cases : '1000'
                },{

                    gate:'2020-02-09',
                    base : '60',
                    date: 'sudan',
                    cases : '1500'
                },{

                    gate:'2020-02-10',
                    base : '60',
                    date: 'sudan',
                    cases : '1800'
                },{

                    gate:'2020-02-11',
                    base : '60',
                    date: 'sudan',
                    cases : '1850'
                },{

                    gate:'2020-02-12',
                    base : '60',
                    date: 'sudan',
                    cases : '2200'
                },{

                    gate:'2020-02-13',
                    base : '60',
                    date: 'sudan',
                    cases : '2500'
                },

        ]
        ,
        data:{},
        check:false
    
      }


     componentDidMount(){
         let fata = this.state.fata
      if(this.state.check ===false){
         fata.pop()
    }
         this.setState({
            data : fata,
            check:true
         })
     }

   


    


    render(){

        const { data } = this.state

        const lineChart = data.length ?
            ( <Scatter 
                data={{
                    labels: data.map(({gate} )=> gate),
                    datasets :[{
                        data:data.map(({cases} )=> cases),
                        borderWidth: 2,
                        borderCapStyle: 'round',
                       // pointBackgroundColor: '#ff6862',
                        label: 'Infected',
                        pointRadius:0,
                        borderColor: 'blue',
                        showLine:true ,
                        pointHoverRadius: 2,
                        fill: true,
                    
                    },
                    ]
                }}
                options={ {
                    scales: {
                        yAxes: [{
                            //gridLines: false,
                            gridLines: {  drawOnChartArea: false , lineWidth:2, color:'blue' },
                            position: 'right',
                            ticks:{
                                suggestedMin: 0,
                                beginAtZero: false         
                            }
                        }],
                        xAxes: [{
                            gridLines: {  drawOnChartArea: false , lineWidth:2, color:'blue' },
                            ticks: {
                                suggestedMin: 0,
                                beginAtZero: true  ,
                            padding:10,
                                fontColor: 'red' ,
                                autoSkip: true,
                                maxTicksLimit: 1,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            type:'time',
                            time:{
                                unit: 'day'
                            }
                            

                        }]
                    },
                    tooltips: {
                        enabled:true,
                        mode: 'index',
                        intersect: false
                    },
                     hover: {
                        mode: 'index',
                        intersect: false
                     },/*
                     touchstart: {
                        mode: 'index',
                        intersect: false
                     },
                     touchmove:{
                        mode: 'index',
                        intersect: false
                     },*/

                     //tooltipEvents: ["mousemove", "touchstart", "touchmove", "click"],
                }}
                />): null

              


                     const lineChart1 = data.length ?
            ( <Scatter
                data={{
                    labels: data.map(({gate} )=> gate),
                    datasets :[
                    {
                        data:data.map(({base})=> base),
                        borderWidth: 2,
                        borderCapStyle: 'round',
                        pointBackgroundColor: '#6c757d',
                        pointHoverRadius: 2,
                        label: 'Deaths',
                        pointRadius:0,

                        borderColor: 'red',
                        showLine:true,
                        fill: true

                        
                    },
                 

                       
                      
                    ]
                }}
                options={ {
                    responsive:true,
                    scales: {
                        yAxes: [{
                            //gridLines: false,
                            gridLines: {  drawOnChartArea: false , lineWidth:2, color:'red' },
                            position: 'right'
                        }],
                        xAxes: [{
                            gridLines: {drawOnChartArea: false,lineWidth:2, color:'red'},
                          
                            ticks: {
                                padding:10,

                                fontColor: 'red' ,
                                autoSkip: true,
                                maxTicksLimit: 1,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            type:'time',
                            time:{
                                unit: 'day'
                            }
                            

                        }]
                    },
                    tooltips: {
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
                        intersect: false,
                    },

                     hover: {
                        mode: 'index',
                        intersect: false
                     },/*
                     touchstart: {
                        mode: 'index',
                        intersect: false
                     },
                     touchmove:{
                        mode: 'index',
                        intersect: false
                     },*/

                     //tooltipEvents: ["mousemove", "touchstart", "touchmove", "click"],
                }}
                />): null

      // console.log(data)

 

       
        return(<div onMouseOver={this.mouseEvent}>
        <div style={{backgroundColor:'hsl(212, 100%, 80%)' , borderRadius:'10px'}} >{lineChart}</div>
        <div style={{backgroundColor:'hsl(342, 100%, 80%)' , borderRadius:'10px' , marginTop:'30px'}}>{lineChart1}</div>
            </div>
        )
    }
}



export default Chart