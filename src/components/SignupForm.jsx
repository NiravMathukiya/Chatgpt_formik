import React from 'react'

const SignupForm = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Registration Forn</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  type="email"
                  id="email"
                  className={`flex-grow p-2 outline-none rounded-l rounded-x`}
                />
              </div>

            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  type="text"
                  id="password"
                  className={`flex-grow p-2 outline-none rounded-l `}
                />
              </div>
            </div>


            <button type="submit" className="w-full bg-teal-500 text-white font-semibold py-2 rounded hover:bg-teal-600 transition duration-200">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
