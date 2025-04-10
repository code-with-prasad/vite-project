import React from 'react'
import Button from '../button/Button';
import './style.css';

const Suggestions = ({ suggestions, onSelect }) => {
    return (
        <div className='suggestions'>
            {
                suggestions.map(suggestion => {
                    return (
                        <ListItem
                            onSelect={onSelect}
                            suggestion={suggestion}
                            key={suggestion}
                        />
                    )
                })
            }
        </div>
    )
}

export default Suggestions;

function ListItem({ suggestion, onSelect }) {

    function handleSelect() {
        onSelect(suggestion)
    }

    return <Button
        data-selected={suggestion}
        onClick={handleSelect}
        lable={suggestion}
    />
}

