function CharacterItem(props) {
    return(
        <li className='character'>
            <h2 className='name'>{props.character.name}</h2>
            <p className='name'>{props.character.specie}</p>
            <img className='image' src={props.character.url} alt={props.character.name}/>
        </li>
    );
};

export default CharacterItem;