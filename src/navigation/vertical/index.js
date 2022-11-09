// // ** Navigation imports
import CustomeData from "../../views/tables/data-tables/basic/EditedData.json"
import { HashLink } from 'react-router-hash-link'
// import { Circle } from "react-feather"

const menu = []
// // ** Merge & Export

// for (let i = 0; i < CustomeData.length; i++) {
//     if (CustomeData[i].section_name) {
//     // menu.push({
//     //     id: i,
//     //     title: CustomeData[i].section_name,
//     //     icon: CustomeData[i].image,
//     //     navLink: `/#${CustomeData[i].section_name}`
//     //   })
    
//     const inner = CustomeData[i].fields
//     console.log(inner)
//     for (let j = 0; j < inner.length; j++) {
//     if (inner[j].section_name) {
//     menu.push({
//         id: i,
//         title: CustomeData[i].section_name,
//         icon:"",
//         children: [
//           {
//             id: j,
//             title: inner[j].section_name,
//             icon: <Circle size={12} />,
//             navLink: `#${inner[j].section_name}`
//           }
//         ]
//       })
//     }
//       if (inner[j].header) {
//         menu.push({
//             id: i,
//             title: CustomeData[i].section_name,
//             icon:"",
//             children: [
//               {
//                 id: j,
//                 title: inner[j].header,
//                 icon: <Circle size={12} />,
//                 navLink: `#${inner[j].header}`
//               }
//             ]
//           })
//         }
//     }
// }
// }
function dynamicNav(section) {
    const navigat = []

    for (let i = 0; i < section.length; i++) {
    if (section[i].section_name) {
       navigat.push(
        {id: i,
        title: section[i].section_name,
        icon: section[i].image,
        navLink: `#${section[i].section_name}`
      }
      ) 
      }
       return navigat
    }
  }
  
  for (let i = 0; i < CustomeData.length; i++) {
    if (CustomeData[i].section_name) { 
      if (CustomeData[i].children === "yes") { 
        menu.push(
          {id: i,
          title: CustomeData[i].section_name,
          icon: "",
          // navLink: `${"#"}${CustomeData[i].section_name}`,
          children: dynamicNav(CustomeData[i].fields)}
        ) 
         } else if (!CustomeData[i].children) {
          menu.push(
        {id: i,
        title: CustomeData[i].section_name,
        icon: "",
        navLink: `#${CustomeData[i].section_name}`
        }
      )
      }
    }
  }
  
export default [...menu]