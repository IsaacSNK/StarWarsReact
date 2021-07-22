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

    render() {
        if (this.state.characters.length === 0) {
            return <>No data found</>
        }
        return (
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
        );
    }
}