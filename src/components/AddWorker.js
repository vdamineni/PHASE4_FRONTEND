
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddWorkerRole = () => {
    const [formData, setFormData] = useState({
        username: '',  
    });

    const [errorMessage, setErrorMessage] = useState();  // State to hold error messages
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        // Clear the form and navigate back to the Driver screen
        setFormData({
            username: '',
        });
         setErrorMessage('');
        setSuccessMessage('');
        navigate('/service'); // Navigate back to the Driver screen
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSubmit = {};
    for (const key in formData) {
        dataToSubmit[key] = formData[key] === "" ? null : formData[key];
    }
        try {
            const response = await axios.post('http://localhost:3001/add_worker_role', dataToSubmit);
            setSuccessMessage(response.data);
            setErrorMessage(''); // Clear any previous error message
            setTimeout(() => {
                setSuccessMessage(' '); // Clear message after 3 seconds
                setFormData({
            username: '',
        });
            }, 3000);
        } catch (err) {
            console.error('Error:', err.response?.data || err.message);
            setErrorMessage(err.response?.data || 'An unexpected error occurred.');
            setSuccessMessage(''); // Clear any previous success message
            console.error('Error:', err.message);
             setTimeout(() => {
                setErrorMessage(''); // Clear message after 3 seconds
                 setSuccessMessage(' ');
            }, 3000);
        }
    };

    return (
        <div
            style={{
                maxWidth: '600px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>Procedure: Add Worker Role</h2>
            {errorMessage && (
                <div style={{ color: 'red', marginBottom: '10px' }}>
                    <strong>Error:</strong> {errorMessage}
                </div>
            )}
            {successMessage && (
                <div style={{ color: 'green', marginBottom: '10px' }}>
                    {successMessage}
                </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                
                              
                <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={{
                            backgroundColor: '#ccc',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                        }}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddWorkerRole;