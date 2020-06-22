import React from 'react';
import './style.css'

// Zadanie 2
export default function TwoColumns (props) {
    return (
        <div class="grid-wrapper">
            <div>
                {props.children[0]}
            </div>
            <div>
                {props.children[1]}
            </div>
        </div>
    );
}