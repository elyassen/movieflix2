import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Moviedescription from "./Moviedescription";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collections from "./Collections";
import Search from "./Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />

          <Route path="/moviedescription" element={<Moviedescription />} />
          <Route path="/Collections" element={<Collections />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
