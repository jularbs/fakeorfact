import "./styles.scss";
const CompanyCard = ({ logoLocation, title, content, ctaLabel, ctaLink }) => {
  return (
    <>
      <div className="company-card-container">
        <div>
          <div className="logo-wrapper">
            <img src={logoLocation} alt="" className="logo-img" />
          </div>
          <div className="title">{title}</div>
          <div className="content">{content}</div>
        </div>

        <a href={ctaLink} target="_blank" className="cta-button">
          {ctaLabel}
        </a>
      </div>
    </>
  );
};

export default CompanyCard;
