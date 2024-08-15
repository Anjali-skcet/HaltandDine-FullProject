import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home';
import Home1 from './Components/Home1';
import Menu from './Components/Menu/Menu';
import Admin from './Components/Admin/Admin';
import Reservations from './Components/Reservations';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Adminnavbar from './Components/Admin/Adminnavbar';
import UpdateMenu from './Components/Admin/Updatemenu';
import ViewReviews from './Components/Admin/Viewreview';
import ManageReservations from './Components/Admin/Managereservations';
import Categoryitems from './Components/Admin/Categoryitems';
import Menulist from './Components/Menu/Menulist';
import withAuth from './Services/WithAuth';
import Cart from './Components/Cart';
import { CartProvider } from './Components/Cartcontext';
import Review from './Components/Review';
const ProtectedHome = withAuth(Home1);

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path='/update-menu' element={<UpdateMenu/>}/>
          <Route path="/menu/:category" element={<Categoryitems/>} />
          <Route path="/menulist/:category" element={<Menulist/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/view-reviews' element={<ViewReviews/>}/>
          <Route path='/manage-reservations' element={<ManageReservations/>}/>
          <Route path="/home1" element={<ProtectedHome/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/reservations" element={<Reservations/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path='/adminnavbar' element={<Adminnavbar/>}/>
          <Route path="/review" element={<Review/>}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;