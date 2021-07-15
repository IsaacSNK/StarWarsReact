import "./StarWarsCharacters.styles.css"

import React from 'react'

export class StarWarsCharacter extends React.Component {
    render() {
        const { eye_color, name, height, mass } = this.props.character; 
        return (
            <tr class={ eye_color === "red" ? "starwars-character" : ""}>
                <td>{name}</td>
                <td>{height}</td>
                <td>{mass}</td>
                <td>{eye_color}</td>
            </tr>
        );
    }
}