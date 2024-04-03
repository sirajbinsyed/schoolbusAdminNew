import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Alert } from 'bootstrap';

function Login() {
    
 const [email, setEmail] =useState('');
 const [password, setPassword] =useState('');
 const navigate = useNavigate();
 
 const handlelogin = ()=>{
     

     if(email==='admin@gmail.com' & password==='123' ){
        navigate("/Home")
     }
     else {
        console.log("fail"); 
     }
 }


  return (
    <div className='body' >
    <div className='containerHome'>
    <Form>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e) => setEmail(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group >
      
      <Button  variant="primary" type="submit" size="sm"  onClick={handlelogin} >
        Submit
      </Button>
      
    </Form>
        </div>
        </div>
  )
}

export default Login