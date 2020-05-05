import React from 'react';

const Searchbox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input type='search'
            placeholder='search robots' 
            className='pa3 b--green bg-lightest-blue'
            onChange={searchChange}
            ></input>
        </div>
        
    )
};

export default Searchbox;