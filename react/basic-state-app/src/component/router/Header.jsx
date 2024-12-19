import React from 'react';

export default function Header({children}) {
    return (
        <div>
            <header>
                {children}
            </header> 
        </div>
    );
}