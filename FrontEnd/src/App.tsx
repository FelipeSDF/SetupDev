import './styles/theme.css'
import './styles/global.css'


import { BrowserRouter } from 'react-router';
import { Routers } from './Routers';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
