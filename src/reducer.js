export const init = {
    basket: [],
    user: null
}



const reducer = (state, action) => {
    switch (action.type) {
        case 'Add_To_Basket':
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
        case 'Remove_item':
            let index = state.basket.findIndex(a => a.id == action.id);
            let newbasket = [...state.basket];
            newbasket.splice(index, 1);
            return {
                ...state,
                basket: [...newbasket]
            }
        
        case 'Set_User':
            return {
                ...state,
                user: action.user
            }
        default:
           return state;
    }

}

export default reducer;