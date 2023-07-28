import React, { useState } from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentAction, editStudentAction } from '../Redux/action';
import DisplayStudent from './DisplayStudent';
import { useNavigate, useParams } from 'react-router-dom';



function EditStudent() {
    const id=useParams()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
    const students=useSelector(state=>state)
    console.log("id....",id)
    
    const submitData=()=>{
        const sData={
            
            name : sName,
            mobile:sMobile,
            email:sEmail,
            branch:branch,
            id:id.id

        }
        dispatch(editStudentAction(sData))
        
        navigate('/')
    }
    const studentss=useSelector(state=>state)
    console.log('student....',studentss)
    const editStudent=studentss.filter(student=>{
        return student.id==id.id
      })
    const [sName,setSName] = useState(editStudent[0].name)
    const [sMobile,setSMobile]=useState(editStudent[0].mobile)
    const [sEmail,setSEmail]=useState(editStudent[0].email)
    const[branch,setBranch]=useState(editStudent[0].branch)


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                    '& .MuiTextField-root': { m: 1, width: '25ch', },



                }}

                noValidate
                autoComplete="off"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                    <TextField
                        id="sname"
                        label="Name"
                        type="text"
                        value={sName}
                        onChange={(e)=>setSName(e.target.value)}

                        variant="standard"

                    />
                    <TextField
                        id="sphno"
                        label="Mobile Number"
                        type="number"
                        value={sMobile}
                        onChange={(e)=>setSMobile(e.target.value)}

                        variant="standard"

                    />

                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                    <TextField
                        id="semail"
                        label="Email ID"
                        type="email"
                        value={sEmail}
                        onChange={(e)=>setSEmail(e.target.value)}

                        variant="standard"

                    />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Branch</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={branch}
                            onChange={(e)=>setBranch(e.target.value)}
                            label="Branch"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Full Stack Web Development'}>Full Stack Web Development</MenuItem>
                            <MenuItem value={'Data Science'}>Data Science</MenuItem>
                            <MenuItem value={'DevOps'}>DevOps</MenuItem>
                        </Select>
                    </FormControl>


                </div>
            </Box>
            <Button variant="contained" onClick={()=>submitData()}>CONFIRM EDIT</Button>
            
        </div>
    )
}

export default EditStudent
