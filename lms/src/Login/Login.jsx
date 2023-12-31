import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({});
        setApiError('');

        // Validate required fields
        if (!formData.email || !formData.password) {
            setErrors({
                email: !formData.email ? 'Username or Email is required' : '',
                password: !formData.password ? 'Password is required' : '',
            });
        }

        // Perform login logic
        // login();
    };

    async function login() {
        try {
            let item = {
                email: formData.email,
                password: formData.password
            };

            let result = await fetch("http://127.0.0.1:8000/api/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item),
            });

            if (result.ok) {
                result = await result.json();
                localStorage.setItem("user-info", JSON.stringify(result));
                // Navigate to the desired page upon successful login
                navigate('/dashboard');
            } else {
                // Handle incorrect credentials
                const errorData = await result.json(); // Assuming the server returns JSON error details

                if (errorData && errorData.errors) {
                    // Extract and handle specific validation errors
                    console.error('Validation errors:', errorData.errors);
                    // Update state with validation errors
                    setErrors(errorData.errors);
                } else {
                    // Handle other types of errors
                    setApiError('Invalid username or password');
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }

    return (
        <div className="card-container">
            <div className="card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <InputGroup mb="16px">
                        <Input
                            type="email"
                            name={"email"}
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            isRequired
                        />
                    </InputGroup>
                    {errors.email && <span className="error">{errors.email}</span>}

                    <InputGroup mb="16px">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            name={"password"}
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            isRequired
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {errors.password && <span className="error">{errors.password}</span>}

                    <Button type="submit" colorScheme="blue" size="md" onClick={login}>
                        Login
                    </Button>
                    {apiError && <span className="error">{apiError}</span>}
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
