import React from 'react';
import './Addcategories.css'
import axios from 'axios';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons'

const Addcategories = () => {

     const [cateName , setcateName] = useState("")


    const addCategory = (e) => {

        e.preventDefault()

        const dataObj = {
            cateName
        }

        console.log(dataObj);

     axios.post("http://localhost:2000/category", dataObj)

     alert("Category Added Succesfully"); 

     window.location.reload()
     
    }

     

    return (
        <>
             <button type='button' className='navbtn' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><Icon.PlusSquare size={30}/></button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog" >
          <div className="modal-content" style={{ background:"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)" }}>
                  <div className="modal-header" style={{borderWidth:"3px"}}>
                      <h5 className="modal-title " id="staticBackdropLabel">Add New Category</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

            <form onSubmit={addCategory}>
                  <div className="modal-body">


                        <div className="row g-3">
                           <div className="col">
                              <input type="text" className="form-control" placeholder="Enter Category Name" onChange={e => setcateName(e.target.value)} value={cateName}/>
                           </div>
                         </div>

                  </div>

                  <div className="modal-footer" style={{borderWidth:"3px"}}>
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                  </div>
            </form>

         </div>
   </div>
</div>      
        </>
    );
};

export default Addcategories;
