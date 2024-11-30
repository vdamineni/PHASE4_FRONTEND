import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StartFunding = () => {
    const [formData, setFormData] = useState({
        owner: '',
        amount: '',
        long_name: '',
        fund_date: '',
    });

    const [owners, setOwners] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [message, setMessage] = useState(null); // Feedback message
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch owners and businesses for dropdowns
        const fetchData = async () => {
            try {
                const ownersResponse = await axios.get('http://localhost:3001/owners');
                const businessesResponse = await axios.get('http://localhost:3001/businesses');
                setOwners(ownersResponse.data);
                setBusinesses(businessesResponse.data);
            } catch (err) {
                setMessage('Error fetching data.');
                setMessageType('error');
                console.error('Error fetching data:', err.message);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setMessage(null); // Clear feedback message
        navigate('/business'); // Navigate back to the Business screen
    };

    const handleFund = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/start_funding', formData);
            setMessage(response.data); // Display success message
            setMessageType('success');
            setTimeout(() => {
                setMessage(null); // Clear message after 3 seconds
                handleCancel(); // Navigate back
            }, 3000);
        } catch (err) {
            setMessage(err.response?.data || 'An unexpected error occurred.');
            setMessageType('error');
            console.error('Error:', err.message);
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
            <h2>Procedure: Start Funding</h2>
            {message && (
                <div
                    style={{
                        marginBottom: '15px',
                        padding: '10px',
                        color: messageType === 'success' ? 'green' : 'red',
                        border: `1px solid ${messageType === 'success' ? 'green' : 'red'}`,
                        borderRadius: '5px',
                        backgroundColor: messageType === 'success' ? '#eaffea' : '#ffeaea',
                    }}
                >
                    {message}
                </div>
            )}
            <form onSubmit={handleFund} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <label>Owner</label>
                    <select
                        name="owner"
                        value={formData.owner}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Owner</option>
                        {owners.map((owner) => (
                            <option key={owner.id} value={owner.username}>
                                {owner.username}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>Long Name</label>
                    <select
                        name="long_name"
                        value={formData.long_name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Business</option>
                        {businesses.map((business) => (
                            <option key={business.id} value={business.long_name}>
                                {business.long_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Fund Date</label>
                    <input
                        type="date"
                        name="fund_date"
                        value={formData.fund_date}
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
                        Fund
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StartFunding;
