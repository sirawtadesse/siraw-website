import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchAssets = async () => {
            const response = await axios.get('http://localhost/asset-management-api/api/assets.php');
            setAssets(response.data);
        };
        fetchAssets();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4">Manage Assets</h2>
                {/* Asset table will go here */}
            </div>
        </div>
    );
}
