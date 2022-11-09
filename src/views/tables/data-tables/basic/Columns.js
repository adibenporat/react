

const columns = ( props) => {
    return ({
        key: id,
        name: props.name,
        sortable: props => props.cell,
        minWidth: '100px',
        cell: () => props.cell
    })
}
  export default columns