import React, { useRef, Suspense, lazy } from "react"
import styled from "styled-components"
import ParentPrintTemplate from "./ParentPrintTemplate"
import { Button } from "@material-ui/core"
import ReactToPrint from "react-to-print"
import CardPrint from "../../../ui-elements/cards/basic/CardPrint"
const Section = lazy(() => import("../../../ui-elements/Section"))
import CitiesData from "./jsonFinal.json"
import { UncontrolledTooltip, Row } from "reactstrap"
import info6 from "../../../../assets/images/icons/info6.svg"
import snaplogo from "../../../../assets/images/logo/snap-logo.svg"
import "./method.css"
import TablePrint from "./TablePrint"
import Tables from "./Tables"


const DontPrintWrapper = styled.div`
  @media print {
    display: none;
  }
`

const App = () => {
    const componentRef = useRef()
    const SectionMethod = () => {
        const page = []
        function dynamicSection(section) {
            const sec = []
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
                                    accessor: element => `${element.value}`
                                })
                            }
                            heading = inner
                        })
                        sec.push(
                            <Tables
                                data={section.fields}
                                columns={heading} />
                        )
                    } else if (section.fields[i].visble === "") {
                        if (section.fields[i].layer && section.fields[i].type === "value") {
                            if (section.fields[i].append) {
                                if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === false) {
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                            key={i}
                                            title={section.fields[i].lang_title_he}
                                            text={`${new Date(
                                                section.fields[i].value
                                            ).getDate()}${"-"}${new Date(section.fields[i].value).getMonth() + 1
                                                }${"-"}${new Date(
                                                    section.fields[i].value
                                                ).getFullYear()}${" "}${section.fields[i].append}`}
                                        />
                                    )
                                } else if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === true && overData[section.fields[i].field].length <= 10) {
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                            key={i}
                                            title={section.fields[i].lang_title_he}
                                            text={`${new Date(
                                                section.fields[i].value * 1000
                                            ).getDate()}${"-"}${new Date(section.fields[i].value * 1000).getMonth() + 1
                                                }${"-"}${new Date(
                                                    section.fields[i].value * 1000
                                                ).getFullYear()}${" "}${section.fields[i].append}`}
                                        />
                                    )
                                } else if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === true && overData[section.fields[i].field].length > 10) {
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                            key={i}
                                            title={section.fields[i].lang_title_he}
                                            text={`${new Date(
                                                section.fields[i].value
                                            ).getDate()}${"-"}${new Date(section.fields[i].value).getMonth() + 1
                                                }${"-"}${new Date(
                                                    section.fields[i].value
                                                ).getFullYear()}${" "}${section.fields[i].append}`}
                                        />
                                    )
                                } else if (section.fields[i].field_type === "link") {
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
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
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`${"scrolli cardmatch"}${i}`}
                                            key={i}
                                            title={section.fields[i].lang_title_he}
                                            text={`${section.fields[i].value}${" "}${section.fields[i].append}`}
                                        />
                                    )
                                } else sec.push(
                                    <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                        key={i}
                                        title={section.fields[i].lang_title_he}
                                        text={`${section.fields[i].value}${" "}${section.fields[i].append}`}
                                    />
                                )
                            } else if (
                                !section.fields[i].append
                            ) {
                                if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === false) {
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                            key={i}
                                            title={section.fields[i].lang_title_he}
                                            text={`${new Date(
                                                section.fields[i].value
                                            ).getDate()}${"-"}${new Date(section.fields[i].value).getMonth() + 1
                                                }${"-"}${new Date(
                                                    section.fields[i].value
                                                ).getFullYear()}`}
                                        />
                                    )
                                } else if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === true && overData[section.fields[i].field].length <= 10) {
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                            key={i}
                                            title={section.fields[i].lang_title_he}
                                            text={`${new Date(
                                                section.fields[i].value * 1000
                                            ).getDate()}${"-"}${new Date(section.fields[i].value * 1000).getMonth() + 1
                                                }${"-"}${new Date(
                                                    section.fields[i].value * 1000
                                                ).getFullYear()}`}
                                        />
                                    )
                                } else if (section.fields[i].field_type === "date" && section.fields[i].field.includes("unix") === true && overData[section.fields[i].field].length > 10) {
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                            key={i}
                                            title={section.fields[i].lang_title_he}
                                            text={`${new Date(
                                                section.fields[i].value
                                            ).getDate()}${"-"}${new Date(section.fields[i].value).getMonth() + 1
                                                }${"-"}${new Date(
                                                    section.fields[i].value
                                                ).getFullYear()}`}
                                        />
                                    )
                                } else if (section.fields[i].field_type === "link") {
                                    sec.push(
                                        <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                            key={i}
                                            title={section.fields[i].lang_title_he}
                                            text={
                                                <a href={section.fields[i].value}>
                                                    {section.fields[i].lang_description_he}
                                                </a>
                                            }
                                        />
                                    )
                                } else sec.push(
                                    <CardPrint style={{ border: "0px" }} className={`cardmatch${i}`}
                                        key={i}
                                        title={section.fields[i].lang_title_he}
                                        text={section.fields[i].value}
                                    />
                                )
                            }
                        }
                    } else if (section.fields[i].header) {
                        if (section.fields[i].type === "table") {
                            const data = section.fields[i].fields
                            const Columnsdata = section.fields[i].values
                            const columns = []
                            const sortBy = []

                            data.forEach((element, i) => {
                                if (element.visble === "yes") {
                                    if (element.field_type === "date" && !element.default_sort
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: (a, b) => {
                                                const aa = a.values[element.lang_title_he].split('-').reverse().join(), bb = b.values[element.lang_title_he].split('-').reverse().join()
                                                return aa < bb ? -1 : (aa > bb ? 1 : 0)
                                            },
                                            sortable: true,
                                            accessor: overDatas => `${new Date(overDatas[i] * 1000).getDate()}${"-"}${new Date(overDatas[i] * 1000).getMonth() + 1
                                                }${"-"}${new Date(overDatas[i] * 1000).getFullYear()}`
                                        })
                                    } else if (
                                        element.field_type === "date" &&
                                        element.default_sort === true &&
                                        element.sort_type === "asc"
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: (a, b) => {
                                                const aa = a.values[element.lang_title_he].split('-').reverse().join(), bb = b.values[element.lang_title_he].split('-').reverse().join()
                                                return aa < bb ? -1 : (aa > bb ? 1 : 0)
                                            },
                                            sortable: true,
                                            accessor: overDatas => `${new Date(overDatas[i] * 1000).getDate()}${"-"}${new Date(overDatas[i] * 1000).getMonth() + 1
                                                }${"-"}${new Date(overDatas[i] * 1000).getFullYear()}`
                                        })
                                        sortBy.push({ id: element.lang_title_he, desc: false })
                                    } else if (
                                        element.field_type === "date" &&
                                        element.default_sort === true &&
                                        element.sort_type === "desc"
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: (a, b) => {
                                                const aa = a.values[element.lang_title_he].split('-').reverse().join(), bb = b.values[element.lang_title_he].split('-').reverse().join()
                                                return aa < bb ? -1 : (aa > bb ? 1 : 0)
                                            },
                                            sortable: true,
                                            accessor: overDatas => `${new Date(overDatas[i] * 1000).getDate()}${"-"}${new Date(overDatas[i] * 1000).getMonth() + 1
                                                }${"-"}${new Date(overDatas[i] * 1000).getFullYear()}`
                                        })
                                        sortBy.push({ id: element.lang_title_he, desc: true })
                                    } else if (
                                        element.field_type === "decimal2" &&
                                        !element.default_sort
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            minWidth: "200px",
                                            accessor: overDatas => overDatas[i]
                                        })
                                    } else if (
                                        element.field_type === "decimal2" &&
                                        element.default_sort === true &&
                                        element.sort_type === "asc"
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            accessor: overDatas => overDatas[i]
                                        })
                                        sortBy.push({ id: element.lang_title_he, desc: false })
                                    } else if (
                                        element.field_type === "decimal2" &&
                                        element.default_sort === true &&
                                        element.sort_type === "desc"
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            accessor: overDatas => overDatas[i]
                                        })
                                        sortBy.push({ id: element.lang_title_he, desc: true })
                                    } else if (element.field_type === "int" && !element.default_sort
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            accessor: overDatas => overDatas[i]
                                        })
                                    } else if (
                                        element.field_type === "int" &&
                                        element.default_sort === true &&
                                        element.sort_type === "asc"
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            accessor: overDatas => overDatas[i]
                                        })
                                        sortBy.push({ id: element.lang_title_he, desc: false })
                                    } else if (
                                        element.field_type === "int" &&
                                        element.default_sort === true &&
                                        element.sort_type === "desc"
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            accessor: overDatas => overDatas[i]
                                        })
                                        sortBy = { id: element.lang_title_he, desc: true }
                                    } else if (element.field_type === "link"
                                    ) {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: 'basic',
                                            sortable: true,
                                            accessor: overDatas => (
                                                <a href={overDatas[i]}>{element.lang_description_he}</a>
                                            )
                                        })
                                    } else {
                                        columns.push({
                                            id: element.lang_title_he,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            accessor: overDatas => overDatas[i]
                                        })
                                    }
                                }
                            })
                            {
                                sec.push(
                                    <TablePrint
                                        data={Columnsdata}
                                        columns={columns}
                                        sortBy={sortBy}
                                    />
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
                            <Section
                                id={section.sections[i].section_name}
                                title={<div>{section.sections[i].section_name} <img src={info6} width="30" id={`${"positionBottom"}${i}`} />
                                    <UncontrolledTooltip
                                        placement="bottom"
                                        target={`${"positionBottom"}${i}`}
                                    >
                                        {section.sections[i].section_i}
                                    </UncontrolledTooltip></div>}

                                body={dynamicSection(section.sections[i])}
                            />
                        )
                    }
                }
            }
            //   if (section.tab === true) {
            //     if (section.sections) {
            //       return <InnerTabs title={section.sections} sections={sec} />
            //     }
            //     if (section.fields) {
            //       return <InnerTabs title={section.fields} sections={sec} />

            //     }
            //   }
            return <Row>{sec}</Row>
        }

        for (let i = 0; i < CitiesData.length; i++) {
            if (CitiesData[i].section_name && CitiesData[i].print === true) {
                if (CitiesData[i].section_i && CitiesData[i].link1 && !CitiesData[i].link2) {
                    page.push(
                        <CardPrint md={12} xl={12} color={"white"} style={{ 'box-shadow': '0 4px 24px 0 rgb(34 41 47 / 10%)' }}
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
                        />
                    )
                } else if (CitiesData[i].section_i && CitiesData[i].link1 && CitiesData[i].link2 && CitiesData[i].print === true) {
                    page.push(
                        /* {<CardPrint id={CitiesData[i].section_name}/>} */
                        <CardPrint md={12} xl={12} color={"white"} style={{ 'box-shadow': '0 4px 24px 0 rgb(34 41 47 / 10%)' }}
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
                        />
                    )
                } else if (CitiesData[i].section_i && CitiesData[i].print === true) {
                    page.push(
                        <Suspense fallback={<div>Loading...</div>}>
                            {<CardPrint md={12} xl={12} color={"white"} style={{ 'box-shadow': '0 4px 24px 0 rgb(34 41 47 / 10%)' }}
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
                        </Suspense>
                    )
                } else if (!CitiesData[i].section_i && CitiesData[i].print === true) {
                    page.push(dynamicSection(CitiesData[i]))
                }
            }
        }
        return <div><img src={snaplogo} width={"12%"} />{page}</div>
    }
    return (
        <>
            <DontPrintWrapper>
                <div className="App">
                    <ReactToPrint
                        copyStyles={true}
                        pageStyle={''}
                        trigger={() => (
                            <Button
                                aria-label="Print Licensee profile"
                                aria-haspopup="false"
                                color="primary"
                            >
                                Print
                            </Button>
                        )}
                        content={() => componentRef.current}
                    />
                </div>
            </DontPrintWrapper>
            <ParentPrintTemplate ref={componentRef} printingProps={[<SectionMethod />]} />
        </>
    )
}

export default App