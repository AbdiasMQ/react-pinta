import './Main.css';
import Footer from '../Footer/Footer'
import React from 'react'
import Navbar from '../mynavbar/navbar';
import { Outlet } from 'react-router-dom';
// el main tiene esos para todos los html menos el login 
//el main no se toca pipipip
const Main = () => {
  return (
    <div className='main'>
        <Navbar></Navbar>
        <main>
            <Outlet></Outlet>   
        </main>
        <Footer></Footer>

    </div>
  )
}

export default Main