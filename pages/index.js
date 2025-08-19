import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

// Sample data to use since we removed the database connection
const sampleAssets = [
  { id: 1, name: 'Laptop Pro 15"', status: 'In Use', serialNumber: 'C02XF1A9JG5J', createdAt: new Date().toLocaleDateString() },
  { id: 2, name: 'Office Monitor 27"', status: 'Available', serialNumber: 'SNM789123', createdAt: new Date().toLocaleDateString() },
  { id: 3, name: 'Mechanical Keyboard', status: 'In Repair', serialNumber: 'KBD456789', createdAt: new Date().toLocaleDateString() },
  { id: 4, name: 'Company Smartphone', status: 'Retired', serialNumber: 'PHN987654', createdAt: new Date().toLocaleDateString() },
];

export default function Home() {
  const [assets, setAssets] = useState(sampleAssets);

  const handleDelete = (assetId) => {
    if (window.confirm('Are you sure you want to delete this asset?')) {
      // Filter out the deleted asset from the local state
      setAssets(assets.filter(asset => asset.id !== assetId));
    }
  };

  return (
    <Layout>
      <section id="dashboard" className="p-6 md:p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Asset Dashboard</h1>
          <Link href="/add-asset" legacyBehavior>
            <a className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Add New Asset
            </a>
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Serial Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date Added</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {assets.length > 0 ? assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{asset.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{asset.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{asset.serialNumber || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{asset.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleDelete(asset.id)} className="text-red-600 hover:text-red-900 ml-4">Delete</button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No assets found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
