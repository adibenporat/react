import React, { Fragment, Suspense, lazy } from "react"
import CardStyleVariation from "../../../ui-elements/cards/basic/CardStyleVariation"
const Section = lazy(() => import("../../../ui-elements/Section"))
import CitiesData from "./jsonFinal.json"
// import FullData from "./tlv_data.json"
import { UncontrolledTooltip } from "reactstrap"
import info6 from "../../../../assets/images/icons/info6.svg"
import "./method.css"
import TableNew from "../basic/TableNew"
// import TabsNewDesign, { TabsValue, TabsLabel } from "../../../components/tabs/TabsNewDesign"

// import Tab from '@mui/material/Tab'
export const navigation = []

const SectionMethod = () => {
    // const page = []
    const sec = []

    function dynamicSection(section) {
        let renderRowSubComponent = []
        let flag = false
        const table = false
        const sortBy = []
        // for (let i = 0; i < section.length; i++) {
        //     if (section[i].tab === true) {
        //         <Tab value={i}>{section[i].section_name}, {section[i].section_i} </Tab>
        //     }
        // }

        for (let i = 0; i < section.length; i++) {

            // if (section[i].tab === true) {
            if (section[i].fields) {

                for (let j = 0; j < section[i].fields.length; j++) {
                    // console.log(section[i].fields[j].lang_title_he)
                    const cell = section[i].fields[j].values
                    if (section[i].fields[j].visble === "") {
                        if (section[i].fields[j].layer && section[i].fields[j].type === "value" && section[i].fields[j].lang_title_he !== undefined) {
                            // <TabLabel value={i}>
                            sec.push(
                                <Section id={i} title={section[i].section_name
                                    // , section[i].section_i
                                }
                                    body={<CardStyleVariation className={`cardmatch${i}`}
                                        key={j}
                                        title={section[i].fields[j].lang_title_he}
                                        text={section[i].fields[j].value} />}></Section>)
                            // </TabLabel>
                        }
                    } else if (section[i].fields[j].header) {
                        if (section[i].fields[j].type === "table" && section[i].fields[j].fields) {
                            const data = section[i].fields[j].fields
                            // const header = section[i].fields[j].fields
                            // const cell = section[i].fields[j].values
                            const columns = []
                            // for (let j = 0; j < data.length; j++) {
                            data.forEach((element, i) => {
                                if (element.visble === "yes") {
                                    const caseInsensitiveSort = (rowA, rowB) => {
                                        if (rowA.name !== null && rowB.name !== null) {
                                            const a = (rowA[element.field])
                                            const b = (rowB[element.field])
                                            return (a - b)
                                        }
                                    }
                                    if (element.field_type === "date" && !element.default_sort
                                        // && element.expandable === "no"
                                    ) {
                                        columns.push({
                                            id: i,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            // minWidth: "100px",
                                            wrap: true,
                                            grow: 1,
                                            minWidth: "200px",
                                            // accessor: overDatas => `${new Date(overDatas[value]).getDate()}${"-"}${new Date(overDatas[value]).getMonth() + 1}${"-"}${new Date(
                                            //     overDatas[value]
                                            // ).getFullYear()}`,
                                            // format: overDatas => moment(overDatas[element.field]),
                                            sortFunction: caseInsensitiveSort
                                        })
                                    } else if (
                                        element.field_type === "date" &&
                                        element.default_sort === true &&
                                        element.sort_type === "asc"
                                        // element.expandable === "no"
                                    ) {
                                        columns.push({
                                            id: i,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            // minWidth: "100px",
                                            grow: 1,
                                            wrap: true,
                                            minWidth: "200px",
                                            // accessor: overDatas => `${new Date(overDatas[value]).getDate()}${"-"}${new Date(overDatas[value]).getMonth() + 1
                                            //     }${"-"}${new Date(overDatas[value]).getFullYear()}`,
                                            SortByFn: caseInsensitiveSort
                                        })
                                        sortBy.push({ id: i, desc: false })
                                        flag = true
                                    } else if (
                                        element.field_type === "date" &&
                                        element.default_sort === true &&
                                        element.sort_type === "desc"
                                        // element.expandable === "no"
                                    ) {
                                        columns.push({
                                            id: i,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            // minWidth: "100px",
                                            wrap: true,
                                            grow: 1,
                                            minWidth: "200px",
                                            // accessor: overDatas => `${new Date(overDatas[value]).getDate()}${"-"}${new Date(overDatas[value]).getMonth() + 1
                                            //     }${"-"}${new Date(overDatas[value]).getFullYear()}`,
                                            sortFunction: caseInsensitiveSort
                                        })
                                        sortBy.push({ id: i, desc: true })
                                        flag = false
                                        // } else if (
                                        //     element.field_type === "decimal2" &&
                                        //     !element.default_sort
                                        //     // element.expandable === "no"
                                        // ) {
                                        //     columns.push({
                                        //         id: i,
                                        //         Header: element.lang_title_he,
                                        //         sortType: 'alphanumeric',
                                        //         sortable: true,
                                        //         // minWidth: "100px",
                                        //         wrap: true,
                                        //         grow: 2,
                                        //         minWidth: "200px",
                                        //         accessor: overDatas => `${new Intl.NumberFormat().format(
                                        //             parseFloat(overDatas[value]).toFixed(
                                        //                 element.number_of_digits
                                        //             )
                                        //         )}`,
                                        //         sortFunction: caseInsensitiveSort
                                        //     })
                                        // } else if (
                                        //     element.field_type === "decimal2" &&
                                        //     element.default_sort === true &&
                                        //     element.sort_type === "asc"
                                        //     // element.expandable === "no"
                                        // ) {
                                        //     columns.push({
                                        //         id: i,
                                        //         Header: element.lang_title_he,
                                        //         sortType: 'alphanumeric',
                                        //         sortable: true,
                                        //         // minWidth: "100px",
                                        //         wrap: true,
                                        //         grow: 2,
                                        //         minWidth: "200px",
                                        //         accessor: overDatas => overDatas[value],
                                        //         sortFunction: caseInsensitiveSort
                                        //     })
                                        //     sortBy.push({ id: i, desc: false })
                                        //     flag = true
                                    } else if (
                                        element.default_sort === true &&
                                        element.sort_type === "desc"
                                        // element.expandable === "no"
                                    ) {
                                        columns.push({
                                            id: i,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            // minWidth: "100px",
                                            wrap: true,
                                            grow: 2,
                                            minWidth: "200px",
                                            // accessor: overDatas => overDatas[value],
                                            sortFunction: caseInsensitiveSort
                                        })
                                        sortBy.push({ id: i, desc: true })
                                        flag = false

                                        // } else if (element.field_type === "int" && !element.default_sort
                                        //     // && element.expandable === "no"
                                        // ) {
                                        //     columns.push({
                                        //         id: i,
                                        //         Header: element.lang_title_he,
                                        //         sortType: 'alphanumeric',
                                        //         sortable: true,
                                        //         // minWidth: "100px",
                                        //         wrap: true,
                                        //         grow: 2,
                                        //         minWidth: "200px",
                                        //         accessor: overDatas => `${new Intl.NumberFormat().format(parseInt(overDatas[element.field]))}`
                                        //     })
                                    } else if (
                                        element.default_sort === true &&
                                        element.sort_type === "asc"
                                        // element.expandable === "no"
                                    ) {
                                        columns.push({
                                            id: i,
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true,
                                            // minWidth: "100px",
                                            wrap: true,
                                            grow: 2,
                                            minWidth: "200px",
                                            // accessor: overDatas => overDatas[value],
                                            sortFunction: caseInsensitiveSort
                                        })
                                        sortBy.push({ id: i, desc: false })
                                        flag = true
                                        // } else if (
                                        //     element.field_type === "int" &&
                                        //     element.default_sort === true &&
                                        //     element.sort_type === "desc"
                                        //     // element.expandable === "no"
                                        // ) {
                                        //     columns.push({
                                        //         id: i,
                                        //         Header: element.lang_title_he,
                                        //         sortType: 'alphanumeric',
                                        //         sortable: true,
                                        //         // minWidth: "100px",
                                        //         wrap: true,
                                        //         grow: 2,
                                        //         minWidth: "200px",
                                        //         accessor: overDatas => `${new Intl.NumberFormat().format(parseInt(overDatas[element.field]))}`,
                                        //         sortFunction: caseInsensitiveSort
                                        //     })
                                        //     sortBy = { id: i, desc: true }
                                        //     flag = false
                                    } else if (element.field_type === "link"
                                        // && element.expandable === "no"
                                    ) {
                                        columns.push({
                                            id: i,
                                            Header: element.lang_title_he,
                                            sortType: 'basic',
                                            sortable: true,
                                            // minWidth: "100px",
                                            wrap: true,
                                            grow: 2,
                                            minWidth: "200px",
                                            // accessor: overDatas => (
                                            //     <a href={overDatas[value]}>{element.lang_description_he}</a>
                                            // ),
                                            sortFunction: caseInsensitiveSort
                                        })
                                    } else if (element.expandable === "yes") {
                                        table = true
                                        const array = []
                                        array.push({
                                            Header: element.lang_title_he,
                                            accessor: overDatas => overDatas[value]
                                        })

                                        renderRowSubComponent = React.useCallback(
                                            ({ }) => (
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
                                            Header: element.lang_title_he,
                                            sortType: 'alphanumeric',
                                            sortable: true
                                            // accessor: overDatas => `${overDatas[element.field]}`
                                            // sortFunction: caseInsensitiveSort
                                        })
                                    }
                                }
                            })

                            // }

                            //  table = false

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
                                                        data={cell}
                                                        columns={columns}
                                                        sortBy={sortBy}
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
                                            id={section[i].fields[j].header}
                                            title={section[i].fields[j].header}
                                            body={
                                                <TableNew
                                                    columns={columns}
                                                    data={cell}
                                                    sortBy={sortBy}
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
                                                id={section[i].fields[j].header}
                                                title={section[i].fields[j].header}
                                                body={
                                                    <TableNew
                                                        columns={columns}
                                                        data={cell}
                                                        sortBy={sortBy}
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
                                            id={section[i].fields[j].header}
                                            title={section[i].fields[j].header}
                                            body={
                                                <TableNew
                                                    // ids = {1}
                                                    columns={columns}
                                                    data={cell}
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
                // }
                // else {
                //   return
                // }
            } if (section[i].sections) {
                for (let j = 0; j < section[i].sections.length; j++) {
                    if (section[i].sections[j].section_name) {
                        sec.push(
                            <Suspense fallback={<div>Loading...</div>}>
                                {/* <LazyLoad> */}
                                {<Section
                                    id={section[i].sections[j].section_name}
                                    title={<div>{section[i].sections[j].section_name} <img src={info6} width="30" id={`${"positionBottom"}${i}`} />
                                        <UncontrolledTooltip
                                            placement="bottom"
                                            target={`${"positionBottom"}${i}`}
                                        >
                                            {section[i].sections[j].section_i}
                                        </UncontrolledTooltip></div>}

                                    // body={dynamicSection(section[i])}
                                />}
                                {/* </LazyLoad> */}
                            </Suspense>
                        )
                    }
                }
            }

        }
        return sec
    }


    // for (let i = 0; i < CitiesData.length; i++) {

    //     if (CitiesData[i].section_name) {
    //         if (CitiesData[i].section_i && CitiesData[i].link1 && !CitiesData[i].link2) {
    //             page.push(
    //                 <Suspense fallback={<div>Loading...</div>}>
    //                     {/* <LazyLoad> */}
    //                     {TabsLabel(CitiesData[i])}
    //                     {TabsValue(i, i, <Section
    //                         id={CitiesData[i].section_name}
    //                         title={
    //                             <div>
    //                                 {CitiesData[i].section_name}
    //                                 <img src={info6} width="30" id={`${"positionBottom"}${i}`} />
    //                                 <UncontrolledTooltip
    //                                     placement="bottom"
    //                                     target={`${"positionBottom"}${i}`}
    //                                 >
    //                                     {CitiesData[i].section_i}
    //                                 </UncontrolledTooltip>
    //                                 <a href={CitiesData[i].link1.href[0].text}>{CitiesData[i].link1.title}</a>
    //                             </div>
    //                         }
    //                         body={dynamicSection(CitiesData[i])}
    //                     />)}
    //                     {/* </LazyLoad> */}
    //                 </Suspense>
    //             )
    //         } else if (CitiesData[i].section_i && CitiesData[i].link1 && CitiesData[i].link2) {
    //             page.push(
    //                 <Suspense fallback={<div>Loading...</div>}>
    //                     {/* <LazyLoad> */}
    //                     {TabsLabel(CitiesData[i])}
    //                     {TabsValue(i, i, <Section
    //                         id={CitiesData[i].section_name}
    //                         title={
    //                             <div>
    //                                 {CitiesData[i].section_name}
    //                                 <img src={info6} width="30" id={`${"positionBottom"}${i}`} />
    //                                 <UncontrolledTooltip
    //                                     placement="bottom"
    //                                     target={`${"positionBottom"}${i}`}
    //                                 >
    //                                     {CitiesData[i].section_i}
    //                                 </UncontrolledTooltip>
    //                                 <a href={CitiesData[i].link1.href[0].text}>{CitiesData[i].link1.title} </a>
    //                                 <a href={CitiesData[i].link2.href[0].text}>{CitiesData[i].link2.title}</a>
    //                             </div>
    //                         }
    //                         body={dynamicSection(CitiesData[i])}
    //                     />)}
    //                     {/* </LazyLoad> */}
    //                 </Suspense>
    //             )
    //         } else if (CitiesData[i].section_i) {
    //             page.push(
    //                 <Suspense fallback={<div>Loading...</div>}>
    //                     {/* <LazyLoad> */}
    //                     {TabsLabel(CitiesData[i])}
    //                     {TabsValue(i, i, <Section
    //                         id={CitiesData[i].section_name}
    //                         title={
    //                             <div>
    //                                 {CitiesData[i].section_name}
    //                                 <img src={info6} width="30" id={`${"positionBottom"}${i}`} />
    //                                 <UncontrolledTooltip
    //                                     placement="bottom"
    //                                     target={`${"positionBottom"}${i}`}
    //                                 >
    //                                     {CitiesData[i].section_i}
    //                                 </UncontrolledTooltip>
    //                             </div>
    //                         }
    //                         body={dynamicSection(CitiesData[i])}
    //                     />)}
    //                     {/* {TabsValue(i, i, dynamicSection(CitiesData[i]))} */}

    //                     {/* </LazyLoad> */}
    //                 </Suspense>
    //             )
    //         } else if (!CitiesData[i].section_i) {
    //             page.push(
    //                 <Suspense fallback={<div>Loading...</div>}>
    //                     {/* <LazyLoad> */}
    //                     {/* {TabsLabel(CitiesData[i].section_name)} */}
    //                     {TabsLabel(CitiesData[i])}
    //                     {TabsValue(i, i, dynamicSection(CitiesData[i]))}
    //                     {/* </LazyLoad> */}
    //                 </Suspense>)
    //         }
    // }
    // }
    // console.log(CitiesData)

    return dynamicSection(CitiesData)
}
export default SectionMethod
