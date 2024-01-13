import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export default function Courses() {
  return (
    <section className="mt-3 mx-5 min-h-screen">
      <p className="text-3xl font-semibold">Add Course</p>
      <p className="text-3xl font-semibold text-center">
        Add Details about the Course
      </p>
      <div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your University email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Course Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Course Name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control  as="textarea" Row="4" placeholder="Enter the Description About the Courses" />
          </Form.Group>
          <div className="flex gap-5 items-center bg-gray-300 mb-5 rounded-md mt-5 justify-center">
            <p className="text-xl font-bold align-middle mt-3">Choose the video lecture to Upload</p>
            <input type="file" name="file" id="file" />
          </div>
          

          

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Made Course Live" />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Made Course Necessary to Enroll" />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Made Course Optional" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}
