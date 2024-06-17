import React from 'react';
import './Recommendations.css'; // Import Recommendations CSS file

function Recommendations() {
  // Example data for recommended courses
  const recommendedCourses = [
    { id: 1, title: 'Advanced JavaScript', instructor: 'Sarah Johnson', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Python for Data Science', instructor: 'Michael Smith', image: 'path/to/image2.jpg' },
    { id: 3, title: 'React Fundamentals', instructor: 'Emily Davis', image: 'path/to/image3.jpg' },
  ];

  return (
    <section className="recommendations">
      <h2>Recommended for You</h2>
      <div className="course-list">
        {recommendedCourses.map(course => (
          <div key={course.id} className="course">
            <img src={course.image} alt={course.title} style={{ width: '100%', height: 'auto' }} />
            <div className="caption">
              <h3 className="entry-title">{course.title}</h3>
              <p className="entry-content">Instructor: {course.instructor}</p>
              <p className="ld_course_grid_button">
                <a className="btn btn-primary" role="button" href="#">
                  See more...
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;
