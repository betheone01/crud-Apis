import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Update() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();

    useEffect(() => {
        // Retrieve data from localStorage based on keys
        const storedId = localStorage.getItem('id');
        const storedName = localStorage.getItem('name');
        const storedEmail = localStorage.getItem('email');

        // Update state with retrieved data
        setId(storedId);
        setName(storedName);
        setEmail(storedEmail);
    }, []);
    
    function handleUpdate(e)
    {
        e.preventDefault();
        axios.put(`https://65ecc40c0ddee626c9b0e6f1.mockapi.io/projects/crud-youtube/${id}`,
        {
            name:name,
            email:email,
        })
        .then(()=>
        {
            navigate("/read");
        });
    }

  return (
    <>
    <div>
    <h1>Update</h1>
    </div>
    <form>
            <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name"  value={name}
             onChange={(e)=>setName(e.target.value)  }
            />
            </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        
        </div>
            {/* {name}
            {email} */}
        
        <div className='d-flex '>
        <button type="submit" className="btn btn-primary mx-2"
         onClick={handleUpdate}
        >Update</button>
        <Link to={"/read"}>
         <button className='btn btn-secondary  mx-2'>Back</button>
         </Link>
         </div>
        </form> 
        </>
  )
}

export default Update