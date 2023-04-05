import React from "react";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
    
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
           Lokesh
              <span class="text-success"> A</span>
            </h1>
            {/* <div class="subheading mb-5">
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
              <a href="mailto:name@email.com">name@email.com</a>
            </div> */}
            <p class="lead mb-5">
            Currently pursing BTech IT in Sri Sairam Engineering College.<br/>
            Active Learner and Hard Working enthusiast who is interested in expanding technical knowledge.<br/>
            Interested in Full Stack Web Development.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/lokesh-a-b37233206">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/L0kesh16">
                <i class="fab fa-github"></i>
              </a>
              {/* <a class="social-icon" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a> */}
            </div>
          </div>
        </section>
        <hr class="m-0" />
          
      </div>
    </>
  );
};

export default Home;
