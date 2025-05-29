import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { Profile } from '../pages/Profile';


export function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}
