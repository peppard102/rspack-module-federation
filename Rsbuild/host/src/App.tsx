import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Listings from 'listings';
import SavedHomes from 'savedHomes';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route
          path="/saved-homes"
          element={
            <div className="content">
              <SavedHomes />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
