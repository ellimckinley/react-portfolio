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
      <div className="row justify-content-center ">
        <Card
          title="SwatchSaver"
          description="Interactive color palette generator"
          link="https://ellimckinley.github.io/SwatchSaver/"
        />
        <Card
          title="My First Portfolio"
          description="Initial portfolio created using HTML, CSS, and JavaScript"
          link="https://ellimckinley.github.io/portfolio/"
        />
                <Card
          title="Project 3"
          description="Initial portfolio created using HTML, CSS, and JavaScript"
          link="https://ellimckinley.github.io/portfolio/"
        />
                <Card
          title="Project 4"
          description="Initial portfolio created using HTML, CSS, and JavaScript"
          link="https://ellimckinley.github.io/portfolio/"
        />
                <Card
          title="Project 5"
          description="Initial portfolio created using HTML, CSS, and JavaScript"
          link="https://ellimckinley.github.io/portfolio/"
        />
                <Card
          title="Project 6"
          description="Initial portfolio created using HTML, CSS, and JavaScript"
          link="https://ellimckinley.github.io/portfolio/"
        />
      </div>
      {/* <h2 className="text-center">My GitHub Projects</h2>
      <div className="row justify-content-center ">
        <ul className="list-group w-50 ">
          {repos.map(repo => (
            <li key={repo.id} className="list-group-item bg-secondary-custom text-dark-custom">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}>
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default PortfolioPage;