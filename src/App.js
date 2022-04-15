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
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/menuitem' element={<MenuItem></MenuItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route><Route path='/placeholder' element={<Placeholder></Placeholder>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
