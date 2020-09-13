export const init = {
    busket : []
}



const reducer = (state, action) => {
    switch (action.type) {
        case 'Add_To_Busket':
            return {
                ...state,
                busket:[...state.busket, action.item]
            }
            
        default:
           return state;
    }

}

export default reducer;