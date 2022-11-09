import React, { useState, Fragment } from 'react'
// import styled from 'styled-components'
import { useTable, usePagination, useSortBy, useExpanded, useFilters } from 'react-table'
import Select from 'react-select'
// import matchSorter from 'match-sorter'
// import BTable from 'react-bootstrap/Table';
import CssBaseline from '@material-ui/core/CssBaseline'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Row, Col, Input, Table } from 'reactstrap'
import { ArrowDown, ArrowUp } from "react-feather"


// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;
//     background-color: #F3F2F7;
//     boxShadow: "5px 2px 5px grey";

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;
//       text-align: right;

//     }
//   }
//   .pagination {
//     padding: 0.5rem;
//   }
// `

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// function SelectColumnFilter({column: { preFilteredRows, id }}) {

//   const opt = []
//   preFilteredRows.map((option, i) => {
//     opt.push({ key: i, value: option.values[id], label: option.values[id]})
//     return opt
//   })

//   const [filterValue, setFilter] = useState(null)
//   const handleChange = (event, newValue) => {
//     setFilter(newValue)
//   }

//   // Calculate the options for filtering
//   // using the preFilteredRows
//   // const options = React.useMemo(() => {
//   //   const options = new Set()
//   //   preFilteredRows.forEach(row => {
//   //     options.add(row.values[id])
//   //   })
//   //   return [...options.values()]
//   // }, [id, preFilteredRows])

//   // Render a multi-select box
//   return (
//     <Select
//       // defaultValue={filterValue}
//       defaultValue={filterValue}
//       onChange={handleChange}
//       isMulti
//       isSearchable
//       // name={handleChange}
//       // name={""}
//       // onChange={e => {
//       //   const value = e.value
//       //   setFilter(value || undefined)
//       // }}
//       tabSelectsValue={true}
//       options={opt}
//       className="basic-multi-select"></Select>
//       // classNamePrefix="select"


// //     // {/* <Select
// //     //   value={filterValue}
// //     //   onChange={e => {
// //     //     setFilter(e.target.value || undefined)
// //     //   }}
// //     //     options=
// //     // // <option value="">All</option>
// //     // {options.map((option, i) => {
// //     //     return { key: i, value: option, label: option }
// //     //     /* {option} {console.log(option)} */
// //     //   })}>

//     // </Select> */}
//   )
// }
// function SelectColumnFilter({
//   column: { filterValue, setFilter, preFilteredRows, id }
// }) {
//   const opt = []
//   // Calculate the options for filtering
//   // using the preFilteredRows
//   const options = React.useMemo(() => {
//     const options = new Set()
//     preFilteredRows.forEach(row => {
//       options.add(row.values[id])
//     })
//     return [...options.values()]
//   }, [id, preFilteredRows])

//   options.map((option, i) => (opt.push({ key: i, value: option, label: option })))
//   // const [filterValue, setFilter] = useState(null)
//   // const handleChange = e => {
//   //   const value = e.target.value
//   //   setFilter(value)
//   // }
//   // const handleChange = (event, newValue) => {
//   //       setFilter(newValue.target)
//   //     }
//       // function handleChange(e) {
//       //   setFilter(e.target.value)
//       // }
//   return (
//     // <select
//     //   value={filterValue}
//     //   onChange={e => {
//     //     setFilter(e.target.value || undefined)
//     //   }}
//     // >
//     //   <option value="">All</option>
//     //   {options.map((option, i) => (
//     //     <option key={i} value={option}>
//     //       {option}
//     //     </option>
//     //   ))}
//     // </select>
//     <Select
//       value={filterValue}
//       onChange={value => {
//         setFilter(value)
//         }}
//       isMulti
//       isSearchable
//       // tabSelectsValue={true}
//       options={opt}
//       className="basic-multi-select">
//       </Select>
//   )
// }
// function fuzzyTextFilterFn(rows, id, filterValue) {
//   return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
// }

// fuzzyTextFilterFn.autoRemove = val => !val


function Tables({ columns, data, sortBy, renderRowSubComponent }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      // fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true
        })
      },
      multiple: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined ? filterValue.includes(rowValue) : true
          })
        },
        includesSome: (rows, ids, filterValue) => {
          return rows.filter(row => {
            return ids.some(id => {
              const rowValue = row.values[id]
              return (
                rowValue &&
                rowValue.length &&
                filterValue.some(val => rowValue.includes(val))
              )
            })
          })
        }        
    }),
    []
  )
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  )

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    // pageCount,
    // gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      initialState: { pageIndex: 0, sortBy },
      filterTypes
    },
    useFilters, // useFilters!
    useSortBy,
    useExpanded,
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <span> הצג <select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select> פריטים</span>
      <Table striped responsive {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <td {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? column.isSortedDesc ? <ArrowDown size={'15px'} /> : <ArrowUp size={'15px'} /> : ''}
                  </span>
                  <span>{column.canFilter ? column.render('Filter') : null}</span>
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
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
        </tbody>
      </Table>

      <div className="pagination">
        {/* <button style={{background: "transparent", border:"transparent"}} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '} */}
        <button style={{ background: "transparent", border: "transparent" }} onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<קודם'}
        </button>{' '}
        <button style={{ background: "transparent", border: "transparent" }} onClick={() => nextPage()} disabled={!canNextPage}>
          {'הבא>'}
        </button>{' '}
        {/* <button style={{background: "transparent", border:"transparent"}} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '} */}
        <span style={{ textAlign: "right" }}>
          {' '}
          {/* <strong> */}
          {pageIndex + 1} מתוך {pageOptions.length} רשומות
          {/* </strong> */}
          {' '}
        </span>
        <span>
          {/* | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          /> */}
        </span>{' '}

      </div>
    </>
  )
}

// function filterGreaterThan(rows, id, filterValue) {
//   return rows.filter(row => {
//     const rowValue = row.values[id]
//     return rowValue >= filterValue
//   })
// }

// filterGreaterThan.autoRemove = val => typeof val !== 'number'

function App(props) {

  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = props.data.filter(item => {
        let startsWith = []
        let includes = []

        for (let index = 0; index < Object.keys(item).length; index++) {
          const field = Object.keys(item)[index]

          if (item[field] !== null) {
            startsWith = (item[field]).toString().toLowerCase().startsWith(value.toString().toLowerCase())
            includes = (item[field]).toString().toLowerCase().includes(value.toString().toLowerCase())

            if (field.includes("date") === true || field.includes("open_request") === true) {
              startsWith = `${new Date(item[field]).getDate()}${"-"}${new Date(item[field]).getMonth() + 1}${"-"}${new Date(
                item[field]).getFullYear()}`.toString().toLowerCase().startsWith(value.toString().toLowerCase())

              includes = `${new Date(item[field]).getDate()}${"-"}${new Date(item[field]).getMonth() + 1}${"-"}${new Date(
                item[field]).getFullYear()}`.toString().toLowerCase().includes(value.toString().toLowerCase())
            }

            if (startsWith) {
              return startsWith
            } else if (!startsWith && includes) {
              return includes
            }
          }
        }
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  const columns = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '-' : '+'}
          </span>
        )
      },
      {
        Header: 'title',
        columns: props.columns
        // Filter: SelectColumnFilter,
        // filter: 'multiple'
      }

    ],
    []
  )
  
  return (

    // <Styles>
    <Fragment>
      <CssBaseline />
      <Row className='justify-content-end mx-0'>
        <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
          <Label className='me-1' for='search-input'>
            Search
          </Label>
          <Input
            className='dataTable-filter mb-50'
            type='text'
            bsSize='sm'
            id='search-input'
            value={searchValue}
            onChange={handleFilter}
          />
        </Col>
      </Row>
      <Tables columns={columns} data={searchValue.length ? filteredData : props.data} sortBy={props.sortBy} renderRowSubComponent={props.renderRowSubComponent}
      />
    </Fragment>
    // </Styles>
  )
}

export default App