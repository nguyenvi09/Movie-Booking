import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "./pages/Detail";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
