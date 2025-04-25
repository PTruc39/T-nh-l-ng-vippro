import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Employee from './Pages/Employee';

function App() {
  return (
    <React.Fragment>
      <main>
        <Routes>
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employee" element={<Employee />} />
            </>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
