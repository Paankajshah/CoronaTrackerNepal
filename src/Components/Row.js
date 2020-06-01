import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

  
function Row(props) {
    const { row } = props;
    console.log('row' , row)
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    const rowData = row.length !== 0 ? (<TableBody>
      {row.districs.map((districtrow) => (
        <TableRow key={districtrow.district}>
          <TableCell >{districtrow.district}</TableCell>
          <TableCell align="right" > {districtrow.cases} </TableCell>
          <TableCell align="right" >  {districtrow.active}</TableCell>
          <TableCell align="right" > {districtrow.recovered}</TableCell>
          <TableCell align="right" > {districtrow.deaths }</TableCell>
        </TableRow>
      ))}
    </TableBody>): <h1>Loading ....</h1>


  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.province}
          </TableCell>
          <TableCell align="right">{row.confirmed}</TableCell>
          <TableCell align="right">{row.active}</TableCell>
          <TableCell align="right">{row.recovered}</TableCell>
          <TableCell align="right">{row.deaths}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Districts
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell >District</TableCell>
                      <TableCell align="right">Confirmed</TableCell>
                      <TableCell align="right">Active</TableCell>
                      <TableCell align="right">Recovered</TableCell>
                      <TableCell align="right">Deaths</TableCell>
                    </TableRow>
                  </TableHead>

                  {rowData}
                  {/* <TableBody>
                    {row.districs.map((districtrow) => (
                      <TableRow key={districtrow.district}>
                        <TableCell component="th" scope="row">
                          {districtrow.cases}
                        </TableCell>
                        <TableCell>{districtrow.active}</TableCell>
                        <TableCell align="right">{districtrow.recovered}</TableCell>
                    <TableCell align="right">{districtrow.deaths }</TableCell>
                      </TableRow>
                    ))}
                  </TableBody> */}
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
                    
                    }

  export default Row;