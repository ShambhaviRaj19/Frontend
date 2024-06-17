// FeaturedCourses.jsx

import React from 'react';
import './FeaturedCourses.css'

function FeaturedCourses() {
  // Example data for featured courses
  const featuredCourses = [
    { id: 1, title: 'Data Science Fundamentals', instructor: 'John Doe' },
    { id: 2, title: 'Web Development Bootcamp', instructor: 'Jane Smith' },
    { id: 3, title: 'Machine Learning Basics', instructor: 'Alex Johnson' },
  ];

  return (
    <section className="featured-courses">
      <h2>Discover the Popular Courses & Bundles at LearnyHive!</h2>
      <div className="course-list">
        {featuredCourses.map(course => (
          <div key={course.id} className="course">
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            {/* Other course details */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCourses;
