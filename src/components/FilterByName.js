function FilterByName(props) {
    const handleFilterName = (event) => {
        props.handleFilterName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className='filter_name' onSubmit={handleSubmit}>
            <label className='label_name' htmlFor='name'>Introduce un nombre</label>
            <input className='input_name' placeholder='Rick' value={props.filterByName} onChange={handleFilterName}/>
        </form>
    );
};

export default FilterByName;