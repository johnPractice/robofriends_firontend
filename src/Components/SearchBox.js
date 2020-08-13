import React from "react";

const SearchBox = (props) => {
    const {onSearchChange, value} = props;
    return (
        <div className='pa2'>
            {/*for accessibility e.x for screen reader and so ....*/}
            <input
                aria-label='Search Robots'
                value={value}
                onChange={onSearchChange}
                className='pa3 ba b--green hover-bg-lightest-blue'
                type='search'
                placeholder='search robots'
            />
        </div>
    );
};
export default SearchBox;