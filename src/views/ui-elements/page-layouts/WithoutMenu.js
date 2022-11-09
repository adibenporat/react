// ** React Imports
import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
// ** Reactstrap Imports
// import { Alert } from 'reactstrap'

// // ** Custom Components
// import Breadcrumbs from '@components/breadcrumbs'
// import Ecommerce from '../../dashboard/ecommerce'
import MethodTrial from '../../tables/data-tables/basic/MethodTrial'
import Printer from '../../tables/data-tables/basic/Printer'

const WithoutMenu = () => {
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
         <Printer/>
      <MethodTrial/>
        </Col>
      </Row>
    </Fragment>
  )
}

export default WithoutMenu
