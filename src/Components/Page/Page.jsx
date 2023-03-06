import PageItem from "./PageItem";
import PageName from "./PageName";

export const Page = (props) => {

    let PageNameItem = props.store.state.pageItemName.map((p, index) => (
        <PageName key={index} id={p.id} name={p.name}/>));
    let PageItemIcon = props.store.state.icon.map((i, index) => (<PageItem key={index} page={i}/>));


    let onAddItemName = () => {
        props.store.onAddPageItem();
    }

    return <div className='page'>
        <div className='page_name'>
            {PageNameItem}
            <div className='page_button' onClick={() => onAddItemName()}>
                click on me
            </div>
        </div>
        <div className='page_item'>
            {PageItemIcon}

        </div>

    </div>

}