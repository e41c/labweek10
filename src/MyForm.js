import React from 'react';

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
            <h1>Sign Up</h1>
            </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Address</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label>Apartment, studio, or floor</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-4">
            <label>Province</label>
            <select className="form-control">
              <option>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label>Postal Code</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

export default MyForm;
