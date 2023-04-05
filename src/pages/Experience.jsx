import React from "react";
const Experience = () => {
  return (
    <>
      <div class="container-fluid p-0">     
        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5 text-success">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">OG Software Solution</h3>
                <p>
                9 days Internship program on Resume Portfolio Web Application using React Framework
                </p>
              </div>
              <div class="flex-shrink-0">
                {/* <span class="text-success">September 2022 </span> */}
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">SKillsDa </h3>
                <p>
                15 days Internship On Web Developent (PHP & MYSQL)
                </p>
              </div>
              <div class="flex-shrink-0">
                {/* <span class="text-success">March 2023 </span> */}
              </div>
            </div>

          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;
