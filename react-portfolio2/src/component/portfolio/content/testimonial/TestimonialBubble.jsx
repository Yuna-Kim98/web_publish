import React from 'react';
import Img from '../../commons/Img.jsx';

export default function Testimonial({img, alt, coment, name, company}) {
    return (
        <>
            <Img img={img} alt={alt} className="testimonial__img" />
            <div className="testimonial__bubble">
                <p>{coment}</p>
                <p><a href="#" className="testimonial__bubble__name">{name}</a> / {company}</p>
            </div>
        </>
    );
}