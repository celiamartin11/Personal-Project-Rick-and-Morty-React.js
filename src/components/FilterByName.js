function FilterByName(props) {
    const handleFilterName = (event) => {
        props.handleFilterName(event.target.value);
    };

    return (
        <form className='filter_name'>
            <label className='label_name' htmlFor='name'>Introduce un nombre</label>
            <input className='input_name' placeholder='Rick' value={props.filterByName} onChange={handleFilterName}/>
        </form>
    );
};

export default FilterByName;