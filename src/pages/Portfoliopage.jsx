import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card';

const PortfolioPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ellimckinley/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div id="portfolio" className="container-fluid mt-5">
      <h1 className="text-center">Portfolio</h1>
      <br />
      <h2 className="text-center">Deployed Projects</h2>
      <br></br>
      <div className="row justify-content-center  ">
        <Card 
          title="SwatchSaver"
          description="Interactive color palette generator using HTML, JavaScript, and TailwindCSS"
          githubLink="https://github.com/ellimckinley/SwatchSaver"
          websiteLink="https://ellimckinley.github.io/SwatchSaver/"
        />
        <Card
          title="My First Portfolio"
          description="Initial portfolio created using HTML, CSS, and JavaScript"
          githubLinklink="https://github.com/ellimckinley/portfolio"
          websiteLink="https://ellimckinley.github.io/portfolio/"
        />
        <Card
          title="Employee Tracker"
          description="Command line application using JavaScript, Node.js, PostgreSQL, Inquirer"
          githubLinklink="https://github.com/ellimckinley/emplolyee-tracker"
          websiteLink=""
        />
        <Card
          title="Vehicle Builder"
          description="Initial portfolio created using HTML, CSS, and JavaScript"
          githubLinklink="https://github.com/ellimckinley/vehicle-builder"
          websiteLink=""
        />
        <Card
          title="Weather Dashboard"
          description="IN PROGRESS: 5-Day weather forecast using HTML, CSS, JavaScript, TypeScript, and API's"
          githubLinklink="https://github.com/ellimckinley/weather-dashboard"
          websiteLink="https://weather-dashboard-vm5a.onrender.com"
        />
        <Card
          title="Project 6"
          description="COMING SOON"
          githubLinklink=""
          websiteLink=""
        />
      </div>
    </div>
  );
};

export default PortfolioPage;