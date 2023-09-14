
import './App.css'
import Login from './auth/login';
import Registration from './auth/registration';
import DisplayList from './component/courselist'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
   
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/displaylist" element={<DisplayList />}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
