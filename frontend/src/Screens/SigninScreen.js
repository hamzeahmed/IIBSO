import React, { useState } from 'react'

export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) =>{
        e.preventDefault();
    };
    return (
        <div class="container">
            <br></br>
            <form onSubmit={submitHandler}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        class="form-control" 
                        id="email"  
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                        />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="password" placeholder="Password"
                    onChange= {(event)=> setPassword(event.target.value)}
                    />
                </div>
                <p></p>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
