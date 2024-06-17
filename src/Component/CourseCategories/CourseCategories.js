import React, { useState, useRef } from 'react';
import './CourseCategories.css'; // Import the new CSS
import CourseCard from './CourseCard';

const CourseCategories = () => {
  const [courses] = useState([
    { id: 1, title: 'React Basics', subcategory: 'Web Development', content: 'Learn the fundamentals of React.', rating: '4.5', imageUrl: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Python for Beginners', subcategory: 'Programming', content: 'Introduction to Python programming language.', rating: '4.0', imageUrl: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Data Science Essentials', subcategory: 'Data Science', content: 'Basic concepts of data science and analysis.', rating: '4.2', imageUrl: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'JavaScript Fundamentals', subcategory: 'Web Development', content: 'Introduction to JavaScript basics.', rating: '4.3', imageUrl: 'https://via.placeholder.com/300x200' },
  ]);

  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const courseListRef = useRef(null);

  const handleCourseSelect = (index) => {
    setSelectedCourseIndex(index);
  };

  const handleScroll = (direction) => {
    const scrollAmount = 320; // Adjust as needed
    if (direction === 'left') {
      courseListRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setSelectedCourseIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
    } else {
      courseListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setSelectedCourseIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2>Discover the Popular Courses & Bundles at LearnyHive!</h2>
          <div className="course-list">
            <button className="scroll-button prev" onClick={() => handleScroll('left')}>
              &lt;
            </button>
            <div className="course-list-container" ref={courseListRef}>
              <div className="course-list-inner">
                {courses.map((course, index) => (
                  <div key={course.id} className={`animate__animated animate__fadeIn ${index === selectedCourseIndex ? 'selected' : ''}`} onClick={() => handleCourseSelect(index)}>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>
            <button className="scroll-button next" onClick={() => handleScroll('right')}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
