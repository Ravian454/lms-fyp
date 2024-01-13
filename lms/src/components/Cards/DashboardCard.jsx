import { Card, Row, Col, Spinner} from "react-bootstrap";
import { StarIcon, RepeatClockIcon } from "@chakra-ui/icons";

function DashboardCard(props) {
  return (
      <Card>
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
                    <Card.Title as="h4">{data}</Card.Title>
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

export default DashboardCard;
