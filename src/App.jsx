import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllUsersPage from "./components/dashboard/AllUsersPage";
import HospitalDashboard from "./pages/HospitalDashboard";
import LoginPage from "./pages/LoginPage";
import QueuePAge from "./pages/QueuePAge";
import AdminLayout from "./components/layout/AdminLayout";
import { ToastContainer } from "react-toastify";
import TicketQueue from "./pages/TicketQueue";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="users" element={<AllUsersPage />} />
            <Route path="queue" element={<QueuePAge />} />
            <Route path="tickets" element={<TicketQueue />}></Route>
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
