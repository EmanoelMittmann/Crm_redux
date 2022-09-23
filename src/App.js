import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/molecules/Login";
import Dashboard from "./components/organisms/Dashboard"
import RegisterClientData from "./components/pages/RegisterDataClient";
import RegisterCustomersIndex from "./components/pages/RegisterCustomers"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/Customers' element={<RegisterCustomersIndex/>}/>
          <Route path='/Clients' element={<RegisterClientData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
