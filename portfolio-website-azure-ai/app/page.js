"use client";
import { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#chatbot">Chatbot</a>
            </li>
            <li>
              <a href="mailto:vermavishesh023@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-black">
            <h1>
              <small>Hi I'm</small> Vishesh Verma
            </h1>
            <p>
              Design and Developer in India pursuing B.Tech in Electronics and
              Communication Engineering.
              <span>kfnrjkgnjkrhngsernoQEJRTIOHYIOWEDioAJNJWHF.</span>
            </p>
            <div className="call-to-action">
              <a href="./VisheshVerma_2104118.pdf" className="button black">
                View Resume
              </a>
              <a href="mailto:vermavishesh023@gmail.com" className="button white">
                Contact Me
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/VISHESH0932">
                <img src="/images/github.png" alt="Github" width={48} height={48} />
              </a>
              <a href="https://www.linkedin.com/in/vishesh-verma-34609922a/">
                <img src="/images/linkedin.png" alt="Linkedin" width={48} height={48} />
              </a>
            </div>
          </div>

          <div className="hero-green">
            <img 
              src="/images/aslihero.png"
              alt="Vishesh Verma"
              className="hero-image"
              width={1200}
              height={400}
            />
          </div>
        </section>

        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="/images/html.png" alt="HTML" width={128} height={128} />
              <img src="/images/css.png" alt="CSS" width={128} height={128} />
              <img src="/images/javascript.png" alt="JavaScript" width={128} height={128} />
              <img src="/images/nodejs.png" alt="Node.js" width={128} height={128} />
              <img src="/images/react.png" alt="React" width={128} height={128} />
              <img src="/images/mongoimg.png" alt="MongoDB" width={128} height={128} />
              <img src="/images/c++.png" alt="C++" width={128} height={128} />
              <img src="/images/javaimg.png" alt="Java" width={128} height={128} />
              <img src="/images/nextjs.png" alt="Next.js" width={128} height={128} />
              <img src="/images/html.png" alt="HTML" width={128} height={128} />
              <img src="/images/css.png" alt="CSS" width={128} height={128} />
              <img src="/images/javascript.png" alt="JavaScript" width={128} height={128} />
              <img src="/images/nodejs.png" alt="Node.js" width={128} height={128} />
              <img src="/images/react.png" alt="React" width={128} height={128} />
              <img src="/images/mongoimg.png" alt="MongoDB" width={128} height={128} />
              <img src="/images/c++.png" alt="C++" width={128} height={128} />
              <img src="/images/javaimg.png" alt="Java" width={128} height={128} />
              <img src="/images/nextjs.png" alt="Next.js" width={128} height={128} />
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi I'm Vishesh...ifizskjgdklmdsklnrsiugnseigsiugbiugbsiusiugbsiufbiubveiutbeiubviubes89fbe8sbfdsif89ew8bf8bf!
              </p>
              <p>
                Hi I'm Vishesh...ifizskjgdklmdsklnrsiugnseigsiugbiugbsiusiugbsiufbiubveiutbeiubviubes89fbe8sbfdsif89ew8bf8bf!
              </p>
            </div>
          </div>
        </section>

        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img
                    src="/images/workplace1.png"
                    alt="Workplace 1"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>Workplace - 1</figcaption>
                </div>
              </figure>
              <h3>Trainee</h3>
              <div>Feb 2022 - May 2022</div>
              <p>This is an example description for a workplace.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="/images/workplace2.png"
                    alt="Workplace 2"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>Workplace - 2</figcaption>
                </div>
              </figure>
              <h3>Trainee</h3>
              <div>June 2023 - July 2023</div>
              <p>This is an example description for a workplace.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="/images/Workplace3 (1).png"
                    alt="Workplace 3"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>Workplace - 3</figcaption>
                </div>
              </figure>
              <h3>Intern</h3>
              <div>May 2024 - July 2024</div>
              <p>This is an example description for a workplace.</p>
            </article>
          </div>
        </section>

        <section id="projects" className="bento container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item"></a>
            <a href="#" className="bento-item"></a>
            <a href="#" className="bento-item"></a>
            <a href="#" className="bento-item"></a>
          </div>
        </section>

        <section id="chatbot" className="chatbot container">
          <h2>
            <small>Talk to me</small>
            Chatbot
          </h2>
          <div className="chatbot-black">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>
                I've put together a chatbot here which knows all my skills, work
                experience and has a copy of my Resume. You can use it to ask
                questions about me to get a better idea of who I am and what
                I've done.
              </p>
              <p>
                You can also download my resume here if you want to take a look
                at it. I'm currently looking for new opportunities so if you
                have a project you think I'd be a good fit for, please get in
                touch!
              </p>
              <a href="./VisheshVerma_2104118.pdf" className="button black">
                Download Resume
              </a>
            </div>
            <div className="chat-box">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/tStuZY-6EHWiVZSrQrOdB"
                width="100%"
                style={{ height: "100%", minHeight: "700px" }}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <h2>
            <small>Get in Touch</small>
            Contact Me
          </h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="button black">Send</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Home;