import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './HomePage';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
