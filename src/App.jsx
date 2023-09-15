import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import NavBar from "./components/NavBar";
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";
import ApartmentDetails from "./components/ApartmentDetails";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <nav>
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/apartments">ApartmentList</NavLink> |
        <NavLink to="/create">Create</NavLink> |
      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/apartments' element={<ApartmentsList/>}/>
        <Route path='/apartments/:id' element={<ApartmentDetails/>}/>
        <Route path='/create' element={<CreateApartment/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
