import ReadMoreReact from 'read-more-react'
import { MoreHorizontal } from 'react-feather'
const ReadMore = (props) => {
    return (
        <ReadMoreReact text={props.text}
            min={10}
            ideal={20}
            max={100}
            // readMoreText={"קרא עוד"}/>
            readMoreText={<MoreHorizontal style={{background: "#80808061", borderRadius: '15px', cursor: "pointer"}} />} />
    )
}
export default ReadMore
