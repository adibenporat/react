import { Fragment } from "react"
import CustomeData from "./data.json"
import TableServerSide from "../advance/TableServerSide"
// import { data, columns } from "../data"


const TableMethod = () => {
  const table = []

  for (let index = 1; index < CustomeData.length; index++) {
    const section = CustomeData[index]
    if (section.section_name) {
      if (section.section_inner || !section.section_inner) {
        for (
          let innerSection = 0;
          innerSection < section.fields.length;
          innerSection++
        ) {
          if (
            section.fields[innerSection].header ||
            !section.fields[innerSection].header
          ) {
            if (section.fields[innerSection].type === "table") {
              table.push(
                <TableServerSide
                />
              )
            }
          }
        }
      }
    }
  }
  return <Fragment>{table}</Fragment>
}

export default TableMethod