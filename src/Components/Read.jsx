import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {
    const [data, setData] = useState([]);
    const [tabledark,setTableDark]=useState("");

    useEffect(() => {
        getData();
    }, []);

    async function retryAxios(config, retries = 10, delay = 1000) {
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 429 && retries > 0) {
                await new Promise(resolve => setTimeout(resolve, delay));
                return retryAxios(config, retries - 1, delay * 2); // Exponential backoff
            } else {
                throw error;
            }
        }
    }

    async function getData() {
        try {
            const data = await retryAxios({
                method: 'get',
                url: 'https://65ecc40c0ddee626c9b0e6f1.mockapi.io/projects/crud-youtube'
            });
            console.log(data);
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    function handleDelete(id)
    {
        axios.delete(`https://65ecc40c0ddee626c9b0e6f1.mockapi.io/projects/crud-youtube/${id}`).then(()=>
        {
            getData()
        })


    }
    function setLocalStroage(id,name,email)
    {
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);

    }
    



    return (
            <div>
                <div className="form-check form-switch ">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>
                {if(tabledark==="table-dark")
                {
                    setTableDark("");
                }
                else
                {
                    setTableDark("table-dark");
                }}}/> 
            </div>
            <div className='d-flex justify-content-between m2 '>
            <h2>Read Operation</h2>
            
            <Link to="/create">
            <button className='btn btn-primary '>Create</button>
            </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((eachData) => (
                        <tr key={eachData.id}>
                            <td>{eachData.id}</td>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <td >
                                <Link to="/update">
                                    <button className="btn btn-success" onClick={()=>setLocalStroage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                                 </Link>
                                &nbsp;&nbsp;
                            <button className="btn btn-danger " onClick={()=>
                            {handleDelete(eachData.id)}}>Delete</button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Read;
