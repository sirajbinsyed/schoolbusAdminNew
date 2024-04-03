import React from 'react';
//import { render } from "react-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { db } from '../firebase';
import {addDoc, collection} from 'firebase/firestore'; // Import addDoc from firebase/firestore

function AddBusRoute() {
  const [busNum, setBusNum] = useState('');
  const [busRoute, setBusRoute] = useState('');
  const [vehNo, setVehNo] = useState('');
 

  const push = async (e) => {
   

    try {
      const docRef = await addDoc(collection(db, 'busroutes'), {
        busNum: busNum,
        routeName: busRoute,
        vehNo: vehNo,
        

      });
      console.log('Document written with ID: ', docRef.id);
      alert('Data added');
      setBusNum('');
      setBusRoute('');
      setVehNo('');

    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };


  return (
    <div className='body'>
      <div className='containerAddbusroute'>
        <Form>
          <Form.Group className='mb-1' controlId='formBasicEmail'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Bus Number'
              value={busNum}
              onChange={(e) => setBusNum(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-1' controlId='formBasicEmail'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Bus Route'
              value={busRoute}
              onChange={(e) => setBusRoute(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Vehicle Number '
              value={vehNo}
              onChange={(e) => setVehNo(e.target.value)}
            />
          </Form.Group>
         

          <a  onClick={push}>
           <Button  size='sm' variant='primary'  >
            Submit
          </Button>
          </a>
        </Form>
        
      </div>
    </div>
  );
}

export default AddBusRoute;
