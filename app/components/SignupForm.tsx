'use client';

import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  role: string;
  preferredDestinations?: string;
  numProperties?: string;
  zipCode?: string;
}

export default function SignupForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        role: '',
        preferredDestinations: '', // Initialize these optional fields
        numProperties: '',         // with empty strings
        zipCode: ''               // instead of undefined
      });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Add the missing handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    try {
      await fetch('https://script.google.com/macros/s/AKfycbxQ74NEwzJO4u9khhXdDc7q5akfgZGGNTa1A3ceanhg4isidbcdmXTMllGJ9zNWU8g/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(formData)
      });
  
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        role: '',
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          I am a...
        </label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your role</option>
          <option value="traveler">Traveler</option>
          <option value="host">Host</option>
        </select>
      </div>

      {formData.role === 'host' && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Properties
            </label>
            <input
              type="number"
              name="numProperties"
              value={formData.numProperties}
              onChange={handleChange}
              min="1"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter number of properties"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zip Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              pattern="[0-9]*"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your zip code"
            />
          </div>
        </>
      )}

      {formData.role === 'traveler' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Destinations
          </label>
          <input
            type="text"
            name="preferredDestinations"
            value={formData.preferredDestinations}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Beach, Mountains, City"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
      </button>

      {submitStatus === 'success' && (
        <div className="text-green-600 text-center mt-4">
          Thanks for signing up! We&apos;ll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-red-600 text-center mt-4">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
