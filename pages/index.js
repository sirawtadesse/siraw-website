import Layout from '../components/Layout';
import { db } from '../lib/db';
import { assets as assetsSchema } from '../db/schema';
import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const allAssets = await db.select().from(assetsSchema).orderBy(assetsSchema.createdAt);
  
  const serializedAssets = allAssets.map(asset => ({
    ...asset,
    createdAt: asset.createdAt.toLocaleDateString(),
  }));

  return {
    props: {
      assets: serializedAssets,
    },
  };
}

export default function Home({ assets }) {
  const router = useRouter();

  const handleDelete = async (assetId) => {
    if (window.confirm('Are you sure you want to delete this asset?')) {
      try {
        await fetch(`/api/assets/${assetId}`, { method: 'DELETE' });
        router.reload();
      } catch (error) {
        console.error('Failed to delete asset:', error);
        alert('Failed to delete asset.');
      }
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
