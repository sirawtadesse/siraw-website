export default async function handler(req, res) {
  const { page = 1, limit = 10, category = '' } = req.query;
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://sirawdev.com.et/api';
  
  try {
    // Fetch data from your PHP API endpoint
    const response = await fetch(`${apiUrl}/blogs.php?page=${page}&limit=${limit}&category=${category}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    
    const blogs = await response.json();
    
    // Return the fetched blogs
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
}
