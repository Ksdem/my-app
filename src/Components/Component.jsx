import {NavLink} from "react-router-dom";


export const Component = () => {
    return (
        <div className='components'>
            <NavLink to='/page' className='components_active'>1</NavLink>
            <div>2</div>

        </div>

    )
}