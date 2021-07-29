export const getRecipeList = async () => {
    const rawResponse = await fetch("https://tasty.p.rapidapi.com/recipes/list", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "X-RapidAPI-Key": "1edd06a90cmsh19a8534f32af739p139cb2jsnad711800fd2e"
        }
    });
    const parsedResults = await rawResponse.json();
    return parsedResults.results || [];
};