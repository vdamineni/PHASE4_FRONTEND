import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        barcode: '',
        name: '',
        weight: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        
        setFormData({
            barcode: '',
            name: '',
            weight: '',
        });
        setErrorMessage('');
        setSuccessMessage('');
        navigate('/product'); 
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        const dataToSubmit = {};
    for (const key in formData) {
        dataToSubmit[key] = formData[key] === "" ? null : formData[key];
    }
        try {
            const response = await axios.post('http://localhost:3001/add_product', dataToSubmit);
            setSuccessMessage(response.data);
            setErrorMessage(''); // Clear any previous error message
             setTimeout(() => {
                setSuccessMessage(null); // Clear message after 3 seconds
                 setFormData({
            barcode: '',
            name: '',
            weight: '',
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
            <h2>Procedure: Add Product</h2>
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
            <form
                onSubmit={handleAdd}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                }}
            >
                <div>
                    <label>barcode</label>
                    <input
                        type="text"
                        name="barcode"
                        value={formData.barcode}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>weight</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
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
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;