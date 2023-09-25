import React from "react";
import '../../../style/alumni.css'
import AlumniCarousel from './alumniCarousel';

const Alumni = () => {
    return (
        <div className="alumni">
            <div className="title">
                <h1>Our Alumni</h1>
                <div className="titleLine"></div>
            </div>
            <AlumniCarousel/>
        </div>
    )
}

export default Alumni;