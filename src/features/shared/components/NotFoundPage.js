import React from 'react';

function NotFoundPage() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="btn btn-primary">Go Back Home</a>
    </div>
  );
}

export default NotFoundPage;
