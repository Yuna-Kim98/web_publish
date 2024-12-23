import React from 'react';
import Title from './Title';

export default function SectionWrap({id, title, description, des2, children}) {
    return (
        <section id={id} className="section max-container">
            <Title title={title} description={description} des2={des2} />
            {children}
        </section>
    );
}