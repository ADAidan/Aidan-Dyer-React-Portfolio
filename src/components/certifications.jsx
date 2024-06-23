import { CertificationCard } from "./cards";
import HarvardLogo from '/images/harvard_logo.jpg';

export default function Certifications() {
    return (
        <div className="certifications-container">
            <h1>Certifications</h1>
            <CertificationCard 
                image={HarvardLogo}
                title='Harvard University CS50x Certificate'
                description="CS50x is Harvard University's introduction to the intellectual enterprises of computer science and the art of programming. This course first teaches the fundamentals of programming in C, then transitions into Python. Additionally, the course covers HTML, CSS, JavaScript and SQL. Through this course I have learned about concepts such as algorithms, data structures and debugging. Overall, this course serves as a solid foundation for further study in the field."
                completionTime='Completed Nov 2022'
                url='https://certificates.cs50.io/0dad91a1-e220-41cb-9e49-5f478c66afc0.pdf?size=letter'
            />
        </div>
    )
}