import {combineReducers, createStore} from "redux";
import pageName from "../Components/Page/PageName";
import {pageReducer} from "../reducers/pageReducer";


const ADD_PAGE='ADD-PAGE';


export const addPAgeAC=()=>({
    type: 'ADD-PAGE'
})

let store = {
    state: {
        pageItemName: [
            {id: 1, name: 'name1'},
            {id: 2, name: 'name2'},
            {id: 3, name: 'name3'},
            {id: 4, name: 'name4'}
        ],
        icon: ['https://shapka-youtube.ru/wp-content/uploads/2021/03/kartinka-na-avatarku-dlya-devushek.jpg',
            'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg'
        ]
    },
    dispatch(action) {
        switch (action) {
            case ADD_PAGE:
                let userItem = {
                    id: 5,
                    name: 'hi'
                }
                this.state.pageItemName.push(userItem);

        }
    }
}


export default store;
