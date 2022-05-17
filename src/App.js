
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from "./Pages/Home/Home"
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard';
import MyAppointment from './MyAppointment';
import Review from './Review';
import MyHistory from './MyHistory';
import Users from './Pages/Users';
import RequireAdmin from './RequireAdmin';
import AddDoctor from './Pages/AddDoctor';
import ManageDoctors from './Pages/ManageDoctors';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>

        <Route path='Dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='add-doctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='manage-doctors' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer>  </Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
