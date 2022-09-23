import { SETOPENMODAL, SETCLOSEMODAL } from "../types";

const initialState = {
    edit: false,
    register: false
}

const modalFuncionality = (state = initialState, action) => {
    const {type} = action;

    switch (type){
        case SETOPENMODAL:
            state = {edit: true, register: false}
        
        return state;

        case SETCLOSEMODAL:
            state = {edit: false, register: true}
        
        return state;

        default:
            return state;
    }
} 

export default modalFuncionality;