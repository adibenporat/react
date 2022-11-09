// ** React Imports
// import { Fragment } from "react"
// ** Reactstrap Imports
// import CardAction from '@components/card-actions'

// ** Reactstrap Imports
import {Row, Col} from 'reactstrap'
import AccordionWithoutArrow from "../components/accordion/AccordionWithoutArrow"

const Section = (props) => {

return (
  <section id={props.id} >
    <Row>
        <Col sm='12'>
          <AccordionWithoutArrow style={{border:"0px" }}
          title={props.title}
          body={props.body}/>
        </Col>
        </Row>
    </section>
    )
}
                                   
export default Section