
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from "./Pages/Home/Home"
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
      <Footer>  </Footer>
    </div>
  );
}

export default App;
