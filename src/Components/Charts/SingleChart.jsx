// import React, { Component } from 'react'
// import { Line, Scatter } from 'react-chartjs-2'
// class Chart extends Component{

     


//     render(){

//         const { data } = this.props

//         const lineChart = data.length ?
//             ( <Scatter 
//                 data={{
//                     labels: data.map(({gate} )=> gate),
//                     datasets :[{
//                         data:data.map(({cases} )=> cases),
//                         borderWidth: 5,
//                         borderCapStyle: 'round',
//                        // pointBackgroundColor: '#ff6862',
//                        // label: 'Infected',
//                         pointRadius:0,
//                         borderColor: 'blue',
//                         showLine:true ,
//                         pointHoverRadius: 2,
//                         fill: false,
                    
//                     },
//                     ]
//                 }}
//                 options={ {
//                   legend:{
//                     display:false
//                   },
//                     scales: {
//                         yAxes: [{
//                           display:false,
//                             //gridLines: false,
//                             gridLines: {  display: false },
//                             position: 'right',
//                             ticks:{
//                                 suggestedMin: 0,
//                                 beginAtZero: false         
//                             }
//                         }],
//                         xAxes: [{
//                           display:false,

//                             gridLines: {  display:false },
//                             ticks: {
//                                 suggestedMin: 0,
//                                 beginAtZero: true  ,
//                             padding:10,
//                                 fontColor: 'red' ,
//                                 autoSkip: true,
//                                 maxTicksLimit: 1,
//                                 maxRotation: 0,
//                                 minRotation: 0
//                             },
//                             type:'time',
//                             time:{
//                                 unit: 'day'
//                             }
                            

//                         }]
//                     },
//                     tooltips: {
//                         enabled:false,
//                         mode: 'index',
//                         intersect: false
//                     },
//                      hover: {
//                         mode: 'index',
//                         intersect: false
//                      },/*
//                      touchstart: {
//                         mode: 'index',
//                         intersect: false
//                      },
//                      touchmove:{
//                         mode: 'index',
//                         intersect: false
//                      },*/

//                      //tooltipEvents: ["mousemove", "touchstart", "touchmove", "click"],
//                 }}
//                 />): null

            

//       // console.log(data)

 

       
//         return(<div onMouseOver={this.mouseEvent}>
//         <div >{lineChart}</div>
//             </div>
//         )
//     }
// }



// export default Chart