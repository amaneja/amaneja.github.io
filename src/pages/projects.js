import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>My Projects</h1>
    <p>Here are some key projects I've worked on throughout my career:</p>

    {/* JK Tech Projects */}
    <h2>JK Tech (Nevro Corp, US)</h2>
    <h3>QAD 2022 EE Migration from QAD 2016 EE</h3>
    <p>
      Conducted UAT tests with business teams, ensured seamless migration of
      QAD Financials modules, and provided peer guidance, fostering team growth.
    </p>
    <h3>YayPay Implementation</h3>
    <p>
      Mapped QAD financial transactions to YayPay screens, learned YayPay APIs,
      and conducted UAT to ensure successful go-live.
    </p>
    <h3>Siemens MES Integration with QAD</h3>
    <p>
      Coordinated integration between Siemens MES and QAD, designed inbound and
      outbound data flows, and complied with GxP standards.
    </p>

    {/* G-TEKT Projects */}
    <h2>G-TEKT Europe Manufacturing Ltd.</h2>
    <h3>Web Application for Logistics and Purchasing</h3>
    <p>
      Designed a web-based app using WebSpeed and Progress 4GL to automate the
      planning process, reducing manual effort.
    </p>
    <h3>EDI Integrations and Label Printing Solutions</h3>
    <p>
      Developed EDI integrations for customers (e.g., JLR, BMW, Tesla) and
      label printing solutions using NiceLabel software.
    </p>

    {/* Medline Industries Projects */}
    <h2>Medline Industries</h2>
    <h3>Automating Incoming EDI for JPMC</h3>
    <p>
      Designed and implemented modular programs for EDI routing to specific
      European countries, ensuring a seamless rollout.
    </p>

    {/* Adient Projects */}
    <h2>Adient</h2>
    <h3>Japan FA Tax Report</h3>
    <p>
      Delivered solutions meeting Japan's legal requirements for tax reporting,
      optimizing the reporting process.
    </p>
    <h3>Adient India GST E-Invoicing Project</h3>
    <p>
      Implemented GST-compliant e-invoicing solutions for India.
    </p>
    <h3>System Migration to Azure DevOps</h3>
    <p>
      Led the migration to Azure DevOps, improving development lifecycle
      management and collaboration.
    </p>
    <h3>Adient India EE Migration</h3>
    <p>
      Worked on customizations and design during migration from eB2 to EE,
      ensuring timely go-live.
    </p>

    {/* Blue Chip Computer Consultants Projects */}
    <h2>Blue Chip Computer Consultants</h2>
    <h3>Adient Plant Operations</h3>
    <p>
      Developed WMS, MFG, FIN, and EE solutions using Progress 4GL and QAD’s
      Reporting Framework, supporting continuous plant operations.
    </p>
    <h3>Adient China Plant EE Migration</h3>
    <p>
      Supported requirement gathering, development, and go-live for Adient
      China's migration to EE.
    </p>

    {/* QAD Inc. Projects */}
    <h2>QAD Inc.</h2>
    <h3>YanFeng Global Automotive</h3>
    <p>
      Developed custom EF solutions using Progress 4GL and mentored offshore
      team members.
    </p>
    <h3>SAFT Batteries</h3>
    <p>
      Automated Cross Entity Postings in QAD EF and streamlined journal entry
      processes.
    </p>
    <h3>QAD Project Vector</h3>
    <p>
      Developed .NET screens for multi-record processing using Infragistics
      controls for enhanced user experience.
    </p>
    <h3>Bundaberg Brewed Drinks</h3>
    <p>
      Created SQL-based solutions for QAD Demand Management, streamlining bulk
      item replacements.
    </p>
  </Layout>
);

export default ProjectsPage;
