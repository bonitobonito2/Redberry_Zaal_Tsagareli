import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import HomePage from "./components/homePage/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import homePage from "./components/homePage/HomePage";
function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://pcfy.redberryinternship.ge/api/teams"
      );
      const result = await data.data;
      console.log(result);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
