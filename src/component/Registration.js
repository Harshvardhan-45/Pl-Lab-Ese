import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Registration.css"

function Registration(){
    return(
        
          
          <div>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Group Name</Form.Label>
        <Form.Control type="text" placeholder="Group na" required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="phone number" placeholder="Mobile Number" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>College Name</Form.Label>
        <Form.Control type="text" placeholder="College Name" required/>
        
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" required/>
        
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Participate
      </Button>
    
    </Form>
    </div>
        
        
    );
}

export default Registration;