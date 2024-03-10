import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


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
        
        <button type="submit" className="btn btn-primary"
         onClick={handleUpdate}
        >Update</button>
        </form> 
        </>
  )
}

export default Update