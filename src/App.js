import "./App.css";
import SuccsesPage from "./components/succsesPage/succsesPage";
import FullInformation from "./components/fullInformation/FullInformation";
import ListOfRecords from "./components/ListofRecords/ListOfRecords";
import HomePage from "./components/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import AddRecord from "./components/addRecordPage/AddRecord";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/succses" element={<SuccsesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/addRecord" element={<AddRecord />} />
        <Route path="/records">
          <Route path=":recordId" element={<FullInformation />} />
          <Route index element={<ListOfRecords />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
