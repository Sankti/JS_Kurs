import React from 'react';
import Message from '../Messages';
import Picture from '../Exercises/Picture';

// Zadanie 2
export default function Columns (props) {
    return (
        <div class="grid-wrapper">
            <Message title="Andrzej ma żółwia." />
            <Picture src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fe15cf536-864c-422a-9f7e-81872258091b%2Fd8ttylx-ab5fedb8-7239-4ce5-b9ab-85870cad5587.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTE1Y2Y1MzYtODY0Yy00MjJhLTlmN2UtODE4NzIyNTgwOTFiXC9kOHR0eWx4LWFiNWZlZGI4LTcyMzktNGNlNS1iOWFiLTg1ODcwY2FkNTU4Ny5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0kNGU58nMH30C4i-2Rh5xYo9lUZfPSeORgSjstTr_yQ&sp=1592847805T0d5d18cfdc55716c269f44faffeb324d4b7e5b1417809024815e5c2d5b92fc58" alt="Turtle" />
        </div>
    );
}