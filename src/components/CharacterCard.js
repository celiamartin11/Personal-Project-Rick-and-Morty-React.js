function CharacterCard(props) {
    return(
        <li className='character'>
            <h2 className='name'>{props.character.name}</h2>
            <p className='name'>{props.character.specie}</p>
            <img className='image' src={props.character.img} alt={props.character.name}/>
        </li>
    );
};

export default CharacterCard;