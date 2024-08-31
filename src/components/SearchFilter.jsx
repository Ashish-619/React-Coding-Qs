import React, { useState, useEffect, useMemo } from 'react'
import _ from 'lodash';

const data = [
    {
        id: 1,
        name: "Sai",
        age: 25,
        email: "sai@example.com"
    },
    {
        id: 2,
        name: "Ravi",
        age: 30,
        email: "ravi@example.com"
    },
    {
        id: 3,
        name: "Suresh",
        age: 35,
        email: "suresh@example.com"
    },
    {
        id: 4,
        name: "Mahesh",
        age: 40,
        email: "mahesh@example.com"
    }
];

const SearchFilter = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [loading, setLoading] = useState(false);
    const [noDataFound, setNoDataFound] = useState(false);

    const debouncedSearch = _.debounce(() => {
        setLoading(true);
        setNoDataFound(false);

        const result = data.filter((item) => {
            return (
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
                || item.age.toString().includes(searchQuery)
                || item.email.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setFilteredData(result);
        setLoading(false);

        if (result.length === 0) {
            setNoDataFound(true);
        }
    }, 500)     //500ms delay

    useEffect(() => {
        debouncedSearch(searchQuery);
        return () => {
            debouncedSearch.cancel();   //cleanup to avoid leaks and prevent error.
        }
    }, [searchQuery]);

    return (
        <div className='flex justify-center items-center flex-col border p-5'>
            <h1 className='text-green-500'>Search Filter</h1>
            <input type="text" className='p-3 rounded-full m-5' placeholder='Search...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {loading && (<p>Loading...</p>)}

            {!loading && noDataFound && <div>No Data Found...</div>}

            {!loading && !noDataFound && (
                <ul>
                    {filteredData.map((item) => (
                        <li key={item.id} className='border-b p-2'>
                            <p>{item.name}</p>
                            <p>{item.age}</p>
                            <p>{item.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchFilter;
