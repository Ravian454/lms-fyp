import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/Login';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard'
import './Login/Login.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <div>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />

                        <Route path="" element={<Register />} />

                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </Router>
        </ChakraProvider>
    );
}

export default App;
