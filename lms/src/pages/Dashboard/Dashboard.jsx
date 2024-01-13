import { useState, useEffect } from "react";
import { Flex, Box, Text, Center, Spinner, Divider } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { TbUsersGroup } from "react-icons/tb";
import {Card, Col, Row} from "react-bootstrap";
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
  const chartData = [
    { name: "January", value: 12 },
    { name: "February", value: 19 },
    { name: "March", value: 3 },
    { name: "April", value: 5 },
    { name: "May", value: 2 },
    { name: "June", value: 3 },
    { name: "July", value: 9 },
  ];

  const DashboardStatCard = ({ name, number, action, fetchData }) => {
    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchDataCount = async () => {
        try {
          const response = await fetch(fetchData);
          const responseData = await response.json();
          console.log("API Response:", responseData);
          setData(responseData.total_users);
        } catch (error) {
          console.error(`Error fetching ${name} count:`, error);
        } finally {
          setLoading(false);
        }
      };

      fetchDataCount();
    }, [fetchData, name]);

    return (
        <Card className="w-72">
          <Card.Body>
            <Row className="flex justify-center py-3 items-center">
              <Col>
                <div className="icon-big text-start icon-warning">
                  <TbUsersGroup
                      style={{
                        height: "30px",
                        width: "30px",
                        color: "red.500",
                      }}
                  />
                </div>
              </Col>
              <Col>
                <div className="numbers text-start">
                  <p className="">{name}</p>
                  {loading ? (
                      <Spinner size="sm" color="blue.500" />
                  ) : (
                      <Card.Title as="h4" className="text-teal-700">{data}</Card.Title>
                  )}
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="flex items-center pb-0">
            <div className="flex items-center gap-2 mb-0">
              <p>
                <RepeatClockIcon />
              </p>
              <p>{action}</p>
            </div>
          </Card.Footer>
        </Card>
    );
  };

  return (
      <section className="h-screen">
        <div className="flex py-5 px-2 flex-wrap w-full gap-3">
          {DashBoardCardData.map((data, index) => (
              <DashboardStatCard
                  key={index}
                  name={data.name}
                  number={data.number}
                  action={data.action}
                  fetchData={`http://127.0.0.1:8000/api/get${data.name.replace(
                      /\s+/g,
                      ""
                  )}Count`}
              />
          ))}
        </div>
        <div>
          <Card className="m-2" style={{ maxWidth: "500px" }}>
            <Card.Title as="h5" className="m-2">
              User Statistics
            </Card.Title>
            <Card.Body>
              <LineChart
                  width={500}
                  height={300}
                  data={chartData}
                  margin={{ top: 5, right: 80, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="blue" />
              </LineChart>
            </Card.Body>
          </Card>
        </div>
      </section>
  );
};

export default Dashboard;
