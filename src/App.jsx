import './App.css';

import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="app">
       <Header logo="./src/assets/Logo_Hub.png" logoAlt="logo game hub" />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
