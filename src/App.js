import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorite from "./components/Favorite";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Favorite" element={<Favorite />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
