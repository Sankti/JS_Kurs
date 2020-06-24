import React, { useState, useEffect } from 'react';

export default function HookClock() {
    let date = new Date();
    const [dateString, setDateString] = useState(0);
    
    const changeTime = function () {
        setInterval(() => {
            const date = new Date();
            console.log("test");
            setDateString(date.toLocaleDateString())
        }, 1000)
    }

    useEffect(() => {
        changeTime();
    })
    
    return (
        <div>
            <h2>Jest godzina {date.toLocaleTimeString()}.</h2>
        </div>
    );
}