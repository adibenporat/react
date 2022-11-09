import { Fragment } from "react"
import { Circle } from "react-feather"
import CardStyleVariation from "../../../ui-elements/cards/basic/CardStyleVariation"
import Section from "../../../ui-elements/Section"
import CustomeData from "./data.json"
import DataTableWithButtons from "./DataTableWithButtons"
export const navigation = []


const SectionMethod = () => {
  const page = []
  let card = []

  for (let index = 1; index < CustomeData.length; index++) {
    const section = CustomeData[index]
    if (section.section_inner) {
      navigation.push({
        id: index,
        title: section.section_name,
        icon: "",
        children: [
          {
            id: index,
            title: section.section_inner,
            icon: <Circle size={12} />,
            navLink: `#${section.section_inner}`
          }
        ]
      })
      
    } else {
      navigation.push({
      id: index,
      title: section.section_name,
      icon: "",
      navLink: `#${section.section_name}`
      })
      
    }
    if (section.section_name) {
      for (
        let innerSection = 0;
        innerSection < section.fields.length;
        innerSection++
      ) {
        if (section.fields[innerSection].component === "card") {
          card = section.fields.map((cardCreate, innerSection) => {
            return (
              <CardStyleVariation
                key={innerSection}
                title={cardCreate.title}
                text={cardCreate.source_info}
              />
            )
          })
        } else if (section.fields[innerSection].header) {
          if (section.fields[innerSection].type === "table") {
            const inner = section.fields[innerSection]
            const data = inner.fields

            const columns = data.map((element, id) => {
              return {
                key: id,
                name: element.title,
                sortable: (element) => element.fkey,
                minWidth: "100px",
                cell: () => element.fkey
              }
            })
            page.push(
              <Section
                id={section.section_name}
                title={section.section_name}
                body={
                  <Section
                    id={section.fields[innerSection].header}
                    title={section.fields[innerSection].header}
                    body={
                      <DataTableWithButtons
                        key={innerSection}
                        data={data}
                        columns={columns}
                      />
                    }
                  />
                }
              />
            )
          }
        }
      }
    }
    if (section.section_inner) {
      page.push(
        <Section
          id={section.section_name}
          title={section.section_name}
          body={<Section
            id={section.section_inner}
            title={section.section_inner} 
            body={card} />}
        />
      )
    } else if (section.section_inner === "") {
      page.push(<Section
        id={section.section_name}
        title={section.section_name} 
        body={card} />)
    }
  }

  // CustomeData.map((menuCreate, sectionname) => {
  //   if (menuCreate.section_inner) {
  //       navigation.push({
  //       id: sectionname,
  //       title: menuCreate.section_name,
  //       icon: "",
  //       children: [
  //         {
  //           id: sectionname,
  //           title: menuCreate.section_inner,
  //           icon: <Circle size={12} />,
  //           navLink: `#${menuCreate.section_inner}`
  //         }
  //       ]
  //       })
  //   } else {
  //     navigation.push({
  //       id: sectionname,
  //       title: menuCreate.section_name,
  //       icon: "",
  //       navLink: `#${menuCreate.section_name}`
  //     })
  //   }
  //  })
  console.log(navigation)
  return <Fragment>{page}</Fragment> 
}

export default SectionMethod