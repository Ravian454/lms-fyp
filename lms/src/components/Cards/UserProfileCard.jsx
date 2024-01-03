import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserProfileCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.ProfileSrc} />
      <Card.Body>
        <Card.Title className='text-center'>{props.name}</Card.Title>
        <Card.Text className='text-center' >
          {props.aboutme}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item>username: {props.username}</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body className='flex justify-between'>
        <Card.Link href="#">Button</Card.Link>
        <Card.Link href="#">some button</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserProfileCard;