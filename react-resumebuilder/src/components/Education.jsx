import React, { useState } from 'react';

const Education = ({ formData, setFormData }) => {
  const [education, setEducation] = useState({
    institution: '',
    degree: '',
    year: '',
    grade: ''
  });

  const handleAddEducation = () => {
    setFormData({ 
      ...formData, 
      education: [...formData.education, education] 
    });
    setEducation({ institution: '', degree: '', year: '', grade: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: updatedEducation });
  };

  return (
    <div className="form-section">
      <h2>Education</h2>
      <input
        type="text"
        name="institution"
        value={education.institution}
        onChange={handleChange}
        placeholder="Institution Name"
      />
      <input
        type="text"
        name="degree"
        value={education.degree}
        onChange={handleChange}
        placeholder="Degree"
      />
      <input
        type="text"
        name="year"
        value={education.year}
        onChange={handleChange}
        placeholder="Year of Graduation"
      />
      <input
        type="text"
        name="grade"
        value={education.grade}
        onChange={handleChange}
        placeholder="Grade/Percentage"
      />
      <button onClick={handleAddEducation}>Add Education</button>
      <ul>
        {formData.education.map((edu, index) => (
          <li key={index}>
            {edu.institution} - {edu.degree} ({edu.year}) - {edu.grade}
            <button onClick={() => handleDeleteEducation(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
