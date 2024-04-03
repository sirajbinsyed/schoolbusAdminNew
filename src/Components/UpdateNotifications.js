import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase';
import {addDoc, collection, updateDoc,query, where,getDocs,documentId} from 'firebase/firestore';

function UpdateNotifications() {

  
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const today = new Date();
  const day = today.getDate(); 
  const month = today.getMonth() + 1; 
  const year = today.getFullYear(); 
  

  const addNotification = async (e) => {
    
    
    try {
      
      

        const docRef =await addDoc(collection(db, "Notifications"), {
          number:number,
          subject: subject,
          content: content,
          date:`${day}-${month}-${year}`,
        });
        console.log('Document written with ID: ', docRef.id);
        alert('Document added to Notificatons');
     
     
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error adding document: ', e);
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
          placeholder='Notification No'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Form.Group>

      
      <Form.Group className='mb-1' controlId='formBasicPassword'>
        <Form.Control
          size='sm'
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-1' controlId='formBasicPassword'>
        <Form.Control
          size='sm'
          type='text'
          placeholder='Write Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      
      <a onClick={addNotification} > 
       <Button  size='sm' variant='primary'  >
        Submit
      </Button>
      </a>
      
    </Form>
    </div>
</div>
  )
}

export default UpdateNotifications
