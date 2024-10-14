import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure you import the CSS file

const UserForm = () => {
    const initialFormData = {
        name: '',
        email: '',
        age: '',
        phone: '',
        gender: '',
        address: '',
        profilePicture: null,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profilePicture: e.target.files[0],
        });
    };

    // Validate the form fields
    const validate = () => {
        let formErrors = {};
        let isValid = true;

        // Name validation
        if (!formData.name) {
            isValid = false;
            formErrors.name = 'Name is required';
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            isValid = false;
            formErrors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            isValid = false;
            formErrors.email = 'Invalid email format';
        }

        // Age validation
        if (!formData.age) {
            isValid = false;
            formErrors.age = 'Age is required';
        }

        // Phone validation
        const phonePattern = /^[0-9]{10}$/;
        if (!formData.phone) {
            isValid = false;
            formErrors.phone = 'Phone number is required';
        } else if (!phonePattern.test(formData.phone)) {
            isValid = false;
            formErrors.phone = 'Phone number must be 10 digits';
        }

        // Gender validation
        if (!formData.gender) {
            isValid = false;
            formErrors.gender = 'Gender is required';
        }

        // Address validation
        if (!formData.address) {
            isValid = false;
            formErrors.address = 'Address is required';
        }

        setErrors(formErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSuccessMessage('Form submitted successfully!');
            setErrors({});
            setShowSuccess(true);
            setFormData(initialFormData); // Reset form data to initial state

            // Hide success message after 3 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        } else {
            setSuccessMessage('');
            setShowSuccess(false);
        }
    };

    return (
        <div className="background">
            <div className="container gradient--6">
                <h2 className="mb-4 text-center">User Information Form</h2>
                {showSuccess && (
                    <div className={`alert alert-success show`}>
                        {successMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                        {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select
                            className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows="3"
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Profile Picture</label>
                        <input
                            type="file"
                            className="form-control"
                            name="profilePicture"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
