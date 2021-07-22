
export const fetchStarWarsData = async (nameQuery) => {
    const query = nameQuery ? "?name=" + nameQuery : "";
    const response = await fetch("http://localhost/swpeople" + query);
    const parsedResponse = await response.json();
    return parsedResponse.results || [];    
};