import React from 'react';

// Consider creating a reusable Job component

function ResumePage() {
  return (
    // Note: We transfer the className from the old <main> tag here
    <div className="page-main resume-main">
      <h1>Resume</h1>
      <section className="resume-section">
        <h2>Experience</h2>

        <div className="job">
          <h3>Software Engineer III @ Google</h3>
          <p>Bangalore, India | Jul 2022–Present</p>
          <p><em>Core ML - Keras</em></p>
          <ul>
            <li>
              Building Keras!
            </li>
          </ul>
          <p><em>Search Ads - Ads API Infrastructure</em></p>
          <ul>
            <li>
              Built core components for a Relational Online Analytical
              Processing (ROLAP) engine, including a compiler and query planner.
            </li>
            <li>
              Led schema modularization efforts, enabling better maintainability
              and flexible deployments.
            </li>
            <li>
              Improved developer tooling with Java-based libraries and
              introduced features like generated fields for dynamic queries.
            </li>
            <li>Mentored interns, guiding them through impactful projects.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Software Engineer @ Cloudera</h3>
          <p>Bangalore, India | Jan 2021–Jun 2022</p>
          <p><em>Storage Platform</em></p>
          <ul>
            <li>
              Contributed to Apache Ozone, improving its performance as a
              distributed file system.
            </li>
            <li>
              Developed upgrade paths for file optimized buckets and automated
              workflows to simulate workloads.
            </li>
            <li>
              Created a cloud cost management tool, reducing cloud spend by 20%.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <p>C++, Java, Python, Go, SQL, Compilers, Design, Quick Prototyping</p>
      </section>

      <section className="resume-section">
        <p>
          <a
            href="https://drive.google.com/file/d/1KkIeA7mmobh6APSekgiQaFMHElqzGKVC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer" // Good practice
          >
            View PDF Version
          </a>
        </p>
      </section>
    </div>
  );
}

export default ResumePage; 