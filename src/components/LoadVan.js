import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoadVan = () => {
    const [formData, setFormData] = useState({
        id: '',
        tag: '',
        barcode: '',
        num_packages: '',
        price: ''
    });


    const [vanIds, setVanIds] = useState([]);
    const [barcodes, setBarcodes] = useState([]);
    const navigate = useNavigate();

    // Fetch dropdown options
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const vanResponse = await axios.get('http://localhost:3001/get_pvan_ids'); // Replace with your backend endpoint for van IDs
                const barcodeResponse = await axios.get('http://localhost:3001/get_pbarcodes'); // Replace with your backend endpoint for barcodes
                setVanIds(vanResponse.data);
                setBarcodes(barcodeResponse.data);
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
            id: '',
            tag: '',
            barcode: '',
            num_packages: '',
            price: ''
        });
        navigate('/van'); // Navigate back to the Van screen
    };

    const handleDeliver = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/load_van', formData);
            alert(response.data); // Show success message
            handleCancel(); // Clear the form and navigate back
        } catch (err) {
            console.error('Error loading van:', err.message);
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
            <h2>Procedure: Load Van</h2>
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
                    <label>tag</label>
                    <input
                        type="text"
                        name="tag"
                        value={formData.tag}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>barcode</label>
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
                    <label>num. packages</label>
                    <input
                        type="number"
                        name="num_packages"
                        value={formData.num_packages}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>price</label>
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
