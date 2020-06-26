import React from 'react';
import './style.css'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-rows" className="left-margin">
                <div className="container">
                    <h4>About me</h4>
                    <img src="https://pofo.themezaa.com/wp-content/uploads/2017/08/aside-image-1.jpg.webp" alt="My Photo"></img>
                    <p>Hello. My name is Mister Beardman. I provide you with the latest news from all around the Pacific.</p>
                </div>
            </div>
        );
    }
}