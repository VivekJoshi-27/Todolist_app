import React from 'react';
import { Routes , Route } from 'react-router-dom';
import App from './App';
import Addcategories from './Components/category/Addcategories';
import Addtask from './Components/todolist/Addtask'
import Categories from './Components/category/Categories';
import Editcategories from './Components/category/Editcategories';
import Edittask from './Components/todolist/Edittask';
import Catetask from './Components/category/Catetask';


const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<App/>}></Route>
            <Route exact path='/home' element={<App/>}></Route>
            <Route exact path='/categories' element={<Categories/>}></Route>
            <Route exact path='/addcategories' element={<Addcategories/>}></Route>
            <Route exact path='/editcategories/:_id' element={<Editcategories/>}></Route>
            <Route exact path='/addtask' element={<Addtask/>}></Route>
            <Route exact path='/edittask/:_id' element={<Edittask/>}></Route>
            <Route exact path='/catetask/:cateName' element={<Catetask/>}></Route>


        </Routes>
    );
};

export default Routing;