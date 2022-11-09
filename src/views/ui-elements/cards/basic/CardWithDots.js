import React from "react"
import "./CardWithDots.css"
import {Col} from "reactstrap"
import ReadMore from "../../../tables/data-tables/basic/ReadMore"


const CardWithDots = (props) => {
    return (
      <React.Fragment>
        <div className="dotted-data-container">
          <div className="dotted-data-key">{props.title}</div>
          <div className="dotted-data-separator"></div>
          <Col md="2" xl="2"> 

          <div className="right dotted-data-value"> <ReadMore text={`${props.text}`}/></div>
          </Col> 
        </div>
      </React.Fragment>
    )
  }
  export default CardWithDots
  
//   ReactDOM.render(<CardWithDots/>, document.getElementById("root"));