import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Accordion from 'react-bootstrap/Accordion';
import '../styles.css'; 

const ResumePage = () => {
    return (
        <div id="resume" className="container-fluid mt-5 text-start">
            <h1 className="text-center">Resume</h1>
            <div className="text-center">
                <a href="/Elli-McKinley-Resume-MASTER.pdf" download className="btn btn-accent-custom">
                    Download CV
                </a>
            </div>
            
            <section className="mt-4">
                <h2>ELLI MCKINLEY</h2>
                <p>Glenwood Springs, CO | <a href="https://www.linkedin.com/in/ellimckinley/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ellimckinley/</a></p>
            </section>
            
            <Accordion defaultActiveKey={['0']} >
                <Accordion.Item eventKey="0" alwaysOpen>
                    <Accordion.Header>Summary</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            With over 10 years of experience in e-commerce product operations and team leadership in the ski industry, I have proven ability to build high-performing teams, optimize processes, and enhance customer satisfaction. Skilled in analyzing metrics for strategic decision-making, developing documentation, dedicated to driving continuous improvement and operational excellence.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Work Experience</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Business Systems Specialist | Colorado Mountain College</h3>
                            <p>Feb 2025 – Present</p>
                            <ul>
                                <li>Manage Workday administration for Accounting, Finance, Contracts, Procurement, and Projects.</li>
                                <li>Optimize business processes by configuring Workday modules to improve efficiency and user experience.</li>
                                <li>Collaborate with stakeholders across departments to gather requirements and implement system enhancements.</li>
                                <li>Develop and maintain process documentation and provide training for end users.</li>
                                <li>Troubleshoot Workday system issues, coordinating with IT and vendors to resolve complex problems.</li>
                                <li>Support data analysis and reporting, ensuring accuracy and compliance with financial policies.</li>
                                <li>Assist in system upgrades and testing, providing feedback on new features and functionality.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>E-Commerce Operations Manager | Alterra Mountain Company</h3>
                            <p>Aug 2023 - Jul 2024</p>
                            <ul>
                                <li>Built, trained, and managed a team of product analysts.</li>
                                <li>Managed large-scale product builds for e-commerce platforms, including content, pricing, promotions, and taxonomy setup, contributing to a +5% increase in conversion.</li>
                                <li>Executed the company’s product roadmap by maintaining product setup timeline goals, evaluating new inputs for feasibility and success, and delivering or adjusting products to meet business needs.</li>
                                <li>Streamlined processes for gathering product requirements, managing change requests, documentation (workflows and SOP’s), and conducting user acceptance testing.</li>
                                <li>Ensured all product submissions met company standards and resolved any deviations through structured workflows.</li>
                                <li>Partnered with merchandising teams to implement A/B tests for product optimization and improved customer experience.</li>
                                <li>Collaborated across departments to ensure systems aligned with business objectives, optimized customer experience, and increased conversion.</li>
                                <li>Oversaw quality control for product builds, ensuring accurate content, imagery, and system mapping.</li>
                                <li>Maintained strong partnerships with stakeholders, including marketing, operations, and customer service teams.</li>
                                <li>Improved business processes to enhance team efficiency and measured performance through reporting and analytics.</li>
                                <li>Managed workload forecasting and resource scheduling to support team scalability for additional projects.</li>
                                <li>Resolved product-related incidents and prioritized vendor defect fixes.</li>
                                <li>Developed product roadmaps and prioritized system enhancements to align with business goals.</li>
                                <li>Created and analyzed metrics-based reporting to enhance team productivity and scalability to improve operational efficiency.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Product Administration Manager | Aspen Skiing Company</h3>
                            <p>Apr 2020 - Aug 2023</p>
                            <ul>
                                <li>Configured and maintained e-commerce and POS ski products across sales channels using RTP|One, Aspenware, and Inntopia.</li>
                                <li>Collaborated on updated Sales Confirmation templates and launched a team documentation system.</li>
                                <li>Developed training materials in collaboration with training teams to enhance employee knowledge and operational success.</li>
                                <li>Analyzed and optimized product processes to ensure financial accuracy, reduce guest friction, and improve employee experiences.</li>
                                <li>Maintained strong communication and collaboration across departments, including Sales, Marketing, IT, and Finance, to meet product and operational needs.</li>
                                <li>Led QA testing and check-work processes to ensure functionality and accuracy of all products.</li>
                                <li>Generated ideas to enhance purchase flow, increase revenue, and improve guest service experiences.</li>
                                <li>Partnered with Ecommerce and Front-Line teams to ensure a seamless online guest journey.</li>
                                <li>Created and analyzed reports to identify errors and implement timely solutions.</li>
                                <li>Provided leadership within the Mountain Sales & Schools team and supported operational needs as required.</li>
                                <li>Utilized strong technical expertise with RTP, Aspenware, and other point-of-sale systems to support product lifecycle management.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Call Center Manager, Mtn Sales | Aspen Skiing Company</h3>
                            <p>Aug 2018 - Apr 2020</p>
                            <ul>
                                <li>Collaborated on the creation of a supplemental training program and digital manual for agents.</li>
                                <li>Assisted in assessing operational success and improvement opportunities to align with company goals.</li>
                                <li>Provided customer service for resort guests to ensure an unforgettable guest journey.</li>
                                <li>Mentored by the VP of Mountain Operations. —best for cover letter (1 of 15 chosen)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Call Center Supervisor, Mtn Sales | Aspen Skiing Company</h3>
                            <p>Sept 2016 - Jul 2018</p>
                            <ul>
                                <li>Collaborated on the creation of a supplemental training program and digital manual for agents.</li>
                                <li>Assisted in assessing operational success and improvement opportunities to align with company goals.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Ticketing Supervisor, Highlands | Aspen Skiing Company</h3>
                            <p>Jun 2015 - Sept 2016</p>
                            <ul>
                                <li>Provided customer service for resort guests to ensure an unforgettable guest journey.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Lead Ticket Seller | Aspen Skiing Company</h3>
                            <p>Nov 2014 - Jun 2015</p>
                            <ul>
                                <li>Supported management in frontline ticket office operations and staff training.</li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Core Skills</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Strategic Decision Making</li>
                            <li>Process Documentation & Training Development</li>
                            <li>Optimizing Processes</li>
                            <li>Business Systems Optimization</li>
                            <li>Stakeholder Collaboration</li>
                            <li>Project Management & UAT</li>
                            <li>Atlassian Confluence and Jira</li>
                            <li>RTP|One, Inntopia, and Aspenware</li>
                            <li>Microsoft Office 365</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Technical Skills</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><strong>Programming Languages: </strong>JavaScript, TypeScript, HTML, CSS</li>
                            <li><strong>Frameworks & Libraries:</strong>React.js, Node.js, Express.js, TailwindCSS</li>
                            <li><strong>Databases:</strong>PostgreSQL</li>
                            <li><strong>Version Control & Deployment:</strong>Git, GitHub, Render, Netlify</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Licenses & Certifications</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>SQL Essentials Training | LinkedIn Learning | 2024</li>
                            <li>SQL Practice: Inserting Data | LinkedIn Learning | 2024</li>
                            <li>SQL for Non-Programmers | LinkedIn Learning | 2023</li>
                            <li>Excel: Creating a Basic Dashboard | LinkedIn Learning | 2023</li>
                            <li>Jira and Confluence Together | Atlassian | 2023</li>
                            <li>Be the Manager People Won’t Leave | LinkedIn Learning | 2023</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Education</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Coding Bootcamp | University of Denver</h3>
                            <p>In-Progress (Certificate Expected 2025)</p>
                            <ul>
                                <li>HTML, CSS, JavaScript, Web APIs, node.js, TypeScript, Servers and APIs, SQL, Prompt Engineering, React, NoSQL, MERN and Authentication, Python</li>
                            </ul>
                        </div>
                        <div>
                            <h3>BS, Geology | University of Puget Sound</h3>
                            <p>2013</p>
                            <ul>
                                <li>Minor in Environmental Policy and Decision Making</li>
                                <li>Thesis: Environmental History of a ~13,000 year Sediment Record from the Most Contaminated Lake in Western Washington</li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default ResumePage;