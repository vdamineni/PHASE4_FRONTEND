import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RemoveProduct = () => {
    const [barcode, setBarcode] = useState('');
    const [barcodes, setBarcodes] = useState([]);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch barcodes from the backend on component load
    useEffect(() => {
        const fetchBarcodes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/get_barcodes');
                setBarcodes(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching barcodes:', err.message);
                setMessage('Error fetching barcodes. Please try again later.');
                setMessageType('error');
                setLoading(false);
            }
        };
        fetchBarcodes();
    }, []);

    const handleCancel = () => {
        // Clear the input and navigate back
        setBarcode('');
        setMessage(null);
        navigate('/product'); // Navigate back to the Product screen
    };

    const handleRemove = async (e) => {
        e.preventDefault();
        if (!barcode) {
            setMessage('Please select a barcode to remove.');
            setMessageType('error');
            setTimeout(() => {
                setMessage(null); // Clear message after 3 seconds
                
            }, 3000);
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:3001/remove_product', { barcode });
            setMessage(response.data);
            setMessageType('success');
            setBarcode('');
            setTimeout(() => navigate('/product'), 2000); // Navigate back after a short delay
        } catch (err) {
            setMessage(err.response?.data || 'An unexpected error occurred.');
            setMessageType('error');
            console.error('Error:', err.message);
             setTimeout(() => {
                setMessage(null); // Clear message after 3 seconds
                
            }, 3000);
        }
    };

    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>Procedure: Remove Product</h2>

            {/* Display feedback message */}
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

            {loading ? (
                <div style={{ textAlign: 'center', padding: '10px' }}>Loading barcodes...</div>
            ) : (
                <form onSubmit={handleRemove}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Barcode</label>
                        <select
                            name="barcode"
                            value={barcode}
                            onChange={(e) => setBarcode(e.target.value)}
                            style={{ width: '100%', padding: '5px' }}
                        >
                            <option value="">Select a Barcode</option>
                            {barcodes.map((b, index) => (
                                <option key={index} value={b.barcode}>
                                    {b.barcode}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                            Remove
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default RemoveProduct;