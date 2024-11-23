import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TakeOverVan = () => {
    const [formData, setFormData] = useState({
        username: '',
        id: '',
        tag: ''
    });

    const [usernames, setUsernames] = useState([]); // Dropdown options for usernames
    const [ids, setIds] = useState([]); // Dropdown options for van IDs
    const navigate = useNavigate();

    // Fetch dropdown options
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const usernameResponse = await axios.get('http://localhost:3001/get_usernames'); // Replace with your backend endpoint
                const idResponse = await axios.get('http://localhost:3001/get_van_ids'); // Replace with your backend endpoint
                setUsernames(usernameResponse.data);
                setIds(idResponse.data);
            } catch (err) {
                console.error('Error fetching dropdown data:', err.message);
            }
        };
        fetchDropdownData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        // Clear the form and navigate back
        setFormData({
            username: '',
            id: '',
            tag: ''
        });
        navigate('/van'); // Navigate back to the Van screen
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/takeover_van', formData);
            alert(response.data); // Show success message
            handleCancel(); // Clear the form and navigate back
        } catch (err) {
            console.error('Error taking over van:', err.message);
            alert('Error: ' + err.message); // Show error message
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
            <h2>Procedure: Take Over Van</h2>
            <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <label>username</label>
                    <select
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Username</option>
                        {usernames.map((username) => (
                            <option key={username} value={username}>
                                {username}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>ID</label>
                    <select
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Van ID</option>
                        {ids.map((id) => (
                            <option key={id} value={id}>
                                {id}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>tag</label>
                    <input
                        type="text"
                        name="tag"
                        value={formData.tag}
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

export default TakeOverVan;
