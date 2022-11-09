// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
// import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'
// import { useRTL } from '@hooks/useRTL'
// import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Demo Components

// ** Styles
// import '@styles/react/libs/tables/react-dataTable-component.scss'
import MethodTrial from './MethodTrial'
// import ApexLineChart from '../../../charts/apex/ApexLineChart'
// import SelectReact from '../../../forms/form-elements/select/SelectReact'
const Tables = () => {
  // const [isRtl] = useRTL()

  // ** Theme Colors
  // const { colors } = useContext(ThemeColors)
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
      <MethodTrial/>
        </Col>
      </Row>
      {/* <Row>
      <Col sm='6'>
         <SelectReact/>
        </Col>
        <Col sm='6'>
        <ApexLineChart direction={isRtl ? 'rtl' : 'ltr'} warning={colors.warning.main}/>
        </Col>
      </Row> */}
    </Fragment>
  )
  }
  
export default Tables