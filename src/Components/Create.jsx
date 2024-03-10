import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Create() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const history=useNavigate();

    const header={"Access-Control-Allow-Origin":"*"};
  const  handleSubmit=(e)=>
  {

    e.preventDefault();
    console.log("clicked");
    axios.post('https://65ecc40c0ddee626c9b0e6f1.mockapi.io/projects/crud-youtube',
        {
            name:name,
            email:email,
            header,

        }).then(()=>
        {
            history("/read");
        })


    };


  return (
    <div>
        <h1>Create</h1>
        <form>
            <div className="mb-3">
            <label for="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)}/>
            </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            onChange={(e)=>setEmail(e.target.value)}/>
        
        </div>
            {/* {name}
            {email} */}
        
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form> 
    </div>
  )
}

export default Create