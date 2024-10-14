import React, { useState } from 'react';

const Achievements = ({ formData, setFormData }) => {
  const [achievement, setAchievement] = useState('');

  const handleAddAchievement = () => {
    setFormData({ 
      ...formData, 
      achievements: [...formData.achievements, achievement] 
    });
    setAchievement('');
  };

  const handleDeleteAchievement = (index) => {
    const updatedAchievements = formData.achievements.filter((_, i) => i !== index);
    setFormData({ ...formData, achievements: updatedAchievements });
  };

  return (
    <div className="form-section">
      <h2>Achievements</h2>
      <input
        type="text"
        value={achievement}
        onChange={(e) => setAchievement(e.target.value)}
        placeholder="Add an achievement"
      />
      <button onClick={handleAddAchievement}>Add Achievement</button>
      <ul>
        {formData.achievements.map((achievement, index) => (
          <li key={index}>
            {achievement}
            <button onClick={() => handleDeleteAchievement(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
