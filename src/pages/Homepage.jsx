import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePhoto from '../assets/images/headshot.jpeg'; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div className="container mt-5 bg-primary-custom">
      <h1 className="">Hi, I'm Elli!</h1>
      <section className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src={profilePhoto} alt="Profile" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
        </div>
        <div className="col-md-8 text-left">
          <br></br>
          <strong style={{ textAlign: 'left', textJustify: 'inter-word' }}>Some things about me... </strong>
          <br></br>
          <br></br>
          <p style={{ textAlign: 'left', textJustify: 'inter-word' }}>
            I get things done. With a decade of experience in guest services, operations, commerce, 
            and product, I know how to streamline processes, fix what’s broken, and turn good systems 
            into great ones. I don’t just follow the rules—I challenge assumptions, ask the hard 
            questions, and rethink the game from the ground up.
          </p>
          <p style={{ textAlign: 'left', textJustify: 'inter-word' }}>
            Strategy? Nailed it. Problem-solving? 
            That’s just a warm-up. Technical documentation, test plans, data analysis, issue reporting, 
            training, internal support? Check, check, and check.
          </p>
          <p style={{ textAlign: 'left', textJustify: 'inter-word' }}>
            And because “good enough” isn’t in my 
            vocabulary, I dove headfirst into a software bootcamp to supercharge my technical skills. 
            Why? Because sharper skills mean bigger ideas, and bigger ideas mean game-changing solutions.
          </p>
          <p style={{ textAlign: 'left', textJustify: 'inter-word' }}>
            This portfolio was built during that journey—proof that learning, growing, and pushing 
            boundaries never stop. 🚀🔥
          </p>
          <p style={{ textAlign: 'left', textJustify: 'inter-word' }}>
            When I’m not deep in code or refining processes, 
            you’ll find me spending all my time with my favorite fluffer pup, Juniper, rafting the local 
            rivers, camping with family and friends, and cooking in my cabin on the creek. My kitchen 
            is my oasis, and cooking is my meditation—where flavors, creativity, and a little bit of 
            chaos come together in the best way.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;