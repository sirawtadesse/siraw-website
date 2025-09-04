import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EmployeeDashboard() {
    const [myAssets, setMyAssets] = useState([]);
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const loggedInEmployee = JSON.parse(localStorage.getItem('employee'));
        if (loggedInEmployee) {
            setEmployee(loggedInEmployee);
            // API call to fetch assets for this employee's ID
        }
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome, {employee?.full_name}</h1>
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4">My Assigned Assets</h2>
                {/* List of assigned assets */}
            </div>
        </div>
    );
}
