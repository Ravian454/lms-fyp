import { Card, Row, Col } from "react-bootstrap";
import { SunIcon, RepeatIcon } from "@chakra-ui/icons";

function DashboardCard(props) {
  return (
      <Row className="w-72">
        <Col>
          {/* Card */}
          <Card>
            <Card.Body>
              <Row className="flex justify-center py-3 items-center">
                <Col>
                  <div className="icon-big text-start icon-warning">
                    <SunIcon w={12} h={12} color="red.500" />
                  </div>
                </Col>
                <Col>
                  <div className="numbers text-start">
                    <p className="">{props.name}</p>
                    <Card.Title as="h4">{props.number}</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="flex items-center pb-0">
              <div className="flex items-center gap-2 mb-0">
                <p>
                  <RepeatIcon />
                </p>
                <p>{props.action}</p>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
  );
}

export default DashboardCard;
