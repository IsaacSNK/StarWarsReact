import "./RecipeList.css";

import React from 'react'
import { getRecipeList } from "../../services/RecipesService";

export default class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    async componentDidMount() {
        const data = await getRecipeList();
        this.setState({
            recipes: data
        });
    }

    render() {
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Thumbnail</th>
                        <th>Video</th>
                    </tr>
                </thead>
                <tbody>
                   {this.state.recipes.map(e => (
                       <tr>
                           <td>{e.name}</td>
                           <td><img class="recipelist--thumbnail" alt={e.name} src={e.thumbnail_url}/></td>
                           <td><video src={e.video_url} controls></video></td>
                       </tr>
                   ))}
                </tbody>
            </table>
            </>
        );
    }
}