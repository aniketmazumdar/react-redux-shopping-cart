import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/selector/user.selector';


import Layout from './components/layout/layout.component';
import Home from './pages/home/home.component';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';
import Shop from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser && (location.pathname === '/register' || location.pathname === '/login')) {
      navigate('/');
    }
  }, [currentUser]);


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:category' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
