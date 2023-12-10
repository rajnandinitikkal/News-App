import React ,{useEffect } from 'react'
import './Home.css';
import axios from 'axios';
import NewsArticle from '../component/NewsArticle/NewsArticle';

export default function Home() {
    const [news , setNews] = React.useState([])

    const loadnews = async () =>{
        const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a24de9c871d34cbf868701ab1a6be4a7'
        );
    }

    useEffect(() => {
        loadnews()
    },[])

  return (
    <div>
      <h1>News App</h1>
      <div className='news-container'>
      {
        news.map((newsArticle, index)=>{
          const{author,title,description,url,urlToImage,publishedAt,content}= newsArticle

          return(
           <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content}/>
          )
        })
      }
      </div>
    </div>
  )
}
