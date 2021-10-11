import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './table.css';

import ReactPaginate from 'react-paginate';


const Table = () => {

    const [tableDetails, setTableDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    const handlePageClick = (data) => {

        let currentPage = data.selected + 1
        setCurrentPage(currentPage);
    }

    const fetchBlogs = async() => {
            setLoading(true);
            const res = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
            setTableDetails(res.data.results);
    };

    useEffect(() => {fetchBlogs()},[currentPage]);
    
    if (!loading){
        return <h4>Loading...</h4>;
    }

    return (
        <div>
        <div className="tableContainer" >
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                        {tableDetails.map(item => 
                        <tr key={item.name}>
                        <td data-label="Name">{item.name}</td>
                        <td data-label="Height">{item.height}</td>
                        <td data-label="Mass">{item.mass}</td>
                        <td data-label="Hair Color">{item.hair_color}</td>
                        <td data-label="Skin Color">{item.skin_color}</td>
                        <td data-label="Gender">{item.gender}</td>
                        </tr>
                        )}
                </tbody>
            </table>

        <div style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'22px'}}>
            <ReactPaginate
             previousLabel={'previous'}
             nextLable={'next'}
             breakLable={'...'}
             pageCount={9}
             marginPagesDisplayed={3}
             pageRangeDisplayed={2}
             onPageChange={handlePageClick}
             containerClassName={'pagination justify-content-center'}
             pageClassName={'page-item'}
             pageLinkClassName={'page-link'}
             previousClassName={'page-item'}
             previousLinkClassName={'page-link'}
             nextClassName={'page-item'}
             nextLinkClassName={'page-link'}
             breakClassName={'page-item'}
             breakLinkClassName={'page-link'}
             activeClassName={'active'}
            />
        </div>
            
        </div>
        </div>
    )
}

export default Table;
