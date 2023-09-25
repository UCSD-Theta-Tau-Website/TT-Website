import React, { useState, useEffect } from 'react';
import '../../../style/alumniCarousel.css'
import alumniResponses from "../../../activeData/info/alumniResponses.json";
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io';
import AlumniCard from './alumniCard';


const AlumniCarousel = () => {
    const [current, setCurrent] = useState(0);
    const length = alumniResponses.length;

    const nextSlide = () => {
        const newIndex = current === length - 1 ? 0 : current + 1
        setCurrent(newIndex);
    }
    const prevSlide = () => {
        const newIndex = current === 0 ? length - 1 : current - 1
        setCurrent(newIndex);
    }

    return (
        <div className="alumniCarousel">
            <section className="slider">
                <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                {alumniResponses.map((alumni, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && 
                            <AlumniCard 
                                name={alumni.name} 
                                role={alumni.role}
                                response={alumni.response}
                                companies={alumni.companies}
                                imageUrl={alumni.image}/>}
                        </div>
                        );
                    })}
                <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
            </section>
        </div>
    )
}

export default AlumniCarousel;