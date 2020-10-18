import React from "react";
import StudentModal from "../components/StudentModal";
import {Axios_Get} from '../api_service/main'
import {STUDENT_GETALL} from '../api_service/route'
export default function Home() {
  const [ListStudents, setListStudents] = React.useState([]) 
  const [propModal, setpropModal] = React.useState({
    title: null,
    item: null
  })
  React.useEffect(() => {
     Axios_Get(STUDENT_GETALL)
     .then(
         rs=>{
             setListStudents(rs.data)
         }
     )
     .catch(err=>{
         console.log(err)
     })
  }, [])

  const handleEdit=item=>{
     

      Axios_Get(STUDENT_GETALL+`/${item.code}`)
      .then(rs=>{
        setpropModal({

            title:"View the Student",
            item: rs.data
          })
      })
      .catch(err=>{
          console.log("err")
      })
   
  }
  const handleAdd=e=>{
    setpropModal({

        title:"Add a Student",
        item: null
      })
  }

  return (
    <div className="mt-5 mx-5">
        <div className="row">
        <div className='col-1'></div>
        <div className="text-right mr-5 col-10">
            <button className="btn-lg btn-primary"  data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap" onClick={handleAdd}>Add</button>
        </div>
        <div className='col-1'></div>

        </div>
      
        <div className="text-center">
            <h1 className="mb-3">Student List</h1>

        </div>
      <div>
      <div className='row'>
            <div className='col-1'></div>
            <table className="table table-striped col-10">
        <thead>
          <tr>
            <th scope="col">code</th>
            <th scope="col">fullName</th>
            <th scope="col">address</th>
            <th scope="col">years</th>
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
            {
                ListStudents.map((item,index)=>
                    <tr key={index}>
                        <th>{item.code}</th>
                        <td>{item.fullName}</td>
                        <td>{item.address}</td>
                        <td>{item.years}</td>
                        <td>
                            <button className="btn btn-success"  onClick={e=>handleEdit(item)}   data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap">View</button>
                            <button className="btn btn-danger ml-1">Delete</button>
                        </td>
                    </tr>
                    )
            }
        
        </tbody>
      </table>
   
      <div className='col-1'></div>

        </div>
      </div>
      <StudentModal {...propModal} />
      </div>
  );
}
