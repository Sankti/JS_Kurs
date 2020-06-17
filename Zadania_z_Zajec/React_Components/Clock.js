import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }
    
    render() {
        return (
            <div className="my_class">
                <h2>Jest godzina {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    handler = setInterval(() => {
        this.setState({
            date: new Date()
            });
    }, 1000);
}

export default Clock;