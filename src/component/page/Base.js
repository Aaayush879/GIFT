import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import './Base.css';

const Base=(props)=>{
    return(
        <Jumbotron className='my bg-dark' style={{width:'25%' ,height:'30%' , marginLeft:'5%' , maeginRight:'5%' , opacity:'0.8' , borderRadius:'30px'}}>
            <img src={props.img} style={{width:'80%' ,height:'50%' , marginLeft:'10%' , marginRight:'10%' , marginBottom:'5%', marginTop:'2%' , borderRadius:'30px'}} className='my'/>
            <h3 marginBottom="5%" className='as text-light'>{props.title}</h3><br/>
        </Jumbotron>

    )
}
export default Base;

