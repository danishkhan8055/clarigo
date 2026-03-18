import { Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import { Toaster } from "react-hot-toast";
import Login from "./component/Login";
import UserDashboard from "./component/UserDashboard";
import AdminDashboard from "./component/AdminDashboard";
import EditUser from "./component/EditUser";
import ProtectedRoute from "./middleware/ProtectedRoute";
import Unauthorized from "./component/Unauthorized";
const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/edit/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
