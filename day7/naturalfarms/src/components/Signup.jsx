import React, { useState } from 'react';
import './Registration.css'; // Make sure this path is correct

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        gender: '',
        address: '',
        city: '',
        pincode: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formIsValid = true;
        const newErrors = {};

        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const phoneRegex = /^[0-9]{10}$/;
        const pincodeRegex = /^[0-9]{6}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (formData.firstName.length < 3) {
            formIsValid = false;
            newErrors.firstName = "First name must be at least 3 characters long";
        }

        if (formData.lastName.length < 1) {
            formIsValid = false;
            newErrors.lastName = "Last name must be at least 1 character long";
        }

        if (!gmailRegex.test(formData.email)) {
            formIsValid = false;
            newErrors.email = "Email must be a valid Gmail account";
        }

        if (!phoneRegex.test(formData.phoneNumber)) {
            formIsValid = false;
            newErrors.phoneNumber = "Phone number must be 10 digits";
        }

        if (formData.address.length < 4) {
            formIsValid = false;
            newErrors.address = "Please provide a valid address";
        }

        if (formData.city === "") {
            formIsValid = false;
            newErrors.city = "Please provide a city";
        }

        if (!pincodeRegex.test(formData.pincode)) {
            formIsValid = false;
            newErrors.pincode = "Pincode must be exactly 6 digits";
        }

        if (!passwordRegex.test(formData.password)) {
            formIsValid = false;
            newErrors.password = "Password must contain at least one lowercase letter, one uppercase letter, one special character, and one number";
        }

        if (formData.password !== formData.confirmPassword) {
            formIsValid = false;
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Form submitted successfully!");
            // Optionally, add actual form submission logic here
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <h1 className="form_title text-center mb-1 p-3">Registration</h1>
            <form id="registrationForm" className="needs-validation" onSubmit={handleSubmit}>
                <div className="row g-3 justify-content-center">
                    {/* First Name */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="FirstName" className="form-label">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="FirstName" 
                            name="firstName" 
                            placeholder="Enter First Name" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="fname-error" className="error-message">{errors.firstName}</div>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="LastName" className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="LastName" 
                            name="lastName" 
                            placeholder="Enter Last Name" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="lname-error" className="error-message">{errors.lastName}</div>
                    </div>

                    {/* Email */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="EMAIL" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="EMAIL" 
                            name="email" 
                            placeholder="Enter Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="email-error" className="error-message">{errors.email}</div>
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="PHONENUMBER" className="form-label">Phone Number</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            id="PHONENUMBER" 
                            name="phoneNumber" 
                            placeholder="Enter Phone Number" 
                            value={formData.phoneNumber} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="phone-error" className="error-message">{errors.phoneNumber}</div>
                    </div>

                    {/* Password */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="PASSWORD" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="PASSWORD" 
                            name="password" 
                            placeholder="Enter Password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="password-error" className="error-message">{errors.password}</div>
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="CONFIRMPASSWORD" className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="CONFIRMPASSWORD" 
                            name="confirmPassword" 
                            placeholder="Confirm Password" 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="confirm-password-error" className="error-message">{errors.confirmPassword}</div>
                    </div>

                    {/* Gender */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="GENDER" className="form-label">Gender</label>
                        <select 
                            id="GENDER" 
                            name="gender" 
                            className="form-select" 
                            value={formData.gender} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="" disabled selected>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <div id="gender-error" className="error-message">{errors.gender}</div>
                    </div>

                    {/* Address */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="ADDRESS" className="form-label">Address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="ADDRESS" 
                            name="address" 
                            placeholder="Enter Address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="address-error" className="error-message">{errors.address}</div>
                    </div>

                    {/* City */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="CITY" className="form-label">City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="CITY" 
                            name="city" 
                            placeholder="Enter City" 
                            value={formData.city} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="city-error" className="error-message">{errors.city}</div>
                    </div>

                    {/* Pincode */}
                    <div className="col-md-4 col-sm-8 col-8 m-2">
                        <label htmlFor="PINCODE" className="form-label">Pincode</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="PINCODE" 
                            name="pincode" 
                            placeholder="Enter Pincode" 
                            value={formData.pincode} 
                            onChange={handleChange} 
                            required 
                        />
                        <div id="pincode-error" className="error-message">{errors.pincode}</div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center mb-2">
                        <button type="submit" className="btn submit_button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
