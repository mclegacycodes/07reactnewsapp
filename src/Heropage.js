import React,{useState,useEffect} from 'react'
import './Heropage.css'
import Brand from './component/Brand'
import Navbar from './Navbar'
import HeroNews from './component/HeroNews'
import HeroNewsBottom from './component/HeroNewsbottom'




const Heropage = () => {
    const [news,setNews]=useState([])
  
//fetch data
  const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=2cf8e4d334c44f28b9dd2ce13fd3da32'
  const getNews=async()=>{
    const request = await fetch(url)
    const response = await request.json()
    const {articles}=response
    setNews(articles)
    
  
  }
  console.log(news)
//call use effect
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
                   {
            
                  
                   <HeroNews {...news[0]}/>

                   }
                   </div>
                   
                   <div className='sideTopic'> 
                   <HeroNews {...news[1]}/>
                   <HeroNews {...news[2]}/>
                  
                   </div>

               </div>


               {/* breaking news section */}
               <section className='hero-bottom'>
                 <div className='hero-bottom-left'>
                   <span className='breakingNews'>BREAKING NEWS</span>
                 <span className='hero-white-cover'>
                 <HeroNewsBottom {...news[3]}/>
                 <HeroNewsBottom {...news[4]}/>
                 <HeroNewsBottom {...news[5]}/>
                  
                 </span>
                 </div>
               </section>
           </div>
        </section>
    )
}

export default Heropage
