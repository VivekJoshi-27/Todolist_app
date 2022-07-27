import axios from 'axios';
import React from 'react';
import { useState , useEffect } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import './Editcategories.css';


const Editcategories = () => {


    const navigate = useNavigate()

    const {_id} = useParams()
    const [cateName , setcateName] = useState("")
    
    useEffect(() => {

        axios.get(`http://localhost:2000/category/${_id}`)
        .then(async (res) => {

            const rawcateData = await res.data[0];

            setcateName(rawcateData.cateName);

        }).catch( (err) => console.log(err))
        
    },[_id])




    const updateCategory = (e) => {

        e.preventDefault()

        const dataObj = {
            cateName
        }

        console.log(dataObj);

     axios.put(`http://localhost:2000/category/${_id}`, dataObj)

    alert("Category Updated")
    navigate("/categories")
    
    }


    return (
        <>

        <div className='bg'>
            <h2>Update Category</h2>

                <div className="cont" >
                    <form onSubmit={updateCategory}>
                        <div className="inp">
                            <input type="text" placeholder="Enter Category Name" onChange={e => setcateName(e.target.value)} value={cateName}/>
                        </div>

                        <div className="">
                            <button type="submit" className="btn btn-primary" >Update</button>
                            <button type="button" className="btn btn-secondary" onClick={() => navigate(`/categories`)}>Cancel</button>
                        </div>
                    </form>
                </div>
        </div>      
   </>
    );
};

export default Editcategories;