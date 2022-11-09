// // ** React Imports
// import { Fragment } from "react"

// // ** Demo Components
// // import CardTitles from './CardTitles'
// // import CardImages from './CardImages'
// // import CardLayout from './CardLayout'
// // import CardNavigation from './CardNavigation'
// // import CardHeaderFooter from './CardHeaderFooter'
// // import CardContentTypes from './CardContentTypes'
// // import CardTextAlignment from './CardTextAlignment'

// import CardStyleVariation from "./CardStyleVariation"
// import PostData from "./Tel_Aviv.json"

// // ** Custom Components
// import Breadcrumbs from "@components/breadcrumbs"

// const BasicCards = () => {
//   // const [titles, setTitle] = useState("");
//   // {PostData.map((postDetail) =>
//   //   (
//   //     <div>{postDetail.section_name}</div>
//   //   )
//   // )}
//   // useEffect(() => {
//   //   getQuote().then((newTitle) => setTitle(newTitle));
//   // }, []);


//     for (let index = 1; index < PostData.length; index++) {
//       const element = PostData[index];
//       // for (let j = 0; j < element.fields.length; j++) {
//         let itemList=[];
//         element.fields.forEach((element2, j) => {
//           itemList.push( <CardStyleVariation key={j} title={element2.lang_title_he} text={element2.fkey}> 
//             </CardStyleVariation>)
//         });
//         // const element2 = element.fields[j];
//         // const element3 = element.fields[j].fkey;
        
      

  
//   return (
//     <Fragment>
//       <Breadcrumbs
//         breadCrumbTitle="Basic Cards"
//         breadCrumbParent="Card"
//         breadCrumbActive="Basic Cards"
//       />
//         {/* <CardStyleVariation
//           key={j}
//           title={element2}
//           text={element3}> 
//           </CardStyleVariation> */}
//           {itemList}

//     </Fragment>
//   )
// }
// }



// export default BasicCards
  
//   // <Fragment>
//   //   <Breadcrumbs breadCrumbTitle='Basic Cards' breadCrumbParent='Card' breadCrumbActive='Basic Cards' />
//   //   {PostData.map(( fields ,index) => (
//   //   <CardStyleVariation key={index}
//   //       title={{fields}.lang_title_he}
//   //        text={{fields}.fkey}>
//   //     </CardStyleVariation>
//   //      ))}
//   // </Fragment>

//   //   <Fragment>
//   //   <Breadcrumbs breadCrumbTitle='Basic Cards' breadCrumbParent='Card' breadCrumbActive='Basic Cards' />
//   //   {PostData.map(( titles ,index) => (
//   //   <CardStyleVariation key={index}
//   //       title={titles.section_name}
//   //       text={titles.section_name}>
//   //     </CardStyleVariation>
//   //      ))}
//   // </Fragment>

//   /* <Fragment>
// <Breadcrumbs breadCrumbTitle='Basic Cards' breadCrumbParent='Card' breadCrumbActive='Basic Cards' />
//         {PostData.map(( fields) =>( 
//           <CardStyleVariation>
//             {PostData.map(({fields}, index) =>
//               <CardStyleVariation key={index}
//               title={{fields}[index].lang_title_he}
//               text={{fields}[index].fkey}>
//               </CardStyleVariation>
//         )}
//           </CardStyleVariation>
//          ))}
//       </Fragment> */

//   // PostData.map(( {fields}) =>(
//   //   <Fragment>
//   //    <Breadcrumbs breadCrumbTitle='Basic Cards' breadCrumbParent='Card' breadCrumbActive='Basic Cards' />
//   //         {fields.map(({lang_title_he, fkey}, index) =>(
//   //           <CardStyleVariation key={index}
//   //           title={lang_title_he}
//   //           text={fkey}>
//   //           </CardStyleVariation>
//   //     ))}
//   //     </Fragment>
//   //      ))

//   // PostData.map(( fields) =>(
//   //   console.log(fields),
//   //   <Fragment>
//   //    <Breadcrumbs breadCrumbTitle='Basic Cards' breadCrumbParent='Card' breadCrumbActive='Basic Cards' />
//   //         {fields.map((each, index) =>(
//   //           <CardStyleVariation key={index}
//   //           title={each.lang_title_he}
//   //           text={each.fkey}>
//   //           </CardStyleVariation>
//   //     ))}
//   //     </Fragment>
//   //      ))

//   // <Fragment key={j}>
//   //    <Breadcrumbs breadCrumbTitle='Basic Cards' breadCrumbParent='Card' breadCrumbActive='Basic Cards' key={j}/>
//   //    <CardStyleVariation key={j}
//   //            title={element2.lang_title_he}
//   //            text={element2.fkey}>
//   //            </CardStyleVariation>
//   // </Fragment>

//   //           )

