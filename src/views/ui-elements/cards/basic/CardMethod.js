import { Fragment} from "react"
import CustomeData from "./data.json"
import CardStyleVariation from "./CardStyleVariation"

const CardMethod = () => {
//   const [plansRenew, setplansRenew] = useState([])

// useEffect(() => {
// setplansRenew([...plansRenew, New])
// })
const plansRenew = []

// setplansRenew([...plansRenew, `${theArray.length}`] )
// debugger
  for (let index = 1; index < CustomeData.length; index++) {
    const section = CustomeData[index]
    if (section.section_name) {
      if (section.section_inner || !section.section_inner) {
        for (
          let innerSection = 0;
          innerSection < section.fields.length;
          innerSection++
        ) {
          if (section.fields[innerSection].component === "card") {
            plansRenew.push( 
              <CardStyleVariation
                key={innerSection}
                title={section.fields[innerSection].title}
                text={section.fields[innerSection].source_info}
              />
            )
          } 
        } 
      }
    }
  }
  return <Fragment>{plansRenew}</Fragment>
}

export default CardMethod

// section.fields.forEach((row, planIndex => {