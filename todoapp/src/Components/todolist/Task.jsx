import React from 'react';
import * as Icon from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import './Task.css'
import { useEffect , useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';


const Task = () => {

    const[todolist , settodolist] = useState([])
    const navigate = useNavigate()


    //------------- Get all Todolist from datatbase ---------------///
    useEffect(() =>{
      
              axios.get("http://localhost:2000/todolist")
              .then(async (res) => {
  
                  const rawtodolist = await res.data;
  
                  settodolist(rawtodolist);
  
              }).catch((err) =>{console.log(err)})
    })



    ///----------- Filter todolist via Date -----------///

    
    const [value, onChange] = useState(new Date());

    let seldate = value.toLocaleDateString()


    let filterlist = todolist.filter( row => {
        let newdate = row.date
        let d = new Date(newdate)

        let da= d.toLocaleDateString()

        if (da == "null") {
            return (row)
        }
        else {
            return (da == seldate)
        }
    })



    //-------------- Delete Handler -----------//

    const deleteHandler = async(_id) => {
        await axios.delete(`http://localhost:2000/todolist/${_id}`)
    
        alert("Task Deleted Successfully");

        window.location.reload()
    }

    return (

        <>
                 <div className='fil'>
                        <DatePicker  onChange={onChange} value={value} />
                 </div>

                 {
             filterlist.map((row) => {

                 const newdate = row.date
                  const d = new Date(newdate);

                return(
                    <>
                     <div className='catecont'>
                        <div className='cateRow'>
                        <div className=''>
                            <div className='time'>
                                <p>{d.getHours()}:{d.getMinutes()}</p>
                            </div>
                        </div>


                       <div className='nme'>
                            <h3>{row.taskName.toUpperCase()}</h3>
                            <p>{row.category}</p>
                       </div>
                       
                        <div class="dropdown">
                                        <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"><Icon.ThreeDotsVertical/></button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><button type='button' className='navbtn dropdown-item ' onClick={() => navigate(`/edittask/${row._id}`)}><Icon.PencilSquare/> Edit</button></li>
                                                <li><button type='button' className='navbtn dropdown-item' onClick={() => deleteHandler(row._id)}><Icon.XLg/> Delete</button></li>
                                            </ul>
                         </div>
                    </div> 
                    </div>  
                    </>
                )
             })
          }
        </>
    );
};

export default Task;