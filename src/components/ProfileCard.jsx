import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ProfileCard = () => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>John Doe</Card.Title>
        <Card.Text>
          Age: 30 <br />
          Location: New York
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Occupation: Developer</ListGroup.Item>
        <ListGroup.Item>Email: john.doe@example.com</ListGroup.Item>
        <ListGroup.Item>Phone: +1 234 567 890</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProfileCard;