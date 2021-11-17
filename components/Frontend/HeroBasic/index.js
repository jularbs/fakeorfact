import "./styles.scss";

const HeroBasic = ({ title, content, next }) => {
  const test = {
    bgLocation:
      "https://images.unsplash.com/photo-1520482068820-852e8e63541b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2669&q=80",
    title: "Our mission",
    content:
      "It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.",
  };

  const scrollNext = () => {
    if (next && next.current) {
      next.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div
        className="hero-basic-container"
        style={{ backgroundImage: `url(${test.bgLocation})` }}
      >
        <div className="bg-overlay-black" />
        <div className="bg-overlay-blue" />
        <div className="title">{test.title}</div>
        <div className="content">{test.content}</div>
        <div className="arrow-placement">
          <div className="arrow-wrapper" onClick={scrollNext} />
        </div>
      </div>
    </>
  );
};

export default HeroBasic;
