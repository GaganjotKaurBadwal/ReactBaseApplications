import React from 'react';
import html2pdf from 'html2pdf.js';

const ResumePreview = ({ formData }) => {
  const { personalDetails, professionalSummary, careerObjective, education, experience, skills, achievements } = formData;

  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: 'Resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait' }
      })
      .save();
  };

  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <div id="resume-content">
        <section>
          <h3>Personal Details</h3>
          <p><strong>Name:</strong> {personalDetails.name}</p>
          <p><strong>Email:</strong> {personalDetails.email}</p>
          <p><strong>Phone:</strong> {personalDetails.phone}</p>
          <p><strong>Address:</strong> {personalDetails.address}</p>
        </section>
        <section>
          <h3>Professional Summary</h3>
          <p>{professionalSummary}</p>
        </section>
        <section>
          <h3>Career Objective</h3>
          <p>{careerObjective}</p>
        </section>
        <section>
          <h3>Education</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Institution</th>
                <th>Degree</th>
                <th>Year</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.institution}</td>
                  <td>{edu.degree}</td>
                  <td>{edu.year}</td>
                  <td>{edu.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        {experience.length > 0 && (
          <section>
            <h3>Experience</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Duration</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {experience.map((exp, index) => (
                  <tr key={index}>
                    <td>{exp.jobTitle}</td>
                    <td>{exp.company}</td>
                    <td>{exp.duration}</td>
                    <td>{exp.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
        <section>
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </section>
        <section>
          <h3>Achievements</h3>
          <ul>
            {achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
          </ul>
        </section>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default ResumePreview;
