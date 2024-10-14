import React from 'react';

const PersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalDetails: {
        ...formData.personalDetails,
        [name]: value
      }
    });
  };

  return (
    <div className="form-section">
      <h2>Personal Details</h2>
      <input
        type="text"
        name="name"
        value={formData.personalDetails.name}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        value={formData.personalDetails.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        value={formData.personalDetails.phone}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <textarea
        name="address"
        value={formData.personalDetails.address}
        onChange={handleChange}
        placeholder="Address"
      />
    </div>
  );
};

export default PersonalDetails;
