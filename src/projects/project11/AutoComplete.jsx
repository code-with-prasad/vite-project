
import React, { useState } from 'react'
import './style.css';
import InputText from './input-text/InputText'
import Button from './button/Button'
import Suggestions from './suggestions/Suggestions';

const AutoComplete = ({isLoading, suggestions, onChange=()=>{}}) => {

  const[query, setQuery] = useState('');
  const[showList, setShowList] = useState(false);

  function handleQueryChange(value){
    setQuery(value);
    setShowList(true)
    onChange(value);
  }

  function handleClear (){
    setQuery('');
  }

  function handleSuggestionSelect(selectedSuggestion){
    setQuery(selectedSuggestion);
    onChange(selectedSuggestion);
    setShowList(false);
  }

  const filteredQuery = suggestions.filter((suggestion) => {
    return suggestion.toLowerCase().includes(query.toLowerCase());
  });

  let showSuggestionsWithLoader = !!query.length && showList

  if(isLoading && query.length){
    showSuggestionsWithLoader = true
  }

  return (
    <div className='autocomplete'>
      <div>
        <InputText value={query} onChange={handleQueryChange} />
        <Button onClick={handleClear} lable="clear" />
      </div>

      {showSuggestionsWithLoader && (
        <Suggestions
          isLoading = {isLoading} 
          suggestions={filteredQuery} 
          onSelect={handleSuggestionSelect} 
          selectedSuggestion = {query}
        />
      )}

    </div>
  )
}

export default AutoComplete;

