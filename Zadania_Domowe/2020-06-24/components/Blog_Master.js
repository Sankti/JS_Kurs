import React from 'react';
import './style.css'

import NavBar from "./Blog_Nav";
import Sidebar from "./Blog_Sidebar"

export default class MasterBlog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">

                <NavBar />


                <div className="container-rows">
                    <div className="container">
                        <div className="grid-wrapper">

                            <div className="thumbnail">
                                <img src={this.props.img1} />
                                <h2>{this.props.title1}</h2>
                                <p>{this.props.text1}</p>
                            </div>

                        </div>
                        <div className="grid-wrapper">

                            <div className="thumbnail">
                                <img src={this.props.img2} />
                                <h2>{this.props.title2}</h2>
                                <p>{this.props.text2}</p>
                            </div>

                        </div>
                    </div>
                    <Sidebar />

                </div>



            </div>
        );
    }
}