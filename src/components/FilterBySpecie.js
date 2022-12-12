const FilterBySpecie = (props)=>{
    const handleChange = (event) => {
        props.handleFilterSpecie(event.target.value);
    };

    return(
        <form>
            <select className='input_name' onChange={handleChange}>
              <option>Seleccione una especie</option>
              <option>Todos</option>
              <option>Humano</option>
              <option>Alien</option>
            </select>
        </form>         
    );
};

export default FilterBySpecie;