// ** React Imports
import { Fragment } from "react"

import CardStyleVariation from "./CardStyleVariation"
import PostData from "./Tel_Aviv.json"

// ** Custom Components
const heterimCards = []

const HeterimCards = () => {
  for (let index = 1; index < PostData.length; index++) {
    const section = PostData[index]
    if (section.section_name === "היתרים") {
      for (
        let sectionFieldIndex = 0;
        sectionFieldIndex < section.fields.length;
        sectionFieldIndex++
      ) {
        const sectionField = section.fields[sectionFieldIndex]
        if (sectionField.header === "היתרים בכתובת") {
          sectionField.fields.map((row, id8) => {
            heterimCards.push(
              <CardStyleVariation
                key={id8}
                title={row.lang_title_he}
                text={row.fkey}
              ></CardStyleVariation>
            )
          })

          return <Fragment><h2>{section.section_name}</h2>{heterimCards}</Fragment>
        }
      }
    }
  }
}

export default HeterimCards
