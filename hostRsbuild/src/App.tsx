import './App.css';
import Provider from 'provider';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Provider />
      </div>
    </>
  );
};

export default App;
