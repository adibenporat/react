
// import DataTable from "../../views/tables/data-tables/basic/DataTable"
import mock from "../mock"

// ** Utils
import { paginateArray } from "../utils"
import CustomeData from "./data.json"

// const data = [
//   table1 = [],
//   table2 = []
// ]


// for (let index = 1; index < CustomeData.length; index++) {
//   const section = CustomeData[index]
//   if (section.section_name) {
//     if (section.section_inner || !section.section_inner) {
//       for (
//         let innerSection = 0;
//         innerSection < section.fields.length;
//         innerSection++
//       ) {
//         if (
//           section.fields[innerSection].header === "היתרים בכתובת"
//         ) {
//           if (section.fields[innerSection].type === "table") {
//               const inner = section.fields[innerSection]

//               inner.fields.map((row, inners) => {
//               data.table1.push({
//                   id: inners,
//                   name: row.title,
//                   cell: row.fkey
//                   })
//             })
//           }
//         }
//         if (
//           section.fields[innerSection].header === "היתרים באזור"
//         ) {
//           if (section.fields[innerSection].type === "table") {
//               const inner = section.fields[innerSection]
//               inner.fields.map((row, inners) => {
//               data.table2.push({
//                   id: inners,
//                   name: row.title,
//                   cell: row.fkey
//                   })
//             })
//           }
//         }
//       }
//     }
//   }
// }


const data = []
// const columns =[]
// let table 

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
          section.fields[innerSection].header || !section.fields[innerSection].header) {
          if (section.fields[innerSection].type === "table") {
              const inner = section.fields[innerSection]

              inner.fields.map((row, inners) => {
              data.push({
                  id: inners,
                  name: row.title,
                  cell: row.fkey
                  }) 
          //       data.map((element, id) => {
          //          columns.push({
          //             key: id,
          //             name: element.name,
          //             sortable: () => element.cell,
          //             minWidth: '100px',
          //             cell: () => element.cell
          //             })
          //           })   
          //   })
          // table = <DataTable
          // id = {innerSection}
          // data={data}
          // columns={columns}/>  
          })
        }
      }
    }
  }
}
       

// for (let index = 1; index < CustomeData.length; index++) {
//   const section = CustomeData[index]
//   if (section.section_name) {
//     if (section.section_inner || !section.section_inner) {
//       for (
//         let innerSection = 0;
//         innerSection < section.fields.length;
//         innerSection++
//       ) {
        
//       }
//     }
//   }
// }
// console.log(data)
  
// for (let index = 3; index < PostData.length; index++) {
//   const section = PostData[index]
//   if (section.section_name === "היתרים") {
//     for (let sectionFieldIndex = 0; sectionFieldIndex < section.fields.length; sectionFieldIndex++) {
//       const sectionField = section.fields[sectionFieldIndex]
//       if (sectionField.header === "היתרים באזור") {
//           sectionField.fields.map((row, id1) => {
//           data.heterim.push({
//             responsive_id: "",
//             id: id1,
//             distance_m: row.fkey,
//             request_num: row.fkey,
//             permission_num: row.fkey,
//             sivug_makor: row.fkey,
//             sug_bakasha: row.fkey,
//             building_stage: row.fkey,
//             open_request: row.fkey,
//             permission_date: row.fkey,
//             maslul_rishuy: row.fkey,
//             sw_tama_38: row.fkey,
//             addresses: row.fkey
//           })
//         })
//       }
//     }
//   }

//   if (section.section_name === "החלטות שמאי מכריע") {
//     for (let sectionFieldIndex = 0; sectionFieldIndex < section.fields.length; sectionFieldIndex++) {
//       const sectionField = section.fields[sectionFieldIndex]
//       if (sectionField.header === "החלטות שמאי מכריע באזור") {
//           sectionField.fields.map((row, id2) => {
//             data.shamai.push({
//               responsive_id: "",
//               id: id2,
//               distance_m: row.fkey,
//               block: row.fkey,
//               plot: row.fkey,
//               appraisaltype: row.fkey,
//               appraisalversion: row.fkey,
//               appraisertype: row.fkey,
//               committee: row.fkey,
//               decisiondate_unix: row.fkey,
//               publicitydate_unix: row.fkey
//           })
//         })
//       }
//     }
//   }
// if (section.section_name === "נתוני עררים") {
//   for (let sectionFieldIndex = 0; sectionFieldIndex < section.fields.length; sectionFieldIndex++) {
//     const sectionField = section.fields[sectionFieldIndex]
//     if (sectionField.header === "עררים באזור") {
//         sectionField.fields.map((row, id3) => {
//         data.arrarim.push({
//           responsive_id: "",
//           id: id3,
//           distance_m: row.fkey,
//           descriptor: row.fkey,
//           numb: row.fkey,
//           entity_subtype: row.fkey,
//           auth: row.fkey,
//           meeting_date_unix: row.fkey,
//           street_name: row.fkey
//         })
//       })
//     }
//   }
// }
// if (section.section_name === "נתוני עסקאות נדל\"ן ותובנות") {
//   for (let sectionFieldIndex = 0; sectionFieldIndex < section.fields.length; sectionFieldIndex++) {
//     const sectionField = section.fields[sectionFieldIndex]
//     if (sectionField.header === "נתוני עסקאות נדל\"ן בחלקה") {
//         sectionField.fields.map((row, id4) => {
//         data.businessHelka.push({
//           responsive_id: "",
//           id: id4,
//           fulladress: row.fkey,
//           dealdate_unix: row.fkey,
//           dealnaturedescription: row.fkey,
//           assetroomnum: row.fkey,
//           floorno: row.fkey,
//           dealnature: row.fkey,
//           dealamount: row.fkey,
//           price_per_mr: row.fkey,
//           newprojecttext: row.fkey,
//           projectname: row.fkey
//         })
//       })
//     }
//   }

//   for (let sectionFieldIndex = 0; sectionFieldIndex < section.fields.length; sectionFieldIndex++) {
//     const sectionField = section.fields[sectionFieldIndex]
//     if (sectionField.header === "נתוני עסקאות נדל\"ן באזור") {
//         sectionField.fields.map((row, id5) => {
//         data.businessArea.push({
//           responsive_id: "",
//           id: id5,
//           fulladress: row.fkey,
//           dealdate_unix: row.fkey,
//           dealnaturedescription: row.fkey,
//           assetroomnum: row.fkey,
//           floorno: row.fkey,
//           dealnature: row.fkey,
//           dealamount: row.fkey,
//           price_per_mr: row.fkey,
//           newprojecttext: row.fkey,
//           projectname: row.fkey
//         })
//       })
//     }
//   }
// }
// if (section.section_name === "זכויות בנייה ע\"פ מידע עירוני") {
//   for (let sectionFieldIndex = 0; sectionFieldIndex < section.fields.length; sectionFieldIndex++) {
//     const sectionField = section.fields[sectionFieldIndex]
//     if (sectionField.header === "זכויות בנייה ע\"פ המידע העירוני") {
//         sectionField.fields.map((row, id6) => {
//         data.buldingRights.push({
//           responsive_id: "",
//           id: id6,
//           field3: row.fkey,
//           field4: row.fkey,
//           field5: row.fkey,
//           field6: row.fkey,
//           field7: row.fkey,
//           field8: row.fkey,
//           field9: row.fkey,
//           field10: row.fkey,
//           field11: row.fkey,
//           field13: row.fkey
//         })
//       })
//     }
//   }
// }
// if (section.section_name === "תכניות החלות על חלקה") {
//   for (let sectionFieldIndex = 0; sectionFieldIndex < section.fields.length; sectionFieldIndex++) {
//     const sectionField = section.fields[sectionFieldIndex]
//     if (sectionField.header === "תכניות") {
//         sectionField.fields.map((row, id7) => {
//         data.plansHelka.push({
//           responsive_id: "",
//           id: id7,
//           field2: row.fkey,
//           p_name: row.fkey,
//           field4: row.fkey,
//           field5: row.fkey,
//           field6: row.fkey,
//           field7: row.fkey
//         })
//       })
//     }
//   }
// }

// if (section.section_name === "תוכניות באזור") {
//   for (let sectionFieldIndex = 0; sectionFieldIndex < section.fields.length; sectionFieldIndex++) {
//     const sectionField = section.fields[sectionFieldIndex]
//     if (sectionField.header === "תכניות") {
//         sectionField.fields.map((row, id8) => {
//         data.plansArea.push({
//           responsive_id: "",
//           id: id8,
//           distance_m: row.source_info,
//           entity_subtype_desc: row.source_info,
//           pl_number: row.source_info,
//           matarot: row.source_info,
//           station_desc: row.source_info,
//           snap_last_update_unixtime: row.source_info,
//           pl_url: row.source_info
//         })
//       })
//     }
//   }
// }

// }

  mock.onGet('/api/datatables/initial-data').reply(() => {
    return [200, data]
  })
  
  mock.onGet('/api/datatables/data').reply(config => {
    // eslint-disable-next-line object-curly-newline
    const { q = '', perPage = 10, page = 1 } = config
    /* eslint-enable */
  
    const queryLowered = q.toLowerCase()
    const filteredData = data.filter(
      item =>
        /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
        item.cell.toLowerCase().includes(queryLowered)
    )
    /* eslint-enable  */
  
    return [
      200,
      {
        allData: data,
        invoices: paginateArray(filteredData, perPage, page),
        total: filteredData.length
      }
    ]
  })
}
