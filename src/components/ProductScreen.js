import React from 'react';
import { Link } from 'react-router-dom';

const ProductScreen = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Product Screen</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <Link to="/product/add-product">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Add Product
                    </button>
                </Link>
                <Link to="/product/purchase-product">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#FF9800',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Purchase Product
                    </button>
                </Link>
                <Link to="/product/remove-product">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#F44336',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Remove Product
                    </button>
                </Link>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Link to="/">
                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#ccc',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Back to Main Screen
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductScreen;
