import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://learn-web-server-zeta.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='lg:flex gap-10'>
            <div className='ml-6 mt-6 text-center text-2xl font-bold'>
                <h4 className='text-3xl mb-5'> Courses</h4>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
            <div className='grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 mt-6'>
                {
                    courses.map(course => <Course course={course} key={course.id}></Course>)
                }
            </div>

        </div>
    );
};

export default Courses;