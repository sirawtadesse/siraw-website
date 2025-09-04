export default async function handler(req, res) {
  const { page = 1, limit = 10, category = '' } = req.query;
  
  try {
    // Fetch data from your PHP API endpoint
    const response = await fetch(`https://sirawdev.com.et/api/blogs?page=${page}&limit=${limit}&category=${category}`);
    
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
