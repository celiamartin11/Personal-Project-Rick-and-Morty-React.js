import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
    const characterElement = characters.map((character) => {
        return <CharacterCard character={character} key={character.id}></CharacterCard>
    });
    return (
        <ul className='list_character'>{characterElement}</ul>
    )
};

export default CharacterList;