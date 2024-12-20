import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',        
        address: '',
        birthdate: '',
        taxID: '',
        hiredDate: '',        
        experience: '',
        salary: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting Data:', formData); // Debug log
        const dataToSubmit = {};
    for (const key in formData) {
        dataToSubmit[key] = formData[key] === "" ? null : formData[key];
    }
        try {
            const response = await axios.post('http://localhost:3001/addEmployee', dataToSubmit);
            setSuccessMessage(response.data);
            setErrorMessage(''); // Clear any previous error message
             setTimeout(() => {
                setSuccessMessage(null); // Clear message after 3 seconds
                 setFormData({
            username: '',
            firstName: '',
            lastName: '',        
            address: '',
            birthdate: '',
            taxID: '',
            hiredDate: '',        
            experience: '',
            salary: '',
        });
            }, 3000);
            
        } catch (err) {
            console.error('Error:', err.response?.data || err.message);
            setErrorMessage(err.response?.data || 'An unexpected error occurred.');
            setSuccessMessage(''); // Clear any previous success message
            setTimeout(() => {
                setSuccessMessage(null); // Clear message after 3 seconds
                setErrorMessage(null);                 
            }, 3000);
        }
    };

    const handleCancel = () => {
        setFormData({
            username: '',
            firstName: '',
            lastName: '',        
            address: '',
            birthdate: '',
            taxID: '',
            hiredDate: '',        
            experience: '',
            salary: '',
        });
        setErrorMessage('');
        setSuccessMessage('');
        navigate('/employee'); // Navigate back to the Employee screen
    };

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <h2>Procedure: Add Employee</h2>
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
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                <div>
                    <label>username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}                        
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>first_name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}                        
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>  
                <div>
                    <label>last_name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>   
                <div>
                    <label>address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>birthdate</label>
                    <input
                        type="date"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>taxID</label>
                    <input
                        type="text"
                        name="taxID"
                        value={formData.taxID}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>hired_date</label>
                    <input
                        type="date"
                        name="hiredDate"
                        value={formData.hiredDate}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>experience</label>
                    <input
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>salary</label>
                    <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>               
                <div style={{ gridColumn: 'span 1', textAlign: 'center' }}>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={{
                            backgroundColor: '#ccc',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Cancel
                    </button>
                </div>
                <div style={{ gridColumn: 'span 1', textAlign: 'center' }}>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;