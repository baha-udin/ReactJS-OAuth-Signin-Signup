import React, { useState} from 'react'


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onChangeUsername = (e) => {
        console.log(e.target.value)
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
                            <input type="password" placeholder="password" className="form-control" />
                            </div>
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;