import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey There 👋</h1>
    <p>Hi, I'm <b>Amandeep Singh Aneja</b>, a Senior Lead - QAD Functional Consultant with expertise in ERP systems and software engineering, specializing in QAD modules, cloud computing, and custom software solutions.</p>
    <p>Check out my skills, experience, and projects below!</p>
    
    <section>
      <h2>About Me</h2>
      <p>With over 14 years of experience in QAD and ERP systems, I specialize in both technical and functional consulting, system integrations, and delivering custom solutions to optimize business processes.</p>
      <Link to="/about">Learn more about me</Link>
    </section>

    <section>
      <h2>Skills & Expertise</h2>
      <ul>
        <li>QAD Techno-Functional Consulting</li>
        <li>ERP System Migration and Customization</li>
        <li>OpenEdge Progress 4GL</li>
        <li>Java Programming, .NET C# & SQL</li>
        <li>Project Management and Agile Practices</li>
      </ul>
      <Link to="/skills">See more skills</Link>
    </section>

    <section>
      <h2>Experience</h2>
      <p>I've worked with companies like QAD, Adient, G-TEKT, and Medline Industries, helping them implement, optimize, and integrate ERP systems across different industries.</p>
      <Link to="/experience">View my experience</Link>
    </section>

    <section>
      <h2>Projects</h2>
      <p>Explore some of the impactful projects I've contributed to, including ERP system migrations, EDI integrations, and custom software development solutions.</p>
      <Link to="/projects">See my projects</Link>
    </section>

    <section>
      <h2>Contact</h2>
      <p>You can reach out to me on <a href="https://www.linkedin.com/in/amansaneja/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </section>
  </Layout>
)

export default IndexPage
