import React from "react";
const footerLinks = [
  {
    title: "Popular Features",
    links: [
      "All Products and Features",
      "Free Meeting Scheduler App",
      "Breeze AI Tools",
      "Email Tracking Software",
      "AI Content Writer",
      "AI Website Generator",
      "Email Marketing Software",
      "Lead Management Software",
      "AI Email Writer",
      "Free Website Builder",
      "Sales Email Templates",
      "Free Online Form Builder",
      "Free Chatbot Builder",
      "Free Live Chat Software",
      "Marketing Analytics",
      "Free Landing Page Builder",
      "Free Web Hosting",
    ],
  },
  {
    title: "Free Tools",
    links: [
      "See All Free Business Tools",
      "AI Search Grader",
      "Clip Creator",
      "Website Grader",
      "Make My Persona",
      "Email Signature Generator",
      "Brand Kit Generator",
      "Blog Ideas Generator",
      "Invoice Generator",
      "Free Business Templates",
      "Guide Creator",
      "Software Comparisons",
      "Library",
      "Template Marketplace",
      "Campaign Assistant",
      "Landing Page Creator",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Management Team",
      "Board of Directors",
      "Investor Relations",
      "Blog",
      "Contact Us",
    ],
  },
  {
    title: "Customers",
    links: ["Customer Support", "Join a Local User Group"],
  },
  {
    title: "Partners",
    links: [
      "All Partner Programs",
      "Solutions Partner Program",
      "App Partner Program",
      "HubSpot for Startups",
      "Affiliate Program",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
