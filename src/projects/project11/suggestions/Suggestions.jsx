import React from 'react'
import Button from '../button/Button';
import './style.css';

const Suggestions = ({ isLoading, suggestions, onSelect, selectedSuggestion }) => {

    if(isLoading){
        return <div className='suggestions'>Loading...</div>
    }
    return (
        <div className='suggestions'>
            {
                suggestions.map(suggestion => {
                    return (
                        <ListItem
                            onSelect={onSelect}
                            suggestion={suggestion}
                            key={suggestion}
                            selectedSuggestion={selectedSuggestion}
                        />
                    )
                })
            }
        </div>
    )
}

export default Suggestions;

function ListItem({ suggestion, onSelect, selectedSuggestion }) {

    function handleSelect() {
        onSelect(suggestion)
    }

    return <Button
        data-selected={suggestion.toLowerCase() === selectedSuggestion.toLowerCase()}
        onClick={handleSelect}
        lable={suggestion}
    />
}

