import React from 'react'
import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './data';

function App() {
  return (
    <div className="wrapper">
      <div className='topwrap'>
      <h1>Our Testimonials</h1>
      
      <Testimonial reviews={reviews}/>
      </div>
      
    </div>
  );
}

export default App;
