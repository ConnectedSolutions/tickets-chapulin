import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { LoginForm } from '../components/Login/Login.component'
import './entry.css'

export const Entry = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [FormLoad, setFormLoad] = useState('register')

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(username, password);

        switch (name) {
            case 'username':
                setUsername(value)
                break

            case 'password':
                setPassword(value)
                break

            default:
                break

        }
    };


    const handleOnSubmit = e => {
        e.preventDefault()

        if (!username || !password) {
            return alert("orale perro");
        }

        // PLACEHOLDER TO ADD SUBMITTING RULES
        console.log(username, password);
    };

    return (
        <div className="entry-page bg-info">
            <Card className="text-center login-card">
                {FormLoad === 'login' &&
                <LoginForm
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                username={username}
                password={password}
                /> 
                }
            </Card>
        </div>
    )
}
