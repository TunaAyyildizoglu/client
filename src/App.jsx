import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import BillPage from './pages/BillPage';
import CustomersPage from './pages/CustomersPage';
import StaticsPage from './pages/StaticsPage';
import Register from './pages/auth/Register';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/bills' element={<BillPage />}></Route>
        <Route path='/customers' element={<CustomersPage />}></Route>
        <Route path='/statics' element={<StaticsPage />}></Route>
        <Route path='/register' element={<Register />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
