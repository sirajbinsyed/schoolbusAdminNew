import React from 'react'

import { useNavigate } from "react-router-dom";

import { MDBDataTable } from 'mdbreact';

function MngStaff() {

  const navigate = useNavigate();

    const data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Mobile',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Bus No',
          field: 'office',
          sort: 'asc',
          width: 200
        },
        
       
      ],
      rows: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170'
        },
        
        
        {
          name: 'Caesar Vance',
          position: 'Pre-Sales Support',
          office: 'New York',
          age: '21',
          date: '2011/12/12',
          salary: '$106'
        }]
    }
  return (
    <div className='body'>
    <div className='containerStaff'>
    
       
    <MDBDataTable
      data={data}
      striped
      bordered
      hover
      searching={true}
    />

<button onClick={() => navigate("/AddStaff")} type="submit" class="btn btn-primary mb-1">Add Staff</button>
    </div>
  </div>
  )
}

export default MngStaff