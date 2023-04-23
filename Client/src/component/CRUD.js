import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Profile() {
    const [P, setP] = useState([]);
    useEffect(() => {
        let A = fetch(`http://localhost:8000/myapp`);
        A.then(res => {
            res.json().then(data => {
                // console.log(data);
                setP(data);
            }).catch(err => {
                console.log(err);
            })
        })
            // .catch((err) => {
            //     console.log(err);
            // })
    }, [])
    return (
        <div > <br />
            Below APIs will only be fetched by the backend after my PC's database is connected. Because these APIs are created on localhost by MERN.
            <br /> <br />
            <div> But you see its code from y github account</div>
            <table border='1px solid'><thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>userpass</th>
                    <th>Action</th>
                </tr>
            </thead>
                <tbody>
                    {P.map((e) => <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.username}</td>
                        <td>{e.userpass}</td>
                        {/* dynamic routing */}
                        <td><Link to={`/edit/${e.id}`}>update</Link>  <Link to={`/Delete/${e.id}`}>Delete</Link></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

