import React from 'react';

const CareerObjective = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, careerObjective: e.target.value });
  };

  return (
    <div className="form-section">
      <h2>Career Objective</h2>
      <textarea
        value={formData.careerObjective}
        onChange={handleChange}
        placeholder="Describe your career goals and objectives."
      />
    </div>
  );
};

export default CareerObjective;
