import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteOutlined,EditOutlined} from '@ant-design/icons';
import { Button,Input} from 'antd';
import { deleteStudentAction, editStudentAction } from '../Redux/action';
// import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';






function DisplayStudent() {
  const navigate=useNavigate()
  const {Search}=Input
  const [search,setSearch]=useState('')
  const info = useSelector(state => state)
  console.log('info...',info)
  const dispatch=useDispatch()
  const editFunc=(id)=>{
    dispatch(editStudentAction(id))
    navigate('/edit')
  }
  
  const fData=info.filter(data=>{
    return data.name.toLowerCase().includes(search.toLowerCase())
  })

  
  


 


  return (
    <div>
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="medium"
      value={search}
      style={{
        width: "50%",
        margin: "20px"
      }}
      onChange={(e)=>setSearch(e.target.value)}
      
    />
    {
      
      
      
      <table class="table m-3 w-75 mx-auto table-bordered">
      <thead class="thead-light align-items-start" >
        <tr>
        <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">mobile</th>
          <th scope="col">email</th>
          <th scope="col">branch</th>
          <th scope="col">actions</th>
          
        </tr>
      </thead>
      <tbody class="align-items-start">
        {
          (fData.length>0)?
          fData.map(data=>(
            <tr>
              
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.mobile}</td>
          <td>{data.email}</td>
          <td>{data.branch}</td>
          
          {/* <td><Button type="primary" danger shape="round" icon={<DeleteOutlined />} onClick={()=>dispatch(deleteStudentAction(data.id))} >Delete</Button></td>
          
          <Link to={`/edit/${data.id}`}>
          <td><Button type="primary" shape="round" icon={<EditOutlined />} onClick={()=>editFunc(data.id)}>edit</Button></td>
          </Link> */}
          <td>
                  <div>
                    <Button
                      type="primary"
                      danger
                      shape="round"
                      // icon={<DeleteOutlined />}
                      onClick={() => dispatch(deleteStudentAction(data.id))}
                    >
                      Delete
                    </Button>
                    <Link to={`/edit/${data.id}`}>
                      <Button
                        type="primary"
                        shape="round"
                        // icon={<EditOutlined />}
                        onClick={() => editFunc(data.id)}
                      >
                        Edit
                      </Button>
                    </Link>
                  </div>
                </td>
          
        </tr>

          )) : <h3 className='text primary'>no data</h3>
        }
        
        
      </tbody>
    </table>
    
   
  }
  {/* <Button variant="contained" onClick={()=>navigate('/add')}>ADD STUDENT</Button> */}
  <Button type="primary" onClick={()=>navigate('/add')}>ADD STUDENT</Button>
  </div>
    
    
  )
  }

export default DisplayStudent
