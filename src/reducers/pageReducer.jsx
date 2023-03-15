/*const ADD-PAGE='ADD-PAGE'*/
const ADD_PAGE='ADD-PAGE';
export const addPAgeAC=()=>({
    type: 'ADD-PAGE'
})
const initialState={
    pageItemName: [
        {id: 1, name: 'name1'},
        {id: 2, name: 'name2'},
        {id: 3, name: 'name3'},
        {id: 4, name: 'name4'}
    ],
}

export  const pageReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_PAGE:
            let userItem = {
                id: 5,
                name: 'hi'
            }
            this.state.pageItemName.push(userItem);

    }
    return state;
}

