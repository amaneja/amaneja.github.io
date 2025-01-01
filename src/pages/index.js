import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to My Portfolio</h1>
    <p>Hi, I'm Amandeep Singh Aneja, a Techno-Functional Consultant with expertise in ERP systems and software engineering.</p>
    <p>Check out my skills, experience, and projects below!</p>
    
    <section>
      <h2>About Me</h2>
      <p>With 14+ years of experience in QAD and ERP systems, I specialize in functional consulting, system integrations, and custom solutions.</p>
      <Link to="/about">Learn more about me</Link>
    </section>

    <section>
      <h2>Skills & Expertise</h2>
      <ul>
        <li>QAD Techno-Functional Consulting</li>
        <li>Cloud Computing</li>
        <li>Java Programming</li>
        <li>SQL, .NET, C#</li>
        <li>OpenEdge Progress 4GL</li>
      </ul>
      <Link to="/skills">See more skills</Link>
    </section>

    <section>
      <h2>Experience</h2>
      <p>I've worked with several companies like Adient, G-TEKT, and Nevro, helping them optimize their ERP systems.</p>
      <Link to="/experience">View my experience</Link>
    </section>

    <section>
      <h2>Projects</h2>
      <p>Explore some of the innovative solutions I've built and contributed to in my career.</p>
      <Link to="/projects">See my projects</Link>
    </section>

    <section>
      <h2>Contact</h2>
      <p>You can reach out to me on <a href="https://www.linkedin.com/in/amansaneja/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </section>
  </Layout>
)

export default IndexPage
