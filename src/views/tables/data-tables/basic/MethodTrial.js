import React, { Suspense, lazy } from "react"
import CardStyleVariation from "../../../ui-elements/cards/basic/CardStyleVariation"
// import CardWithDots from "../../../ui-elements/cards/basic/CardWithDots"
const Section = lazy(() => import("../../../ui-elements/Section"))
import CitiesData from "./jsonFinal.json"
import { UncontrolledTooltip, Row } from "reactstrap"
import info6 from "../../../../assets/images/icons/info6.svg"
import "./method.css"
import TableNew from "../basic/TableNew"
import TablenoExpand from "../basic/TablenoExpand"
import TabsNewDesign from "../../../components/tabs/TabsNewDesign"
import InnerTabs from "../../../components/tabs/InnerTabs"
import Select from 'react-select'
import { Box } from "@material-ui/core"
import Tables from "./Tables"
import ReadMoreLess from "./ReadMoreLess"

const SectionMethod = () => {
  const page = []
  let renderRowSubComponent = []
  function dynamicSection(section) {
    const sec = []
    let expand = false
    if (section.fields) {
      for (let i = 0; i < section.fields.length; i++) {
        if (section.fields[i].types === "stripe") {
          let heading = []
          section.fields.forEach((element, k) => {
            const inner = []
            if (element.lang_title_he && element.value) {
              inner.push({
                id: (k + 1) * 21,
                accessor: element => `${element.lang_title_he}`
              }, {
                id: (k + 1) * 2,
                accessor: element => <ReadMoreLess text={`${element.value}`} />
              })
            }
            heading = inner
          })
          sec.push(
            <Suspense fallback={<div>Loading...</div>}>
              {/* <LazyLoad> */}
              <Tables
                data={section.fields}
                columns={heading} />
              {/* }
            /> */}
              {/* </LazyLoad> */}
            </Suspense>
          )
        } else if (section.fields[i].visble === "") {
          const unix = new Date(section.fields[i].value * 1000)
          const date = new Date(section.fields[i].value)

          if (section.fields[i].layer && section.fields[i].type === "value") {
            if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === false) {
              if (section.fields[i].append) {
                sec.push(
                  <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                    key={i}
                    title={section.fields[i].lang_title_he}
                    text={`${date.getDate()}${"-"}${date.getMonth() + 1
                      }${"-"}${date.getFullYear()}${" "}${section.fields[i].append}`}
                  />
                )
              } else sec.push(
                <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                  key={i}
                  title={section.fields[i].lang_title_he}
                  text={`${date.getDate()}${"-"}${date.getMonth() + 1
                    }${"-"}${date.getFullYear()}`}
                />
              )
            } else if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === true && overData[section.fields[i].field].length <= 10) {
              if (section.fields[i].append) {
                sec.push(
                  <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                    key={i}
                    title={section.fields[i].lang_title_he}
                    text={`${unix.getDate()}${"-"}${unix.getMonth() + 1
                      }${"-"}${unix.getFullYear()}${" "}${section.fields[i].append}`}
                  />
                )
              } else sec.push(
                <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                  key={i}
                  title={section.fields[i].lang_title_he}
                  text={`${unix.getDate()}${"-"}${unix.getMonth() + 1
                    }${"-"}${unix.getFullYear()}`}
                />
              )
            } else if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === true && overData[section.fields[i].field].length > 10) {
              if (section.fields[i].append) {
                sec.push(
                  <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                    key={i}
                    title={section.fields[i].lang_title_he}
                    text={`${date.getDate()}${"-"}${date.getMonth() + 1
                      }${"-"}${date.getFullYear()}${" "}${section.fields[i].append}`}
                  />
                )
              } else sec.push(
                <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                  key={i}
                  title={section.fields[i].lang_title_he}
                  text={`${date.getDate()}${"-"}${date.getMonth() + 1
                    }${"-"}${date.getFullYear()}`}
                />
              )
            } else if (section.fields[i].field_type === "link") {
              sec.push(
                <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                  key={i}
                  title={section.fields[i].lang_title_he}
                  text={
                    <a href={section.fields[i].value}>
                      {section.fields[i].lang_description_he}
                    </a>
                  }
                />
              )
            } else if (section.fields[i].value !== null && section.fields[i].value !== undefined && section.fields[i].value.length > 20) {
              if (section.fields[i].append) {
                sec.push(
                  <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`${"scrolli cardmatch"}${i}`}
                    key={i}
                    title={section.fields[i].lang_title_he}
                    text={`${section.fields[i].value}${" "}${section.fields[i].append}`}
                  />
                )
              } else sec.push(
                <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`${"scrolli cardmatch"}${i}`}
                  key={i}
                  title={section.fields[i].lang_title_he}
                  text={`${section.fields[i].value}`}
                />
              )
            } else if (section.fields[i].append) {
              sec.push(
                <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                  key={i}
                  title={section.fields[i].lang_title_he}
                  text={`${section.fields[i].value}${" "}${section.fields[i].append}`}
                />
              )
            } else sec.push(
              <CardStyleVariation style={{ border: "0px" }} md={4} xl={3} className={`cardmatch${i}`}
                key={i}
                title={section.fields[i].lang_title_he}
                text={`${section.fields[i].value}`}
              />
            )
          }
        } else if (section.fields[i].header) {
          if (section.fields[i].type === "table") {
            // const arr = section.fields[i].layer
            // if (section.fields[i].layer) {
            // if (Object(FullData)[arr].length > 0) {
            const data = section.fields[i].fields
            const Columnsdata = section.fields[i].values
            const columns = []
            const sortBy = []
            function SelectColumnFilter({
              column: { filterValue, setFilter, preFilteredRows, id }
            }) {
              const opt = []
              // Calculate the options for filtering
              // using the preFilteredRows
              const options = React.useMemo(() => {
                const options = new Set()
                preFilteredRows.forEach(row => {
                  options.add(row.values[id])
                })
                return [...options.values()]
              }, [id, preFilteredRows])

              options.map((option, i) => (opt.push({ key: i, value: option, label: option })))
              return (
                <Select
                  value={filterValue}
                  onChange={value => {
                    setFilter(value)
                  }}
                  isMulti
                  isSearchable
                  // tabSelectsValue={true}
                  options={opt}
                  className="basic-multi-select">
                </Select>
              )
            }
            function MultiSelectColumnFilter({
              column: { filterValue, setFilter, preFilteredRows, id }
            }) {
              // [filterValue, setFilter] = useState(filterValue)
              const opt = []
              // Calculate the options for filtering
              // using the preFilteredRows
              const options = React.useMemo(() => {
                const options = new Set()
                preFilteredRows.forEach(row => {
                  options.add(row.values[id])
                })
                return [...options.values()]
              }, [id, preFilteredRows])
              options.map((option, i) => (opt.push({ key: i, value: option, label: option })))
              // Render a multi-select box
              return (
                <Select
                  // multiple // this prop for multiselect
                  // value={filterValue}
                  defaultValue={filterValue}
                  // an appropriate multiselect handler (use Ctrl key to select multiple)
                  onChange={e => {
                    // const allValues = Array.from(e).filter(element => element.value)
                    // setFilter(allValues.map(element => element.value))
                    const allValues = Array.from(e).map(o => o.value).filter(Boolean)
                    setFilter(allValues && allValues.length ? allValues : undefined)
                  }}
                  options={options.map((option, i) => (
                    { key: i, value: option, label: option }))}
                  isMulti
                  isSearchable
                  className="basic-multi-select"
                >
                </Select>
              )
            }
            data.forEach((element, i) => {
              if (element.visble === "yes") {
                if (element.field_type === "date" && !element.default_sort && !element.expandable
                ) {
                  columns.push({
                    id: element.lang_title_he,
                    Header: element.lang_title_he,
                    sortType: (a, b) => {
                      const aa = a.values[element.lang_title_he].split('-').reverse().join(), bb = b.values[element.lang_title_he].split('-').reverse().join()
                      return aa < bb ? -1 : (aa > bb ? 1 : 0)
                    },
                    Filter: MultiSelectColumnFilter,
                    filter: 'multiple',
                    sortable: true,
                    accessor: overDatas => `${new Date(overDatas[i] * 1000).getDate()}${"-"}${new Date(overDatas[i] * 1000).getMonth() + 1
                      }${"-"}${new Date(overDatas[i] * 1000).getFullYear()}`
                  })
                } else if (
                  element.field_type === "date" &&
                  element.default_sort === true &&
                  !element.expandable
                ) {
                  columns.push({
                    id: element.lang_title_he,
                    Header: element.lang_title_he,
                    sortType: (a, b) => {
                      const aa = a.values[element.lang_title_he].split('-').reverse().join(), bb = b.values[element.lang_title_he].split('-').reverse().join()
                      return aa < bb ? -1 : (aa > bb ? 1 : 0)
                    },
                    sortable: true,
                    Filter: MultiSelectColumnFilter,
                    filter: 'multiple',
                    accessor: overDatas => `${new Date(overDatas[i] * 1000).getDate()}${"-"}${new Date(overDatas[i] * 1000).getMonth() + 1
                      }${"-"}${new Date(overDatas[i] * 1000).getFullYear()}`
                  })
                  if (element.sort_type === "asc") {
                    sortBy.push({ id: element.lang_title_he, desc: false })
                  } else if (element.sort_type === "desc") {
                    sortBy.push({ id: element.lang_title_he, desc: true })
                  }
                } else if (
                  element.field_type === "decimal2" &&
                  !element.default_sort && !element.expandable
                ) {
                  columns.push({
                    id: element.lang_title_he,
                    Header: element.lang_title_he,
                    sortType: 'alphanumeric',
                    sortable: true,
                    minWidth: "200px",
                    Filter: MultiSelectColumnFilter,
                    filter: 'multiple',
                    accessor: overDatas => overDatas[i]
                  })
                } else if (
                  element.field_type === "decimal2" &&
                  element.default_sort === true &&
                  !element.expandable
                ) {
                  columns.push({
                    id: element.lang_title_he,
                    Header: element.lang_title_he,
                    sortType: 'alphanumeric',
                    sortable: true,
                    Filter: MultiSelectColumnFilter,
                    filter: 'multiple',
                    accessor: overDatas => overDatas[i]
                  })
                  if (element.sort_type === "asc") {
                    sortBy.push({ id: element.lang_title_he, desc: false })
                  } else if (element.sort_type === "desc") {
                    sortBy.push({ id: element.lang_title_he, desc: true })
                  }
                } else if (element.field_type === "int" && !element.default_sort && !element.expandable
                ) {
                  columns.push({
                    id: element.lang_title_he,
                    Header: element.lang_title_he,
                    sortType: 'alphanumeric',
                    sortable: true,
                    Filter: MultiSelectColumnFilter,
                    filter: 'multiple',
                    accessor: overDatas => overDatas[i]
                  })
                } else if (
                  element.field_type === "int" &&
                  element.default_sort === true
                  && !element.expandable
                ) {
                  columns.push({
                    id: element.lang_title_he,
                    Header: element.lang_title_he,
                    sortType: 'alphanumeric',
                    sortable: true,
                    Filter: MultiSelectColumnFilter,
                    filter: 'multiple',
                    accessor: overDatas => overDatas[i]
                  })
                  if (element.sort_type === "asc") {
                    sortBy.push({ id: element.lang_title_he, desc: false })
                  } else if (element.sort_type === "desc") {
                    sortBy.push({ id: element.lang_title_he, desc: true })
                  }
                } else if (element.field_type === "link" && !element.expandable
                ) {
                  columns.push({
                    id: element.lang_title_he,
                    Header: element.lang_title_he,
                    sortType: 'basic',
                    sortable: true,
                    Filter: MultiSelectColumnFilter,
                    filter: 'multiple',
                    accessor: overDatas => (
                      <a href={overDatas[i]}>{element.lang_description_he}</a>
                    )
                  })
                } else if (element.expandable) {
                  expand = true
                  renderRowSubComponent = ({ row }) => {
                    console.log(row.original[i])
                    return (<div className="expandable-content p-2">
                      <p>
                        <span className="fw-bold">{element.lang_title_he}</span>
                        <br></br>{row.original[i]}
                      </p>
                    </div>)
                  }
                  // console.log(title)
                } else if (!element.expandable) {
                  columns.push({
                    id: element.lang_title_he,
                    Header: element.lang_title_he,
                    sortType: 'alphanumeric',
                    sortable: true,
                    Filter: MultiSelectColumnFilter,
                    filter: 'multiple',
                    accessor: overDatas => overDatas[i]
                  })
                }
              }
            })
            if (expand === true) {
              sec.push(
                <Suspense fallback={<div>Loading...</div>}>
                  {/* <LazyLoad> */}
                  {/* <CardStyleVariation md={12} xl={12}
          id={section.fields[i].header}
          title={section.fields[i].header}
          text={ */}
                  <TableNew
                    data={Columnsdata}
                    columns={columns}
                    sortBy={sortBy}
                    renderRowSubComponent={renderRowSubComponent}
                  />
                  {/* } /> */}
                  {/* </LazyLoad> */}
                </Suspense>
              )
            } else if (expand === false) {
              sec.push(
                <Suspense fallback={<div>Loading...</div>}>
                  {/* <LazyLoad> */}
                  <CardStyleVariation md={12} xl={12}
                    id={section.fields[i].header}
                    title={section.fields[i].header}
                    text={
                      <TablenoExpand
                        data={Columnsdata}
                        columns={columns}
                        sortBy={sortBy}
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
    if (section.sections) {
      for (let i = 0; i < section.sections.length; i++) {
        if (section.sections[i].section_name) {
          sec.push(
            <Suspense fallback={<div>Loading...</div>}>
              {/* <LazyLoad> */}
              {<Section
                id={section.sections[i].section_name}
                title={<div>{section.sections[i].section_name} <img src={info6} width="30" id={`${"positionBottom"}${i}`} />
                  <UncontrolledTooltip
                    placement="bottom"
                    target={`${"positionBottom"}${i}`}
                  >
                    {section.sections[i].section_i}
                  </UncontrolledTooltip></div>}

                body={dynamicSection(section.sections[i])}
              />}
              {/* </LazyLoad> */}
            </Suspense>
          )
        }
      }
    }
    if (section.tab === true) {
      if (section.sections) {
        return <InnerTabs title={section.sections} sections={sec} />
      }
      if (section.fields) {
        return <InnerTabs title={section.fields} sections={sec} />
      }
    }
    return <Row>{sec}</Row>
  }

  for (let i = 0; i < CitiesData.length; i++) {
    if (CitiesData[i].section_name) {
      if (CitiesData[i].section_i && CitiesData[i].link1 && !CitiesData[i].link2) {
        page.push(
          <Suspense fallback={<div>Loading...</div>}>
            {/* <LazyLoad> */}
            {/* <Col md="6" xl="12"> */}
            {<CardStyleVariation md={12} xl={12} color={"white"} style={{ 'box-shadow': '0 4px 24px 0 rgb(34 41 47 / 10%)' }}
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
              text={dynamicSection(CitiesData[i])}
            />}
            {/* </LazyLoad> */}
          </Suspense>
        )
      } else if (CitiesData[i].section_i && CitiesData[i].link1 && CitiesData[i].link2) {
        page.push(
          <Suspense fallback={<div>Loading...</div>}>
            {/* <LazyLoad> */}
            {/* {<CardStyleVariation id={CitiesData[i].section_name}/>} */}
            {<CardStyleVariation md={12} xl={12} color={"white"} style={{ 'box-shadow': '0 4px 24px 0 rgb(34 41 47 / 10%)' }}
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
              text={dynamicSection(CitiesData[i])}
            />}
            {/* </LazyLoad> */}
          </Suspense>
        )
      } else if (CitiesData[i].section_i) {
        page.push(
          <Suspense fallback={<div>Loading...</div>}>
            {/* <LazyLoad> */}
            {<CardStyleVariation md={12} xl={12} color={"white"} style={{ 'box-shadow': '0 4px 24px 0 rgb(34 41 47 / 10%)' }}
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
              text={dynamicSection(CitiesData[i])}
            />}
            {/* {<img src={info6} width="30"/>} */}
            {/* </LazyLoad> */}
          </Suspense>
        )
      } else if (!CitiesData[i].section_i) {
        page.push(
          <Suspense fallback={<div>Loading...</div>}>
            {/* <LazyLoad> */}
            {dynamicSection(CitiesData[i])}
            {/* </LazyLoad> */}
          </Suspense>)
      }
    }
  }
  return <Box><TabsNewDesign sections={page} /></Box>
}
export default SectionMethod