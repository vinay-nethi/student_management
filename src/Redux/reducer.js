import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "../constants"
const initialState=[]

const aedReducer=(state=initialState,action)=>{
    console.log('inside reducer..',action)
    if(action.type==ADD_STUDENT){
        state.push(action.payload)

    }
    else if(action.type==DELETE_STUDENT){
        const filterData=state.filter(info=>{
            return info.id!=action.payload
        })
        state=[...filterData]

        }
        else if(action.type==EDIT_STUDENT){
            const editedData=state.map((val)=>{
                if(val.id==action.payload.id){
                    val={...action.payload}
                }
                return val
            })
            state=[...editedData]
            
        }
        return state
    }
 
export default aedReducer