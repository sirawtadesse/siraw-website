export default async function handler(req, res) {
  const { slug } = req.query;
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://sirawdev.com.et/api';
  
  try {
    // Fetch specific blog post from your PHP API
    const response = await fetch(`${apiUrl}/blog-post.php?slug=${slug}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    
    const postData = await response.json();
    
    // Return the fetched post
    res.status(200).json(postData);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
}
