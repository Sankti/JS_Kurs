import React from 'react';

// Zadanie 1
export default class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: props.defaultValue,
        }
    }

    handleClick() {
        this.setState(
            {
                clicks: this.state.clicks + 1,
            }
        )
    }

    render() {
        const { clicks } = this.state;
        return (
            <div>
                <div>
                    <strong>{ clicks }</strong>
                </div>
                <input onClick={this.handleClick.bind(this)} type="button" value="Klik" />
            </div>
        )
    }
}

Click.defaultProps = {
    defaultValue: 0,
}