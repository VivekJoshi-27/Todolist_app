import React from 'react';
import { useState , useEffect } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Catetask.css'



const Catetask = () => {

    const navigate= useNavigate()

    const {cateName} = useParams()
    const [todolist , settodolist] = useState([])


    useEffect( () =>{

        axios.get(`http://localhost:2000/todolist`)
        .then(async (res) => {

            const rawtodolist =await res.data

            settodolist(rawtodolist)
        }
        ).catch( (err) => {console.log(err)})
    })

    console.log(todolist);



    let cateFil = todolist.filter( (row) => {

        if(row.category.toLowerCase() === cateName){
            return(row)
        }
    })

    console.log(cateFil);





    return (
        <>
            <div className="bg">
                <h2>Task's</h2>

            <div className="cont">
            {
                cateFil.map( (row ) => {

                    let newdate = row.date
                    let d = new Date(newdate)

                    let da= d.toLocaleDateString()
                    
                    

                    return(

                        <>
                                <p>{da}</p>
                                <p>{row.taskName.toUpperCase()}</p>
                        </>

                        )
                })
            }
            <button onClick={() => navigate("/categories")}>Back</button>
            </div>
        </div>
        </>
    );
};

export default Catetask;