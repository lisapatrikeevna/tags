import {messageType} from "../components/pages/main/message/Message";

type actionType = setMessageACType| setFilterValueACType| removePostACType
| changeTagACType

type initialStateType={
    messageList:Array<messageType>
    filter:string
}
const initialState:initialStateType = {
    messageList:[],
    filter:'',
}
const appReducer = (state= initialState, action: actionType) => {
    switch(action.type){
        case "SET-MESSAGES":
            return {...state,messageList:action.payload}
        case "SET-FILTER-VALUE":
            return {...state,filter:action.payload}
        case "REMOVE-POST":
            return {...state,
            messageList: state.messageList.filter(i=>i.id !==action.payload)
            }
        case "CHANGE-TAG-POST":
            return {
                ...state, messageList: state.messageList.map(i => i.id=== action.id? {...i,tags:action.tag}:i )
            }
        default: return state
    }
}
export const setMessageAC = (payload: Array<messageType>) => ({type: 'SET-MESSAGES', payload} as const)
export const setFilterValueAC = (payload: string) => ({type: 'SET-FILTER-VALUE', payload} as const)
export const removePostAC = (payload: string) => ({type: 'REMOVE-POST', payload} as const)
export const changeTagAC = (id: string,tag:string) => ({type: 'CHANGE-TAG-POST', id,tag} as const)

type setMessageACType = ReturnType<typeof setMessageAC>
type setFilterValueACType = ReturnType<typeof setFilterValueAC>
type removePostACType = ReturnType<typeof removePostAC>
type changeTagACType = ReturnType<typeof changeTagAC>


export default appReducer

