import React,{useEffect,useState} from 'react'
import Heropage from './Heropage';

function App() {
  // const [item,setItem]=React.useState([])
  // const url ='https://newsapi.org/v2/everything?q=keyword&apiKey=2cf8e4d334c44f28b9dd2ce13fd3da32'
  // const getData=async()=>{
  //   const request = await fetch(url)
  //   const response = await request.json()
  //   const {articles}=response
  //   console.log(articles)
  //   setItem(articles)
  // }
  // useEffect(() => {
  //   getData()
  
  // }, [])
  return (
    <div className="container">
      <Heropage/>
     </div>
  );
}

export default App;
