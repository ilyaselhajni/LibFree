import React, { useState } from 'react';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [generatedCode, setGeneratedCode] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCode(code);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '' });
    setGeneratedCode('');
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 font-mono">
        <h1 className="text-5xl font-semibold mb-4 capitalize">Welcome to LibFree</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Sign Up / Sign In
        </button>
        <p className="mt-6 max-w-xl text-sm text-gray-300">
          Read any book you want for free
        </p>
      </div>

      {isModalOpen && (
        <div
          onClick={handleBackgroundClick}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <div className="bg-white text-black rounded-2xl w-full max-w-md p-6 relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg font-bold"
            >
              ×
            </button>

            <div className="flex justify-center mb-6 space-x-4">
              <button
                onClick={() => setIsSignUp(true)}
                className={`px-4 py-2 rounded-full ${
                  isSignUp ? 'bg-black text-white' : 'bg-gray-200 text-black'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
                className={`px-4 py-2 rounded-full ${
                  !isSignUp ? 'bg-black text-white' : 'bg-gray-200 text-black'
                }`}
              >
                Sign In
              </button>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            {generatedCode && (
              <div className="mt-4 text-center text-green-600 text-sm">
                Your access code: <span className="font-bold">{generatedCode}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
