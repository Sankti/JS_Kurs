import React from 'react';

// Zadanie 2
export default function Picture (props) {
    return (
        <img src={props.src} alt={props.alt} />
    );
}