const Section1 = () => {
  return (
    <section className="section1" id="home">
      <div className="section-1-cont flex flex-col align-center justify-center">
        <h3 className="s-1-cont-1 s-1-cont">Hello, My Name is</h3>
        <h2 className="s-1-cont-2 s-1-cont">Suhaanth V V</h2>
        <h3 className="s-1-cont-3 s-1-cont m-top-1">
          Frontend web developer <br />
          UI/UX Designer <br />
          CS Student
        </h3>
        <div className="co">
          <h3 className="coh3">Have anything to tell or ask? Mail me</h3>
          <a href="mailto: suhaanthsuhi356@gmail.com" className="button">
            Mail me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
