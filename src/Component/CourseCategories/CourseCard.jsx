import React, { useState } from 'react';
import './CourseCard.css'; // Import the CSS file

const CourseCard = ({ course }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="course-card">
      {/* Image */}
      <div className="course-image">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      {/* Title */}
      <div className="course-title">{course.title}</div>
      {/* Rating */}
      <div className="course-rating">Rating: {course.rating}</div>
      {/* Subcategory */}
      <div className="course-subcategory"><strong>Subcategory:</strong> {course.subcategory}</div>
      {/* Details */}
      {showDetails && (
        <div className="course-details">
          <p>{course.content}</p>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
