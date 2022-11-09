import ReadMoreAndLess from 'react-read-more-less'
import { ChevronLeft, ChevronRight } from 'react-feather'


const ReadMoreAndLessText = (props) => {

    return (
        <ReadMoreAndLess
            // ref={ReadMore}
            className="read-more-content"
            charLimit={15}
            readMoreText={<span><ChevronLeft style={{background: "#f6f6f6", color:'black', borderRadius: '100px', cursor: "pointer", width:"15px", height:"auto", direction:"rtl"}}/></span>}
            readLessText={<span><ChevronRight style={{background: "#f6f6f6", color:'black', borderRadius: '100px', cursor: "pointer", width:"15px", height:"auto", direction:"rtl"}}/></span>}
        >
         {props.text}
        </ReadMoreAndLess>
    )
}

export default ReadMoreAndLessText