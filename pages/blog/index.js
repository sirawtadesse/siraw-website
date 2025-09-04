import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const url = category 
          ? `/api/blogs?page=${currentPage}&category=${category}`
          : `/api/blogs?page=${currentPage}`;
          
        const response = await fetch(url);
        const data = await response.json();
        
        if (data) {
          setBlogs(data.posts || data);
          setTotalPages(data.totalPages || 1);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage, category]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

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
      <section className="py-12">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
            {category && (
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Category: <span className="font-medium capitalize">{category}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <article key={blog.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                    <Link href={`/blog/${blog.slug}`} legacyBehavior>
                      <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium">
                        Read More →
                      </a>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-400">No blog posts found.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
