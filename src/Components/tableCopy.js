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

  
    render() {

      const { info } = this.props;

     console.log(info)

        

  const rowData = info ? (<TableBody>{info.map((row) => (
    <Row key={row.province} row={row} />
  ))}</TableBody>) : null

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
