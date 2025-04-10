
import React, { useState } from 'react'
import './style.css';
import InputText from './input-text/InputText'
import Button from './button/Button'
import Suggestions from './suggestions/Suggestions';

const AutoComplete = ({suggestions}) => {

  const[query, setQuery] = useState('');
  const[showList, setShowList] = useState(false);

  function handleQueryChange(value){
    setQuery(value);
    setShowList(true)
  }

  function handleClear (){
    setQuery('');
  }

  function handleSuggestionSelect(selectedSuggestion){
    setQuery(selectedSuggestion);
    setShowList(false);
  }

  const filteredQuery = suggestions.filter((suggestion) => {
    return suggestion.toLowerCase().includes(query.toLowerCase());
  });


  return (
    <div className='autocomplete'>
      <div>
        <InputText value={query} onChange={handleQueryChange} />
        <Button onClick={handleClear} lable="clear" />
      </div>

      {!!query.length && showList && <Suggestions suggestions={filteredQuery} onSelect={handleSuggestionSelect} />}

    </div>
  )
}

export default AutoComplete;

