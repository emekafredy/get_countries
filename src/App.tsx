import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Countries } from "./pages/Countries/Index";
import { Country } from "./pages/Country/Index";
import { NavBar } from "./components/NavBar/Index";

function App() {
  return (
    <BrowserRouter>
      <div className="font-nunito">
        <NavBar />
        <Routes>
          <Route path="/" element={ <Navigate to="/countries" /> }/>
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:name" element={<Country />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
