const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.results.map((character) => {
            return{
                id: character.id,
                name: character.name,
                specie: character.species,
                status: character.status,
                episodes: character.episode.length,
                img: character.image,
            };
        });
        return cleanData;
    });
};

export default getDataFromApi;