import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-primary text-wrap fw-bold text-center'>Welcome to Easy Order <br /> and <br /> Simple Shipp</h1>
      <Link style={{display: 'block', width: '8rem' , margin: '2rem auto', color: 'black' , fontSize: '1.5rem'}} to = 'https://api.whatsapp.com/message/PUDIO2WUSPQ3I1?autoload=1&app_absent=0' >Order Now</Link>
    </div>
  )
}

export default HomePage