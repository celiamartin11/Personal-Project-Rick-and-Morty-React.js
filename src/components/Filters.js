import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';

const Filters = (props) => {
    return (
        <>
        <FilterByName handleFilterName={props.handleFilterName} filterByName={props.filterByName}/>
        <FilterBySpecie handleFilterSpecie = {props.handleFilterSpecie} filterBySpecie={props.filterBySpecie}/>
        </>
    );
};

export default Filters;