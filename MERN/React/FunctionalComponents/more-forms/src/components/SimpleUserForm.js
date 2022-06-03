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

    const valueLengthValid = (val, len) => {
        if(val.length < len){
            return false
        } else {
            return true
        }
    }

    const matchValid = (val1, val2) => {
        if(val1 === val2){
            return true
        } else{
            return false
        }
    }

    return(
        <div>
            <form className="w-75 mx-auto">
                <div className="form-group p-2">
                    {/* first name should be 2 char min */}
                    <label className="form-label" htmlFor="firstName">First Name: </label> 
                    <input className="form-control" name="firstName" type="text" onChange={onChangeHandler} on/>
                    {!valueLengthValid(form.firstName, 2) && form.firstName.length > 0 && <span className="alert-danger">First name must be 2 characters or longer</span>}
                </div>
                <div className="form-group p-2">
                    {/* last name should be 2 char min */}
                    <label className="form-label" htmlFor="lastName">Last Name: </label> 
                    <input className="form-control" name="lastName" type="text" onChange={onChangeHandler}/>
                    {!valueLengthValid(form.lastName, 2) && form.lastName.length > 0 && <span className="alert-danger">Last name must be 2 characters or longer</span>}
                </div>
                <div className="form-group p-2">
                    {/* email should be 5 char min */}
                    <label className="form-label" htmlFor="email">Email: </label> 
                    <input className="form-control" name="email" type="email" onChange={onChangeHandler}/>
                    {!valueLengthValid(form.email, 5) && form.email.length > 0 && <span className="alert-danger">Email must be 5 characters or longer</span>}
                </div>
                <div className="form-group p-2">
                    {/* password should be 8 char min */}
                    <label className="form-label" htmlFor="password">Password: </label> 
                    <input className="form-control" name="password" type="password" onChange={onChangeHandler}/>
                    {!valueLengthValid(form.password, 8) && form.password.length > 0 && <span className="alert-danger">Password must be 8 characters or longer</span>}
                </div>
                <div className="form-group p-2">
                    {/* needs to match password */}
                    <label className="form-label" htmlFor="passConfirm">Confirm Password: </label> 
                    <input className="form-control" name="passConfirm" type="password" onChange={onChangeHandler}/>
                    {!matchValid(form.password, form.passConfirm) && form.passConfirm.length > 0 && <span className="alert-danger">Passwords must match</span>}
                </div>
            </form>
        </div>
    );
};
    
export default UserForm;
