import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import Dashboard from './pages/Dashboard/Dashboard'
import "./index.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import RouterFile from "./RouterFile/RouterFile";

function App() {
  return (
    <ChakraProvider>
      <RouterFile />
    </ChakraProvider>
  );
}

export default App;
