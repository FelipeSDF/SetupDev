import './styles/global.css';
import './styles/theme.css';

import { BrowserRouter } from 'react-router-dom';
import { Routers } from './Routers';
import { AuthProvider } from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
