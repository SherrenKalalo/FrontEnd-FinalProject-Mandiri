import React from 'react'
import Navbar from './component/navbar/Navbar'
import Body from './component/body/Body';
import Footer from './component/footer/Footer'
import Data from './component/data/Data'

export default function home() {
  return (
    <div>
        <Navbar />
        <Body />
        <Footer />
    </div>
    
    );
}
