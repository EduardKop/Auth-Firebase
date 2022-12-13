
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

 
  const dispatch = useDispatch()
  const userName = useSelector(state => state.userName)
  const id = useSelector(state => state.uid)
  const storeresult = useSelector(state => state)

  console.log(storeresult)
  return (
    <div className={styles.container}>
      

      <div className={styles.userData}>
      
      {userName? "Redux store name," +userName: ''}
      
      </div>
    </div>
  )
}
