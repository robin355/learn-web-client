import { React, useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        {
                            courses.map(course => <p key={course.id}>
                                <Link to={`/course/${course.id}`}>{course.name}</Link>
                            </p>)
                        }

                    </Col>
                    <Col lg='9'>
                        <div className='courses-container'>
                            {
                                courses.map(course => <Course course={course} key={course.id}></Course>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;