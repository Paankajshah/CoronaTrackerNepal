import React, { Component } from 'react'
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
import Row from './Row';


export class TableCopy extends Component {

  state={

  }

  componentWillMount(){
   

  }

  

  createData = (name, calories, fat, carbs, protein, price) => {
        return {
          name,
          calories,
          fat,
          carbs,
          protein,
          price,
          history: [
            { date: '2020-01-05', customerId: '11091700', amount: 3 },
            { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
          ],
        };
      }
    render() {

      const { info } = this.props;

     console.log(info)

        
const rows = [

    
    this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    this.createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    this.createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    this.createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  ];

  const rowData = info ? (<TableBody>{info.map((row) => (
    <Row key={row.province} row={row} />
  ))}</TableBody>) : null

  console.log(rows)
        return (
            <TableContainer component={Paper} style={{marginTop:'30px'}}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Province</TableCell>
                  <TableCell align="right" style={{color:'red'}}>Confirmed</TableCell>
                  <TableCell align="right" style={{color:'blue'}}>Active</TableCell>
                  <TableCell align="right" style={{color:'green'}}>Recovered</TableCell>
                  <TableCell align="right" style={{color:'grey'}}>Deaths</TableCell>
                </TableRow>
              </TableHead>
              {rowData}
            </Table>
          </TableContainer>
        )
    }
}

export default TableCopy
