import { useState } from 'react';
import React from 'react'
import Card from './Card';
import './Testimonial.css'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

function Testimonial(props){
    let reviews= props.reviews
    const [index,setindex] = useState(0)

    function leftclickhandler(){
        if(index-1<0){
            setindex(reviews.length-1)
        }
        else{
            setindex(index-1);
        }
    }
    function rightclickhandler(){
        if(index+1>= reviews.length){
            setindex(0)
        }
        else{
            setindex(index+1);
        }
    }
    function surprisehandler(){
        let newindex = Math.floor(Math.random() * reviews.length)
        setindex(newindex)
    }
    return(
        <div className='card'>
            <Card review = {reviews[index]}> </Card>
            <div className='qb'>
            <button className='ql' onClick={leftclickhandler}> <FiChevronLeft/></button>
            <button className='qr' onClick={rightclickhandler}><FiChevronRight/></button>
            </div>
            <div>
            <button className='surprise' onClick={surprisehandler}>Surprise Me</button>

            </div>
        </div>
    );
}
export default Testimonial;