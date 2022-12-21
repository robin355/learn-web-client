import { createBrowserRouter } from 'react-router-dom'
import AccessDetails from '../components/AccessDetails/AccessDetails'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Blogs from '../components/pages/Blogs/Blogs'
import Courses from '../components/pages/Courses/Courses'
import ErrorPage from '../components/pages/ErrorPage/ErrorPage'
import Faq from '../components/pages/Faq/Faq'
import Login from '../components/pages/Login/Login'
import Register from '../components/pages/Resgister/Register'
import Home from '../Home/Home/Home'
import Main from '../Layout/Main'
import PrivateRouter from '../PrivateRouter/PrivateRouter'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://learn-web-server-zeta.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/courseDetails/:id',
                loader: ({ params }) => fetch(`https://learn-web-server-zeta.vercel.app/courseDetails/${params.id}`),
                element: <PrivateRouter><AccessDetails></AccessDetails></PrivateRouter>
            }

        ]
    }
])