import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './StoreListings.css';  // Create a CSS file for styling

const StoreListings = () => {
  const stores = [
    { name: "Smith's", img: '/path-to-smiths-logo.png', description: 'Delivery' },
    // Add other stores here
  ];

  return (
    <Container>
      <h2>Choose your store in <span className="city-name">Las Vegas</span></h2>
      <Row>
        {stores.map((store, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={store.img} />
              <Card.Body>
                <Card.Title>{store.name}</Card.Title>
                <Card.Text>{store.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StoreListings;
