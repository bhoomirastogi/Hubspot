import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const companyLogos = [
  {
    name: "ebay",
    src: "https://www.hubspot.com/hs-fs/hubfs/ebay-logo.png?width=100&height=72&name=ebay-logo.png",
  },
  {
    name: "doordash",
    src: "https://www.hubspot.com/hs-fs/hubfs/doordash-logo.png?width=100&height=72&name=doordash-logo.png",
  },
  {
    name: "reddit",
    src: "https://www.hubspot.com/hs-fs/hubfs/reddit-logo-2.png?width=100&height=72&name=reddit-logo-2.png",
  },
  {
    name: "tripadvisor",
    src: "https://www.hubspot.com/hs-fs/hubfs/tripadvisor-logo-2.png?width=100&height=72&name=tripadvisor-logo-2.png",
  },
  {
    name: "eventbrite",
    src: "https://www.hubspot.com/hs-fs/hubfs/eventbrite-Oct-24-2024-08-17-10-4609-PM.png?width=100&height=72&name=eventbrite-Oct-24-2024-08-17-10-4609-PM.png",
  },
  {
    name:"zapier",
    src: "https://www.hubspot.com/hs-fs/hubfs/zapier-Oct-24-2024-08-17-29-8330-PM.png?width=100&height=72&name=zapier-Oct-24-2024-08-17-29-8330-PM.png"
  }
];

function Second() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? companyLogos.length - visibleCount : prevIndex - 1
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleCount >= companyLogos.length ? 0 : prevIndex + 1
    );
  };

  const visibleLogos = companyLogos.slice(startIndex,startIndex + visibleCount);

  return (
    <div className="second">
      
      <div className="companies">
        <h2 className="heading">
          258,000+ customers in over 135 countries grow their businesses with
          HubSpot
        </h2>
        <div className="carousel">
          <button className="arrow" onClick={prev}>
            <ChevronLeft />
          </button>
          <div className="logo-container">
            {visibleLogos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.name} className="logo" />
            ))}
          </div>
          <button className="arrow" onClick={next}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="agents">
        <h2 className="title">Introducing Breeze Agents — Your AI Growth Team</h2>
        <p className="desc">
          HubSpot’s AI-powered agents are digital workers that extend your team
          to scale support, automate prospecting, and create content faster.
        </p>

        <div className="agent-cards">
          <div className="card">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Image%20No.%201%20Customer%20Agent%20%231-1.png?width=312&height=230"
              alt="Customer Agent"
            />
            <h3>Customer Agent</h3>
            <p>Scale support and resolve half of customer inquiries 24/7.</p>
            <a href="#">Learn more about customer agent</a>
          </div>

          <div className="card">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Image%20No.%202%20Prospecting%20Agent%20%233-1.png?width=312&height=230"
              alt="Prospecting Agent"
            />
            <h3>Prospecting Agent (Beta)</h3>
            <p>
              Instantly research, personalize, and execute sales outreach at
              scale.
            </p>
            <a href="#">Learn more about prospecting agent</a>
          </div>

          <div className="card">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Image%20No.%203%20Content%20Agent%20%231-1.png?width=312&height=230"
              alt="Content Agent"
            />
            <h3>Content Agent (Beta)</h3>
            <p>
              Create conversion-optimized and on-brand content in minutes.
            </p>
            <a href="#">Learn more about content agent</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
