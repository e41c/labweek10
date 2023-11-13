import React, { useState } from 'react';

function MyForm() {
  const [form, setForm] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
        <input type="text" name="fullName" onChange={handleChange} placeholder="Full Name" />
        <input type="text" name="address" onChange={handleChange} placeholder="Address" />
        <input type="text" name="city" onChange={handleChange} placeholder="City" />
        <input type="text" name="province" onChange={handleChange} placeholder="Province" />
        <input type="text" name="postalCode" onChange={handleChange} placeholder="Postal Code" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Email: {form.email}</p>
        <p>Full Name: {form.fullName}</p>
        <p>Address: {form.address}</p>
        <p>City: {form.city}</p>
        <p>Province: {form.province}</p>
        <p>Postal Code: {form.postalCode}</p>
      </div>
    </div>
  );
}

export default MyForm;
