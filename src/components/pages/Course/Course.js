import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'
const Course = ({ course }) => {
    const { image, name, id, price } = course;
    return (
        <div className='course-container'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <button className='btn-courses'><Link className='text-link' to={`/course/${id}`}><h3>Course Details</h3></Link></button>
        </div>
    );
};

export default Course;