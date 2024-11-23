import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddVan = () => {
    const [formData, setFormData] = useState({
        id: '',
        tag: '',
        fuel: '',
        capacity: '',
        sales: '',
        driven_by: ''
    });

    const [ids, setIds] = useState([]); // Dropdown options for IDs
    const [drivers, setDrivers] = useState([]); // Dropdown options for drivers
    const navigate = useNavigate();

    // Fetch options for dropdowns
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const idResponse = await axios.get('http://localhost:3001/get_ids'); // Replace with your backend endpoint
                const driverResponse = await axios.get('http://localhost:3001/get_drivers'); // Replace with your backend endpoint
                setIds(idResponse.data);
                setDrivers(driverResponse.data);
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
            fuel: '',
            capacity: '',
            sales: '',
            driven_by: ''
        });
        navigate('/van'); // Navigate back to the Van screen
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/add_van', formData);
            alert(response.data); // Show success message
            handleCancel(); // Clear the form and navigate back
        } catch (err) {
            console.error('Error adding van:', err.message);
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
            <h2>Procedure: Add Van</h2>
            <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <label>ID</label>
                    <select
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select ID</option>
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
                <div>
                    <label>fuel</label>
                    <input
                        type="number"
                        name="fuel"
                        value={formData.fuel}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>capacity</label>
                    <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>sales</label>
                    <input
                        type="number"
                        name="sales"
                        value={formData.sales}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>driven_by</label>
                    <select
                        name="driven_by"
                        value={formData.driven_by}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Driver</option>
                        {drivers.map((driver) => (
                            <option key={driver} value={driver}>
                                {driver}
                            </option>
                        ))}
                    </select>
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

export default AddVan;
