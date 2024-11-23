import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RemoveProduct = () => {
    const [barcode, setBarcode] = useState('');
    const [barcodes, setBarcodes] = useState([]);
    const navigate = useNavigate();

    // Fetch barcodes from the backend on component load
    useEffect(() => {
        const fetchBarcodes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/get_barcodes');
                setBarcodes(response.data);
            } catch (err) {
                console.error('Error fetching barcodes:', err.message);
            }
        };
        fetchBarcodes();
    }, []);

    const handleCancel = () => {
        // Clear the input and navigate back
        setBarcode('');
        navigate('/product'); // Navigate back to the Product screen
    };

    const handleRemove = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/remove_product', { barcode });
            alert(response.data); // Show success message
            handleCancel(); // Clear the input and navigate back
        } catch (err) {
            console.error('Error:', err.message);
            alert('Error: ' + err.message); // Show error message
        }
    };

    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>Procedure: Remove Product</h2>
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
        </div>
    );
};

export default RemoveProduct;
