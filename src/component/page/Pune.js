import React from 'react';
import Base from './Base';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';
import p5 from './p5.jpg';
import p6 from './p6.jpg';
import p7 from './p7.jpg';
import p8 from './p8.jpg';
import p9 from './p9.jpg';

const Pune=()=>{
    return(
        <div style={{width:'100%', height:'100%'}}>
            <br/><br/> 
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={p1} title="Sinhagad Fort"/>
                <Base img={p2} title="Sinhagad Fort"/>
                <Base img={p3} title="Sinhagad Fort"/>

            </div><br/><br/>
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={p4} title="Tiger Poin"/>
                <Base img={p5} title="Shaniwar Wada "/>
                <Base img={p6} title="Shaniwar Wada "/>

            </div><br/><br/>
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={p7} title="Tiger Point"/>
                <Base img={p8} title="Sinhagad Fort"/>
                <Base img={p9} title="-"/>

            </div>

        </div>
    )
}
export default Pune;