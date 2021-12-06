import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Intro from "../Welcome/Intro";
import { Devices } from "../Devices";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/devices" element={<Devices />} />
      </Routes>
    </div>
  );
}
