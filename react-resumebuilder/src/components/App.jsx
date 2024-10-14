// App.jsx
import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import ProfessionalSummary from './ProfessionalSummary';
import CareerObjective from './CareerObjective';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Achievements from './Achievements';
import ResumePreview from './ResumePreview';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
  const [formData, setFormData] = useState({
    personalDetails: { name: '', email: '', phone: '', address: '' },
    professionalSummary: '',
    careerObjective: '',
    education: [],
    experience: [],
    skills: [],
    achievements: []
  });

  return (
    <div className="container resume-builder-container">
      <div className="overlay"></div> 
      <header className="text-center my-4 header">
        <h1>Resume Builder</h1>
      </header>
      <div className="row">
        <div className="col-md-6">
          <div className="form-section card p-3 mb-3">
            <PersonalDetails formData={formData} setFormData={setFormData} />
          </div>
          <div className="form-section card p-3 mb-3">
            <ProfessionalSummary formData={formData} setFormData={setFormData} />
          </div>
          <div className="form-section card p-3 mb-3">
            <CareerObjective formData={formData} setFormData={setFormData} />
          </div>
          <div className="form-section card p-3 mb-3">
            <Education formData={formData} setFormData={setFormData} />
          </div>
          <div className="form-section card p-3 mb-3">
            <Experience formData={formData} setFormData={setFormData} />
          </div>
          <div className="form-section card p-3 mb-3">
            <Skills formData={formData} setFormData={setFormData} />
          </div>
          <div className="form-section card p-3 mb-3">
            <Achievements formData={formData} setFormData={setFormData} />
          </div>
        </div>
        <div className="col-md-6">
          <ResumePreview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;
