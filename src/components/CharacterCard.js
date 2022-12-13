import { Link } from 'react-router-dom';

function CharacterCard(props) {
    return(
        <li className='character'>
            <Link to={`/character/${props.character.id}`} className='link'>
                <h2 className='name'>{props.character.name}</h2>
                <p className='name'>{props.character.specie}</p>
                <img className='image' src={props.character.img} alt={props.character.name}/>
            </Link>
        </li>
    );
};

export default CharacterCard;