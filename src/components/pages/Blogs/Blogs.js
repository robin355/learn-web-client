import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-warning'>1.what is cors?</h3>
            <p><span>Answer: </span>CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. </p>
            <h3 className='text-warning'>2.Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p><span>Answer: </span>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <h3 className='text-warning'>3. How does the private route work?</h3>
            <p><span>Answer: </span>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            <h3 className='text-warning'>4.What is Node? How does Node work?</h3>
            <p><span>Answer: </span>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

        </div>
    );
};

export default Blogs;