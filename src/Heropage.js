import React,{useState,useEffect} from 'react'
import './Heropage.css'
import Brand from './component/Brand'
import Navbar from './Navbar'
import HeroNews from './component/HeroNews'

const Heropage = () => {
    const [news,setNews]=useState([])
  

  const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=2cf8e4d334c44f28b9dd2ce13fd3da32'
  const getNews=async()=>{
    const request = await fetch(url)
    const response = await request.json()
    const {articles}=response
    setNews(articles)
    
  
  }
console.log(news)
    useEffect(() => {
        getNews()
       
    }, [])
    return (
        <section className='heropage'>
           <div className="blackbox">
               <Brand/>
               <Navbar/>

               <div className='heronews'>
                   <div className='maintopic'>
                     <HeroNews type="Hot News" title={news[0].title} author={news[0].author}/>
                   </div>
                   
                   <div className='sideTopic'> 
                  
                   </div>

               </div>
           </div>
        </section>
    )
}

export default Heropage
