import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Dashboard from 'dashboard';
import Provider from 'provider';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/saved-homes"
          element={
            <div className="content">
              <Provider />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
