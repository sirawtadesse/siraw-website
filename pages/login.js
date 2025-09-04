import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/asset-management-api/login.php', { email, password });
            if (response.data.success) {
                localStorage.setItem('employee', JSON.stringify(response.data.employee));
                if (response.data.employee.role === 'admin') {
                    router.push('/admin/dashboard');
                } else {
                    router.push('/employee/dashboard');
                }
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {/* Email and Password Inputs */}
            </form>
        </div>
    );
}
