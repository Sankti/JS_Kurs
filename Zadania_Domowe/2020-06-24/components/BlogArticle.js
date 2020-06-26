import React from 'react';
import './style.css'

import NavBar from "./BlogNav";

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="thumbnail">
                <img src={this.props.img} />
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        );
    }
}