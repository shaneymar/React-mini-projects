import React, { useState } from "react";
import "./Testimonials.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  function handlePrevClick() {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  }

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  }

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        <strong>- {testimonials[currentIndex].author}</strong>
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonial;
