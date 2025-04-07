import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [searchItem, setSearchItem] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState("")
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchItem);
        }, 500)

        return () => clearTimeout(timer); // clear timeout if user types again 
    }, [searchItem])

    useEffect(() => {

        if (debouncedTerm) {
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then((response) => response.json())
                .then((data) => {
                    const filteredData = data.filter((user) => {
                        return user.name.toLowerCase().includes(debouncedTerm.toLowerCase());
                    });

                    setResults(filteredData);
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                })
        } else {
            setResults([])
        }

    }, [debouncedTerm]);


    return (
        <section>
            <div className='container'>
                <div className='mt-5'>
                    <input type="text"
                        className='w-full border p-2 rounded '
                        placeholder='Search User...'
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                    />

                    <div className='mt-5'>
                        <ul>
                            {
                                results.length ? (
                                    results.map((user) => (
                                        <li key={user.id} className="p-2 border-b">{user.name}</li>
                                    ))
                                ) : (
                                    results && (
                                        <p className="text-gray-500 text-center mt-2">No data found</p>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchBar