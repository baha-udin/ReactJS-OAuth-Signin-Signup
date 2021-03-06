import React, { useState} from 'react'
import {Link, Route } from 'react-router-dom'

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onChangeUsername = (e) => {
        const value =  e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div style={{marginTop: "250px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p--4">
                        <div className="card-body">
                            <div className="form-group">
                            <label>Username</label>
                            <input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername}/>
                            </div>

                            <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="password" className="form-control" value={password} onChange={onChangePassword}/>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className='col-md-6 text-right'>    
                                    <Link to ='/daftar'>
                                    Halaman Daftar
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;