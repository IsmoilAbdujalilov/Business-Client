import React, { useState } from "react";

const Chance = () => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const data = [
    {
      id: 1,
      title: "Business Analysis Solutions (Diagnosis)",
      text: "Assessing the current state of the business, identifying areas for improvement, and developing strategies to drive growth and success. Conducting in-depth analysis of a company's performance, processes, and market dynamics to identify areas of improvement and growth opportunities.",
    },
    {
      id: 2,
      title: "Risk management",
      text: "Risk management is the identification, assessment, and prioritization of risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability and impact of unforeseen events. It aims to proactively mitigate potential risks to an organization's objectives, assets, and stakeholders.",
    },
    {
      id: 3,
      title: "Governance management",
      text: "Governance management refers to the system and processes by which organizations are directed, controlled, and held accountable. It encompasses the structures, policies, and procedures put in place to ensure that an organization operates efficiently, ethically, and in alignment with its strategic goals and regulatory requirements.",
    },
    {
      id: 4,
      title: "Organizational Development",
      text: "Supporting organizations in improving their structures, culture, and capabilities to enhance overall performance and competitiveness.",
    },
    {
      id: 5,
      title: "Market Research and Analysis",
      text: "Conducting research on industry trends, market demands, and consumer behavior to help companies make informed strategic decisions.",
    },
    {
      id: 6,
      title: "HR Strategy",
      text: "Human Resource (HR) strategy, also referred to as human capital advisory or HRM consulting, we advise about implementation activities related to the management of an organisation’s human capital and the HR function. The scope of services range from overarching work on talent management, cadre management, human capital strategy, to the design and deployment of a compensation & benefits framework, down to the transformation of the HR function. ",
    },
    {
      id: 7,
      title: "Business Process Reengineering (BPR)",
      text: "Involves analyzing and redesigning workflows and processes within an organization to increase efficiency, eliminate bottlenecks, and improve performance.",
    },
    {
      id: 8,
      title: "Performance Management Services",
      text: "Provides tools and strategies to monitor, evaluate, and enhance the performance of individuals, teams, and the organization as a whole by utilizing SMART and relevant KPIs.",
    },
    {
      id: 9,
      title: "Strategic Evaluation Services",
      text: "Focuses on evaluating the company's current strategy, market position, and competitive landscape to identify strengths, weaknesses, opportunities, and threats. Providing assessments and evaluations of organizational strategies, structures, operations, and performances to ensure they align with business goals.",
    },
    {
      id: 10,
      title: "Strategic Planning:",
      text: "Collaborating with leadership to develop long-term strategic plans that align with the company's mission, vision, and objectives.",
    },
    {
      id: 11,
      title: "Problem-Solving Consultation (Troubleshooting)",
      text: "Offers expertise in identifying, analyzing, and resolving complex business problems to help clients achieve their goals effectively. Offering strategic problem-solving techniques and frameworks to address challenges, optimize operations, and drive innovation within the organization.",
    },
    {
      id: 12,
      title: "Change Management Consulting",
      text: "Assists organizations in planning, implementing, and managing change initiatives to ensure successful transitions and sustainable results. Assisting organizations in managing transitions, implementing new processes, and ensuring smooth change adoption within the company. ",
    },
    {
      id: 13,
      title: "Digital Strategy",
      text: "Digital strategy involves leveraging digital technologies, channels, and platforms to achieve business objectives and enhance the overall performance of an organization. It encompasses developing a roadmap for how a company will use digital resources to generate value, improve customer experiences, increase operational efficiency, and stay competitive in the digital age.",
    },
    {
      id: 14,
      title: "Regional and International Economic Development Services",
      text: "Regional and international economic development services focus on fostering economic growth, sustainable development, and increased prosperity within specific regions or across international borders. These services typically involve collaboration between governments, businesses, and organizations to design and implement strategies that promote investment, trade, infrastructure development, job creation, and overall economic well-being on a regional or global scale. ",
    },
    {
      id: 15,
      title: "Business Model Transformation (BMT)",
      text: "Business Model Transformation refers to the process of fundamentally changing and adapting the way a business creates, captures, and delivers value to its stakeholders. This involves reevaluating and modifying key elements of a company's business model to remain relevant and competitive in changing markets.",
    },
    {
      id: 16,
      title: "Trust management",
      text: "Trust management involves the establishment, maintenance, and nurturing of trust within an organization or between parties involved in business transactions. It focuses on building credibility, reliability, and integrity in relationships to ensure transparency, collaboration, and sustainable partnerships.",
    },
    {
      id: 17,
      title: "Mergers and Acquisitions (M&A) - Corporate Restructuring",
      text: "Providing guidance on mergers, acquisitions, divestitures, and other forms of corporate restructuring to optimize business operations and portfolio management.",
    },
  ];

  const openModal = (data) => {
    setIsOpen((prevState) => !prevState);
    setText(data.text);
  };

  return (
    <div className="container">
      <div id="privacy-viewer" className={isOpen && "hide-privacy-viewer"}>
        <div className="cover"></div>
        <div className="content">
          <div className="content-text">
            <i
              className="fa-solid fa-x"
              onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            ></i>
            <br />
            <p style={{ color: "black" }}>{text}</p>
          </div>
        </div>
      </div>
      <div
        id="services"
        className="text-center"
        style={{
          color: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.05)",
          background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
        }}
      >
        <div className="section-title">
          <h2 style={{ color: "white" }}>Our services</h2>
          <hr className="section-horizontal-rule" />
        </div>
        <div className="grid">
          {data
            ? data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  style={{
                    padding: "10px",
                    minHeight: "10%",
                    borderRadius: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "2px solid rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(5px)",
                  }}
                  className="grid-column"
                >
                  <div className="icon-display">
                    <p style={{ fontSize: "30px", marginTop: "10px" }}>
                      {i + 1}
                    </p>
                    {/* <i style={{ fontSize: "25px" }} className={d.icon}></i> */}
                  </div>
                  <div className="service-desc">
                    <h3 style={{ color: "white" }}>{d.title}</h3>
                    {/* <p>{d.text}</p> */}
                    <span
                      style={{ color: "white", cursor: "pointer" }}
                      onClick={() => openModal(d)}
                    >
                      Read More
                    </span>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Chance;
