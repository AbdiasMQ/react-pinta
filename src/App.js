import './App.css';
import Navbar from './components/mynavbar/navbar';
import Button from './components/Button/Button';
import { useState } from 'react';
import { BrowserRouter ,Navigate, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Baneos from './components/Baneos/Baneos';
import Users from './components/Users/Users';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
function App() {
  //aca definimos las los comportamiento de los botones
 // el navbar aparece en todas las paginas
 // el route sirve para definir las rutas de la aplicacion, y el exact es para que solo se muestre la ruta exacta
 // el error 404 es para pagina no encontrada coñito de azucar
 return (
  <>
     <BrowserRouter>
      <Routes>
        <Route exact path='/Login' element={<Login/>}></Route>
        <Route path='/' element={<Main/>}>
        {/* lo que empieza con barra pinta main y */}

          <Route exact path='/baneos' element={<Baneos/>}></Route>
          <Route exact path='/users' element={<Users/>}></Route>
          <Route path='/error' element={<Error/>}></Route>
        {/* si pone otra ruta le envia al error */}
          <Route path='*' element={<Navigate to="/error" />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );   
}
export default App;
