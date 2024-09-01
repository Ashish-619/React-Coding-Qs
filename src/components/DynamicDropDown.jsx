import React, { useEffect, useState } from 'react'

const DynamicDropDown = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error Fetching Data.');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data)
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
    }, []);

    const handleChange = (event) => {
        setSelectedUser(event.target.value);
    }

    return (
        <div className='flex flex-col justify-center items-center p-5 border'>
            <h1 className='text-green-500 mb-5'>Dynamic Drop Down</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <select value={selectedUser} onChange={handleChange} className='p-2 rounded-lg mb-5'>
                <option value="">Select a User</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>

            {selectedUser && (
                <p>Selected User ID: {selectedUser}</p>
            )}
        </div>
    )
}

export default DynamicDropDown