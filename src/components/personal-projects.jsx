import { ProjectCard } from './cards';
import WeatherWebsite from '/images/weather-website.png';
import ShoppingCart from '/images/shopping-cart-project.png';
import ChessWebsite from '/images/react-chess.png';
import ReactNotes from '/images/notes-project.png';
import StocksDashboard from '/images/stocks-dashboard.png';
import JavaScriptCalculator from '/images/calculator-project.png';
import './projects.css';

export default function PersonalProjects() {
    return (
        <div className='personal-projects-container main-container'>
            <h1 className='featured-projects'>Featured Projects</h1>
            <ProjectCard 
                image={WeatherWebsite}
                title='Weather Website'
                description='A website that displays the weather of a given location.'
                url='/'
            />
            <ProjectCard 
                image={ShoppingCart}
                title='Shopping Cart'
                description='A shopping cart that allows users to add items to a cart.'
                url='/'
            />
            <h1 className='other-projects'>Other Projects</h1>
            <ProjectCard 
                image={ChessWebsite}
                title='Chess Website'
                description='A website that allows users to play chess against a computer.'
                url='/'
            />
            <ProjectCard 
                image={ReactNotes}
                title='Note Taking Website'
                description='A website that allows users to take notes.'
                url='/'
            />
            <ProjectCard 
                image={StocksDashboard}
                title='Stock Market Dashboard'
                description='I developed a dynamic stock market visualization website using HTML, CSS, Javascript, Bootstrap and Alpha Vantage API. The website allows users to search for real-time and historical stock market data using the AnyChart Javascript library. The site is mobile-friendly and provides a seamless user experience. As the sole developer of this project I designed the website, used fetch to get the data from the API and javascript to parse the JSON and make the website dynamic. I did not run into any major problems during development although I had to learn how to use data visualization libraries.'
                url='https://github.com/ADAidan/StockTracker'
            />
            <ProjectCard 
                image={JavaScriptCalculator}
                title='JavaScript Calculator'
                description='I developed a calculator using Javascript, HTML, CSS and Bootstrap. I used Javascript to make the buttons on the calculator update the display and send the equation to a function to calculate it. I used the Javascript library Mathjs to perform the calulations then updated the display with the answer. The buttons on the calculator can input a number or symbol into the display, clear the display or calculate the displayed equation. I was the sole developer so I created the buttons and desgined the website. I did not run into any major problems during developement.'
                url='https://github.com/user/repository'
            />
        </div>
    );
}