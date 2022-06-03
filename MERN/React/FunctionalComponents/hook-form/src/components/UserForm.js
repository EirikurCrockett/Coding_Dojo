import React, { useState } from  'react';
    
    
const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passConfirm, setPassConfirm] = useState("");  
        
    return(
        <div>
            <form className="form">
                <div className="form-group">
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Email: </label> 
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Password: </label> 
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>confirm Password: </label> 
                    <input type="password" onChange={ (e) => setPassConfirm(e.target.value) } />
                </div>
            </form>
            <div className="results">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {passConfirm}</p>
            </div>
        </div>
    );
};
    
export default UserForm;
