import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userpage from './components/Userpage';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<Userpage/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
