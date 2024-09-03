import React, { useState } from 'react';
import './Billing.css';

const Billing = ({ onSubmit }) => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    onSubmit(billingDetails);
  };

  return (
    <div className="billing-container">
      <h2>Billing Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={billingDetails.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={billingDetails.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Company Name (optional)</label>
          <input
            type="text"
            name="companyName"
            value={billingDetails.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country/Region *</label>
          <select
            name="country"
            value={billingDetails.country}
            onChange={handleChange}
            required
          >
            <option value="">Select a country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Usa">Usa</option>
            <option value="UK">Uk</option>

           
          </select>
        </div>
        <div className="form-group">
          <label>Street Address *</label>
          <input
            type="text"
            name="address"
            value={billingDetails.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Town / City *</label>
          <input
            type="text"
            name="city"
            value={billingDetails.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State / County *</label>
          <input
            type="text"
            name="state"
            value={billingDetails.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Postcode / ZIP *</label>
          <input
            type="text"
            name="postcode"
            value={billingDetails.postcode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone *</label>
          <input
            type="text"
            name="phone"
            value={billingDetails.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={billingDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Order Notes (optional)</label>
          <textarea
            name="notes"
            value={billingDetails.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Place Order</button>
      </form>
    </div>
  );
};

export default Billing;
