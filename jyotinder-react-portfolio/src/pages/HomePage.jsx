import React, { useState, useEffect } from 'react';

// Consider creating reusable components for LinkItem and Project

function HomePage() {
  // State for animations
  const [animateIntro, setAnimateIntro] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);
  const [animateProjects, setAnimateProjects] = useState(false);

  // Effect to trigger animations sequentially after mount
  useEffect(() => {
    const introTimer = setTimeout(() => setAnimateIntro(true), 100); // Intro first
    const linksTimer = setTimeout(() => setAnimateLinks(true), 200); // Links shortly after
    const projectsTimer = setTimeout(() => setAnimateProjects(true), 300); // Projects after links

    // Cleanup timers on unmount
    return () => {
      clearTimeout(introTimer);
      clearTimeout(linksTimer);
      clearTimeout(projectsTimer);
    };
  }, []);

  return (
    <>
      <section className={`intro ${animateIntro ? 'animate' : ''}`} aria-labelledby="intro-heading">
        {/* Note: Paths starting with / access the public folder */}
        <img
          src="/images/profile.png"
          alt="Profile picture of Jyotinder"
          className="profile-pic"
        />
        <div className="description">
          <h1 id="intro-heading">Hey, I'm Jyotinder 👋</h1>
          <p>
            I'm a software engineer interested in low-level software systems and
            largely work with C++, Go, and Python.<br />
            I'm currently working on Keras to make machine learning easier for
            humans. Previously built query engines @ Google Ads.
          </p>
        </div>
      </section>

      <section className={`links-section ${animateLinks ? 'animate' : ''}`} aria-labelledby="links-heading">
        <h2 id="links-heading">Links</h2>
        <div className="links-container">
          {/* Using standard <a> tags for external links */}
          <a
            href="https://www.youtube.com/c/JyotinderSingh"
            target="_blank"
            rel="noopener noreferrer" // Good practice for target="_blank"
            className="link-item link-youtube"
          >
            YouTube
          </a>
          <a
            href="https://jyotinder.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item link-substack"
          >
            Newsletter
          </a>
          <a
            href="https://twitter.com/Jyotinder_Singh"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item link-twitter"
          >
            Twitter
          </a>
          <a
            href="https://github.com/JyotinderSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item link-github"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jyotinder-singh/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item link-linkedin"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className={`projects-section ${animateProjects ? 'animate' : ''}`} aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        {/* We should refactor these into a Project component */}
        <article className="project" aria-labelledby="project1-heading">
          <h3 id="project1-heading">DiceDB</h3>
          <p>
            DiceDB is an open source, redis-compliant, reactive, scalable,
            highly-available, unified cache optimized for modern hardware.
          </p>
          <a href="https://github.com/DiceDB/dice" target="_blank" rel="noopener noreferrer">
            View on GitHub (7700+ 🌟)
          </a>
        </article>

        <article className="project" aria-labelledby="project2-heading">
          <h3 id="project2-heading">Apache Ozone</h3>
          <p>
            Scalable, reliable, distributed storage system optimized for data
            analytics and object store workloads.
          </p>
          <a href="https://github.com/apache/ozone" target="_blank" rel="noopener noreferrer">
            View on GitHub (800+ 🌟)
          </a>
        </article>

        <article className="project" aria-labelledby="project3-heading">
          <h3 id="project3-heading">dropdb</h3>
          <p>
            A fully-featured database written in Go, complete with transaction
            management, efficient query planning, disk optimizations, and even a
            SQL driver.
          </p>
          <a href="https://github.com/JyotinderSingh/dropdb" target="_blank" rel="noopener noreferrer">
            View on GitHub (35+ 🌟)
          </a>
        </article>

        <article className="project" aria-labelledby="project4-heading">
          <h3 id="project4-heading">goLSM</h3>
          <p>An LSM Tree based Key-Value storage engine written in Go</p>
          <a href="https://github.com/JyotinderSingh/goLSM" target="_blank" rel="noopener noreferrer">
            View on GitHub (30+ 🌟)
          </a>
        </article>

        <article className="project" aria-labelledby="project5-heading">
          <h3 id="project5-heading">Tok - Programming Language</h3>
          <p>
            A really fast interpreter for a language called Tok which runs on a
            handcrafted Virtual Machine with automatic Garbage Collection,
            written in C.
          </p>
          {/* Corrected link for Tok */}
          <a href="https://github.com/JyotinderSingh/tok" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </article>
      </section>
    </>
  );
}

export default HomePage; 