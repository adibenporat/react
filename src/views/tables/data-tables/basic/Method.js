import React, { Fragment, Suspense, lazy } from "react"
// import { Circle } from "react-feather"
import CardStyleVariation from "../../../ui-elements/cards/basic/CardStyleVariation"
// import Section from "../../../ui-elements/Section"
const Section = lazy(() => import("../../../ui-elements/Section"))
import CitiesData from "./EditedData.json"
// import Data from "../../../ui-elements/cards/basic/Tel_Aviv.json"
import FullData from "./tlv_data.json"
// import DataTableWithButtons from "./DataTableWithButtons"
// import Expanadable from "./Expanadable"
import { UncontrolledTooltip } from "reactstrap"
import info6 from "../../../../assets/images/icons/info6.svg"
import "./method.css"
import TableNew from "../basic/TableNew"
import TabsNewDesign from "../../../components/tabs/TabsNewDesign"
// import Tabs from '@mui/material/Tabs'

export const navigation = []

// import { SortOrder } from "react-data-table-component"
// import { LazyLoad } from 'react-observer-api'


// import useScript from './useScript'
// import cardmatch from './cardmatch.js'
/* <script src={cardmatch}></script>  */

const SectionMethod = () => {
  const page = []
  let renderRowSubComponent = []
  function dynamicSection(section) {
    // useEffect(() => {

    // const map_array = []
    //   $("div[class*='cardmatch']").each(function () {
    //     map_array.push(className)
    //   })
    //   const unique = map_array.filter((item, i, ar) => ar.indexOf(item) === i)
    //   $(unique).each(function (value) {
    //     let x = 0
    //     $("[class='", `${value}`, "']")
    //       .each(function (it) {
    //         if ($(it).actual("height") > x) {
    //           x = $(it).actual("height") + 10
    //         }
    //       })
    //       .height(x)
    //   })
    //   }, [])
    // useScript('./cardmatch.js')
//     <Helmet>
// <script src={cardmatch} type="text/javascript" />
// </Helmet>
// const jQueryCode = () => {
// const map_array = []
// $("div[class*='cardmatch']").each(function (index, element) {
//   map_array.push(className)
// })
// const unique = map_array.filter((item, i, ar) => ar.indexOf(item) === i)
// $(unique).each(function (index, value) {
//   const x = 0
//   $("[class='" + value + "']")
//     .each(function (id, it) {
//       if ($(it).actual("height") > x) {
//         x = $(it).actual("height") + 10
//       }
//     })
//     .height(x)
// })

// const map_array = []
// document.getElementsByClassName('cardmatch').forEach(function (index, element) {
//   map_array.push(className)
// })
// const unique = map_array.filter((item, i, ar) => ar.indexOf(item) === i)
// document.getElementsByName(unique).each(function (index, value) {
//   const x = 0
//   $("[class='" + value + "']")
//     .forEach(function (id, it) {
//       if ($(it).actual("height") > x) {
//         x = $(it).actual("height") + 10
//       }
//     })
//     .height(x)
// })

// const map_array = []
// document.querySelector("div[class*='cardmatch']").forEach(function (index, element) {
//   map_array.push(className)
// })
// const unique = map_array.filter((item, i, ar) => ar.indexOf(item) === i)
// document.querySelector(unique).forEach(function (index, value) {
//   const x = 0
//   document.querySelector("[class='" + value + "']")
//     .forEach(function (id, it) {
//       if (document.querySelector(it).actual("height") > x) {
//         x = document.querySelector(it).actual("height") + 10
//       }
//     })
//     .offsetHeight(x)
// })

// }
// useEffect(() => {
//   jQueryCode()
// }, [])
    const sec = []
    let flag = false
    let table = false
    const sortBy = []
    // const ExpandableTable = []

    for (let i = 0; i < section.length; i++) {
      if (section[i].section_name) {
        sec.push( 
          <Suspense fallback={<div>Loading...</div>}>
          {/* <LazyLoad> */}
          <TabsNewDesign
            value={i}
            title={section[i].section_name}
            sections = {<Section
            id={section[i].section_name}
            title={section[i].section_name}
            body={dynamicSection(section[i].fields)}
          />}
         />
          {/* </LazyLoad> */}
           </Suspense>
        )
        // //  navigat.push(
        // //   {id: i,
        // //   title: section[i].section_name,
        // //   icon: section[i].image,
        // //   navLink:`/#${section[i].section_name}`
        // // }
        // )
      } else if (section[i].component === "card" && section[i].visble === "") {
        if (section[i].layer) {
          const arr = section[i].layer
          for (
            let DetailData = 0;
            DetailData < (Object(FullData)[arr]).length;
            DetailData++
          ) {
            const overData = Object(FullData)[arr][DetailData]
            const text = overData[section[i].field]
            if (section[i].field_type === "decimal2" && !section[i].append) {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={new Intl.NumberFormat().format(
                    parseFloat(overData[section[i].field]).toFixed(
                      section[i].number_of_digits
                    )
                  )}
                />
              )
            } else if (text === null) {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={"-"}
                />
              )
            } else if (
              section[i].field_type === "decimal2" &&
              section[i].append
            ) {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
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
                <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={new Intl.NumberFormat().format(
                    overData[section[i].field]
                  )}
                />
              )
            } else if (section[i].field_type === "int" && section[i].append) {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={`${new Intl.NumberFormat().format(
                    overData[section[i].field]
                  )}${" "}${section[i].append}`}
                />
              )
            } else if (!section[i].field_type && section[i].append) {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={`${overData[section[i].field]}${" "}${
                    section[i].append
                  }`}
                />
              )
            } else if (section[i].field_type === "date" && section[i].field.includes("unix") === false) {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={`${new Date(
                    overData[section[i].field]
                  ).getDate()}${"-"}${
                    new Date(overData[section[i].field]).getMonth() + 1
                  }${"-"}${new Date(
                    overData[section[i].field] 
                  ).getFullYear()}`}
                />
              )
            } else if (section[i].field_type === "date" && section[i].field.includes("unix") === true && overData[section[i].field].length <= 10) {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
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
            } else if (section[i].field_type === "date" && section[i].field.includes("unix") === true && overData[section[i].field].length > 10) {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={`${new Date(
                    overData[section[i].field] 
                  ).getDate()}${"-"}${
                    new Date(overData[section[i].field]).getMonth() + 1
                  }${"-"}${new Date(
                    overData[section[i].field]
                  ).getFullYear()}`}
                />
              )
            } else if (section[i].field_type === "link") {
              sec.push(
                <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={
                    <a href={overData[section[i].field]}>
                      {section[i].lang_description_he}
                    </a>
                  }
                />
              )
              } else if (text !== null && text !== undefined && text.length > 20) {
                sec.push(
                  <CardStyleVariation className={`${"scrolli cardmatch"}${i}`}
                    key={i}
                    title={section[i].title}
                    text={overData[section[i].field]}
                  />
                )
            } else sec.push(
              <CardStyleVariation className={`cardmatch${i}`}
                  key={i}
                  title={section[i].title}
                  text={overData[section[i].field]}
                />
            )
          }         
          // const arr1 = []
          // if (cardHeight.length !== null || cardHeight !== undefined) {
          // for (let i = 0; i < cardHeight.length; i++) {
          //   if (cardHeight[i] !== null || cardHeight[i] !== undefined) { 
          //   arr1.push(cardHeight[i])
            // console.log(arr1)
            // const height = cardHeight[i].offsetHeight
            // const height2 = cardHeight[i + 1].offsetHeight
            //  if (height > height2) {
            //     height2 = height
            //     console.log(height, height2)
            //    } else if (height < height2) {
            //     height = height2
            //     console.log(height, height2)
            //    }
            // }
            // cardHeight.sort()
            // console.log(cardHeight)
          // }
        // }
      }
     
      } else if (section[i].header) {
        if (section[i].type === "table" && section[i].fields) {
          const arr = section[i].layer
          if (section[i].layer) {
            if (Object(FullData)[arr].length > 0) {
              const data = section[i].fields
              const columns = []
  
              data.forEach((element, i) => {
                if (element.visble === "yes") {
                  const caseInsensitiveSort = (rowA, rowB) => {
                    if (rowA.name !== null && rowB.name !== null) {
                    const a = (rowA[element.field])
                    const b = (rowB[element.field])
                    return (a - b)
                  }
                }
                  if (element.field_type === "date" && !element.default_sort && element.expandable === "no") {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 1,
                      minWidth: "200px",
                      accessor: overDatas => `${new Date(overDatas[element.field]).getDate()}${"-"}${
                          new Date(overDatas[element.field]).getMonth() + 1}${"-"}${new Date(
                          overDatas[element.field]
                        ).getFullYear()}`,
                        // format: overDatas => moment(overDatas[element.field]),
                        sortFunction: caseInsensitiveSort
                    })
                  // } else if (element.field_type === "date" && element.default_sort && element.expandable === "no") {
                  //   columns.push({
                  //     id: i,
                  //     Header: element.title,
                  //     sortType: 'alphanumeric',
                  //     sortable: true,
                  //     // minWidth: "100px",
                  //     grow: 1,
                  //     wrap: true,
                  //     minWidth: "200px",
                  //     accessor: overDatas => `${new Date(overDatas[element.field]).getDate()}${"-"}${
                  //         new Date(overDatas[element.field]).getMonth() + 1
                  //       }${"-"}${new Date(overDatas[element.field]).getFullYear()}`,
                  //       // format: overDatas => moment(overDatas[element.field]),
                  //     sortFunction: caseInsensitiveSort
                  //   })
                  } else if (
                    element.field_type === "date" &&
                    element.default_sort === true &&
                    element.sort_type === "asc" &&
                    element.expandable === "no"
                  ) {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      grow: 1,
                      wrap: true,
                      minWidth: "200px",
                      accessor: overDatas => `${new Date(overDatas[element.field]).getDate()}${"-"}${
                          new Date(overDatas[element.field]).getMonth() + 1
                        }${"-"}${new Date(overDatas[element.field]).getFullYear()}`,
                        SortByFn: caseInsensitiveSort
                    })
                    sortBy.push({ id: i, desc: false })
                    flag = true
                  } else if (
                    element.field_type === "date" &&
                    element.default_sort === true &&
                    element.sort_type === "desc" &&
                    element.expandable === "no"
                  ) {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 1,
                      minWidth: "200px",
                      accessor: overDatas => `${new Date(overDatas[element.field]).getDate()}${"-"}${
                          new Date(overDatas[element.field]).getMonth() + 1
                        }${"-"}${new Date(overDatas[element.field]).getFullYear()}`,
                        sortFunction: caseInsensitiveSort
                    })
                    sortBy.push({ id: i, desc: true })
                    flag = false
                  } else if (
                    element.field_type === "decimal2" &&
                    !element.default_sort &&
                    element.expandable === "no"
                  ) {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 2,
                      minWidth: "200px",
                      accessor: overDatas => `${new Intl.NumberFormat().format(
                          parseFloat(overDatas[element.field]).toFixed(
                            element.number_of_digits
                          )
                        )}`,
                        sortFunction: caseInsensitiveSort
                    })
                  } else if (
                    element.field_type === "decimal2" &&
                    element.default_sort === true &&
                    element.sort_type === "asc" &&
                    element.expandable === "no"
                  ) {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 2,
                      minWidth: "200px",
                      accessor: overDatas => `${new Intl.NumberFormat().format(
                          parseFloat(overDatas[element.field]).toFixed(
                            element.number_of_digits
                          )
                        )}`,
                      sortFunction: caseInsensitiveSort
                    })
                    sortBy.push({ id: i, desc: false })
                    flag = true
                  } else if (
                    element.field_type === "decimal2" &&
                    element.default_sort === true &&
                    element.sort_type === "desc" &&
                    element.expandable === "no"
                  ) {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 2,
                      minWidth: "200px",
                      accessor: overDatas => `${new Intl.NumberFormat().format(
                          parseFloat(overDatas[element.field]).toFixed(
                            element.number_of_digits
                          )
                        )}`,
                      sortFunction: caseInsensitiveSort
                    })
                    sortBy.push({ id: i, desc: true })
                    flag = false
        
                  } else if (element.field_type === "int" && !element.default_sort && element.expandable === "no") {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 2,
                      minWidth: "200px",
                      accessor: overDatas => `${new Intl.NumberFormat().format(parseInt(overDatas[element.field]))}`
                    })
                  } else if (
                    element.field_type === "int" &&
                    element.default_sort === true &&
                    element.sort_type === "asc" &&
                    element.expandable === "no"
                  ) {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 2,
                      minWidth: "200px",
                      accessor: overDatas => `${new Intl.NumberFormat().format(parseInt(overDatas[element.field]))}`,
                      sortFunction: caseInsensitiveSort
                    })
                    sortBy.push({ id: i, desc: false })
                    flag = true
                  } else if (
                    element.field_type === "int" &&
                    element.default_sort === true &&
                    element.sort_type === "desc" &&
                    element.expandable === "no"
                  ) {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 2,
                      minWidth: "200px",
                      accessor: overDatas => `${new Intl.NumberFormat().format(parseInt(overDatas[element.field]))}`,
                      sortFunction: caseInsensitiveSort
                    })
                    sortBy = { id: i, desc: true }
                    flag = false
                  } else if (element.field_type === "link" && element.expandable === "no") {
                    columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'basic',
                      sortable: true,
                      // minWidth: "100px",
                      wrap: true,
                      grow: 2,
                      minWidth: "200px",
                      accessor: overDatas => (
                        <a href={overDatas[element.field]}>{element.lang_description_he}</a>
                      ),
                      sortFunction: caseInsensitiveSort
                    })
                  } else if (element.expandable === "yes") {
                    table = true
                    const array = []
                    array.push({
                            Header: element.title,
                            accessor: overDatas => overDatas[element.field]
                          })
                          console.log(array)

                    renderRowSubComponent = React.useCallback(
                      ({}) => (
                        <pre
                          style={{
                            fontSize: '10px' 
                          }}
                        >
                          <h5>{JSON.stringify(array, null, "no data")}</h5>
                        </pre>
                      ),
                      []
                    )
                //     const array = []
                //     renderRowSubComponent = React.useCallback(
                //       () => (
                //         <pre
                //           style={{
                //             fontSize: '10px'
                //           }}
                //         > 
                        
                //     {/* {element.title}, {element.lang_description_he} */}
                //        {/* <TableNew data={Object(FullData)[arr]} columns={columns[({
                //     //   id: i,
                //     //   Header: element.title,
                //     //   accessor: overDatas => overDatas[element.field]
                //     // })]} /> */}

                //   {/* {element.title}, {columns[{accessor: (overDatas) => overDatas[element.field]}]} */}
                // <h3>{array.push(columns.push({
                //       id: i,
                //       Header: element.title,
                //       accessor: overDatas => overDatas[element.field]
                //     }))  }</h3>                
                    
                //   {/* {Object(FullData)[arr][i][element.field]} */}
                //     </pre>
                //       ),
                //       []
                //     )

                //     console.log(columns.values({
                //       id: i,
                //       Header: element.title,
                //       accessor: overDatas => overDatas[element.field]
                //     }))
                  
                    // ExpandableTable = (a) => {
                    //   return (
                    //     <div className="expandable-content p-2">
                    //       <p>
                    //         <span className="fw-bold">{element.title}</span>
                    //       <br></br>{a.data[element.field]}
                    //       </p>
                    //     </div>
                    //   )
                    // }
                  } else if (element.expandable === "no") {
                  columns.push({
                      id: i,
                      Header: element.title,
                      sortType: 'alphanumeric',
                      sortable: true,
                      accessor: overDatas => `${overDatas[element.field]}`
                      // sortFunction: caseInsensitiveSort
                    })     
                 }  
                }       
              //  table = false
            })
              if (flag === true) {
                if (table === true) {
                  sec.push(
                    <Suspense fallback={<div>Loading...</div>}>
                    {/* <LazyLoad> */}
                    <Section
                      id={section[i].header}
                      title={section[i].header}
                      body={
                        // <Expanadable
                        //   ids = {1}
                        //   asc = {true}
                        //   columns={columns}
                        //   // order={[2, 'asc']}
                        //   // onSort={2, SortOrder.ASC}
                        //   onClick={<a href="www.google.com"/>}
                        //   data={Object(FullData)[arr]}
                        //   ExpandableTable={ExpandableTable}
                        // />
                        <TableNew 
                        // title={"Employee List"} 
                        data = {Object(FullData)[arr]}
                        columns={columns} 
                        sortBy = {sortBy}
                        renderRowSubComponent={renderRowSubComponent}
                        // ExpandableTable={ExpandableTable}
                        // options={options}
                        // options={options} 
                      /> 
                      }
                    />
                    {/* </LazyLoad> */}
                    </Suspense>
                  )
                } else sec.push(
                  <Suspense fallback={<div>Loading...</div>}>
                  {/* <LazyLoad> */}
                  <Section
                    id={section[i].header}
                    title={section[i].header}
                    body={
                      <TableNew
                        columns={columns}
                        data={Object(FullData)[arr]}
                        sortBy = {sortBy}
                      />
                    }
                  />
                  {/* </LazyLoad> */}
                  </Suspense>
                )
                  }
                  if (flag === false) {
                    if (table === true) {
                      sec.push(
                        <Suspense fallback={<div>Loading...</div>}>
                        {/* <LazyLoad> */}
                        <Section
                          id={section[i].header}
                          title={section[i].header}
                          body={
                            <TableNew
                              // ids = {1 & 2}
                              columns={columns}
                              // order={[2, 'asc']}
                              // onSort={2, SortOrder.ASC}
                              // onClick={}
                              data={Object(FullData)[arr]}
                              sortBy = {sortBy}
                              renderRowSubComponent={renderRowSubComponent}
                              // ExpandableTable={ExpandableTable}
                            />
                          }
                        />
                        {/* </LazyLoad> */}
                      </Suspense>
                      )

                    } else sec.push(
                      <Suspense fallback={<div>Loading...</div>}>
                     {/* <LazyLoad> */}
                        <Section
                          id={section[i].header}
                          title={section[i].header}
                          body={
                            <TableNew
                              // ids = {1}
                              columns={columns}
                              data={Object(FullData)[arr]}
                              sortBy = {sortBy}
                            />
                          }
                        />
                        {/* </LazyLoad> */}
                       </Suspense>
                )
              }
            }
          } 
        }
      }
    }
    // console.log(sec[0])
    // if (sec.props) {

    // }
    return sec
  }

  // function dynamicNav(section) {
  //   const navigat = []
  //   for (let i = 0; i < section.length; i++) {
  //     if (section[i].section_name) {
  //       navigat.push({
  //         id: i,
  //         title: section[i].section_name,
  //         icon: section[i].image,
  //         navLink: `${"#"}${section[i].section_name}`
  //         // navLink: <a href={section[i].section_name}></a>
  //       })
  //     }
  //   }
  //   return navigat
  // }

  // for (let i = 0; i < Data.length; i++) {
  //   const innerSec = Data[i]
  //   if (innerSec.section_name) {
  //     const children = "children"
  //     innerSec[children] = "yes"
    
  //   if (innerSec.section_icon) {
  //     const image = "image"
  //     innerSec[image] = ""
  //   }
  //   for (let j = 0; j < innerSec.length; j++) {
  //     const fields = innerSec[j]
  //     // console.log(innerSec)
  // if (fields.type === "value") {
  //    const component = "component"
  //     fields[component] = "card"
  // }
  // if (fields[j].field_type === "decimal2") {
  //   const number_of_digits = "number_of_digits"
  //   fields[number_of_digits] = 2
  // }
  // if (innerSec[j].type === "table") {
  //   for (let k = 0; k < fields.length; k++) {
  //     const expandable = "expandable"
  //     fields[k][expandable] = "yes"
  //       }
  //     }
  //   }
  //   } 
  // }

  for (let i = 0; i < CitiesData.length; i++) {
    if (CitiesData[i].section_name) {
      if (CitiesData[i].section_i && CitiesData[i].link1 && !CitiesData[i].link2) {
        page.push(
          <Suspense fallback={<div>Loading...</div>}>
          {/* <LazyLoad> */}
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
                <a href={CitiesData[i].link1.href[0].text}>{CitiesData[i].link1.title}</a>
              </div>
            }
            body={dynamicSection(CitiesData[i].fields)}
          />
          {/* </LazyLoad> */}
        </Suspense>
        )
          } else if (CitiesData[i].section_i && CitiesData[i].link1 && CitiesData[i].link2) {
            page.push(
              <Suspense fallback={<div>Loading...</div>}>
              {/* <LazyLoad> */}
           <TabsNewDesign
            value={i}
            title={CitiesData[i].section_name}
            sections ={
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
                    <a href={CitiesData[i].link1.href[0].text}>{CitiesData[i].link1.title} </a>
                    <a href={CitiesData[i].link2.href[0].text}>{CitiesData[i].link2.title}</a>
                  </div>
                }
                body={dynamicSection(CitiesData[i].fields)}
              />}
              />
              {/* </LazyLoad> */}
            </Suspense>
            )
              } else if (CitiesData[i].section_i) {
          page.push(
            <Suspense fallback={<div>Loading...</div>}>
            {/* <LazyLoad> */}
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
            {/* </LazyLoad> */}
          </Suspense>
          )
      } else if (!CitiesData[i].section_i) {
        page.push(
          <Suspense fallback={<div>Loading...</div>}>
          {/* <LazyLoad> */}
          <Section
            id={CitiesData[i].section_name}
            title={CitiesData[i].section_name}
            body={dynamicSection(CitiesData[i].fields)}
          />
        {/* </LazyLoad> */}
          </Suspense>
        )
      }
      // console.log(page[i].props.children.props.body[0].props.className)
    //   for (let k = 0; k < page[i].props.children.props.body.length; k++) {
    //     if (page[i].props.children.props.body[k].className !== null || page[i].props.children.props.body[k].className !== undefined) {
    //     // if ((page[i].props.children.props.body[k].props.className).includes("cardmatch") === true) {
    //       // for (let t = 0; t < page[i].props.children.props.body[i].props.className.length; t++) {
    //       const h = document.getElementsByClassName(page[i].props.children.props.body[k].props.className)
    //       console.log(h)
         
    //     // }
    //   // }
    //   // console.log(page[i].props.children.props.body[k].props)
    // }
    //   }
      // navigation.push({
      //   id: i,
      //   title: CitiesData[i].section_name,
      //   icon: "",
      //   navLink: `/#${CitiesData[i].section_name}`,
      //   children: dynamicNav(CitiesData[i].fields)
      // })
    }
  }

// const options = {
//   filterType: 'checkbox'}


  return <Fragment>{page}
</Fragment>
}
export default SectionMethod
