import React from 'react';
import Base from './Base';
import f1 from './f1.jpg';
import f2 from './f2.jpg';
import f3 from './f3.jpg';
import f4 from './f4.jpg';
import f5 from './f5.jpg';
import f6 from './f6.jpg';
import f7 from './f7.jpg';
import f8 from './f8.jpg';
import f9 from './f9.jpg';

const Family=()=>{
    return(
        <div style={{width:'100%', height:'100%'}}>
            <br/><br/>
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={f1} title="puja"/>
                <Base img={f6} title="mall"/>
                <Base img={f3} title="kanipakam Temple"/>

            </div><br/><br/>
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={f4} title="Home"/>
                <Base img={f5} title="Ambuja Mall"/>
                <Base img={f2} title="ice cream parlour "/>

            </div><br/><br/>
            <div   style={{width:'100%' ,height:'30%' ,display:'flex'}}>
                <Base img={f7} title="home"/>
                <Base img={f8} title="Veggi India"/>
                <Base img={f9} title="Veggi India"/>

            </div>

        </div>
    )
}
export default Family;
