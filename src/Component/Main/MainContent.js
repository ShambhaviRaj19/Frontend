// MainContent.js
import React from 'react';
import 'animate.css/animate.min.css';
import CourseCategories from '../CourseCategories/CourseCategories';
import FeaturedCourses from './FeaturedCourses';
import Recommendations from './Recommendations';
import Enroll from '../Enroll/Enroll';
import Comm from './Comm';


function MainContent() {
  return (
    <div >
      <Enroll/>
      <CourseCategories />
      <FeaturedCourses />
      <Recommendations/>
      <Comm/>
    </div>
  );
}

export default MainContent;
