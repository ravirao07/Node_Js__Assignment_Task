import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/auth/register', { username, email, password });
        // Redirect or update state
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
