import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/homepage";
import { Login } from "./pages/login";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
