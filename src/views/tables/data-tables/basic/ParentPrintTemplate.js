import React, { Component } from "react"
import styled from "styled-components"
import { Table, TableBody, TableRow, TableCell, Link } from "@material-ui/core"

// const leSignUpLink = "htttps:wwww.someWeirdWorld.com"

const PrintingScreen = styled(Table)`
  && {
    margin-top: 10px;
    display: none;
    text-align:right;
    direction:rtl;
    @media print {
        @page {
            size: A4 landscape;
        }
        // .pagebreak {
        //     page-break-before: always;
        //   }
      display: block;
      text-align:right;
x    }
    .MuiTableCell-root {
      border-bottom: none;
      text-align:right;
    }
  }
`

//removed ---> // const PresentationWrapper = styled(TableRow)`
const DataWrapper = styled(TableCell)`
  && {
     /* height: ${props => (props.lastpage === "true" ? "100%" : "100vh")}; */
    padding-top: 0px;
    height: 50vh;
    text-align:right;
    // display: flex;
  }
`

//New Code
const TopAndBottomWrapper = styled(TableCell)`
  && {
    page-break-after: always;
  }
`

// const LEProfileWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
// `
// const ProfileElement = styled.span`
//   margin-bottom: 13px;
// `

// const Disclaimer = styled.div`
//   color: #666;
//   font-size: 13px;
//   margin-bottom: 13px;
// `
// const MailingBox = styled.div`
//   margin-left: 6rem;
// `

const PrintTemplate = ({ myDetails }) => {
  return (
    <>
        <div>
        <TopAndBottomWrapper>&nbsp;</TopAndBottomWrapper> 
        <DataWrapper>
          {/* <div> */}
            {/* <!-- START CENTERED WHITE CONTAINER --> */}
          {myDetails}
            {/* <!-- END CENTERED WHITE CONTAINER --> */}
          {/* </div> */}
          {/* removed ---> </TableCell>
        <TableCell>&nbsp;</TableCell>
      </PresentationWrapper> */}
        </DataWrapper>
        <TopAndBottomWrapper>&nbsp;</TopAndBottomWrapper>
      </div> 
    </>
  )
}

class ParentPrintTemplate extends Component {
  render() {
    const { printingProps } = this.props
    // printingProps is an array of myDetails
    // Each value inside printingProps is used to build the printing component for each page
    const printingPages = []
    //  let counter = 0
    // let lastPage = 'false'
    for (const myDetails of printingProps) {
      //   counter += 1
      //   if (counter === printingProps.length) {
      //     lastPage = 'true'
      //   }
      const tempTemplate = (
        //     <PrintTemplate
        //       myDetails={myDetails}
        //       lastPage={lastPage}
        //     />
        <PrintTemplate myDetails={myDetails} />
      )
      printingPages.push(tempTemplate)
    }
    const finalTable = (
      <>
        <PrintingScreen
          size="small"
          role="presentation"
          border="0"
          cellPadding="0"
          cellSpacing="0"
        >
          <>
            {/* map and create single component for each page */}
            {printingPages.map((page, index) => (
              <TableBody key={index}>{page}</TableBody>
            ))}
          </>
        </PrintingScreen>
      </>
    )
    return finalTable
  }
}
ParentPrintTemplate.defaultProps = {
  printingProps: []
}

export default ParentPrintTemplate
