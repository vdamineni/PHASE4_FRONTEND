import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayProductView = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/display_product_view');
                setProducts(response.data);
            } catch (err) {
                console.error('Error fetching product data:', err.message);
            }
        };
        fetchProducts();
    }, []);

    const handleBack = () => {
        navigate('/views'); // Navigate back to Views screen
    };

    return (
        <div
            style={{
                maxWidth: '900px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>View: Product</h2>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '20px',
                }}
            >
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Iname</th>
                        <th style={tableHeaderStyle}>Label</th>
                        <th style={tableHeaderStyle}>PackagesAvailable</th>
                        <th style={tableHeaderStyle}>Minprice</th>
                        <th style={tableHeaderStyle}>MaxPrice</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td style={tableCellStyle}>{product.product_name}</td>
                            <td style={tableCellStyle}>{product.location}</td>
                            <td style={tableCellStyle}>{product.amount_available}</td>
                            <td style={tableCellStyle}>{product.low_price}</td>
                            <td style={tableCellStyle}>{product.high_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={handleBack}
                style={{
                    backgroundColor: '#ccc',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    display: 'block',
                    margin: '0 auto',
                }}
            >
                Back
            </button>
        </div>
    );
};

const tableHeaderStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
};

const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
};

export default DisplayProductView;
