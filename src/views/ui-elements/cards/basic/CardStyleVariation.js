// ** React Imports
// import { Fragment } from "react"
// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Col} from "reactstrap"

const CardStyleVariation = (props) => {

  return (
  // <Fragment>
  //    <h5 className="mt-3 mb-2"></h5>

        <Col md={props.md} xl={props.xl}>
          <Card style={{border:"0px"}} color={props.color} className={props.className} inverse height={200} >
            <CardBody>
              <CardTitle className="text-black" tag="h4">
                {props.title}  
                </CardTitle>
              <CardText className="text-black">
                {props.text} 
                </CardText>
            </CardBody>
          </Card>
       </Col>         
       
  )
  }

export default CardStyleVariation
