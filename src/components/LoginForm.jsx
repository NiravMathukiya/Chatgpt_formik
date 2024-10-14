import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      let errors = {};

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.email) {
        errors.email = 'Required';
      } else if (!emailRegex.test(values.email)) {
        errors.email = 'Email must be in a proper format';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(values.password)) {
        errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      // Ensure email validation passed
      if (!formik.errors.email) {
        axios.post('http://192.168.1.4:5000/v1/admin/login', { email: values.email , password:values.password})
          .then((response) => {
            console.log('Response data:', response.data);
            
           
            formik.setFieldValue('password', response.data.password);
            window.location.href = "/"
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border border-gray-300 rounded">
              <input
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
                className={`flex-grow p-2 outline-none rounded-l rounded-xl ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Password field will appear only if email (email) is valid */}
          {formik.touched.email && !formik.errors.email && formik.values.email && (
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  type="text"
                  id="password"
                  {...formik.getFieldProps('password')}
                  className={`flex-grow p-2 outline-none rounded-l ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>
          )}

          <div className="flex justify-between mb-4">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot password?</a>
          </div>

          <button type="submit" className="w-full bg-teal-500 text-white font-semibold py-2 rounded hover:bg-teal-600 transition duration-200">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
