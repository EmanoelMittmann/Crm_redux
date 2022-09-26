

export const IsOpen = (state = false, action) => {
    const {payload, type} = action;

    switch(type){
        case 'OPEN':    
            return state = true
        case 'CLOSE': 
            return state = false
        default:
            return state;
    }
}