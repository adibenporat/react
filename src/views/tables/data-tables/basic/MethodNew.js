import React, { Fragment, Suspense, lazy } from "react"
import CardStyleVariation from "../../../ui-elements/cards/basic/CardStyleVariation"
const Section = lazy(() => import("../../../ui-elements/Section"))
import CitiesData from "./jsonFinal.json"
import FullData from "./tlv_data.json"
import { UncontrolledTooltip } from "reactstrap"
import info6 from "../../../../assets/images/icons/info6.svg"
import "./method.css"
import TableNew from "../basic/TableNew"
import TabsNewDesign, {TabsValue, TabsLabel} from "../../../components/tabs/TabsNewDesign"

// import Tab from '@mui/material/Tab'
export const navigation = []

const SectionMethod = () => {
  const page = []
  let renderRowSubComponent = []
  function dynamicSection(section) {
      
    const sec = []
    let flag = false
    let table = false
    const sortBy = []

    for (let i = 0; i < section.length; i++) {
      if (section[i].section_name) {
        sec.push( 
          <Suspense fallback={<div>Loading...</div>}>
          {/* <LazyLoad> */}
          {TabsLabel(section[i].section_name)}
          {TabsValue(i, i, <TabPanel value={i} index={i}
            sections = {<Section
            id={section[i].section_name}
            title={section[i].section_name}
            body={dynamicSection(section[i].fields)}
          />}/>)}
          {/* </LazyLoad> */}
           </Suspense>
        )
      } else if (section[i].fields && section[i].visble === "") {
        if (section[i].layer && section[i].type === "value") {
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
                        <TableNew 
                        // title={"Employee List"} 
                        data = {Object(FullData)[arr]}
                        columns={columns} 
                        sortBy = {sortBy}
                        renderRowSubComponent={renderRowSubComponent}
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
                              columns={columns}
                              data={Object(FullData)[arr]}
                              sortBy = {sortBy}
                              renderRowSubComponent={renderRowSubComponent}
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
    return sec
  }
  
  for (let i = 0; i < CitiesData.length; i++) {
    
    if (CitiesData[i].section_name) {
      if (CitiesData[i].section_i && CitiesData[i].link1 && !CitiesData[i].link2) {
        page.push(
          <Suspense fallback={<div>Loading...</div>}>
          {/* <LazyLoad> */}
          {TabsLabel(CitiesData[i].section_name)}
            {TabsValue(i, i, <Section
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
            body={dynamicSection(CitiesData[i])}
          />)}
          {/* </LazyLoad> */}
        </Suspense>
        )
          } if (CitiesData[i].section_i && CitiesData[i].link1 && CitiesData[i].link2) {
            page.push(
              <Suspense fallback={<div>Loading...</div>}>
              {/* <LazyLoad> */}
              {TabsLabel(CitiesData[i].section_name)}
              {TabsValue(i, i, <Section
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
                body={dynamicSection(CitiesData[i])}
              />)}
              {/* </LazyLoad> */}
            </Suspense>
            )
              } else if (CitiesData[i].section_i) {
          page.push(
            <Suspense fallback={<div>Loading...</div>}>
            {/* <LazyLoad> */}
            {TabsLabel(CitiesData[i].section_name)}
             {TabsValue(i, i, <Section
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
              body={dynamicSection(CitiesData[i])}
            />)}        

            {/* </LazyLoad> */}
          </Suspense>
          )
      } else if (!CitiesData[i].section_i) {
        page.push(
          <Suspense fallback={<div>Loading...</div>}>
          {/* <LazyLoad> */}
          {/* {TabsLabel(CitiesData[i].section_name)} */}
          {TabsLabel(CitiesData[i].section_name)}
          {TabsValue(i, i, <Section
            id={CitiesData[i].section_name}
            title={CitiesData[i].section_name}
            body={dynamicSection(CitiesData[i])}
          />)}
        {/* </LazyLoad> */}
          </Suspense>
        )
      }
    }
  }


  return page
}
export default SectionMethod
