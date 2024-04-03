import React from 'react'
import './Style.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase';
import {addDoc, collection, updateDoc,query, where,getDocs,documentId} from 'firebase/firestore';
function AddStaff() {
  
  const [busNum, setBusNum] = useState('');
  const [staffName, setStaffName] = useState('');
  const [staffMob, setStaffMob] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [staffPassword, setStaffPassword] = useState('');

  const addStaff = async (e) => {
    

    try {
      
      const q = query(collection(db, 'busroutes'), where('busNum', '==', busNum));
      const querySnapshot = await getDocs(q);
      console.log(q,"hai");
      if (!q.empty) {
        const userDocRef = querySnapshot.docs[0].ref;

         await updateDoc(userDocRef, {
          busNum: busNum,
          staffName: staffName,
          staffMob: staffMob,
          staffEmail: staffEmail,
          staffPassword: staffPassword,
        });
        console.log('Document written with ID: ', documentId.id);
        alert('Document written with ID: ', documentId.id)
        setStaffPassword('')
      }else {
        console.error('User document not found in Firestore.');
        alert('Bus Route not found ');
      }
     
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error adding document: ', e)
    }
  };

  return (
    <div className='body' >
        <div className='containerStaff'>
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
              placeholder='Staff Name'
              value={staffName}
              onChange={(e) => setStaffName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Staff Mob '
              value={staffMob}
              onChange={(e) => setStaffMob(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Staff Email'
              value={staffEmail}
              onChange={(e) => setStaffEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Create Staff Password '
              value={staffPassword}
              onChange={(e) => setStaffPassword(e.target.value)}
            />
          </Form.Group>

          
          <a  onClick={addStaff}> 
           <Button  size='sm' variant='primary'  >
            Submit
          </Button>
          </a>
          
        </Form>
        </div>
    </div>
  )
}

export default AddStaff