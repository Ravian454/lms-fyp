import Login from "../pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
// import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import BaseComponents from "../components/BaseComponents/BaseComponents";
// import User from "../Pages/User/User";
// import Profile from "../Pages/Profile/Profile";
// import PasswordChange from "../Pages/PasswordChange/PasswordChange";
// import { useParams } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
function RouterFile() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<BaseComponents />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
}

export default RouterFile;
