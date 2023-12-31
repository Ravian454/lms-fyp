import { useState, useEffect } from "react";
import { Flex, Box, Text, Center, Spinner, Divider } from "@chakra-ui/react";
//import Navbar from "../../components/NavBar/NavBar";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { CiDollar } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { PiBooksBold } from "react-icons/pi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import DashboardCard from "../../components/Cards/DashboardCard";
const DashBoardCardData = [
  {
    name: "Total Users",
    number: 1000,
    action: "Update",
  },
  {
    name: "Active Users",
    number: 500,
    action: "View Details",
  },
  {
    name: "New Users",
    number: 300,
    action: "Add User",
  },
  {
    name: "Premium",
    number: 200,
    action: "Upgrade",
  },
];



const Dashboard = () => {
  // const [notifications, setNotifications] = useState(3);

  // const handleBellClick = () => {
  //   console.log("Bell clicked");
  // };
  console.log("zafar");

  const TotalUsersCard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [loadingTotalUsers, setLoadingTotalUsers] = useState(true);

    useEffect(() => {
      const fetchTotalUsersCount = async () => {
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/getTotalUsersCount"
          );
          const data = await response.json();
          setTotalUsers(data.total_users);
        } catch (error) {
          console.error("Error fetching total users count:", error);
        } finally {
          setLoadingTotalUsers(false);
        }
      };

      fetchTotalUsersCount();
    }, []);

    return (
      <Box w="300px" p={4} bg="white" borderRadius="md" boxShadow="md">
        <Flex
          align="center"
          mb={2}
          _hover={{ color: "blue.300", cursor: "pointer" }}
        >
          <TbUsersGroup
            style={{ marginRight: "8px", height: "30px", width: "30px" }}
          />
          <Text fontWeight="bold" fontFamily="monospace" fontSize="xl">
            Total Users
          </Text>
          {loadingTotalUsers ? (
            <Spinner ml={4} color="#50a9de" size="md" />
          ) : (
            <Text ml={4} fontWeight="bold" color="#50a9de">
              <Center height="50px">
                <Divider orientation="vertical" m={"20px"} /> {totalUsers}
              </Center>
            </Text>
          )}
        </Flex>
      </Box>
    );
  };

  return (
    <section className="h-screen">
      <div className="flex py-5 px-2 flex-wrap w-full gap-3">
      {DashBoardCardData.map((data, index) => (
        <DashboardCard
          key={index}
          name={data.name}
          number={data.number}
          action={data.action}
        />
      ))}
      </div>
      <div>

      </div>
    </section>
  );
};

export default Dashboard;
