import React, { useState } from 'react';

const Experience = ({ formData, setFormData }) => {
  const [experience, setExperience] = useState({
    jobTitle: '',
    company: '',
    duration: '',
    description: ''
  });

  const [hasJobExperience, setHasJobExperience] = useState(true);

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, experience]
    });
    setExperience({ jobTitle: '', company: '', duration: '', description: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleDeleteExperience = (index) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleToggleJobExperience = () => {
    setHasJobExperience(!hasJobExperience);
    if (!hasJobExperience) {
      setFormData({ ...formData, experience: [] });
    }
  };

  return (
    <div className="form-section">
      <h2>Experience and Internships</h2>
      <label>
        <input 
          type="checkbox" 
          checked={!hasJobExperience} 
          onChange={handleToggleJobExperience}
        />
        I have no job experience
      </label>
      {hasJobExperience && (
        <>
          <input
            type="text"
            name="jobTitle"
            value={experience.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
          />
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="Company"
          />
          <input
            type="text"
            name="duration"
            value={experience.duration}
            onChange={handleChange}
            placeholder="Duration"
          />
          <textarea
            name="description"
            value={experience.description}
            onChange={handleChange}
            placeholder="Job Description"
          />
          <button onClick={handleAddExperience}>Add Experience</button>
          <ul>
            {formData.experience.map((exp, index) => (
              <li key={index}>
                {exp.jobTitle} at {exp.company} ({exp.duration}) - {exp.description}
                <button onClick={() => handleDeleteExperience(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Experience;
