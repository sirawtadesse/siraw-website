import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function AddAsset() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [status, setStatus] = useState('Available');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      alert('Asset name is required.');
      return;
    }

    try {
      const res = await fetch('/api/assets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, serialNumber, status }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        const errorData = await res.json();
        alert(`Failed to add asset: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while adding the asset.');
    }
  };

  return (
    <Layout>
      <section id="add-asset" className="p-6 md:p-10 max-w-lg mx-auto">
        <h1 className="text-3xl text-center mb-6 font-semibold">Add a New Asset</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Asset Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-bold mb-2">Description</label>
            <textarea id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="serialNumber" className="block text-sm font-bold mb-2">Serial Number</label>
            <input type="text" id="serialNumber" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-bold mb-2">Status</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 focus:outline-none focus:shadow-outline">
              <option>Available</option>
              <option>In Use</option>
              <option>In Repair</option>
              <option>Retired</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-colors">
              Save Asset
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
