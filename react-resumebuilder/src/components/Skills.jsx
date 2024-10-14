import React, { useState } from 'react';

const Skills = ({ formData, setFormData }) => {
  const [skill, setSkill] = useState('');

  const handleAddSkill = () => {
    setFormData({ 
      ...formData, 
      skills: [...formData.skills, skill] 
    });
    setSkill('');
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  return (
    <div className="form-section">
      <h2>Skills</h2>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Add a skill"
      />
      <button onClick={handleAddSkill}>Add Skill</button>
      <ul>
        {formData.skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => handleDeleteSkill(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
