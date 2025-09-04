import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/blogs/${slug}`);
          const data = await response.json();
          
          if (data) {
            setPost(data.post);
            setRelatedPosts(data.related || []);
          }
          setLoading(false);
        } catch (error) {
          console.error('Error fetching blog post:', error);
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto py-12 px-4">
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
            <span>{new Date(post.published_at).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.read_time} min read</span>
            <span className="mx-2">•</span>
            <span className="capitalize">{post.category}</span>
          </div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
          />
        </header>

        {/* Post Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Post Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Author info */}
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{post.author.bio}</p>
              </div>
            </div>
            
            {/* Social Sharing */}
            <div className="flex space-x-4">
              <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                Share on Twitter
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                Share on LinkedIn
              </button>
            </div>
          </div>
        </footer>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <article key={related.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{related.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{related.excerpt}</p>
                  <a 
                    href={`/blog/${related.slug}`} 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium"
                  >
                    Read More →
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Comments Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <p className="text-gray-600 dark:text-gray-400">Comments functionality coming soon.</p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
