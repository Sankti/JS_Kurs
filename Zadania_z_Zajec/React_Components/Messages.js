import React from 'react';

export default class Message extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

// export default function Message (props) {
//     return (
//         <div>
//             <h2>{props.children}</h2>
//         </div>
//     );
// }

// class App extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Message text="Nowa wartość 1" />
//                 <Message text="Nowa wartość 2" />
//             </React.Fragment>
//         );
//     }
// }