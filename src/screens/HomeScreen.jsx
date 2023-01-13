import React, {useState, useEffect} from 'react'
import axios from 'axios'
import JerseyCard from '../components/JerseyCard'
import styles from "./HomeScreen.module.css";

 const HomeScreen = () => {
    const [jerseys, setJerseys] = useState([])

    const getData = () => {
        axios
            .get('api/allJerseys')
            .then((res) => {
                console.log(res.data)
                setJerseys(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        getData()
    },[])

    const jerseyDisplay = jerseys.map((jersey, index) => {
        return <JerseyCard jersey={jersey} />
    })

  return (
    <div className={styles.mainPage}>
        <div className='banner'>
            <h1>Banner</h1>
        </div>
        
        <div className={styles.jerseyContainer}>
            {jerseyDisplay}
        </div>
    </div>
  )
}

export default HomeScreen
