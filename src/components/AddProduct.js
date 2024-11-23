import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        barcode: '',
        name: '',
        weight: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        // Clear the form and navigate back
        setFormData({
            barcode: '',
            name: '',
            weight: '',
        });
        navigate('/product'); // Navigate back to the Product screen
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/add_product', formData);
            alert(response.data); // Show success message
            handleCancel(); // Clear the form and navigate back
        } catch (err) {
            console.error('Error:', err.message);
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
            <h2>Procedure: Add Product</h2>
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
