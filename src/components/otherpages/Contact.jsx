import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <Form style={{margin: 'auto' , width: '30rem', padding: '2rem'}}>
      <Row className="mb-3">
      <Col xs={12} >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="03XX XXXXXXX" />
        </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs = {4}>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
        </Col>
        <Col xs= {4}>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Province</Form.Label>
          <Form.Select defaultValue="Punjab">
            <option>Islamabad/Federal</option>
            <option>KPK</option>
            <option>Punjab</option>
            <option>Sindh</option>
            <option>Balochistan</option>
            <option>Gilgat Baltistan</option>
          </Form.Select>
        </Form.Group>
        </Col>   
        <Col xs = {4}>
          <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
        </Col>     
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;

