import React, { Fragment } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ArrowDown, ArrowUp } from "react-feather"

import { Row, Col, Table } from 'reactstrap'

function Tables({ columns, data, sortBy }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    state: { }
  } = useTable(
    {
      columns,
      data,
      initialState: { sortBy }
    },
    useSortBy, 
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <Table striped responsive {...getTableProps()}>

        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <td >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? column.isSortedDesc ? <ArrowDown size={'15px'} /> : <ArrowUp size={'15px'} /> : ''}
                  </span>
                </td>

              ))}

            </tr>
          ))}
          {/* </thead> */}

        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <React.Fragment {...row.getRowProps()}>
                <tr>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
                {/*
                      If the row is in an expanded state, render a row with a
                      column that fills the entire length of the table.
                    */}
              </React.Fragment>
            )
          })}
        </tbody>
        {/* </Table> */}
      </Table>

    </>
  )
}

function App(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'title',
        columns: props.columns
      }

    ],
    []
  )

  return (
    <Fragment>
      <CssBaseline />
      <Row className='justify-content-end mx-0'>
        <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
        </Col>
      </Row>
      <Tables columns={columns} data={props.data} sortBy={props.sortBy} />
    </Fragment>
  )
}

export default App