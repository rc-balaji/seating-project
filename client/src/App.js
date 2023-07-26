

import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Admin from "./Main/Admin/Admin.jsx"
import ALogin from "./Main/Admin/login.jsx"
import FLogin from "./Main/Faculty/login.jsx"
import SLogin from "./Main/Student/login.jsx"
import Faculty from "./Main/Faculty/Faculty.jsx"
import Student from "./Main/Student/Student.jsx"

function App() {

  // Hai
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/alogin" element={ <ALogin/> } />
        <Route path="/flogin" element={ <FLogin/> } />
        <Route path="/slogin" element={ <SLogin/> } />
        <Route path="/alogin/admin" element={ <Admin/> } />
        <Route path="/flogin/faculty" element={ <Faculty/> } />
        <Route path="/slogin/student" element={ <Student/> } />
        <Route path="/faculty" element={ <Faculty/> } />
        <Route path="/student" element={ <Student/> } />
      </Routes>
    </div>
  )
}

export default App