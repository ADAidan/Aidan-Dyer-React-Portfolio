import { 
    createBrowserRouter, 
    RouterProvider 
} from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import HomePage from './components/home-page';
import PersonalProjects from './components/personal-projects';
import CourseProjects from './components/course-projects';
import Certifications from './components/certifications';
import ContactInfo from './components/contact-info';

function Router() {
    const Router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                { index: true, element: <HomePage/> },
                { path: '/projects', element: <PersonalProjects/>},
                { path: '/course-projects', element: <CourseProjects/>},
                { path: '/certifications', element: <Certifications/>},
                { path: '/contact', element: <ContactInfo/>},
            ],
            errorElement: <ErrorPage/>,
        },
    ]);

    return <RouterProvider router={Router}/>;
}

export default Router;