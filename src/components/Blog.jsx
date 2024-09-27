import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for API requests
import BlogForm from './BlogForm'; // Import BlogForm component

const Blog = ({ classicHeader, darkTheme }) => {
  const [posts, setPosts] = useState([]);
  
  // Fetch blog entries from the backend
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/blogs'); // Replace with your API endpoint
        setPosts(response.data); // Assuming the API returns an array of blog entries
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array to run once on component mount

  // Function to add new blog post after form submission
  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Prepend the new post to the existing posts
  };

  return (
    <section
      id="blog"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Journey
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            My Blog
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>

        {/* BlogForm for submitting new blog entries */}
        <BlogForm onAddPost={addNewPost} />

        {/* Blog Posts */}
        <div className="blog-list">
          <h1 className="text-center">Blog Entries</h1>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="blog-entry">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-author-date">
                  <strong>{post.author}</strong> | Published on: 
                  {new Date(post.created_at).toLocaleDateString('en-GB')} {/* Use the correct locale */}
                </p>
                <p className="blog-content">{post.content}</p>
              </div>
            ))
          ) : (
            <p className="no-posts-message">No blog posts available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
