// ** React Imports
import { Fragment } from "react"
import CardStyleVariation from "./CardStyleVariation"
import PostData from "./Tel_Aviv.json"

// ** Custom Components
const Plans_Renew_City = () => {

const plansRenew = []
  for (let index = 11; index < PostData.length; index++) {
    const section = PostData[index]
    if (section.section_name === 'תוכנית רובע 4') {
      section.fields.map((row, plan) => { 
          plansRenew.push(
            <CardStyleVariation
              key={plan}
              title={row.lang_title_he}
              text={row.source_info}
            ></CardStyleVariation>
            
        )           
      })   
      return <Fragment><h2>{section.section_name}</h2>{plansRenew}</Fragment>//            
    }          
  }
 
 
}

export default Plans_Renew_City