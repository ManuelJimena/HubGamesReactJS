import './App.css';

import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="app">
      <Header logo="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697735168/Logo_Hub_ydlcun.png" logoAlt="logo game hub" />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
