import React from 'react'
import StarWarsCharacter from './StarWarsCharacter';

export default class StarWarsPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
        this.loadData = this.loadData.bind(this); //This is to make the load data aware of the context of the class
    }

    componentDidMount() {
        this.loadData();
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
                    </tr>
                </thead>
                <tbody>
                    {this.state.characters.map((c, index) => <StarWarsCharacter key={index} character={c}></StarWarsCharacter>)}
                </tbody>
            </table>
        );
    }

    async loadData() {
        const response = await fetch("https://swapi.dev/api/people/");
        const parsedResponse = await response.json();
        this.setState({
            characters: parsedResponse.results || [] // Or used to define a default value in case no data is returned
        })
    }
}