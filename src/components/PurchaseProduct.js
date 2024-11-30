import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PurchaseProduct = () => {
    const [formData, setFormData] = useState({
        longName: '',
        id: '',
        tag: '',
        barcode: '',
        quantity: '',
    });

    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        // Clear the form and navigate back
        setFormData({
            longName: '',
            id: '',
            tag: '',
            barcode: '',
            quantity: '',
        });
        navigate('/product'); // Navigate back to the Product screen
    };

    const handlePurchase = async (e) => {
        e.preventDefault();

        const { longName, id, tag, barcode, quantity } = formData;

        // Basic validation
        if (!longName || !id || !tag || !barcode || !quantity) {
            setMessage('Please fill in all fields before submitting.');
            setMessageType('error');
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:3001/purchase_product',
                formData
            );
            setMessage('Product purchased successfully!');
            setMessageType('success');

            // Clear the form after a successful submission
            setFormData({
                longName: '',
                id: '',
                tag: '',
                barcode: '',
                quantity: '',
            });

            // Redirect after success
            setTimeout(() => navigate('/product'), 2000);
        } catch (err) {
            console.error('Error:', err.message);
            setMessage('Error purchasing product: ' + err.message);
            setMessageType('error');
        }
    };

    return (
        <div
            style={{
                maxWidth: '700px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>Procedure: Purchase Product</h2>

            {/* Display feedback message */}
            {message && (
                <div
                    style={{
                        marginBottom: '15px',
                        padding: '10px',
                        color: messageType === 'success' ? 'green' : 'red',
                        border: `1px solid ${
                            messageType === 'success' ? 'green' : 'red'
                        }`,
                        borderRadius: '5px',
                        backgroundColor:
                            messageType === 'success' ? '#eaffea' : '#ffeaea',
                    }}
                >
                    {message}
                </div>
            )}

            <form
                onSubmit={handlePurchase}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                }}
            >
                <div>
                    <label>Long Name</label>
                    <input
                        type="text"
                        name="longName"
                        value={formData.longName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>ID</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
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
                    <input
                        type="text"
                        name="barcode"
                        value={formData.barcode}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>

                <div
                    style={{
                        gridColumn: 'span 2',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
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
                        Purchase
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PurchaseProduct;
