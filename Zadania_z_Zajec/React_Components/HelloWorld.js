import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zmiana: "Dzień dobry, jestem skobry."
        }
    }
    



    render() {
        function handleClick() {
            alert("Wduszono przycisk!")
        }
        // this.setState({
        //     zmiana: "Dzień bober."
        // })
    
        return (
            <div className="my_class">
                <h1 onClick={handleClick.bind(this)}>{this.state.zmiana}</h1>
            </div>
        )
    }
}

export default HelloWorld;