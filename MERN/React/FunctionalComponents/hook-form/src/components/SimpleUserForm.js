import React, { useState } from  'react';
    
    
const UserForm = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passConfirm: ""
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="firstName" >First Name: </label> 
                    <input name="firstName" type="text" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label> 
                    <input name="lastName" type="text" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label> 
                    <input name="email" type="email" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label> 
                    <input name="password" type="password" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="passConfirm">confirm Password: </label> 
                    <input name="passConfirm" type="password" onChange={onChangeHandler}/>
                </div>
            </form>
            <div className="results">
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password: {form.password}</p>
                <p>Confirm Password: {form.passConfirm}</p>
            </div>
        </div>
    );
};
    
export default UserForm;
