// ** Third Party Components
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label } from 'reactstrap'

const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' }
]

const SelectReact = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>React Select</CardTitle>
      </CardHeader>

      <CardBody>
        <p>
        </p>
        <Row>
          <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Basic</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default SelectReact
