import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Form() {

    // const navigate = useNavigate();
    const initialstate = {
        id:'',
        username: '',
        userpass: '' 
    }
    const [state, setState] = useState(initialstate);
    // console.log(state);
    const [formerror, setFormerror ] = useState({});
    const [isSubmit, setIsSubmit ] = useState(false);

    const {id, username, userpass } = state;

    const handlechange = (e) => {
        // console.log(e);
        // console.log(e.target.value);

        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }
    const validation = () => {
        // console.log(state);
        const regid = /^[a-zA-Z0-9]+$/;
        const regname = /^[a-zA-Z]+$/;
        const regpass = /^[a-zA-Z0-9]+$/;
        let err = {};   // object created 
        if (!state.id) {
            // // alert("enter  id");
            err.eid = "enter id";   // addd key in object
        }
        else if (!regid.test(state.id)) {
            // // alert("please fill character only")
            err.eid = "please fill number only";
        }
        if (!state.username) {
            // // alert("enter  username");
            err.eusername = "enter username";   // addd key in object
        }
        else if (!regname.test(state.username)) {
            // // alert("please fill character only")
            err.eusername = "please fill character only";
        }
        if (!state.userpass) {
            // // alert("enter pass");
            err.euserpass = "enter password";
        }
        else if (!regpass.test(state.userpass)) {
            // // alert("enter passwrod of regex only")
            err.euserpass = "enter passwrod of regex only";
        }
        // console.log(err);
        setFormerror(err);
    }
    const handleSubmit = (e) => {
        // console.log("pressed");
        e.preventDefault();
        validation();
        // navigate('/profile');
        setIsSubmit(true);
    }
    useEffect(()=>{
        // console.log("api call");
        // console.log(Object.keys(formerror).length );
        // console.log(isSubmit);

        if(Object.keys(formerror).length===0 && isSubmit===true){
            // console.log('api call');
            console.log(state);
            let api = axios.post(`http://localhost:8000/myapp`,state)
            console.log(api);
            if(api){
                alert("data inserted");
            }
        }
    },[formerror])
    return (
        <div className='form'><br /> This form is used to add a new Task in the list.
            <div className='title'>This entered information will be added to the CRUD API .</div> <br />
            <form action="" onSubmit={handleSubmit}>
                <label className='label' htmlFor="id">Id</label>
                <input type="text" name='id' value={id} 
                    onChange={handlechange}
                />
                <span>{formerror.eid}</span> <br /><br />

                <label htmlFor="name">UserName</label>
                <input type="text" name="username" value={username}
                    // //onChange={(e)=>setState(e.target.value)}
                    onChange={handlechange} 
                />
                <span>{formerror.eusername}</span>
                <br /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name="userpass" value={userpass}
                    // // onChange={(e)=>setState(e.target.value)}
                    onChange={handlechange}
                />
                <span  >{formerror.euserpass}</span>
                <br />
                <input type="submit" value='save' />
            </form>
        </div>
    )
}
