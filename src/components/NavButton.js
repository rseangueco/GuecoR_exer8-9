export default function NavButtons(props) {
    let menus = props.data;
    
    return (
        <ul>
            {
            menus.map((menus) => {
                return <a class='nav-button'> {menus.name} </a>
            })
            }
        </ul>
    )
}