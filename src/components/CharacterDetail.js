import { Link } from 'react-router-dom';

function CharacterDetail (props) {
    return <section className='character'>
        <h2 className='name'>{props.character.name}</h2>
        <p className='name'>{props.character.specie}</p>
        <img className='image' src={props.character.img} alt={props.character.name}/>
        <Link to="/">Inicio</Link>
    </section>
};

export default CharacterDetail;