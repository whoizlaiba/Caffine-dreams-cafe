
"use client"
import React, { useState } from 'react';

const ReviewForm: React.FC = () => {
  const [isSubmitting] = useState(false);


  return (
    <div className="bg-black" id="reviews">
      <h1 className="text-yellow-700 text-center text-4xl md:text-5xl lg:text-6xl bad-script-regular">
        Got a favorite brew? Share your sip-spiration and help us make every cup better!
      </h1>
      <br />
      <div className="max-w-3xl mx-auto p-6 bg-yellow-950 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-6 bad-script-regular">
          Caffeine Dreams Review Form
        </h2>

        <form
          action="https://formspree.io/f/xrbglazw"
          method="POST"
        
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-white font-medium bad-script-regular">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-yellow-700"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-medium bad-script-regular">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-yellow-700"
              required
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-white font-medium bad-script-regular">Rating</label>
            <select
              id="rating"
              name="rating"
              className="mt-2 p-3 w-full border bg-yellow-700 rounded-lg"
              required
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <div>
            <label htmlFor="review" className="block text-white font-medium bad-script-regular">Your Review</label>
            <textarea
              id="review"
              name="review"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-yellow-700"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 px-6 py-3 text-white font-medium rounded-lg bad-script-regular bg-yellow-700 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-yellow-600'}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;























