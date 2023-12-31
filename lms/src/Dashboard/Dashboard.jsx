import React, { useState, useEffect } from 'react';
import {
    Flex,
    Box,
    Text,
    Center,
    IconButton,
    Badge,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spinner,
    Divider,
} from '@chakra-ui/react';
import {
    FaUser,
    FaSignOutAlt,
    FaCog,
    FaBell,
    FaSearch,
} from 'react-icons/fa';

import { LiaSwatchbookSolid } from "react-icons/lia";
import { CiDollar } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { TbUsersGroup } from 'react-icons/tb';
import { PiBooksBold } from 'react-icons/pi';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import logo from '../../public/images/logo.png';

const Dashboard = () => {
    const [notifications, setNotifications] = useState(3);

    const handleBellClick = () => {
        console.log('Bell clicked');
    };

    const TotalUsersCard = () => {
        const [totalUsers, setTotalUsers] = useState(0);
        const [loadingTotalUsers, setLoadingTotalUsers] = useState(true);

        useEffect(() => {
            const fetchTotalUsersCount = async () => {
                try {
                    const response = await fetch('http://127.0.0.1:8000/api/getTotalUsersCount');
                    const data = await response.json();
                    setTotalUsers(data.total_users);
                } catch (error) {
                    console.error('Error fetching total users count:', error);
                } finally {
                    setLoadingTotalUsers(false);
                }
            };

            fetchTotalUsersCount();
        }, []);

        return (
            <Box w="300px" p={4} bg="white" borderRadius="md" boxShadow="md">
                <Flex align="center" mb={2} _hover={{ color: 'blue.300', cursor: 'pointer' }}>
                    <TbUsersGroup style={{ marginRight: '8px', height: '30px', width: '30px' }} />
                    <Text fontWeight="bold" fontFamily="monospace" fontSize="xl">
                        Total Users
                    </Text>
                    {loadingTotalUsers ? (
                        <Spinner ml={4} color="#50a9de" size="md" />
                    ) : (
                        <Text ml={4} fontWeight="bold" color="#50a9de">
                            <Center height='50px'>
                                <Divider orientation='vertical' m={"20px"}/> {totalUsers}
                            </Center>
                        </Text>
                    )}
                </Flex>
            </Box>
        );
    };

    return (
        <Flex
            as="div"
            flexDirection="column"
            height="100vh"
            overflowY="auto"
            bg="#f2f2f2"
        >
        <Flex as="div" flexDirection="column" height="100vh" overflowY="auto">
            <Flex
                as="header"
                justify="space-between"
                p={4}
                bg="#9FBDD1"
                color="white"
                w="100%"
                position="fixed"
                top="0"
                left="0"
                right="0"
            >
                <Box display="flex" alignItems="center">
                    <Text display="flex" alignItems="center" fontSize="xl">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ borderRadius: '60%', width: '50px', height: '50px', marginRight: '10px' }}
                        />
                        <span>
                            <b>Learning Management</b> System
                        </span>
                    </Text>
                </Box>

                <Box display="flex" alignItems="center">
                    {/* Bell Icon for Notifications */}
                    <IconButton
                        aria-label="Notifications"
                        icon={<FaBell />}
                        variant="ghost"
                        color="white"
                        onClick={handleBellClick}
                    >
                        {notifications > 0 && (
                            <Badge colorScheme="red" ml="1">
                                {notifications}
                            </Badge>
                        )}
                    </IconButton>

                    {/* User Icon and Dropdown */}
                    <Menu>
                        <MenuButton as={IconButton} aria-label="Options" icon={<FaUser />} variant="ghost" color="white" />
                        <MenuList>
                            <MenuItem onClick={() => console.log('Logout clicked')}>
                                <FaSignOutAlt style={{ marginRight: '8px' }} />
                                Logout
                            </MenuItem>
                            <MenuItem onClick={() => console.log('Settings clicked')}>
                                <FaCog style={{ marginRight: '8px' }} />
                                Settings
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>

            <Flex as="main" p={4} mt="70px">
                {/* Sidebar */}
                <Box
                    as="aside"
                    w="250px"
                    bg="rgba(0, 0, 0, 0.7)"
                    color="white"
                    m={'20px'}
                    p={4}
                    position="fixed"
                    left="0"
                    top="70px"
                    bottom="0"
                    borderRadius="5px"
                >
                    {/* Sidebar Content */}
                    <Text mb={4} fontSize="xl" fontWeight="bold" alignItems={"center"}>
                        Teacher's Portal
                    </Text>
                    <hr
                        style={{
                            width: '100%',
                            border: '1px solid #555',
                            marginTop: '-10px',
                            marginBottom: '10px',
                        }}
                    />
                    {/* Sidebar Option with Icon */}
                    <Flex align="center" mb={2} _hover={{ color: 'blue.300', cursor: 'pointer' }}>
                        <MdOutlineSpaceDashboard style={{ marginRight: '8px' }} />
                        <Text>Dashboard</Text>
                    </Flex>

                    <Flex align="center" mb={2} _hover={{ color: 'blue.300', cursor: 'pointer' }}>
                        <PiBooksBold style={{ marginRight: '8px' }} />
                        <Text>Add Courses</Text>
                    </Flex>

                    <Text mb={2} _hover={{ color: 'blue.300', cursor: 'pointer' }}>
                        Option 2
                    </Text>
                </Box>

                {/* Main Content */}
                <Flex ml="350px" flex="1" flexDirection="column">
                    <Text mb={4} fontSize="xl" fontWeight="bold">
                        Test tests
                    </Text>

                    {/* Container for cards */}
                    <Box display="flex" flexWrap="wrap" gap={4}>
                        {/* Card 1 */}
                        <TotalUsersCard />

                        {/* Card 2 */}
                        <Box w="300px" h="100px" p={4} bg="white" borderRadius="md" boxShadow="md">
                            {/* Content for Card 2 */}
                            <Flex align="center" mb={2} _hover={{ color: 'blue.300', cursor: 'pointer' }}>
                            <LiaSwatchbookSolid style={{ marginRight: '8px', height: '30px', width: '30px' }}/>
                            <Text fontWeight="bold" fontFamily="monospace" fontSize="xl">Courses</Text>
                            </Flex>
                        </Box>

                        {/* Card 3 */}
                        <Box w="300px" p={4} bg="white" borderRadius="md" boxShadow="lg">
                            {/* Content for Card 3 */}
                            <Flex align="center" mb={2} _hover={{ color: 'blue.300', cursor: 'pointer' }}>
                            <CiDollar style={{ marginRight: '8px', height: '30px', width: '30px' }}/>
                            <Text fontWeight="bold" fontFamily="monospace" fontSize="xl">Revenue</Text>
                            </Flex>
                        </Box>

                        <Center mt={6} width="900px">
                            <Box>
                                <LineChart
                                    width={400}
                                    height={300}
                                    data={[
                                        { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
                                        { name: 'Feb', uv: 300, pv: 4567, amt: 4567 },
                                        { name: 'Mar', uv: 200, pv: 1398, amt: 1398 },
                                        // Add more data as needed
                                    ]}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                    {/* Add more lines or customizations as needed */}
                                </LineChart>
                            </Box>
                        </Center>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
        </Flex>
    );
};

export default Dashboard;
