import { ADD_REMINDER ,DELE_REMINDER,CLEAR_REMINDER} from "../constants";

export const addReminder =(text,dueDate)=>{

    return{
    type: ADD_REMINDER,
    text,
    dueDate,
    
    }
}


export const  deleteReminder =(id) =>{

    return{
        type:DELE_REMINDER,
        id
    }
}

export const  clearReminder=()=>{
    return {
        type:CLEAR_REMINDER
    }
}