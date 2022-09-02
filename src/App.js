import { useEffect } from "react";
import "./App.css";
import SuccsesPage from "./components/succsesPage/succsesPage";
import axios from "axios";
import FullInformation from "./components/fullInformation/FullInformation";
import ListOfRecords from "./components/ListofRecords/ListOfRecords";
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
        <Route path="/succses" element={<SuccsesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/addRecord" element={<AddRecord />} />
        <Route path="/records">
          <Route path=":recordId" element = {<FullInformation />}/>
          <Route index element={<ListOfRecords />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
