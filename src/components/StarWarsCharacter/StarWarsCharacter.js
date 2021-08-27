import "./StarWarsCharacters.styles.css"

import React from 'react'
import { StarWarsCharacterDetails } from "../StarWarsCharacterDetails/StarWarsCharacterDetails";

export class StarWarsCharacter extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
    }

    render() {
        console.log(this.props.test);
        const { eye_color, name, height, mass } = this.props.character; 
        return (
            <>
                <StarWarsCharacterDetails 
                    visible={this.state.modalIsOpen} 
                    onClose={() => this.closeModalHandler()}
                    character={this.props.character}>
                </StarWarsCharacterDetails>
                <tr class="starwars-character">
                    <td><a href="" onClick={(event) => this.linkClickHandler(event)}>{name}</a></td>
                    <td>{height}</td>
                    <td>{mass}</td>
                    <td>{eye_color}</td>
                </tr>
            </>
        );
    }

    linkClickHandler(event) {
        event.preventDefault();
        this.setState({
            modalIsOpen: true
        });
    }

    closeModalHandler() {
         this.setState({
             modalIsOpen: false
         });
    }
}