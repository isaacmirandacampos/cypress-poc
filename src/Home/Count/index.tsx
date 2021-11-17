import React, { useCallback, useState } from 'react';
import styles from './Count.module.css'

function Count() {
  const [count, setCount] = useState(0)
  const addMoreOne = useCallback(()=>{
    setCount(count + 1)
  }, [count])
 

  return (
    <div className={styles.count}>
      <span className="count-title">Contador: {count}</span>
      <button onClick={addMoreOne}>ADD</button>
    </div>
  );
}

export default Count;
