import CharacterItem from "./CharacterItem";

const CharacterList = ({ characters }) => {
    const characterElement = characters.map((character) => {
        return <CharacterItem character={character} key={character.id}></CharacterItem>
    });
    return (
        <ul className='list_character'>{characterElement}</ul>
    )
};

export default CharacterList;