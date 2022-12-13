const FilterBySpecie = (props)=>{
    const handleChange = (event) => {
        props.handleFilterSpecie(event.target.value);
    };

    return(
        <form>
            <select className='input_name' onChange={handleChange}>
              <option disabled>Seleccione una especie</option>
              <option value='all'>Todos</option>
              <option value='human'>Humano</option>
              <option value='alien'>Alien</option>
            </select>
        </form>         
    );
};

export default FilterBySpecie;