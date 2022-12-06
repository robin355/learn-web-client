import { React, createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
import Pdf from "react-to-pdf";
const ref = createRef();
const CourseDetails = () => {
    const courseData = useLoaderData();
    const { describe, name, image, price, id } = courseData;
    return (
        <div className='text-center'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
            </Pdf>
            <div className='details text-center' ref={ref}>
                <img src={image} alt="" />
                <h2>Course Name:{name}</h2>
                <h4>Price:{price}</h4>
                <p>{describe}</p>
                <button className='btn-courses'><Link className='text-link' to={`/courseDetails/${id}`}><h3>Get premium access</h3></Link></button>
            </div>
        </div>
    );
};

export default CourseDetails;