import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoadVan = () => {
    const [formData, setFormData] = useState({
        id: '',
        tag: '',
        barcode: '',
        num_packages: '',
        price: '',
    });

    const [vanIds, setVanIds] = useState([]);
    const [barcodes, setBarcodes] = useState([]);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const navigate = useNavigate();

    // Fetch dropdown options on component mount
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const vanResponse = await axios.get('http://localhost:3001/get_pvan_ids'); // Backend endpoint for van IDs
                const barcodeResponse = await axios.get('http://localhost:3001/get_pbarcodes'); // Backend endpoint for barcodes
                setVanIds(vanResponse.data);
                setBarcodes(barcodeResponse.data);
            } catch (err) {
                console.error('Error fetching dropdown data:', err.message);
                setMessage('Failed to fetch dropdown data.');
                setMessageType('error');
            }
        };
        fetchDropdownData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setFormData({
            id: '',
            tag: '',
            barcode: '',
            num_packages: '',
            price: '',
        });
        setMessage(null); // Clear feedback message
        navigate('/van'); // Navigate back to the Van screen
    };

    const handleDeliver = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/load_van', formData);
            setMessage(response.data); // Show success message
            setMessageType('success');
            setTimeout(() => {
                setMessage(null); // Clear message after 3 seconds
                handleCancel(); // Navigate back
            }, 3000);
        } catch (err) {
            console.error('Error loading van:', err.message);
            setMessage(err.response?.data || 'An unexpected error occurred.');
            setMessageType('error');
        }
    };

    return (
        <div
            style={{
                maxWidth: '600px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>Procedure: Load Van</h2>
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
            <form onSubmit={handleDeliver} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <label>ID</label>
                    <select
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Van ID</option>
                        {vanIds.map((id) => (
                            <option key={id} value={id}>
                                {id}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tag</label>
                    <input
                        type="text"
                        name="tag"
                        value={formData.tag}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>Barcode</label>
                    <select
                        name="barcode"
                        value={formData.barcode}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Barcode</option>
                        {barcodes.map((barcode) => (
                            <option key={barcode} value={barcode}>
                                {barcode}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Num. Packages</label>
                    <input
                        type="number"
                        name="num_packages"
                        value={formData.num_packages}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
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
                        Deliver
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoadVan;
