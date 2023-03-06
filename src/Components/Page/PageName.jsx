import {NavLink} from "react-router-dom";


const PageName = (props) => {
    let path = '/page/' + props.id;
    return <div><NavLink to={path}>{props.name}</NavLink></div>
}

export default PageName;
