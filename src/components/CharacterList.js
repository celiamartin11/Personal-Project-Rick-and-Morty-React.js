import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, filterByName }) => {
    const characterElement = characters.map((character) => {
        return <CharacterCard character={character} key={character.id}></CharacterCard>
    });

    if (characters.length !== 0){
    return (
        <ul className='list_character'>{characterElement}</ul>
    )
    } else{
        return(
            <section className="apart">
                <p className="apart_character">¡¡¡¡ No hay ningún personaje que coincida con el texto {filterByName} !!!!</p>
            </section>
        )
    }
};

export default CharacterList;