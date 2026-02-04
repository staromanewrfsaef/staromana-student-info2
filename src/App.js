import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Students from "./pages/Students";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <HeaderComponent />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

