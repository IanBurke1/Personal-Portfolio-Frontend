import React, { useState } from 'react';

const BlogForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      title,
      content,
      author,
      date: new Date().toLocaleDateString(),
    };

    // Call the onAddPost function passed via props to update the blog list
    onAddPost(newPost);

    // Reset the form fields
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="blog-form-container">
      <h3 className="form-title">Add New Blog Entry</h3>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the blog title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content"
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
