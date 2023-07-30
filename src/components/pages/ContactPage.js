import React from 'react'

function ContactPage() {
  return (
    <div className="container">
        <h2 className="py-3">Contact Page</h2>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Password" />
          </div>
          <div className="py-3">
            <textarea class="form-control" id="query"></textarea>
            <label className="form-check-label" for="query">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ContactPage