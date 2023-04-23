import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    const {id} = useParams();
    // console.log(id);
    const navigate =useNavigate();


    // const [P, setP] = useState([]);

    // // to show clicked data inside form
    useEffect(() => {
        let A = fetch(`http://localhost:8000/myapp/${id}`);
        A.then(res => {
            res.json().then(data => {
                // console.log(data[0]);
                // console.log(data[0].username);
                // console.log(data[0].userpass);
                let data1 = {};
                data1.username = data[0].username;  // to show clicked data inside form
                data1.userpass = data[0].userpass;
                // console.log(data1);
                setState(data1);

            }).catch(err => {
                console.log(err);
            })
        })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const initialstate = {
        username: '',
        userpass: ''
    }
    const [state, setState] = useState(initialstate);

    const { username, userpass } = state;

    const handlechange = (e) => {

        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        // console.log("edit button pressed");
        let up = await axios.put(`http://localhost:8000/myapp/${id}`, state)
        if (up) {
            alert("data updated");
            // e.preventDefault();
            navigate('/profile');
        }
        // setIsSubmit(true);
    }

    return (
        <div>Edit
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">UserName</label>
                <input type="text" name="username" value={username}
                    // //onChange={(e)=>setState(e.target.value)}
                    onChange={handlechange}  readOnly
                />
                <br /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name="userpass" value={userpass}
                    // // onChange={(e)=>setState(e.target.value)}
                    onChange={handlechange}
                />
                <br />
                <input type="submit" value='update' />
            </form>
        </div>
    )
}
