import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from "./components/EmployeeList";

function App(){
  return(
    <Router>
      <div>
    <h1>Testing</h1>
    </div>
        <div className="App">
        <Routes>
          
         <Route path="/employees" element={<EmployeeList/>} />
         
        </Routes>
      </div>
    </Router>
  )
}

export default App;