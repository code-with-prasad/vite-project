
import React, { useEffect, useState } from 'react'
import AutoComplete from './AutoComplete';


const Suggestions = ["Apple", "Banana", "Papaya", "Orange", "Kiwi", "Kishor", "Laxmi" ]

const AutoCompleteComponent = () => {

    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        new Promise(function(resolve){
            setTimeout(()=>{
                resolve(Suggestions);
            }, 10000);
        }).then((data)=>{
            setIsLoading(false);
            setSuggestions(data);
        })

        // fetch("url").then((res)=>{
        //     res.json();
        // }) .then(data =>{
        //     setSuggestions(data);
        // })
    },[]);

    function onChange(value){
      console.log('value', value);
    }
  return (
    <>
    <AutoComplete suggestions={suggestions} onChange={onChange} isLoading={isLoading} />
    </>
  )
}

export default AutoCompleteComponent