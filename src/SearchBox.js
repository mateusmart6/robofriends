import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield, searchChange}) => {
   return (
    <div className='pa2'>
      <input type='search' 
      placeholder='search robots' 
      className='bg-lightest-blue b--green pa3 ba tc'
      onChange={searchChange}
    />  
    </div>
   ); 
}

export default SearchBox; 