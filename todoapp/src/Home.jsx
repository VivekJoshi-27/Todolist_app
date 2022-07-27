import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import Addtask from './Components/todolist/Addtask'
import Task from './Components/todolist/Task';
import Date from './Components/Date';
import './Home.css'



const Home = () => {

  const navigate = useNavigate()
 

    return (
        <>
        <div className='backg'>
             <div className='navbar'>
                <button type='button' className='navbtn' onClick={() => navigate("/categories")}><Icon.List size={30}/></button>
                <h2>Schedule</h2>
                <Addtask/>
            </div>
                <div className='clock'>
                    <Date/>
                </div>
            <div>
                <Task/>
            </div>
        </div>
        </>
    );
};

export default Home;