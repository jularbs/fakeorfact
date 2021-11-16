import "./styles.scss";

const HeroMetrics = () => {
  const metricsData = [
    {
      figures: "46",
      label: "Number of Years",
    },
    {
      figures: "1.5K",
      label: "Awards",
    },
    {
      figures: "1M",
      label: "Stations Reach",
    },
    {
      figures: "3.5M",
      label: "Facebook",
    },
    {
      figures: "3M",
      label: "Twitter",
    },
    {
      figures: "10M",
      label: "Youtube",
    },
  ];

  const showMetrics = () => {
    return metricsData.map((item, key) => {
      return (
        <div className="metric-item" key={key}>
          <div className="figures">{item.figures}</div>
          <div className="label">{item.label}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="hero-metrics-container">
        <div className="header-container">
          <div className="title">Measuring Impact</div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="metrics-container">{showMetrics()}</div>
      </div>
    </>
  );
};

export default HeroMetrics;
