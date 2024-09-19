import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ian Burke. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="https://github.com/IanBurke1" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/ian-burke147" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
