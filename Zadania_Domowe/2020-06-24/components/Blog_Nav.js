import React from 'react';
import './style.css'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="zone sticky">
                <ul class="main-nav">
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}