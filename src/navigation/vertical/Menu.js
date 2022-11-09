import { Circle } from "react-feather"

// export const side = []
const Menu = (props) => {
  return [
    {
      id: props.id,
      title: props.title,
      icon: <img src="" width={25}></img>,
      navLink: props.link,
      children: [
        {
          id: props.id,
          title: props.title,
          icon: <Circle size={12} />,
          navLink: props.link
        }
      ]
    }
  ]
}

export default Menu

