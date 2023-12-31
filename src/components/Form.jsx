import React, { useState } from 'react'
import { database } from "../firebase"
import { ref, push, child, update } from "firebase/database"

function Form() {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        let obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
        
    }


    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name" value={firstName} onChange={e => handleInputChange(e)} />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input type="text" name="" id="lastName" className="form__input" placeholder="LastName" value={lastName} onChange={e => handleInputChange(e)} />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" value={email} onChange={e => handleInputChange(e)} />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" value={password} onChange={e => handleInputChange(e)} />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={e => { handleInputChange(e) }} />
                </div>
            </div>
            <div class="footer">
                <button onClick={handleSubmit} type="button" class="btn btn-success">Submit</button>
            </div>
        </div>
    )
}

export default Form;