import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Placeholder from './Pages/Placeholder/Placeholder';
import Order from './Pages/Order/Order';
import MenuItem from './Pages/MenuItem/MenuItem';
import Cart from './Pages/Cart/Cart';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Breakfast from './Pages/HomePage/Breakfast/Breakfast';
import Lunch from './Pages/HomePage/Lunch/Lunch';
import Dinner from './Pages/HomePage/Dinner/Dinner';
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}>
          <Route path='/' element={<Breakfast></Breakfast>}></Route>
          <Route path='/breakfast/:id' element={<MenuItem></MenuItem>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/menuitem' element={<MenuItem></MenuItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route><Route path='/placeholder' element={<Placeholder></Placeholder>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
