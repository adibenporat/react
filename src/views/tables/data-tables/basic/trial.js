import { Fragment } from "react"
// import { Circle } from "react-feather"
import CardStyleVariation from "../../../ui-elements/cards/basic/CardStyleVariation"
import Section from "../../../ui-elements/Section"
import CitiesData from "./EditedData.json"
import FullData from "./tlv_data.json"
// import DataTableWithButtons from "./DataTableWithButtons"
// import Dta from "./Dta"
import { UncontrolledTooltip } from "reactstrap"
import info6 from "../../../../assets/images/icons/info6.svg"
export const navigation = []

const SectionMethod = () => {
  const page = []

  function dynamicSection(section) {
    debugger
    const sec = []
    // const expand = []
    // let flag = false
    // let overDatas = []

    for (let i = 0; i < section.length; i++) {
      if (section[i].section_name) {
        sec.push(
          <Section
            id={section[i].section_name}
            title={section[i].section_name}
            body={dynamicSection(section[i].fields)}
          />
        )
        // //  navigat.push(
        // //   {id: i,
        // //   title: section[i].section_name,
        // //   icon: section[i].image,
        // //   navLink:`/#${section[i].section_name}`
        // // }
        // )
      } else if (section[i].component === "card" && section[i].visble === "yes") {
        if (section[i].layer) {
          const arr = section[i].layer
          for (
            let DetailData = 0;
            DetailData < (Object(FullData)[arr]).length;
            DetailData++
          ) {
            const overData = Object(FullData)[arr][DetailData]
            if (section[i].field_type === "decimal2" && !section[i].append) {
              sec.push(
                <CardStyleVariation
                  key={i}
                  title={section[i].title}
                  text={new Intl.NumberFormat().format(
                    parseFloat(overData[section[i].field]).toFixed(
                      section[i].number_of_digits
                    )
                  )}
                />
              )
            } else if (
              section[i].field_type === "decimal2" &&
              section[i].append
            ) {
              sec.push(
                <CardStyleVariation
                  key={i}
                  title={section[i].title}
                  text={`${new Intl.NumberFormat().format(
                    parseFloat(overData[section[i].field]).toFixed(
                      section[i].number_of_digits
                    )
                  )}${" "}${section[i].append}`}
                />
              )
            } else if (section[i].field_type === "int" && !section[i].append) {
              sec.push(
                <CardStyleVariation
                  key={i}
                  title={section[i].title}
                  text={new Intl.NumberFormat().format(
                    overData[section[i].field]
                  )}
                />
              )
            } else if (section[i].field_type === "int" && section[i].append) {
              sec.push(
                <CardStyleVariation
                  key={i}
                  title={section[i].title}
                  text={`${new Intl.NumberFormat().format(
                    overData[section[i].field]
                  )}${" "}${section[i].append}`}
                />
              )
            } else if (!section[i].field_type && section[i].append) {
              sec.push(
                <CardStyleVariation
                  key={i}
                  title={section[i].title}
                  text={`${overData[section[i].field]}${" "}${
                    section[i].append
                  }`}
                />
              )
            } else if (section[i].field_type === "date") {
              sec.push(
                <CardStyleVariation
                  key={i}
                  title={section[i].title}
                  text={`${new Date(
                    overData[section[i].field] * 1000
                  ).getDate()}${"-"}${
                    new Date(overData[section[i].field] * 1000).getMonth() + 1
                  }${"-"}${new Date(
                    overData[section[i].field] * 1000
                  ).getFullYear()}`}
                />
              )
            } else if (section[i].field_type === "link") {
              sec.push(
                <CardStyleVariation
                  key={i}
                  title={section[i].title}
                  text={
                    <a href={overData[section[i].field]}>
                      {section[i].lang_description_he}
                    </a>
                  }
                />
              )
              // } else if (overData[section[i].field].length > 30) {
              //   sec.push(
              //     <CardStyleVariation
              //       // scrollbar
              //       key={i}
              //       title={section[i].title}
              //       text={overData[section[i].field]}
              //     />
              //   )
            } else sec.push(<CardStyleVariation
                  key={i}
                  title={section[i].title}
                  text={overData[section[i].field]}
                />
              )
          }
        }
      // } else if (section[i].header) {
      //   if (section[i].type === "table" && section[i].fields) {
      //     if (section[i].layer) {
      //       const arr = section[i].layer
      //       for (
      //         let DetailData = 0;
      //         DetailData < Object(FullData)[arr].length;
      //         DetailData++
      //       ) {
      //         overDatas = Object(FullData)[arr][DetailData]
      //         const caseInsensitiveSort = (rowA, rowB) => {
      //           const a = rowA.fkey.toLowerCase()
      //           const b = rowB.fkey.toLowerCase()

      //           if (a > b) {
      //             return 1
      //           }

      //           if (b > a) {
      //             return -1
      //           }

      //           return 0
      //         }
      //         const ExpandableTable = (element) => {
      //           return (
      //             <div className="expandable-content p-2">
      //               <p>
      //                 <span className="fw-bold">{element.title}</span>
      //                 {overDatas[element.field]}
      //               </p>
      //             </div>
      //           )
      //         }
      //         const data = section[i].fields
      //         const columns = data.map((element, id) => {
      //           if (element.visble === "yes") {
      //             // for (
      //             //   let DetailData = 0;
      //             //   DetailData < Object(FullData)[arr].length;
      //             //   DetailData++
      //             // ) {
      //             //   overDatas = Object(FullData)[arr][DetailData]
      //             if (element.field_type === "date" && !element.default_sort) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 // selector: (row) => row.fkey,
      //                 selector: element => `${new Date(overDatas[element.field] * 1000).getDate()}${"-"}${
      //                     new Date(overDatas[element.field] * 1000).getMonth() + 1}${"-"}${new Date(
      //                     overDatas[element.field] * 1000
      //                   ).getFullYear()}`
      //               }
      //             }
      //             if (element.field_type === "date" && element.default_sort) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 defaultSortAsc: true,
      //                 sortFunction: caseInsensitiveSort,
      //                 // selector: (row) => row.fkey,
      //                 selector: element => `${new Date(overDatas[element.field] * 1000).getDate()}${"-"}${
      //                     new Date(overDatas[element.field] * 1000).getMonth() + 1
      //                   }${"-"}${new Date(overDatas[element.field] * 1000).getFullYear()}`
      //               }
      //             }
      //             if (
      //               element.field_type === "date" &&
      //               element.default_sort === true &&
      //               element.sort_type === "asc"
      //             ) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 defaultSortAsc: true,
      //                 sortFunction: caseInsensitiveSort,
      //                 // selector: (row) => row.fkey,
      //                 selector: element => `${new Date(overDatas[element.field] * 1000).getDate()}${"-"}${
      //                     new Date(overDatas[element.field] * 1000).getMonth() + 1
      //                   }${"-"}${new Date(overDatas[element.field] * 1000).getFullYear()}`
      //               }
      //             }
      //             if (
      //               element.field_type === "date" &&
      //               element.default_sort === true &&
      //               element.sort_type === "desc"
      //             ) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 // selector: (row) => row.fkey,
      //                 defaultSortAsc: false,
      //                 selector: element => `${new Date(overDatas[element.field] * 1000).getDate()}${"-"}${
      //                     new Date(overDatas[element.field] * 1000).getMonth() + 1
      //                   }${"-"}${new Date(overDatas[element.field] * 1000).getFullYear()}`
      //               }
      //             }
      //             if (
      //               element.field_type === "decimal2" &&
      //               !element.default_sort
      //             ) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 // selector: (row) => row.fkey,
      //                 selector: element => new Intl.NumberFormat().format(
      //                     parseFloat(overDatas[element.field].fkey).toFixed(
      //                       element.number_of_digits
      //                     )
      //                   )
      //               }
      //             }
      //             if (
      //               element.field_type === "decimal2" &&
      //               element.default_sort === true &&
      //               element.sort_type === "asc"
      //             ) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 defaultSortAsc: true,
      //                 // selector: (row) => row.fkey,
      //                 selector: element => new Intl.NumberFormat().format(
      //                     parseFloat(overDatas[element.field]).toFixed(
      //                       element.number_of_digits
      //                     )
      //                   )
      //               }
      //             }
      //             if (
      //               element.field_type === "decimal2" &&
      //               element.default_sort === true &&
      //               element.sort_type === "desc"
      //             ) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 defaultSortAsc: false,
      //                 // selector: (row) => row.fkey,
      //                 selector: element => new Intl.NumberFormat().format(
      //                     parseFloat(overDatas[element.field]).toFixed(
      //                       element.number_of_digits
      //                     )
      //                   )
      //               }
      //             }
      //             if (element.field_type === "int" && !element.default_sort) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 // selector: (row) => row.fkey,
      //                 selector: element => new Intl.NumberFormat().format(parseInt(overDatas[element.field]))
      //               }
      //             }
      //             if (
      //               element.field_type === "int" &&
      //               element.default_sort === true &&
      //               element.sort_type === "asc"
      //             ) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 defaultSortAsc: true,
      //                 // selector: (row) => row.fkey,
      //                 selector: element => new Intl.NumberFormat().format(parseInt(overDatas[element.field]))
      //               }
      //             }
      //             if (
      //               element.field_type === "int" &&
      //               element.default_sort === true &&
      //               element.sort_type === "desc"
      //             ) {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 defaultSortAsc: false,
      //                 // selector: (row) => row.fkey,
      //                 selector: element => new Intl.NumberFormat().format(parseInt(overDatas[element.field]))
      //               }
      //             }
      //             if (element.field_type === "link") {
      //               return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 // selector: (row) => row.fkey,
      //                 selector: element => (
      //                   <a href={overDatas[element.field]}>{element.lang_description_he}</a>
      //                 )
      //               }
      //             }
      //             if (overDatas[element.field].length > 30) {
      //               flag = true
      //               return expand.push(ExpandableTable(element))
      //             } else return {
      //                 key: id,
      //                 name: element.title,
      //                 sortable: true,
      //                 minWidth: "100px",
      //                 // selector: (row) => row.fkey,
      //                 selector: element => overDatas[element.field]
      //               }
      //           }
              
      //       flag = false
      //         })
      //         if (flag === true) {
      //           sec.push(
      //             <Section
      //               id={section[i].header}
      //               title={section[i].header}
      //               body={
      //                 <Dta
      //                   key={i}
      //                   columns={columns}
      //                   data={overDatas}
      //                   ExpandableTable={expand}
      //                 />
      //               }
      //             />
      //           )
      //         } else sec.push(
      //             <Section
      //               id={section[i].header}
      //               title={section[i].header}
      //               body={
      //                 <DataTableWithButtons
      //                   key={i}
      //                   data={overDatas}
      //                   columns={columns}
      //                 />
      //               }
      //             />
      //           )
      //       }
      //     }
      //   }
      }
    }
    console.log(sec)
    return sec
  }

  function dynamicNav(section) {
    const navigat = []

    for (let i = 0; i < section.length; i++) {
      if (section[i].section_name) {
        navigat.push({
          id: i,
          title: section[i].section_name,
          icon: section[i].image,
          navLink: `${"#"}${section[i].section_name}`
          // navLink: <a href={section[i].section_name}></a>
        })
      }
    }
    return navigat
  }
  // debugger
  for (let i = 0; i < CitiesData.length; i++) {
    if (CitiesData[i].section_name) {
      if (CitiesData[i].section_i) {
        page.push(
          <Section
            id={CitiesData[i].section_name}
            title={
              <div>
                {CitiesData[i].section_name}
                <img src={info6} width="30" id={`${"positionBottom"}${i}`} />
                <UncontrolledTooltip
                  placement="bottom"
                  target={`${"positionBottom"}${i}`}
                >
                  {CitiesData[i].section_i}
                </UncontrolledTooltip>
              </div>
            }
            body={dynamicSection(CitiesData[i].fields)}
          />
        )
      } else if (!CitiesData[i].section_i) {
        page.push(
          <Section
            id={CitiesData[i].section_name}
            title={CitiesData[i].section_name}
            body={dynamicSection(CitiesData[i].fields)}
          />
        )
      }
      navigation.push({
        id: i,
        title: CitiesData[i].section_name,
        icon: "",
        navLink: `/#${CitiesData[i].section_name}`,
        children: dynamicNav(CitiesData[i].fields)
      })
    }
  }
  return <Fragment>{page}</Fragment>
}

export default SectionMethod
