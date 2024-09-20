import React from 'react';

const Blog = ({ classicHeader, darkTheme }) => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React and Spring Boot',
      date: 'September 20, 2024',
      content: `The first step in building this portfolio was setting up the basic structure using React for the frontend and Spring Boot for the backend. 
      React handles all the interactive UI, while Spring Boot serves as the backend REST API to handle data like the blog posts you'll read here!`,
    },
    {
      id: 2,
      title: 'Setting Up the Backend with Spring Boot',
      date: 'September 22, 2024',
      content: `Once the React frontend was in place, I focused on building the backend using Spring Boot. 
      I created a simple REST API to store and manage data like blog posts, which can be easily retrieved by the frontend. 
      This setup is scalable and allows me to easily expand functionality in the future.`,
    },
    {
      id: 3,
      title: 'Integrating React with Spring Boot',
      date: 'September 24, 2024',
      content: `The integration of React with Spring Boot was an exciting challenge. 
      I used Axios to fetch data from the Spring Boot API and display it dynamically on the React frontend. 
      This allows the frontend to be highly interactive and responsive, providing a seamless user experience.`,
    },
  ];

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
        </div>
        {/* Heading end*/}
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h2>{post.title}</h2>
          <p><em>{post.date}</em></p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Blog;
