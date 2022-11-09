import * as React from 'react'
import { useState } from 'react'
import {
    FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon,
    TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon
} from "react-share"


// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap'


// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// import "swiper/css"
// import "swiper/css/navigation"

// import "./styles.css"

// import required modules
// import { Pagination, Navigation } from "swiper"

// import PropTypes from 'prop-types'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
// import Tabs from 'react-bootstrap/Tabs'
import Tab from '@mui/material/Tab'
// import {Printer} from 'react-feather'
// import ReactToPrint from 'react-to-print'

// import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import info6 from "../../../assets/images/elements/maps.png"
import CardStyleVariation from '../../ui-elements/cards/basic/CardStyleVariation'
// import SwipeableViews from 'react-swipeable-views'

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
// const styles = {
//     tabs: {
//         background: '#fff',
//     },
//     slide: {
//         padding: 15,
//         minHeight: 100,
//         color: '#fff',
//     }
// }
function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false)

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text)
        } else {
            return document.execCommand('copy', true, text)
        }
    }

    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true)
                setTimeout(() => {
                    setIsCopied(false)
                }, 1500)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <input type="text" value={copyText} readOnly />{' '}
            {/* Bind our handler function to the onClick button property */}
            <Button color='primary' onClick={() => setCenteredModal(!centeredModal), handleCopyClick}>
            <span>{isCopied ? 'הקישור הועתק' : 'העתקת קישור'}</span>
                </Button>
            {/* <button onClick={handleCopyClick}>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
            </button> */}
        </div>
    )
}

const ModalBasic = () => {
    // ** States
    const [centeredModal, setCenteredModal] = useState(false)
    return (<div className='vertically-centered-modal'>

        <Button color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
            share        </Button>
        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
            <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>תל אביב | גוש 111 | חלקה 7210</ModalHeader>
            <ModalBody>
            שיתוף הקישור דרך
            <br></br><br></br>
                <FacebookShareButton url={window.location.href}>
                    {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                    <FacebookIcon size={25} round />
                </FacebookShareButton>{' '}
                <WhatsappShareButton url={window.location.href}>
                    <WhatsappIcon size={25} round />
                </WhatsappShareButton>{' '}
                <TwitterShareButton url={window.location.href}>
                    <TwitterIcon size={25} round />
                </TwitterShareButton>{' '}
                <EmailShareButton url={window.location.href}>
                    <EmailIcon size={25} round />
                </EmailShareButton>
                <br></br><br></br>
                <ClipboardCopy copyText={window.location.href} />
            </ModalBody>
        </Modal> </div>)
}
function TabPanel(props) {
    const { children, value, index, ...other } = props

    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>
}

export default function VerticalTabs(props) {
    let arraylength = null
    for (let i = 0; i < props.sections.length; i++) {
        arraylength = props.sections.length
    }

    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (<CardStyleVariation color={'transparent'} title={<div><h4>תל אביב</h4>
        <ModalBasic />
        <body>גוש: 111 חלקה: 7210</body></div>} text={<Box sx={{ flexGrow: 1, bgcolor: 'transparent' }}>
            <Tabs
                orientation="horizontal"
                variant="scrollable"
                value={value}
                indicatorColor="secondary"
                textColor="secondary"
                indicator={{ background: "blue" }}
                onChange={handleChange}
                aria-label="secondary horizontal tabs example"
                sx={{ borderLeft: 1, borderColor: 'divider' }}
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 }
                    }
                }}
            >
                {Array(arraylength).fill().map((_, i) => (
                    <Tab label={props.sections[i].props.children.props.id} />
                ))}</Tabs>
            {Array(arraylength).fill().map((_, i) => (
                //    <SwipeableViews>
                <TabPanel value={value} index={i} >
                    {<div><Row><Col md="7">{props.sections[i]} </Col><Col md="5"><CardStyleVariation color={"white"} style={{ position: '-webkit-sticky', position: "sticky", top: "0", overflow: "auto" }} text={<img src={info6} width={'100%'} />}></CardStyleVariation></Col></Row></div>}
                </TabPanel>
                // </SwipeableViews>
            ))}
        </ Box>} />)
}