
export const CountClient = (state = 0, action) => {
    const {type, payload} = action
    
    switch (type){
        case 'CLIENT': 
            return state + 1
        
        default:
            return state 
    }
}

