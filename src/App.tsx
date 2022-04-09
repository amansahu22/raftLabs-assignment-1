import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddRelation, FindRelation, HomePage, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#424242] w-full min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/add-relation" element={<AddRelation />} />
          <Route path="/find-relation" element={<FindRelation />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
