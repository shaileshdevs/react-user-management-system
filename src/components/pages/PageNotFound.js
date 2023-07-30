import React from 'react';
import Button from 'react-bootstrap/Button';

function PageNotFound() {
  return (
    <div>
      <h1 className="p-4">Page you are looking for does not exist!</h1>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  )
}

export default PageNotFound