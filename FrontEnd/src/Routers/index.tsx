import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import { Login } from '../components/Login';
import { Register } from '../components/Register';

export function Routers() {
  return (
    <Routes>
      <Route path='/landing' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}
