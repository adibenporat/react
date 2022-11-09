// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Row } from 'reactstrap'

const AccordionWithoutArrow = (props) => {
  // ** State
  const [open, setOpen] = useState('1')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion className='accordion-without-arrow' open={open} toggle={toggle} style={{border:"0px" }}>
      <AccordionItem style={{border:"0px" }}>
      <AccordionHeader targetId='1'>{props.title} </AccordionHeader>
        <AccordionBody accordionId='1'>
          <Row>
          {props.body}
          </Row>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionWithoutArrow
