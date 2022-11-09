// ** React Imports
import { Fragment, useState } from "react"
import CardStyleVariation from "./CardStyleVariation"
import PostData from "./Tel_Aviv.json"

// ** Custom Components
const Plans_Renew_City = () => {
  // ** States
const [plansRenew, setplansRenew] = useState([])

setplansRenew([...plansRenew])

  for (let index = 11; index < PostData.length; index++) {
    const section = PostData[index]
    if (section.section_name) {
     section.fields.map((row, plan) => {
      return plansRenew.push(
         <CardStyleVariation
              key={plan}
              title={row.lang_title_he}
              text={row.source_info}
            ></CardStyleVariation>
        )
      })
      console.log(plansRenew)        
    }       
  }
}

export default Plans_Renew_City