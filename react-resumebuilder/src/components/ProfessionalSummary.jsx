import React from 'react';

const ProfessionalSummary = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, professionalSummary: e.target.value });
  };

  return (
    <div className="form-section">
      <h2>Professional Summary</h2>
      <textarea
        value={formData.professionalSummary}
        onChange={handleChange}
        placeholder="Write a brief summary about your professional experience."
      />
    </div>
  );
};

export default ProfessionalSummary;
