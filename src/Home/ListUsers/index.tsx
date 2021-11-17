import React, { useEffect, useState } from 'react';
import api from '../../api'
import styles from './ListUsers.module.css'

function ListUsers() {
  const [values, setValues] = useState([])
  useEffect(() => {
    (async ()=>{
      const response = await api.get('/users')
      setValues(response.data)
    })()
  },[])

  return (
    <div className={styles.listUsers}>
      <h3>Listagem de nomes</h3>
      <ul>
        {values.map(vl => <li>{vl.name}</li>)}
      </ul>
    </div>
  );
}

export default ListUsers;
