export const fetchStarWarsData = async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    const parsedResponse = await response.json();
    return parsedResponse.results || [];    
};