import React, { useState } from 'react'

const Daftar = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }
    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    
return (
    <div style={{marginTop: "180px"}}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card p-4">
                    <div className="card-body">           
                        <div className="form-group">
                            <label>Nama Legkap</label>
                            <input type="text" placeholder="masukkan nama kamu" className="form-control" value={username} onChange={onChangeUsername} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" placeholder="alamat email kamu" className="form-control" value={email} onChange={onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" placeholder="password" className="form-control" value = {password} onChange={onChangePassword}/>
                        </div>
                        <button className="btn btn-primary"> Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Daftar;