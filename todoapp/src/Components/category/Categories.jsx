import React from 'react';
import * as Icon from 'react-bootstrap-icons'
import * as con from "react-icons/tb";
import './Categories.css'
import { useNavigate} from 'react-router-dom';
import Addcategories from './Addcategories';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Categories = () => {

    const navigate = useNavigate()
    const[cateData , setcateData] =useState([])
    
    useEffect(() => {

        axios.get("http://localhost:2000/category")
        .then(async (res) => {

            const rawcateData = await res.data;

            setcateData(rawcateData);

        }).catch( (err) => console.log(err))
        
    },[])

console.log(cateData);

const deleteHandler = async(_id) => {
    await axios.delete(`http://localhost:2000/category/${_id}`)

    alert("Category Deleted Successfully");
    
    window.location.reload()
}


    return (
        <>
        <div className='backg'>
          <div className='navbar'>
                <button type='button' className='navbtn' onClick={() => navigate("/")}><Icon.List size={30}/></button>
                <h2>Categories</h2>
                <Addcategories/>       
         </div> 

            {
                cateData.map( (row) => {

                    return(
                        <>
                        <div className='catecont'>
                           <div className='cateRow'>
                                   <div>
                                      <con.TbChartDonut3 size={50} />
                                   </div>
                                   <div className='nme'>
                                      <h3>{row.cateName.toUpperCase()}</h3>
                                      <p><button className='tasks'onClick={() => navigate(`/Catetask/${row.cateName}`)}>View task's</button></p>
                                    </div>

                                    <div class="dropdown">
                                        <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"><Icon.ThreeDotsVertical/></button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><button type='button' className='navbtn dropdown-item ' onClick={() => navigate(`/editcategories/${row._id}`)}><Icon.PencilSquare/> Edit</button></li>
                                                <li><button type='button' className='navbtn dropdown-item' onClick={() => deleteHandler(row._id)}><Icon.XLg/> Delete</button></li>
                                            </ul>
                                    </div>                                    
                          </div>
                        </div>
                        </>
                    )

                })
            }
        </div>
        </>

    );
};

export default Categories;