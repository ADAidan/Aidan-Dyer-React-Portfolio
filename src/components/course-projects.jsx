import { ProjectCard } from './cards';
import Mail from '/images/mail-project.png';
import Commerce from '/images/commerce-project.png';
import Wiki from '/images/wiki-clone-project.png';
import Harvard from '/images/harvard_logo.jpg';
import './projects.scss';

export default function CourseProjects() {
    return (
        <div className="course-projects-container main-container">
            <h1 className='course-projects'>Course Projects</h1>
            <ProjectCard 
                image={Mail}
                title='Front-end for an email website'
                description='As a course project for CS50W, I was tasked with creating the front-end of a Django web application. I used Javascript to dynamically load mail from a RESTful API on the Python server. To complete the project, I had to learn how to use the Javascript fetch method to get data from, and send new data to the API. I learned how to use Javascript to fetch data from an api and display that data on a dynamically generated website. I only worked on the Javascript in this project, as the rest of the project was included with the assignment.'
            />
            <ProjectCard 
                image={Commerce}
                title='Back-end for a commerce website'
                description="For a course project in CS50W, I was tasked with creating the back-end for a Django application. I used Python to create Django views that were called when urls were visited. I used HTML and CSS to create a front end for the website which mostly consisted of listings and the details of the listing when clicked. I used Django's Object Relational Mapping to save listing information and user data to and access data from a SQL database. For this project I had to learn how to use Django to interact with the front-end and back-end of a web application. The only thing given to me for the project was the start of a django application and a navbar."
            />
            <ProjectCard 
                image={Wiki}
                title='Wikipedia clone'
                description='This was the first project in CS50W where I was tasked with creating both the front-end and back-end of a Django application. The base code was a Django project and a website with a few wiki entries already made. I added more entries and made it so that any user could create their own and edit it. I also added a function that brought you to a random page. To do this project I had to learn how to create a django view and how to call them when a url is visted. I also learned how to dynamically create HTML files.'
            />
            <ProjectCard 
                image={Harvard}
                title='Google Front-end Clone'
                description='This was the first project in CS50W, I was tasked with creating a clone of Googles Front-end. The website is a form that leads to googles website with a query of the users input. It can also do advanced searches and image search.'
            />
        </div>
    )
}