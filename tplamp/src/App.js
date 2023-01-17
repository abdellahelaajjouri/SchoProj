import "./App.css";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Slider from './components/Slider/Slider';
import NavBar from './components/NavBar';
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/Bulb" element={<Bulb/>}/>
        <Route path="/Slider" element={<Slider/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
