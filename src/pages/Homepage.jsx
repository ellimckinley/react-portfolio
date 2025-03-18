import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePhoto from '../assets/images/headshot.jpeg'; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div id="home" className="container mt-5 bg-primary-custom">
      <h1 className="text-start">Hi, I'm Elli!</h1>
      <section className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src={profilePhoto} alt="Profile" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
        </div>
        <div className="col-md-8">
          <br />
          <strong className="d-block text-start">Some things about me... </strong>
          <br />
          <br />
          <p className="text-start">
          I like making things work better. With a decade of experience in guest services, operations, commerce, and product, I’ve learned how to streamline processes, solve problems, and turn good systems into great ones. I don’t just follow the usual playbook—I ask questions, challenge assumptions, and look for smarter ways to get things done.
          </p>
          <p className="text-start">
          I’ve tackled everything from strategy and problem-solving to technical documentation, test plans, data analysis, issue reporting, training, and internal support. And because I’m always looking to grow, I jumped into a software bootcamp to sharpen my technical skills—because better skills lead to bigger ideas, and bigger ideas drive real change.
          </p>
          <p className="text-start">
            This portfolio was built during that journey—proof that learning, growing, and pushing 
            boundaries never stop. 🚀🔥
          </p>
          <p className="text-start">
          When I’m not coding or refining processes, you’ll find me hanging out with my favorite fluffer pup, Juniper, rafting local rivers, camping with family and friends, or cooking in my cabin on the creek. My kitchen is my happy place—where creativity, flavors, and a little bit of chaos come together in the best way.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;