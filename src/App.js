import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import HomePage from "./components/homePage/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import AddRecord from "./components/addRecordPage/AddRecord";
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
        <Route path="/addRecord" element={<AddRecord />} />
      </Routes>
    </div>
  );
}

export default App;
