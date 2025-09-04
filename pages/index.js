import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?limit=3');
        const data = await response.json();
        
        if (data && data.length > 0) {
          setBlogs(data);
          setFeaturedPost(data[0]); // Set first post as featured
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with Featured Post */}
      {featuredPost && (
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 mb-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Featured
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">{featuredPost.title}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredPost.excerpt}</p>
              <Link href={`/blog/${featuredPost.slug}`} legacyBehavior>
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
                  Read More
                </a>
              </Link>
            </div>
            <div>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
          <Link href="/blog" legacyBehavior>
            <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium">
              View All Posts →
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={blog.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{new Date(blog.published_at).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.read_time} min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} legacyBehavior>
                  <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium">
                    Read More →
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Web Development', 'JavaScript', 'React', 'PHP', 'Database', 'DevOps', 'Tutorials', 'Career'].map((category) => (
            <Link 
              key={category} 
              href={`/blog?category=${category.toLowerCase()}`}
              legacyBehavior
            >
              <a className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                {category}
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Subscribe to the Newsletter</h2>
        <p className="mb-6 max-w-2xl mx-auto">Get the latest posts on web development, programming tips, and career advice delivered straight to your inbox.</p>
        <form className="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            required
          />
          <button 
            type="submit" 
            className="bg-indigo-900 hover:bg-indigo-800 px-6 py-3 rounded-r-lg font-medium transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>
    </Layout>
  );
}
