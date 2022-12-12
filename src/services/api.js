const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.results.map((character) => {
            return{
                id: character.id,
                name: character.name,
                specie: character.species,
                img: character.origin.url,
            };
        });
        return cleanData;
    });
};

export default getDataFromApi;