import React from 'react'
import { StarWarsCharacter } from './StarWarsCharacter';
import { fetchStarWarsData } from "../services/StarWarsDataService";

export default class StarWarsPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    async componentDidMount() {
        const data = await fetchStarWarsData();
        this.setState({
            characters: data
        });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.nameQuery !== this.state.nameQuery) {
            const data = await fetchStarWarsData(this.state.nameQuery);
            this.setState({
                characters: data
            });
        }
    }

    render() {
        return (
            <>
            <input type="text" onChange={(event) => this.inputChangeHandler(event.target.value)}></input>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mass</th>
                        <th>Height</th>
                        <th>Eye Color</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.characters.map((c, index) => <StarWarsCharacter key={index} character={c} test="1"></StarWarsCharacter>)}
                </tbody>
            </table>
            </>
        );
    }

    inputChangeHandler(nameQuery) {
        this.setState({
            nameQuery
        });
    }
}