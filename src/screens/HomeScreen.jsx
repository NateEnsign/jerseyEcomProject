import React, {useState, useEffect} from 'react'
import axios from 'axios'
import JerseyCard from '../components/JerseyCard'

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
    <div>
        <h1>Home</h1>
        <div className='jersey-container'>
            {jerseyDisplay}
        </div>
    </div>
  )
}

export default HomeScreen
