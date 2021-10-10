import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './table.css';

import ReactPaginate from 'react-paginate';

// import Paginationbox from './pagination'; 
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'


const Table = () => {

    const [tableDetails, setTableDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('');

    const [activePage, setActivePage] = useState(1);
    
    const handlePaginationChange = (e) => {setActivePage(e.selected)}

    const fetchBlogs = async(activePage) => {
            setLoading(true);
            const res = await axios.get(`https://swapi.dev/api/people/?page=${activePage}`);
            console.log(res.data)
            setTableDetails(res.data.results);
            setPreviousPage(res.data.previous);
            setNextPage(res.data.next);
    };

    useEffect(() => {fetchBlogs()},[]);
    
    if (!loading){
        return <h4>Loading...</h4>;
    }

    return (
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
                    
                    {/* <tr>
                        <td data-label="Name">sakthi</td>
                        <td data-label="Height">123</td>
                        <td data-label="Mass">12.3</td>
                        <td data-label="Hair Color">black</td>
                        <td data-label="Skin Color">fair</td>
                        <td data-label="Gender">male</td>
                    </tr>                    <tr>
                        <td data-label="Name">Karthick</td>
                        <td data-label="Height">123</td>
                        <td data-label="Mass">12.3</td>
                        <td data-label="Hair Color">black</td>
                        <td data-label="Skin Color">fair</td>
                        <td data-label="Gender">male</td>
                    </tr>                    <tr>
                        <td data-label="Name">Raja</td>
                        <td data-label="Height">123</td>
                        <td data-label="Mass">12.3</td>
                        <td data-label="Hair Color">black</td>
                        <td data-label="Skin Color">fair</td>
                        <td data-label="Gender">male</td>
                    </tr>                    <tr>
                        <td data-label="Name">sakthi Karthick Raja</td>
                        <td data-label="Height">123</td>
                        <td data-label="Mass">12.3</td>
                        <td data-label="Hair Color">black</td>
                        <td data-label="Skin Color">fair</td>
                        <td data-label="Gender">male</td>
                    </tr> */}
                </tbody>
            </table>

        {/* <Paginationbox/> */}

        <Pagination
            activePage={activePage}
            onPageChange={handlePaginationChange}
            totalPages={9}
          />
            
        </div>
    )
}

export default Table;
