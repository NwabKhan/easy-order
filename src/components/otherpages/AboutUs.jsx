import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import icon from '../resources/icon.PNG'
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <Card bg = 'info' border="dark" className='d-flex justify-content-center' style={{ width: '18rem', margin: 'auto' }}>
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Our mission is to provide customers with high-quality products at an affordable price, without sacrificing service or convenience.
        </Card.Text>
        <Button variant="primary">
      <Link style={{display: 'block', width: '5rem' , margin: 'auto', color: 'black' , fontSize: '1rem'}} to = 'https://api.whatsapp.com/message/PUDIO2WUSPQ3I1?autoload=1&app_absent=0' >Order Now</Link> 
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AboutUs;