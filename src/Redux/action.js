import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "../constants"

export const addStudentAction=(studentData)=>{
    console.log('action..',studentData)
    return{
        type:ADD_STUDENT,
        payload:studentData
    }
}
export const deleteStudentAction=(id)=>{
    return{
        type:DELETE_STUDENT,
        payload:id
    }
}
export const editStudentAction=(editedData)=>{
    return{
        type:EDIT_STUDENT,
        payload:editedData
    }
}
