import React from 'react';
import './style.css'

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: null,
        }
    }

    showGoblin() {
        this.setState(
            {
                place: <img src="./goblin.png" alt="Goblin" />,
            }
        )
    }

    render() {
        const { place } = this.state;

        // setTimeout(this.showGoblin(), 2500);

        return (
            <div class="container">
                <div>
                    <button type="button" class="goblin-tile">{place}</button>
                    <button type="button" class="goblin-tile">{place}</button>
                    <button type="button" class="goblin-tile">{place}</button>
                </div>
            </div>
        )
    }

    handler = setTimeout(() => {
        this.setState(
            {
                place: <img src="./goblin.png" alt="Goblin" />,
            }
        )
    }, 1000);
}

Tile.defaultProps = {
    place: null,
}