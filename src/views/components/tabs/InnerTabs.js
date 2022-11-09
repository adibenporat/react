import * as React from 'react'
// import PropTypes from 'prop-types'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
// import Tabs from 'react-bootstrap/Tabs'
import Tab from '@mui/material/Tab'
// import {Printer} from 'react-feather'
// import ReactToPrint from 'react-to-print'

// import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// import info6 from "../../../assets/images/elements/maps.png"
import { Col, Row } from "reactstrap"
// import CardStyleVariation from '../../ui-elements/cards/basic/CardStyleVariation'

// export function TabPanel(props) {
//     const { children, value, index, ...other } = props

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`horizontal-tabpanel-${index}`}
//             aria-labelledby={`horizontal-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     )
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired
// }

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>
}

export default function VerticalTabs(props) {

    let arraylength = null
    for (let i = 0; i < props.sections.length; i++) {
        arraylength = props.sections.length
    }
    let arraylength1 = null
    for (let i = 0; i < props.title.length; i++) {
        arraylength1 = props.title.length
    }

    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


    return (<Box sx={{ flexGrow: 1, bgcolor: 'transparent' }}>
        <Tabs 
            orientation="horizontal"
            variant="scrollable"
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            indicator={{background: "blue"}}
            onChange={handleChange}
            aria-label="secondary horizontal tabs example"
            sx={{ borderLeft: 1, borderColor: 'divider' }}
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{[`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 }
                }
            }}
            >
            { Array(arraylength1).fill().map((_, i) => (
               (<Tab label={props.title[i].header} />)
            ))}
            </Tabs>
        {Array(arraylength).fill().map((_, i) => (
            <TabPanel value={value} index={i} >
                {<Col md="12">{props.sections[i]} </Col>}
            </TabPanel>))}
    </Box>)
}
