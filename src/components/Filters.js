import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';

const Filters = (props) => {
    return (
        <>
        <FilterByName handleFilterName={props.handleFilterName} FilterByName={props.FilterByName}/>
        <FilterBySpecie handleFilterSpecie = {props.handleFilterSpecie}/>
        </>
    );
};

export default Filters;