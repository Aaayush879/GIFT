import React from 'react';
import Base from './Base';
import h1 from './h1.jpg';
import h2 from './h2.jpg';
import h3 from './h3.jpg';
import h4 from './h4.jpg';
import h5 from './h5.jpg';
import h6 from './h6.jpg';
import h7 from './h7.jpg';
import h8 from './h8.jpg';
import h9 from './h9.jpg';
const Hyderabad=()=>{
    return(
        <div style={{width:'100%', height:'100%'}}>
            <br/><br/>
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={h1} title="ramoji film city"/>
                <Base img={h2} title="ramoji film city"/>
                <Base img={h3} title="ramoji film city"/>

            </div><br/><br/>
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={h4} title="Golconda Fort"/>
                <Base img={h5} title="ramoji film city"/>
                <Base img={h6} title="-"/>

            </div><br/><br/>
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={h7} title="Nizam Palace"/>
                <Base img={h8} title="ramoji film city"/>
                <Base img={h9} title="salar jung museum"/>

            </div>

        </div>
    )
}
export default Hyderabad;