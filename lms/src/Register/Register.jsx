import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Radio, HStack, useRadio, useRadioGroup, Input, Button, VStack, Text, Link as ChakraLink, Center, Card } from '@chakra-ui/react';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: '1',
    });

    const [errors, setErrors] = useState({});

    function RadioCard({ children, ...props }) {
        const { getInputProps, getRadioProps } = useRadio(props);

        const input = getInputProps();
        const checkbox = getRadioProps();

        return (
            <Box as='label'>
                <input {...input} />
                <Box
                    {...checkbox}
                    cursor='pointer'
                    borderWidth='1px'
                    borderRadius='md'
                    boxShadow='md'
                    _checked={{
                        bg: 'teal.600',
                        color: 'white',
                        borderColor: 'teal.600',
                    }}
                    _focus={{
                        boxShadow: 'outline',
                    }}
                    px={5}
                    py={3}
                >
                    {children}
                </Box>
            </Box>
        );
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Reset errors
        setErrors({});

        // Add your registration logic here using formData
        const registrationSuccessful = await register();

        // If registration is successful, navigate to login page
        if (registrationSuccessful) {
            navigate('/login');
        }
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    async function register() {
        try {
            let item = {
                email: formData.email,
                name: formData.username,
                password: formData.password,
                isTeacher: formData.role,
            };

            let result = await fetch("http://127.0.0.1:8000/api/register", {
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
                return true; // Registration successful
            } else {
                const errorData = await result.json();
                // Assuming the server returns JSON error details
                if (errorData && errorData.errors) {
                    // Extract and handle specific validation errors
                    console.error('Validation errors:', errorData.errors);
                    // Update state with validation errors
                    setErrors(errorData.errors);
                } else {
                    // Handle other types of errors
                    console.error('Error registering:', errorData.message);
                }
                return false; // Registration failed
            }
        } catch (error) {
            console.error('Error registering:', error);
            return false; // Registration failed
        }
    }

    const options = ['Teacher', 'Student'];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'role',
        defaultValue: 'Teacher',
        onChange: (value) => setFormData({ ...formData, role: value === 'Teacher' ? '1' : '0' }),
    });

    const radioGroup = getRootProps();

    return (
        <Center>
            <Card p={6} rounded="md" boxShadow="md">
                <VStack spacing={4}>
                    <Text fontSize="2xl" fontWeight="bold">Register</Text>
                    <form onSubmit={handleSubmit}>
                        <HStack {...radioGroup}>
                            {options.map((value) => {
                                const radio = getRadioProps({ value });
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                );
                            })}
                        </HStack>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            isRequired
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            isRequired
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            isRequired
                        />
                        <Button type="submit" colorScheme="teal" size="md" mt={"10px"}>
                            Register
                        </Button>
                    </form>
                    {Object.keys(errors).length > 0 && (
                        <Text color="red.500">Registration failed. Please check the form and try again.</Text>
                    )}
                    <Text>
                        Already have an account? <ChakraLink as={Link} to="/login">Login</ChakraLink>
                    </Text>
                </VStack>
            </Card>
        </Center>
    );
};

export default Register;
