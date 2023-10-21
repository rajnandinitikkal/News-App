import React ,{ useState,useEffect } from 'react'
import './Home.css'
import axiox from 'axios'

export default function Home() {
    const [news , setNews] = React.useState([])

    const loadnews = async () =>{
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=a24de9c871d34cbf868701ab1a6be4a7")
    }

    useEffect(() => {
        loadnews()
    },[])

  return (
    <div>
        <h1>News App</h1>


    </div>
  )
}
