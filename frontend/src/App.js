import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Reports from "./components/Reports";

function App() {
  return (
    <>
      <HashRouter>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<Reports />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
