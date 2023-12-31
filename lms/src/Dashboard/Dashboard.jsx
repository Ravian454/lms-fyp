import React from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <Flex
            as="header"
            justify="space-between"
            p={4}
            bg="blue.500"
            color="white"
            w="100%" // Set width to 100%
        >

            <Box>
                <Text fontSize="2xl" fontWeight="bold">
                    Your Logo
                </Text>
            </Box>

            <Flex align="center">
                <Box mr={4}>
                    {/* User profile information */}
                    <Text>Hello, User</Text>
                </Box>
                <Box>
                    {/* Dropdown for logout */}
                    <Button variant="link">Logout</Button>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
