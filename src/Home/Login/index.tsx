import React, { useCallback, useState } from 'react';
import styles from './Login.module.css'

function Login() {
  const [values, setValues] = useState({ email: '', password: '' })
  const handleLogin = useCallback((e:any)=> {
    e.preventDefault();
    setValues({ email: e.target.email.value, password: e.target.password.value })
    
  }, [])
 

  return (
    <form className={styles.login} onSubmit={handleLogin}>
      <label htmlFor="email">email</label>
      <input type="text" placeholder="email" id="email" />
      <label htmlFor="password">password</label>
      <input type="password" placeholder="password" id="password" className="password" name="password" />
      <span>email: {values.email}</span>
      <span>password: {values.password}</span>
      <button>Logar</button>
    </form>
  );
}

export default Login;
