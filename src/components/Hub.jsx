function Hub() {
  const hubData = [
    {
      icon: "🧡",
      title: "Marketing Hub®",
      description:
        "AI-powered marketing software that helps you generate leads and automate marketing.",
      features: [
        "Breeze social media agent",
        "Marketing automation",
        "Analytics",
      ],
    },
    {
      icon: "🧡",
      title: "Sales Hub®",
      description:
        "Easy-to-adopt sales software that leverages AI to build pipelines and close deals.",
      features: [
        "Sales workspace",
        "Deal management",
        "Breeze prospecting agent",
      ],
    },
    {
      icon: "🧡",
      title: "Service Hub®",
      description:
        "Customer service software powered by AI to scale support and drive retention.",
      features: [
        "Omni-channel help desk",
        "Breeze customer agent",
        "Customer success workspace",
      ],
    },
  ];

  return (
    <div className="hub-grid">
      {hubData.map((hub, index) => (
        <div className="hub-card" key={index}>
          <h3>
            <span className="icon">{hub.icon}</span> {hub.title}
          </h3>
          <p className="hub-desc">{hub.description}</p>
          <h4>Popular Features</h4>
          <ul>
            {hub.features.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
          <button className="learn-btn">Learn more</button>
        </div>
      ))}
    </div>
  );
}

export default Hub;
