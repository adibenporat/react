// ** React Imports
import { useState } from 'react'

// ** Table columns & Expandable Data
import ExpandableTable from '../data'
// import {columns, data} from './TableMethod1'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
  import { Card, CardHeader, CardTitle, Label, Row, Col, Input} from 'reactstrap'

const Tabless = (props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  
    // ** Function to handle filter
    const handleFilter = e => {
      const value = e.target.value
      let updatedData = []
      setSearchValue(value)
  
  
      if (value.length) {
        updatedData = data.filter(item => {
          const startsWith =
            item.cell.toLowerCase().startsWith(value.toLowerCase())
  
          const includes =
            item.cell.toLowerCase().includes(value.toLowerCase())

          if (startsWith) {
            return startsWith
          } else if (!startsWith && includes) {
            return includes
          } else return null
        })
        setFilteredData(updatedData)
        setSearchValue(value)
      }
    }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? Math.ceil(filteredData.length / 7) : Math.ceil(props.data.length / 7) || 1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      nextLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextClassName='page-item next-item'
      previousClassName='page-item prev-item'
      containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1'}
    />
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Expandable Row</CardTitle>
      </CardHeader>
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
      <div className='react-dataTable'>
        <DataTable
          noHeader
          pagination
          expandableRows
          columns={props.columns}
          expandOnRowClicked
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : props.data}
          paginationDefaultPage={currentPage + 1}
          expandableRowsComponent={ExpandableTable}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </Card>
  )
}

export default Tabless
