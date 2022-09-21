import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/molecules/Login";
import Dashboard from "./components/organisms/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/home' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
