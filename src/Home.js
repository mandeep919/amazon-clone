import React from 'react'
import Homebg from './cmwallpaper.jpg'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img src={Homebg} alt='' className='home_image'/> 

      <div className="home_row">
        <Product 
          key="1"
          id="546546"
          title="The learning react"
          price={10}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        
        <Product 
          key="2"
          id="546546"
          title="The learning react"
          price={10}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
      </div>
      <div className="home_row">
        <Product 
          key="3"
          id="546546"
          title="The learning react"
          price={10}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        
        <Product 
          key="4"
          id="546546"
          title="The learning react"
          price={10}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product 
          key="5"
          id="546546"
          title="The learning react"
          price={10}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
      </div>
      <div className="home_row">
        <Product 
          key="6"
          id="546546"
          title="The learning react"
          price={10}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
      </div>
    </div>  
  );
}

export default Home
