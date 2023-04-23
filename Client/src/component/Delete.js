import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios';
export default function Delete() {
  let { id } = useParams();
  let navigate = useNavigate();
  //  console.log(id);

  useEffect(() => {
    let A = axios.delete(`http://localhost:8000/myapp/${id}`);
    A.then(res => {
      console.log(res);
      navigate('/profile');
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div>Delete</div>
  )
}
