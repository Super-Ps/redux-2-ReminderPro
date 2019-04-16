import {ADD_REMINDER ,DELE_REMINDER, CLEAR_REMINDER} from '../constants';
//import { bake_cookie, read_cookie} from 'sfcookies'  // 保存在cookies 中 但是我这里用不了，有写入跟读取




const reminders =(state=[],action={})=>{

    const { text,dueDate} = action
    console.log('reducer-state',state)
    console.log('reducer-action',action)
    switch (action.type){
        
        case ADD_REMINDER:


            return [
                ...state,
                {
                text,
                dueDate
                }
            ]

        case DELE_REMINDER:
            return state.filter((item,index,arr)=>arr.indexOf(item) !== action.id);

        case CLEAR_REMINDER:
            return []


        default:  return state;
    }
}


export default reminders; 