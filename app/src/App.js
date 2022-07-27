import logo from "./logo.svg";
import "./App.css";
import List from "./components/Lists/list.component";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" name="Home" element={<List />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
