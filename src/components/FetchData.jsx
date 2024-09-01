import React, { useEffect } from 'react'

const FetchData = () => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);

    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = (page) => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${ITEMS_PER_PAGE}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching data.")
                }
                setTotalPages(Math.ceil(response.headers.get('x-total-count') / ITEMS_PER_PAGE))
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <div className='flex justify-center items-center flex-col border border-r-amber-200 p-5'>
            <h1 className='text-green-500'>Fetch Data & Pagination</h1>

            {loading && <div>Loading...</div>}

            {error && <div>Error Loading Data: {error}</div>}

            {!loading && !error && data.length > 0 && (
                <>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id} className='p-2 border-b'>
                                <h3><b><i>{item.title}</i></b></h3>
                                <p>{item.body}</p>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </>
            )
            }
        </div >
    );
}

export default FetchData
