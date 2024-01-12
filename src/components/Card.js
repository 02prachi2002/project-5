import './Card.css'
import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Card(props){
   let review = props.review;
    return(
        <div className='cardwrap'>
            <div>
            
                <img src={review.image}  className='image' />
                {/* <div className='imgbg'></div> */}
            </div>
            
            <div className='desc'>
                <p className='descname'>{review.name}</p>
                <p className='descjob'>{review.job}</p>
            </div>
            
            <div className='dbquoleft' >
        <FaQuoteLeft/>
      </div>

      <div className='cardtext' >
        {review.text}
      </div>

      <div className='dbquoright' >
        <FaQuoteRight/>
      </div>
           
        </div>
    );
}
export default Card;