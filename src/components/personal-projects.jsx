import { ProjectCard } from "./cards";
import WeatherWebsite from "/images/weather-website.png";
import ShoppingCart from "/images/shopping-cart-desktop.png";
import ChessWebsite from "/images/react-chess.png";
import ReactNotes from "/images/notes-project.png";
import StocksDashboard from "/images/stocks-dashboard.png";
import JavaScriptCalculator from "/images/calculator-project.png";
import Concord from "/images/concord-message-page.png";
import "./projects.scss";

export default function PersonalProjects() {
  return (
    <div className="personal-projects-container main-container">
      <h1 className="featured-projects">Featured Projects</h1>
      <ProjectCard
        image={Concord}
        title="Concord"
        description="
        Concord is a messaging app built using React, Node.js, Express, MongoDB 
        handles real-time updates with Socket.io and use authentication with JWT 
        and password hashing with bcrypt. As the sole developer of the project 
        I designed the website, created the backend and frontend and 
        implemented the database with Mongoose. Users can create an account,
        add other users and create chats with them. 
        "
        completionDate="June 2024"
        url="https://github.com/ADAidan/react-messaging-app/"
        demoUrl="https://concord-messaging.netlify.app/"
      />
      <ProjectCard
        image={ShoppingCart}
        title="React Shopping Cart"
        description="
        This project is an e-commerce website built using React.
        It showcases modern Web Development practices such as
        React Hooks, React Router and functional components. 
        The website is mobile-friendly and provides a seamless
        user experience.
        "
        completionDate="July 2023"
        url="https://github.com/ADAidan/React-Shopping-Cart"
        demoUrl="https://react-shoppingcart-demo.netlify.app/"
      />
      <ProjectCard
        image={WeatherWebsite}
        title="Dynamic Weather Application"
        description="
        Built with React, this interactive weather application 
        leverages the OpenWeather API and MapBox Search Box to 
        provide real-time weather data. My focus was on 
        practicing API data fetching and applying design 
        principles for the first time. This project showcases 
        my ability to combine design with efficient 
        functionality, offering a seamless user experience 
        across devices.
        "
        completionDate="August 2023"
        url="https://github.com/ADAidan/React-Weather-App"
        demoUrl="https://react-weatherapp-demo.netlify.app/"
      />
      <ProjectCard
        image={ChessWebsite}
        title="Full-stack Chess Website"
        description="
        This is a full-stack application built 
        using React and AWS, designed to provide both online 
        and offline play. Integrating AWS Amplify 
        and AWS Cognito for user authentication, 
        it showcases my ability to handle intricate back-end 
        processes. The project leverages chessboardjsx and 
        Chess.js for the chessboard interface and 
        game logic, respectively. An ambitious step in my 
        development journey, this project highlights my skills 
        in building scalable applications, with upcoming 
        features including online play against others, 
        and user statistics management via AWS databases.
        "
        url="/"
      />
      <ProjectCard
        image={ReactNotes}
        title="Note Taking Website"
        description="
        One of the first websites I created using React.
        This project was good pratice for learning React State management.
        "
        url="/"
      />
      <ProjectCard
        image={StocksDashboard}
        title="Stock Market Dashboard"
        description="I developed a dynamic stock market visualization website using HTML, CSS, Javascript, Bootstrap and Alpha Vantage API. The website allows users to search for real-time and historical stock market data using the AnyChart Javascript library. The site is mobile-friendly and provides a seamless user experience. As the sole developer of this project I designed the website, used fetch to get the data from the API and javascript to parse the JSON and make the website dynamic. I did not run into any major problems during development although I had to learn how to use data visualization libraries."
        url="https://github.com/ADAidan/StockTracker"
      />
      <ProjectCard
        image={JavaScriptCalculator}
        title="JavaScript Calculator"
        description="I developed a calculator using Javascript, HTML, CSS and Bootstrap. I used Javascript to make the buttons on the calculator update the display and send the equation to a function to calculate it. I used the Javascript library Mathjs to perform the calulations then updated the display with the answer. The buttons on the calculator can input a number or symbol into the display, clear the display or calculate the displayed equation. I was the sole developer so I created the buttons and desgined the website. I did not run into any major problems during developement."
        url="https://github.com/user/repository"
      />
    </div>
  );
}
