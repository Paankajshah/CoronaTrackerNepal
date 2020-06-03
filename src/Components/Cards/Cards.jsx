import React from 'react';
import styles from './Cards.module.css';
import { Typography , Card , CardContent, Grid, CircularProgress, Paper } from '@material-ui/core';
import CountUp from 'react-countup';
import SingleChart from '../Charts/SingleChart'
import classes from 'classnames'

const card = ({data : {tested_positive , recovered , deaths , in_isolation}, newData : {newCases ,newDeaths , newRecovery}}) =>{

  

    console.log('newData    ' , newCases)

    if(!tested_positive ){
        return <div style={{textAlign:'center'}}>
             <CircularProgress />
        </div>;
    }else{
    return(
      <React.Fragment>
        <Grid container spacing={3}  justify='center'>
          <Grid item xs={6} md={3}  > 
            <Paper  elevation={0} style={{textAlign:'center'}} >              
                <Typography  
                  color="textSecondary" 
                  style={{color: 'red' }}>
                   Confirmed 
                </Typography>
                <Typography  
                  variant="body1" 
                  style={{color: 'red'}} > [ +
                <CountUp 
                        start={0}
                        end={newCases}
                        duration={2.5}
                        separator=','  /> ]
                </Typography>
                <Typography  
                  variant="h5" 
                  component="h2"
                  style={{color: 'red'}} >
                <CountUp 
                        start={0}
                        end={tested_positive}
                        duration={2.5}
                        separator=','  />
                </Typography>


                
               
             </Paper>
          </Grid>

  

          <Grid xs={6} md={3} item >
            <Paper elevation={0} style={{textAlign:'center'}}>
               <Typography  
                color="textSecondary"
                style={{color: 'green'}} >
                   Recovered 
                </Typography>
                <Typography  
                  variant="body1" 
                  style={{color: 'green'}} > [ +
                <CountUp 
                        start={0}
                        end={newRecovery}
                        duration={2.5}
                        separator=','  /> ]
                </Typography>
                <Typography  
                  variant="h5" 
                  component="h2"
                  style={{color: 'green'}}  >
                <CountUp 
                        start={0}
                        end={recovered}
                        duration={2.5}
                        separator=','  />
                </Typography>



                
               
            </Paper>
          </Grid>

          <Grid xs={6} md={3}  item >
            <Paper elevation={0} style={{textAlign:'center'}}>
            <Typography  
              color="textSecondary"
              style={{color: 'blue'}}  >
                   Active 
                </Typography>
                <Typography  
                  variant="h5" 
                  component="h2" 
                  style={{color: 'blue'}} >
                <CountUp 
                        start={0}
                        end={in_isolation}
                        duration={2.5}
                        separator=','  />
                </Typography>



              
            </Paper>
          </Grid>
          <Grid xs={6} md={3}  item >
            <Paper elevation={0} style={{textAlign:'center'}}>
            <Typography  
            color="textSecondary"
            style={{color: 'grey'}}  >
                   Deaths 
                </Typography>
                <Typography  
                  variant="body1" 
                  style={{color: 'grey'}} > [ +
                <CountUp 
                        start={0}
                        end={newDeaths}
                        duration={2.5}
                        separator=','  /> ]
                </Typography>

                <Typography 
                     variant="h5" 
                     component="h2"
                     style={{color: 'grey'}} >
                <CountUp 
                        start={0}
                        end={deaths}
                        duration={2.5}
                        separator=','  />
                </Typography>


              
            </Paper>
          </Grid>
        </Grid> 
   </React.Fragment>     
    )
    }
}


export default card;