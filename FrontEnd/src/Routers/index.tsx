import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Profile } from '../pages/Profile';
import { Project } from '../pages/Project';
import { CreateProject } from '../pages/CreateProject';

export function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/create-project' element={<CreateProject />} />
      <Route path="/projeto/:id" element={<Project />} />
    </Routes>
  );
}
