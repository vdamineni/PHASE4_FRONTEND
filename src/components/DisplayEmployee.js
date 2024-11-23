import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayEmployeeView = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:3001/display_employee_view');
                setEmployees(response.data);
            } catch (err) {
                console.error('Error fetching employee data:', err.message);
            }
        };
        fetchEmployees();
    }, []);

    const handleBack = () => {
        navigate('/views'); // Navigate back to Views screen
    };

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>View: Employee</h2>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '20px',
                }}
            >
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>EmployeeUsername</th>
                        <th style={tableHeaderStyle}>TaxIdentifier</th>
                        <th style={tableHeaderStyle}>Salary</th>
                        <th style={tableHeaderStyle}>HiringDate</th>
                        <th style={tableHeaderStyle}>ExperienceLevel</th>
                        <th style={tableHeaderStyle}>LicenseIdentifier</th>
                        <th style={tableHeaderStyle}>DrivingExperience</th>
                        <th style={tableHeaderStyle}>IsManager</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td style={tableCellStyle}>{employee.username}</td>
                            <td style={tableCellStyle}>{employee.taxID}</td>
                            <td style={tableCellStyle}>{employee.salary}</td>
                            <td style={tableCellStyle}>{employee.hired}</td>
                            <td style={tableCellStyle}>{employee.employee_experience}</td>
                            <td style={tableCellStyle}>{employee.licenseID}</td>
                            <td style={tableCellStyle}>{employee.driving_experience}</td>
                            <td style={tableCellStyle}>{employee.manager_status}</td>
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

export default DisplayEmployeeView;
