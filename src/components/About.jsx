import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Ian Burke,</span> a Software
              Engineer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            I am an accomplished software engineer with over five years 
            of experience at General Motors, where I played a key role in 
            modernizing mainframe infrastructure and driving cost savings 
            of up to $15 million. My expertise spans technologies such as 
            Java, JavaScript, Python, Spring Boot, React, and mainframe 
            systems like COBOL, PL/I, JCL, DB2, and IMS. I also have 
            hands-on experience with DevOps tools like Git and Azure 
            DevOps, as well as CI/CD pipelines.
     
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            Known for strong problem-solving and attention to detail, 
            I excel in Agile environments and enjoy collaborating with 
            cross-functional teams. I am passionate about continuous 
            learning, having led automation and AI-driven projects 
            using tools like GitHub Copilot and Meta Llama. I also 
            mentor junior developers, promoting a culture of growth 
            and knowledge sharing.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            Outside of my professional life, I play sports such as 
            football and hurling with my local GAA club. I enjoy playing the 
            guitar and have a deep love for music. I also love watching movies 
            at the cinema. My blend of technical expertise, leadership, and dedication to both personal 
            and team growth makes me a valuable asset in any dynamic and 
            forward-thinking environment.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4" style={{ marginTop: "100px" }}>
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Ian Burke
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:ianburkework@yahoo.com">ianburkework@yahoo.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Nationality:</span>Irish
                </li>
                <li>
                  <span className="fw-600 me-2">Languages:</span>English
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>30
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Claregalway,
                  Co Galway, Ireland
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/*}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>10</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>650</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div>
        {*/}
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
