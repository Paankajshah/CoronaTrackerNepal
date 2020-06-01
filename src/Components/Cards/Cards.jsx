import React from 'react';
import styles from './Cards.module.css';
import { Typography , Card , CardContent, Grid, CircularProgress } from '@material-ui/core';
import CountUp from 'react-countup';

const card = ({data : {tested_positive , recovered , deaths}}) =>{

    console.log(tested_positive , recovered , deaths)

    if(!tested_positive ){
        return <div style={{textAlign:'center'}}>
             <CircularProgress />
        </div>;
    }else{
    return(
        <div className={styles.container}>
          <Grid container spacing={3}  justify='center'>
              <Grid xs={12} md={3} item component={Card}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                      Total Positive Cases 
                    </Typography>
                    <Typography variant="h5" component="h2">
                     <CountUp 
                        start={0}
                        end={tested_positive}
                        duration={2.5}
                        separator=','  />
                    </Typography>
                   
                </CardContent>
              </Grid>

              <Grid xs={12} md={3} item component={Card}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                       Total recovered
                    </Typography>
                    <Typography variant="h5" component="h2">
                    <CountUp 
                        start={0}
                        end={recovered}
                        duration={2.5}
                        separator=','  />
                    </Typography>
                   
                </CardContent>
              </Grid>

              <Grid xs={12} md={3}  item component={Card}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                      Total Deaths
                    </Typography>
                    <Typography variant="h5" component="h2">
                    <CountUp 
                        start={0}
                        end={deaths}
                        duration={2.5}
                        separator=','  />
                    </Typography>
                  
                </CardContent>
              </Grid>
          </Grid>
      </div>
    )
    }
}


export default card;