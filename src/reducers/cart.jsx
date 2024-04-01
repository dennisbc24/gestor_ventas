export const cartInitialState = []

export const cartReducer = (state, action) =>{
    const {type:actionType, payload:actionPayload} = action

    switch(actionType) {
        case 'ADD_TO_CART':{
            const {_id} = actionPayload
            const productInCartIndex = state.findIndex(item => item._id === _id)

            if (productInCartIndex >= 0) {
                const newState= structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
             }
             return [
                ...state, {
                    ...actionPayload, quantity:1
                }
             ]
        }
        case 'DECREASE_QUANTITY':{
            const {_id} = actionPayload
            const productInCartIndex = state.findIndex(item => item._id === _id)

            if (productInCartIndex >= 0) {
                const newState= structuredClone(state)
                if (newState[productInCartIndex].quantity > 1) {
                    newState[productInCartIndex].quantity -= 1
                return newState
                }
                
             }
             return state
        }
        case 'REMOVE_FROM_CART':{
            const {_id} = actionPayload
            return state.filter(item => item._id != _id)
        }
        case 'CLEAR_CART': {
            return cartInitialState
        }

    }
    return state
}